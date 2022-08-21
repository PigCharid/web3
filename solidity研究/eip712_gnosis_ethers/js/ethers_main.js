

var contracts_gnosis = {
	gnosis_factory:{
		address:'0xa6b71e26c5e0845f74c812102ca7114b6a896ab2',
		abi:[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"},{"indexed":false,"internalType":"address","name":"singleton","type":"address"}],"name":"ProxyCreation","type":"event"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"}],"name":"calculateCreateProxyWithNonceAddress","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"singleton","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"createProxy","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"},{"internalType":"contract IProxyCreationCallback","name":"callback","type":"address"}],"name":"createProxyWithCallback","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"}],"name":"createProxyWithNonce","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proxyCreationCode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"proxyRuntimeCode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"}]
        }
}   //这个是工厂合约的地址和ABI






var contracts_gnosis_safe = {
	gnosis:{
		address:'0x7Fbf984cd60d763Eb94C4C466013f1Ee90dd78Cf',
		abi:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"AddedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"approvedHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"ApproveHash","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"handler","type":"address"}],"name":"ChangedFallbackHandler","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"guard","type":"address"}],"name":"ChangedGuard","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"ChangedThreshold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"module","type":"address"}],"name":"DisabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"module","type":"address"}],"name":"EnabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"module","type":"address"}],"name":"ExecutionFromModuleFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"module","type":"address"}],"name":"ExecutionFromModuleSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"ExecutionSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"RemovedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"SafeReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"initiator","type":"address"},{"indexed":false,"internalType":"address[]","name":"owners","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"},{"indexed":false,"internalType":"address","name":"initializer","type":"address"},{"indexed":false,"internalType":"address","name":"fallbackHandler","type":"address"}],"name":"SafeSetup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"msgHash","type":"bytes32"}],"name":"SignMsg","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"addOwnerWithThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hashToApprove","type":"bytes32"}],"name":"approveHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"approvedHashes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"changeThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dataHash","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signatures","type":"bytes"},{"internalType":"uint256","name":"requiredSignatures","type":"uint256"}],"name":"checkNSignatures","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dataHash","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signatures","type":"bytes"}],"name":"checkSignatures","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"prevModule","type":"address"},{"internalType":"address","name":"module","type":"address"}],"name":"disableModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"domainSeparator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"enableModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address","name":"refundReceiver","type":"address"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"encodeTransactionData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address payable","name":"refundReceiver","type":"address"},{"internalType":"bytes","name":"signatures","type":"bytes"}],"name":"execTransaction","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"execTransactionFromModule","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"execTransactionFromModuleReturnData","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"start","type":"address"},{"internalType":"uint256","name":"pageSize","type":"uint256"}],"name":"getModulesPaginated","outputs":[{"internalType":"address[]","name":"array","type":"address[]"},{"internalType":"address","name":"next","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offset","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"getStorageAt","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address","name":"refundReceiver","type":"address"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"getTransactionHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"isModuleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"prevOwner","type":"address"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"removeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"requiredTxGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"handler","type":"address"}],"name":"setFallbackHandler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guard","type":"address"}],"name":"setGuard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"address","name":"fallbackHandler","type":"address"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"address payable","name":"paymentReceiver","type":"address"}],"name":"setup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"signedMessages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"calldataPayload","type":"bytes"}],"name":"simulateAndRevert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"prevOwner","type":"address"},{"internalType":"address","name":"oldOwner","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"swapOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
        }
}

var flag = 0;

var ChainID;
var iface;
var nonce = 16;
var sign_message;
var gSelectID ;


var sig_s = '0x'
var abiCoder ;


async function CreateSafe(){  //创建保险箱合约
    var ethereum = window.ethereum;//只要浏览器下载了小狐狸插件，window全局对象中都会有ethereum这个对象。
     var provider = new ethers.providers.Web3Provider(window.ethereum)//把ethers的provider设置成小狐狸钱包的环境。

    await provider.send("eth_requestAccounts", []); //如果没有链接钱包会自动弹出来链接框，如果链接钱包了则什么事也不干。

    var signer_create =  provider.getSigner()//这个signer_create变量其实是拿到了当前链接小狐狸的账号，只包含一个用户地址，不包含多个。

    abiCoder = ethers.utils.defaultAbiCoder//ethers.js自带的编码器，就是用来编码的，编码就是把要交易的信息打包成一个类似string的东西，在合约中为bytes,0x十六进制开头


    var contract_gnosis_factory = new ethers.Contract(contracts_gnosis.gnosis_factory.address,contracts_gnosis.gnosis_factory.abi,signer_create);//这里的功能是链接合约，生成合约对象了，最后的signer_create参数是当前部署者地址的对象，也就是说返回的contract_gonsis_factory这个对象已经具备了很强大的和合约交互的功能了。


    var safeAccounts = [
             '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83',
             '0x592916d0D7fcaec0A0A0504134364721Aafd5e87',
             '0xF94e4af78b3f222fa0F8Be0F47b6Ec6960866E0b',
         ]//这里我测试是写死的，其实这个不应该是写死的，是最开始的DAO创始人去设置的，

         var numConfirmations = 1;//这个是阈值，就是DAO中有几个人同意就可以执行交易。

         var ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';//这个不用管，gnosis固定写死的

         var EMPTY_DATA = '0x';//不用管，固定写死的

         var fallbackHandler_address = '0xf48f2B2d2a534e402487b3ee7C18c33Aec0Fe5e4';//gnosis好像意思是这个是fallback处理的地址，我感觉没什么用，在合约交互的时候没走过这个合约。
                                                                                   // 五哥说这个暂时用不到，是合约签名的。暂时写死，不要紧。


     	var gnosisSafeData = abiCoder.encode(['address[]','uint256','address','bytes','address','address','uint256','address'],
                        [safeAccounts,
                        numConfirmations,
     					ZERO_ADDRESS,
     					EMPTY_DATA,
     					fallbackHandler_address,
     					ZERO_ADDRESS,
     					0,
     					ZERO_ADDRESS]);//这个就是编码（其实编码就是压缩，没有很多其他的操作），把这些东西压缩编码一下，

         console.log(gnosisSafeData);
         var gnosisSafeData_final = '0xb63e800d'+gnosisSafeData.substring(2);//0xb63e800d=web3.eth.abi.encodeFunctionSignature('myMethod(uint256,string)'),这个就是在合约字节码中找函数的对应的位置
         console.log(gnosisSafeData_final)
         var gnosis_safe_address = "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552";//这个是rinkeby测试网指定的一个主合约地址，写死。
         var salt = 1657266633780;//这个其实是时间戳，是要变化，具体值是当前的时间，date.now().

         await contract_gnosis_factory.createProxyWithNonce(gnosis_safe_address,gnosisSafeData_final,salt);//这个是ethers调用合约的标准方法，createProxyWithNonce这个是合约中定义的函数名，其实他这里是从ABI上找的，记得刚开始contract_gnosis_factory的变量中带了abi的，如果那个abi没有这个方法，小狐狸钱包都起不来。

}




 async function EIP712_sign(){


            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.send("eth_requestAccounts", [])

            abiCoder = ethers.utils.defaultAbiCoder

            var signer_712 = provider.getSigner()


            const domainData = {
                                  chainId: 97,//这个是int类型的，指定链id，很重要，比如ETH主网就必须是1否则弹不出来小狐狸，是对应上的。
                                  verifyingContract: "0xA7ad78Cc78CE5Cd67F463C2205D63F20D32943C9",//这个是Safe保险箱合约地址
                            };

                       const types = {                        SafeTx:
                                                             [{ name: 'to',type: 'address'},
                                                              { type: 'uint256', name: 'value' },
                                                              { type: 'bytes', name: 'data' },
                                                              { type: 'uint8', name: 'operation' },
                                                              { type: 'uint256', name: 'safeTxGas' },
                                                              { type: 'uint256', name: 'baseGas' },
                                                              { type: 'uint256', name: 'gasPrice' },
                                                              { type: 'address', name: 'gasToken' },
                                                              { type: 'address', name: 'refundReceiver' },
                                                              { type: 'uint256', name: 'nonce' }]}//这个只是定义所有消息数据的类型。

                    var signature = await signer_712._signTypedData(domainData, types, sign_message)//这里的signature就是签名信息。用户签名之后，需要把这个签名信息向后端发起接口请求，让后端中心化服务器存储的。

                    console.log(signature)
                    sig_s = sig_s + signature.substring(2);
                    console.log('sig_s',sig_s);

		}





async function ExecTransaction(){

                var provider = new ethers.providers.Web3Provider(window.ethereum)
                await provider.send("eth_requestAccounts", []);
                var signer_ExecTransaction =  provider.getSigner()



              var contracts_safe_execTransaction = new ethers.Contract(contracts_gnosis_safe.gnosis.address,contracts_gnosis_safe.gnosis.abi,signer_ExecTransaction)
              var to = sign_to_address;
              var valueInWei = 0;
              var data = total_multi_data;
              var operation = 1;
              var safeTxGas = 0;
              var baseGas = 0;
              var gasPrice = 0;
              var gasToken = "0x0000000000000000000000000000000000000000";
              var refundReceiver = "0x0000000000000000000000000000000000000000";
              var sigs = sig_s;




            try{
            await contracts_safe_execTransaction.execTransaction(to,valueInWei,data,operation,safeTxGas,baseGas,gasPrice,gasToken,refundReceiver,sigs);
            //这块就是要换起来小狐狸执行交易合约的代码
            ////这个就是执行最后交易的，最关键的就是data，然后传入对应解析data的sign_to_address这个合约地址，操作operation为1，和用户验签后返回的signature,65字节*DAO成员通过人数阈值的一串bytes，变成sigs,带入调用合约中的最后一个参数，全部就ok了。
                alert('success')
               nonce ++;
            }
            catch{
                alert('执行交易失败')
            }


}



//async function submit_abi_file(){
//     const fileElement = document.querySelector('#excelFile');
//     console.log(fileElement)
//     fileElement.addEventListener('change', (e) => {
//         const file = e.target.files[0];// 文件信息
//         console.log('1111',file)
//          if (file) {
//              const reader = new FileReader();
//              reader.readAsText(file);// 将文件读取为文本
//              console.log(reader.readAsText(file))
//              reader.onload = () => { // 文件读取完成后的回调
//                  console.log(reader.result, ''); // 读取到的文件内容
//              }
//              reader.onerror = (e) => {
//                  console.log(e, '????XXX')
//              }
//           }
//
//    })
//}



function fileImport() {

               var selectedFile = document.getElementById('files').files[0];
               var name = selectedFile.name;

               var reader = new FileReader();


               reader.readAsText(selectedFile);
               reader.onload = function () {
//                   provider = new ethers.providers.Web3Provider(window.ethereum)
                   var json_contract_abi = JSON.parse(this.result);
                   iface = new ethers.utils.Interface(json_contract_abi);
//                   console.log(iface.functions)
                   var iface_functions = iface.functions

                   Generate_drop_down_box(iface_functions)
               }

}




//async function submit_abi(){
//    var inputDom = document.getElementById("ABI_text");
//    var Abi_text = inputDom.value; //获取元素值
//    var json_contract_abi = JSON.parse(Abi_text)
//    var contract_m = new web3.eth.Contract(json_contract_abi);
////    var contract_m = new ethers.Contract(json_contract_abi,provider);
//    Generate_drop_down_box(contract_m)
//}



async function Generate_drop_down_box(iface_functions){
    gSelectID = iface_functions
    var sum = 1;
    document.getElementById("selectID").options.length=0;
    for (var i in gSelectID) {
            var selectID = document.getElementById("selectID");
        	var option = document.createElement("option");// 创建option元素
        	option.appendChild(document.createTextNode(i));
        	option.setAttribute("value", i);
        	selectID.appendChild(option);
    }
}



async function change_select(){
    let abi_functions = document.getElementById("selectID");
    for(let i=0;i<abi_functions.options.length;i++){
                if(abi_functions.options[i].selected){
                    console.log(abi_functions.options[i].value)
                    input_abi_function(abi_functions.options[i].value)
                }
            }
}

















