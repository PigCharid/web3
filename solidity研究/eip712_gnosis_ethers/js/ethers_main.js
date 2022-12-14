

var contracts_gnosis = {
	gnosis_factory:{
		address:'0xa6b71e26c5e0845f74c812102ca7114b6a896ab2',
		abi:[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"},{"indexed":false,"internalType":"address","name":"singleton","type":"address"}],"name":"ProxyCreation","type":"event"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"}],"name":"calculateCreateProxyWithNonceAddress","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"singleton","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"createProxy","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"},{"internalType":"contract IProxyCreationCallback","name":"callback","type":"address"}],"name":"createProxyWithCallback","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_singleton","type":"address"},{"internalType":"bytes","name":"initializer","type":"bytes"},{"internalType":"uint256","name":"saltNonce","type":"uint256"}],"name":"createProxyWithNonce","outputs":[{"internalType":"contract GnosisSafeProxy","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proxyCreationCode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"proxyRuntimeCode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"}]
        }
}   //?????????????????????????????????ABI






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


async function CreateSafe(){  //?????????????????????
    var ethereum = window.ethereum;//??????????????????????????????????????????window????????????????????????ethereum???????????????
     var provider = new ethers.providers.Web3Provider(window.ethereum)//???ethers???provider????????????????????????????????????

    await provider.send("eth_requestAccounts", []); //???????????????????????????????????????????????????????????????????????????????????????????????????

    var signer_create =  provider.getSigner()//??????signer_create?????????????????????????????????????????????????????????????????????????????????????????????????????????

    abiCoder = ethers.utils.defaultAbiCoder//ethers.js???????????????????????????????????????????????????????????????????????????????????????????????????string???????????????????????????bytes,0x??????????????????


    var contract_gnosis_factory = new ethers.Contract(contracts_gnosis.gnosis_factory.address,contracts_gnosis.gnosis_factory.abi,signer_create);//??????????????????????????????????????????????????????????????????signer_create???????????????????????????????????????????????????????????????contract_gonsis_factory?????????????????????????????????????????????????????????????????????


    var safeAccounts = [
             '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83',
             '0x592916d0D7fcaec0A0A0504134364721Aafd5e87',
             '0xF94e4af78b3f222fa0F8Be0F47b6Ec6960866E0b',
         ]//?????????????????????????????????????????????????????????????????????????????????DAO????????????????????????

         var numConfirmations = 1;//????????????????????????DAO?????????????????????????????????????????????

         var ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';//??????????????????gnosis???????????????

         var EMPTY_DATA = '0x';//???????????????????????????

         var fallbackHandler_address = '0xf48f2B2d2a534e402487b3ee7C18c33Aec0Fe5e4';//gnosis????????????????????????fallback??????????????????????????????????????????????????????????????????????????????????????????
                                                                                   // ?????????????????????????????????????????????????????????????????????????????????


     	var gnosisSafeData = abiCoder.encode(['address[]','uint256','address','bytes','address','address','uint256','address'],
                        [safeAccounts,
                        numConfirmations,
     					ZERO_ADDRESS,
     					EMPTY_DATA,
     					fallbackHandler_address,
     					ZERO_ADDRESS,
     					0,
     					ZERO_ADDRESS]);//?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

         console.log(gnosisSafeData);
         var gnosisSafeData_final = '0xb63e800d'+gnosisSafeData.substring(2);//0xb63e800d=web3.eth.abi.encodeFunctionSignature('myMethod(uint256,string)'),????????????????????????????????????????????????????????????
         console.log(gnosisSafeData_final)
         var gnosis_safe_address = "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552";//?????????rinkeby???????????????????????????????????????????????????
         var salt = 1657266633780;//????????????????????????????????????????????????????????????????????????date.now().

         await contract_gnosis_factory.createProxyWithNonce(gnosis_safe_address,gnosisSafeData_final,salt);//?????????ethers??????????????????????????????createProxyWithNonce????????????????????????????????????????????????????????????ABI???????????????????????????contract_gnosis_factory??????????????????abi??????????????????abi???????????????????????????????????????????????????

}




 async function EIP712_sign(){


            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.send("eth_requestAccounts", [])

            abiCoder = ethers.utils.defaultAbiCoder

            var signer_712 = provider.getSigner()


            const domainData = {
                                  chainId: 97,//?????????int?????????????????????id?????????????????????ETH??????????????????1????????????????????????????????????????????????
                                  verifyingContract: "0xA7ad78Cc78CE5Cd67F463C2205D63F20D32943C9",//?????????Safe?????????????????????
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
                                                              { type: 'uint256', name: 'nonce' }]}//????????????????????????????????????????????????

                    var signature = await signer_712._signTypedData(domainData, types, sign_message)//?????????signature??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

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
            //????????????????????????????????????????????????????????????
            ////??????????????????????????????????????????????????????data???????????????????????????data???sign_to_address???????????????????????????operation???1??????????????????????????????signature,65??????*DAO?????????????????????????????????bytes?????????sigs,??????????????????????????????????????????????????????ok??????
                alert('success')
               nonce ++;
            }
            catch{
                alert('??????????????????')
            }


}



//async function submit_abi_file(){
//     const fileElement = document.querySelector('#excelFile');
//     console.log(fileElement)
//     fileElement.addEventListener('change', (e) => {
//         const file = e.target.files[0];// ????????????
//         console.log('1111',file)
//          if (file) {
//              const reader = new FileReader();
//              reader.readAsText(file);// ????????????????????????
//              console.log(reader.readAsText(file))
//              reader.onload = () => { // ??????????????????????????????
//                  console.log(reader.result, ''); // ????????????????????????
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
//    var Abi_text = inputDom.value; //???????????????
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
        	var option = document.createElement("option");// ??????option??????
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

















