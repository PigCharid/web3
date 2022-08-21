
 



var contracts_m={
	motorn:{
		address:'0x3Eb791657b2124D9E555D54aD9D234307A0ebE16',
		abi:[{"inputs":[{"internalType":"address","name":"_reserveAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMotor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintMotor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMotor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
}
}
var flag = 0;
var provider;
var is_whitelist;
var myAccount;
var flag_white;
var ChainID;
async function metamaskConnect(){

    // var modal__connect = document.getElementsByClassName('modal-warp');
    // // var cleanwallet_c = document.getElementsByClassName('cleanwallet');
    // var modal__connect__item = modal__connect[0]
    // modal__connect__item.style.display = 'none';



	if (typeof window.ethereum !== 'undefined') {
		var ethereum = window.ethereum
		//禁止自动刷新，metamask要求写的
		ethereum.autoRefreshOnNetworkChange = false
		try {
			//第一次链接Metamask
			window.web3 = new Web3(ethereum);  
            //var web3 = window.web3;
            //请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
            const enable = await ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            var address = accounts[0];
            var provider1 = new Web3(ethereum);//绑定小狐狸
            var contract =new provider1.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);
            var hash;
            // var address = '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83';
            // var spender = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
            
            
            
            
            
            contract.methods.balanceOf(address).call().then(function (res){
                         
                         console.log('这是返回结果',res)
                     })
                     
            var i = 1;
            var Value = i * 0.05 *10**18;//wei

            contract.methods.mintMotor(i).send({from:address,value:Value},function(error,result){
        		                }).on('transactionHash', function(hash){
                                        console.log("交易哈希",hash)
        						}).on('confirmation', function(confirmationNumber, receipt){
                                        console.log("确认信息",receipt)
        						}).on('receipt', function(receipt){
        						        console.log("收据信息,",receipt)
        						  alert('Mint '+i+' NFT success');
        						  //document.getElementById('mintg').style.display='block'
                                //   ajaxData(myAccount,i);
        						}).on('error', console.error);
        
                    			
            
            

            
            
            
            
            // const domain = [
            //     { name: "name", type: "string" },
            //     { name: "version", type: "string" },
            //     { name: "chainId", type: "uint256" },
            //     { name: "verifyingContract", type: "address" },
            //     { name: "salt", type: "bytes32" },
            // ];
            // const bid = [
            //     { name: "amount", type: "uint256" },
            //     { name: "bidder", type: "Identity" },
            // ];
            // const identity = [
            //     { name: "userId", type: "uint256" },
            //     { name: "wallet", type: "uint256" },
            // ];
            
            
            
            
            // console.log(ethereum.chainId);
            
            // const domainData = {
            //     name: "My amazing dApp",
            //     version: "2",
            //     chainId: 4,
            //     verifyingContract: "0x1C56346CD2A2Bf3202F771f50d3D14a367B48070",
            //     salt: "0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"
            // };
            
            // // var message = {
            // //     amount: 100,
            // //     bidder: {
            // //         userId: 323,
            // //         wallet: "0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83"
            // //     }
            // // };
            
            // var message = {
            //     amount: 100,
            //     bidder: {
            //         userId: 10,
            //         wallet: 11
            //     }
            // };
                                    
            
            // const data = JSON.stringify({
            //     types: {
            //         EIP712Domain: domain,
            //         Bid: bid,
            //         Identity: identity,
            //     },
            //     domain: domainData,
            //     primaryType: "Bid",
            //     message: message
            // });
            
            // var signer = address;
            
            
            // web3.currentProvider.sendAsync(
            //     {
            //         method: "eth_signTypedData_v4",
            //         params: [signer, data],
            //         from: signer
            //     },
            //     function(err, result) {
            //         if (err) {
            //             return console.error(err);
            //         }
            //         const signature = result.result.substring(2);
            //         console.log(signature);
            //         const r = "0x" + signature.substring(0, 64);
            //         const s = "0x" + signature.substring(64, 128);
            //         const v = parseInt(signature.substring(128, 130), 16);
            //         //The signature is now comprised of r, s, and v.
            //         console.log('r',r);
            //         console.log('s',s);
            //         console.log('v',v);
            //         }
            //     );
            

            
            

	
            

		} catch (e) {
			alert("Error:"+e);
		}
	} else {
		alert("Install metamask first，pls!");
	}
}






