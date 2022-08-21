

var split_paras_length;
var abi_text_final;
var matchObj_copy = []
var split_paras =''
var keccak_function_value;

var sign_to_address = ''
var sign_data = ''

var multi_data_final = '0x'

var total_multi_data =''

async function input_abi_function(abi_te){
    abi_text_final = abi_te;

    document.getElementById("sel").innerHTML='';

    encode_function(abi_text_final);
    Decomposition_element(abi_text_final);

    }



async function Decomposition_element(abi_t){
            split_paras = ''
            var index_1 = abi_t.indexOf('(');
            var abi_paras = abi_t.substr(index_1 +1,abi_t.length)
            var abi_paras = abi_paras.replace(')','')

            console.log(abi_paras)

            split_paras = abi_paras.split(",")

            if(abi_paras == ''){ split_paras_length = 0}else{split_paras_length = split_paras.length}

            var matchObj = []
            var matchObj_paras = []

            for(var i in split_paras){
                console.log(split_paras[i])
                matchObj.push(split_paras[i])
                add(split_paras[i],i)
            }
            matchObj_copy = matchObj;
            console.log('matchObj',matchObj)
            var _button = document.createElement("button");

}



async function add(single_para,i){
				var _input = document.createElement("input");
				var _p = document.createElement("p");
				_input.id = '_input'+ i.toString();
				_input.onchange = "Flexible_output_hash()";
				var _a = document.createElement("a");
                 _a.innerText = single_para;
				document.getElementById("sel").appendChild(_a)
				document.getElementById("sel").appendChild(_input)
				document.getElementById("sel").appendChild(_p)
			}



function encode_function(abi_single){
        keccak_function_value = getFunctionSeletor(abi_single)//
        document.getElementById("keccak_function").innerHTML = keccak_function_value;
}


function getFunctionSeletor(funcHead) {
    return ethers.utils.id(funcHead).slice(0,10)
}


function  Flexible_output_hash(){
        abiCoder  =  ethers.utils.defaultAbiCoder
        matchObj_paras = []
        console.log(split_paras)
        for(var k in split_paras){
                console.log('k',k)
                var  dom_id = '_input' + k.toString();
                console.log('dom_id',dom_id)
                var  paras_dom = document.getElementById(dom_id);
                var paras_values = paras_dom.value;    //获取input的值
                if(split_paras[k]=="uint256"){
                    paras_values = Number(paras_values)
                }
                console.log(paras_values)
                matchObj_paras.push(paras_values)
            }
            console.log(matchObj_copy)
            console.log(matchObj_paras)
            try {
                var encode_para_data =  abiCoder.encode(matchObj_copy,matchObj_paras);//这个是对交易数据进行encode
                var str_final =  keccak_function_value + encode_para_data.substring(2);//把完整的交易打包，完整的交易由函数选择器+参数组成，keccak_function_value这个是函数选择器，encode_para_data.substring(2)这个是压缩后的参数。
                sign_data = str_final //如果对一笔交易来讲，这个str_final就是最后要签名的数据中的data了。（这个sign_data只是你要签名信息sign_message中的一部分）
                document.getElementById("keccak_function").innerHTML = str_final;
                }
            catch{
                document.getElementById("keccak_function").innerHTML = keccak_function_value;
                alert('请检查参数规范')
            }
}


async function encode_function_paras(){

        var gnosisSafeData = web3.eth.abi.encodeParameters(['address[]','uint256','address','bytes','address','address','uint256','address'],
                            [safeAccounts,
                            numConfirmations,
                            ZERO_ADDRESS,
                            EMPTY_DATA,
                            fallbackHandler_address,
                            ZERO_ADDRESS,
                            0,
                            ZERO_ADDRESS]);
}


async function submit_signdata_info(){

      var dom_address = document.getElementById('Contract_address').value;
      sign_to_address = dom_address;//这里sign_to_address 是指你要执行的这个函数是哪个合约里的，这里要填写合约地址。
      var sign_nonce = nonce + 1;
      sign_message = {
                        to:     sign_to_address,
                        value:  0,
                        data:   sign_data,
                        operation:   0,
                        safeTxGas:  0,
                        baseGas:     0,
                        gasPrice:    0,
                        gasToken:    '0x0000000000000000000000000000000000000000',
                        refundReceiver:   "0x0000000000000000000000000000000000000000",
                        nonce:      sign_nonce ,
                    };//这是最后要签名的信息sign_message
                    alert('提交要签名的信息成功')
}


async function  submit_single_data_info(){
        abiCoder = ethers.utils.defaultAbiCoder

        var uint8_operation = document.getElementById('operation').value//这个是用户在执行交易对这个合约的操作，是0或者1，暂时不用管，都写0
        var address_to = document.getElementById('to').value//这个合约函数要执行的时候指定的合约地址，比如想法是在A合约里面有个f1函数，执行A合约里面的f1函数，我不能用f1函数去指定B合约。
        var uint256_value = document.getElementById('value').value * 10 ** 18//这个是转移eth的数量，这里10 **18 是精度，就是如果你直接给了一个5000，如果不带这个10**18,结果会是0.000000000000005个ETH。


//        var remove_0x = sign_data.substring(2)
        var uint_data_length = ((sign_data.length)-2)/2//这里是算单次交易转换成data的字节长度。2位16进制=1个字节，-2是把0x去掉，/2是拿到字节长度，而不是位长度。


        var single_total_OAV = ethers.utils.solidityPack(["uint8", "address", "uint256","uint256", "bytes"],
            [uint8_operation,
            address_to,
            uint256_value,
            uint_data_length,
            sign_data])
            console.log('single_total_OAV',single_total_OAV)

        multi_data_final = multi_data_final + single_total_OAV.substring(2)//multi_data_final 这个才是最后想要拿到的一次性执行多笔交易的data。
        console.log('multi_data_final',multi_data_final)

}



async function  submit_final_sign_data(){
        abiCoder = ethers.utils.defaultAbiCoder

        var dom_address = document.getElementById('Contract_address').value;
        sign_to_address = dom_address;
        var final_encode_multi_data = abiCoder.encode(['bytes'],
                                                      [multi_data_final]);
         total_multi_data = '0x8d80ff0a' + final_encode_multi_data.substring(2)//这个total_multi_data 是最后multisend EIP712签名的那个data，这个才是最终总共的，
         //其他的都是为这个data服务。指向的是固定的一个合约，帮你执行这些交易，函数也是固定的所以这里直接固定0x8d80ffoa就好，0x8d80ffoa的来源就是keccak256( function multiSend(bytes memory transactions)),然后去bytes4，取前4个字节，前8位16进制，因为哈希过后是固定长度的32字节。

//      sign_to_address = "0x40A2aCCbd92BCA938b02010E17A5b8929b49130D";
      var sign_nonce = nonce + 1;
      sign_message = {
                        to:     sign_to_address,
                        value:  0,
                        data:   total_multi_data,//这里的data就是total_multi_data
                        operation:   1,
                        safeTxGas:  0,
                        baseGas:     0,
                        gasPrice:    0,
                        gasToken:    '0x0000000000000000000000000000000000000000',
                        refundReceiver:   "0x0000000000000000000000000000000000000000",
                        nonce:      sign_nonce ,
                    };
                    alert('提交multisend的签名的信息成功')
         console.log(sign_message)

}



