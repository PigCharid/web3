
 let whitelistAddresses = [
    '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83',
    '0x203739622f6def60df2b1e6dcd23d016eb9d6109',
    '0xe2a61d0a77dc937c8fce1caf19c7f5a35b98ffe9',
    '0x6b82e3ee6d788db4a1c5dfee1319f0d8f702cead',
    '0xC7FaB03eecA24CcaB940932559C5565a4cE9cFFb',
    '0xE4336D25e9Ca0703b574a6fd1b342A4d0327bcfa',
    '0xeDcB8a28161f966C5863b8291E80dDFD1eB78491',
    '0x77cbd0fa30F83a249da282e9fE90A86d7936FdE7',
    '0x16Beb6b55F145E4269279B82c040B7435f1088Ee',
	'0x40fbf86c8f625ae8750277efc7498203e8ee24a5',
    '0x6a8bB090384077d45815626E47131bCcEb607FB3',
	'0x6472919cCe45578B3Dd9f0Daf43bAEEc3D538dd8',
	'0x7c1ed26a65E3E5B512d83649120Bd147f5bBD09E',
	'0xfb7A185ABc8A830F05885E82FC16dcC6787B052F',
];



var contracts_m={
	motorn:{
		address:'0xD719f0277de4DE63A794E23C97c277E64DeEb845',
		abi:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMotor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mintForWhite","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintMotor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceWhite","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
}
}
var flag = 0;
var provider;
var is_whitelist;
var myAccount;
var flag_white;
var ChainID;
async function metamaskConnect(){

    var modal__connect = document.getElementsByClassName('modal-warp');
    // var cleanwallet_c = document.getElementsByClassName('cleanwallet');
    var modal__connect__item = modal__connect[0]
    modal__connect__item.style.display = 'none';



	if (typeof window.ethereum !== 'undefined') {
		var ethereum = window.ethereum
		//禁止自动刷新，metamask要求写的
		ethereum.autoRefreshOnNetworkChange = false
		try {
			//第一次链接Metamask
			window.web3 = new Web3(ethereum);
//					var web3 = window.web3;
            // 请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
            const enable = await ethereum.enable();
            provider = new Web3(ethereum);
            flag = 0;
            // console.log('用小狐狸链接的')
            // 授权获取账户
            var accounts = await web3.eth.getAccounts();
            myAccount = accounts[0];
            ChainID = ethereum.chainId;
            //判断这个myAccount,用户地址是不是满足白名单
            is_whitelist = whitelistAddresses.includes(myAccount)
            if(is_whitelist){
                // alert('Your address is on the white list');
                 flag_white = 1;
            }else{
                // alert('Your address is not on the white list');
                 flag_white = 0;
            }

            var account1 = myAccount.substr(0,5) + '....' + myAccount.substr(myAccount.length-4, myAccount.length)
// 			document.getElementById('ConnectWallet').innerHTML= account1;
			document.getElementById('ConnectWallet').innerText= account1;
// 			cleanwallet_c.style.display='block';
			_display()


	        console.log(myAccount)

		} catch (e) {
			alert("Error:"+e);
		}
	} else {
		alert("Install metamask first，pls!");
	}
}

async function Init() {
    if (web3 != undefined) {
        const accounts = await web3.eth.getAccounts();

        myAccount = accounts[0];
        var account1 = myAccount.substr(0,5) + '....' + myAccount.substr(myAccount.length-4, myAccount.length)
		document.getElementById('ConnectWallet').innerText= account1;
		_display()

    }
}

async function _WalletContract() {

    var modal__connect = document.getElementsByClassName('modal-warp');
    var modal__connect__item = modal__connect[0]
    modal__connect__item.style.display = 'none';


    providers.enable().then((res) => {

        // console.log('用手机连接的')
        web3 = new Web3(providers);
        ChainID = providers.chainId;
		//账户更改触发的方法
		flag = 1;
		web3.eth.getAccounts(function (error, result) {
		is_whitelist = whitelistAddresses.includes(result[0])
		if(is_whitelist){
                // alert('Your address is on the white list');
                 flag_white = 1;

            }else{
                // alert('Your address is not on the white list');
                 flag_white = 0;
            }
		})
        providers.on("accountsChanged", (accounts) => {
            ChainID = providers.chainId;
            is_whitelist = whitelistAddresses.includes(accounts[0])
            flag = 1;
            if(is_whitelist){
                // alert('Your address is on the white list');
                 flag_white = 1;

            }else{
                // alert('Your address is not on the white list');
                 flag_white = 0;
            }
                        // console.log(is_whitelist)
             _display();
            console.log("accountsChanged:"+accounts[0])

            document.getElementById('ConnectWallet').innerHTML= accounts[0];


        });
        //账户断开的方法
        providers.on("disconnect", (code, reason) => {
            // alert("---disconnect-"+code);
            console.log("disconnect:"+code)
            closeConnect();
        });
// 		这里返回的是链接地址
        Init((accounts) => {
            document.getElementById('ConnectWallet').innerHTML= accounts[0];
            is_whitelist = whitelistAddresses.includes(accounts[0])
            if(is_whitelist){
                // alert('Your address is on the white list')
                flag_white = 1;
            }else{
                // alert('Your address is not on the white list')
                flag_white = 0;
            }
            //  alert("---1-"+accounts[0]);
             console.log("Init:"+accounts[0])
             myAccount = accounts[0];
             console.log(myAccount)
        })

    }).catch((err) => {
        alert("Fail:"+err);
    });

}




var resu;
async function mint(i){

        if(flag_white==0){

		try {
             if(flag == 0){
                //  console.log('用小狐狸链接的')
                provider = new Web3(ethereum);
                ChainID = ethereum.chainId;
             }else{
                provider = new Web3(providers);
                ChainID = providers.chainId;
                // console.log('用手机连接的')

             }
			//var accounts = await provider.eth.getAccounts();

			var contract =new provider.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);


            if((ChainID == '0x1') || (ChainID == 1) ) {

			provider.eth.getAccounts(function (error, result) {
				if (!error){
					var account = result[0];
					console.log(account);

                    var Value = i * 0.055 *10 **18;
		    	    contract.methods.mintMotor(i).send({from:account,value:Value},function(error,result){
                    }).on('transactionHash', function(hash){
    				    console.log(hash);
    				}).on('confirmation', function(confirmationNumber, receipt){
    				    console.log(receipt);
    				}).on('receipt', function(receipt){
    				    alert('Mint '+i+' NFT success');
    				}).on('error', console.error);
				}
			});
            }
            else{alert('Please link to eth main network')}
		} catch (e) {
			alert("Error:"+e);
		}
	}//if 不是白名单结尾


		//白名单mint


	else {

	    if(flag == 0){
                //  console.log('用小狐狸链接的')
                provider = new Web3(ethereum);
                ChainID = ethereum.chainId;
             }else{
                provider = new Web3(providers);
                ChainID = providers.chainId;
                    //  console.log('用手机连接的')

             }
             ajaxData(myAccount,i);
             console.log('success')
    //     if((ChainID == '0x1') || (ChainID == 1) ) {
	   // var contract =new provider.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);
	   //             var xhr = new XMLHttpRequest();
    //                 xhr.withCredentials = true;
    //                 console.log(myAccount)
    //                 $.ajax({
    //         			type:'GET',
    //         // 			url:'https://fcttt.com:9202/api/get',
    //                     //url:'/api/get',
    //                     url:'https://fcttt.com/api/get',
    //         			data:{name:myAccount},
    //         			dataType: "json",
    //         			success:function(res){
    //         			    var proof = res;
    //         				console.log(proof);

				// 	     var Value = i * 0.033 *10 **18;
				//     	contract.methods.mintForWhite(i,proof).send({from:myAccount,value:Value},function(error,result){
		  //              }).on('transactionHash', function(hash){

				// 		}).on('confirmation', function(confirmationNumber, receipt){

				// 		}).on('receipt', function(receipt){
				// 		  alert('Mint '+i+' NFT success');
    //                       ajaxData(myAccount,i);

				// 		}).on('error', console.error);



    //         			}
    //         		})

    // }
    // else{alert('Please link to eth main network')}

         }




}

//把mint NFT按钮显示出来，把mint NFT for WhiteList按钮显示出来
function _display(){
        var exit_account = document.getElementById("cleanwallet");
	    exit_account.style.display = 'block'
// 		var mint_NFT = document.getElementById("mint_NFT");
// 		var mint_NFT_white = document.getElementById("mint_NFT_white");
// 		if (mint_NFT.style.display=="none")
// 		{
// 			mint_NFT.style.display="inline-block";
// 		}
// 		if (mint_NFT_white.style.display=="none")
// 		{
// 			mint_NFT_white.style.display="inline-block";
// 		}
	document.getElementById("MINT_it").innerText="MINT";
// 		MINT_it.style.display="none";
    document.getElementById("mintblock").style.display='flex';
    document.getElementById("MINT_it").style.display='none'
    document.getElementById('nftPrice').style.display='block'
    document.getElementById('nftNum').style.display='block'
    if(flag_white==1){
        document.getElementById('nftPrice').innerHTML="Whitelist: Price 0.033 ETH"
        document.getElementById('nftNum').innerHTML="Whitelist: UP to 5 per wallet"
        document.getElementById("minta").style.display='inline-block'
        document.getElementById("mintb").style.display='inline-block'
        document.getElementById("mintc").style.display='inline-block'
        document.getElementById("mintd").style.display='inline-block'
        document.getElementById("minte").style.display='inline-block'
    }else {
        document.getElementById('nftPrice').innerHTML="Price 0.055 ETH"
        document.getElementById('nftNum').innerHTML=" UP to 5 per wallet"
        document.getElementById("minta").style.display='inline-block'
        document.getElementById("mintb").style.display='inline-block'
        document.getElementById("mintc").style.display='inline-block'
        document.getElementById("mintd").style.display='inline-block'
        document.getElementById("minte").style.display='inline-block'
    }


}

// window.onload = function () {
// 			var contract =new provider.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);
// 			//获取总量

// }


//断开连接
function closeConnect(){
    var exit_account = document.getElementById("cleanwallet");
	exit_account.style.display = 'none'
	document.getElementById("MINT_it").style.display='inline-block'
	document.getElementById("mintblock").style.display='none';
	document.getElementById("MINT_it").innerText="Please connect wallet first";
	document.getElementById('ConnectWallet').innerText= "Connect Wallet";
	document.getElementById('nftPrice').innerHTML="Price 0.055 ETH"
    document.getElementById('nftNum').innerHTML="UP to 2 per wallet"
    document.getElementById('nftPrice').style.display='none'
    document.getElementById('nftNum').style.display='none'

}

//恢复初始的状态
function show_original(){

    document.getElementById('ConnectMetaMask').innerText= 'Connect MetaMask';
    //隐藏mint NFT按钮
    var mint_NFT = document.getElementById("mint_NFT");
	mint_NFT.style.display="none";
	//隐藏mint NFT For WhiteList按钮
	var mint_NFT_white = document.getElementById("mint_NFT_white");
	mint_NFT_white.style.display="none";
    //把Please connect wallet first 这句话显示出来
    var MINT_it = document.getElementById("MINT_it");
	MINT_it.style.display="inline-block";
	//隐藏退出账号按钮
	var exit_account = document.getElementById("exit_account");
	exit_account.style.display="none";
}



function ajaxData (address, mint_num) {
    let match = location.search
    var matchObj = {}
    if (match) {
        match = match.replace('?', '')
        let matchList = match.split("&")
        matchList.forEach(element => {
            const s = element.split('=')
            if (s.length == 2) {
                matchObj['invite_Code'] = s[1].trim();
            }
        });
    }
    console.log(matchObj['invite_Code'])
    const now = new Date().getTime()
    console.log('ajax参数', `address=${address}${matchObj['invite_Code'] ? '&invite_code=' + matchObj['invite_Code'] : ''}&timestamp=${now}`, {
        timestamp: now,
        address: address,
        invite_code: matchObj['invite_Code'],
        mint_num: mint_num,
        sig: SparkMD5.hash(`address=${address}${matchObj['invite_Code'] ? '&invite_code=' + matchObj['invite_Code'] : ''}&timestamp=${now}`)
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    $.ajax({
        type:'POST',
// 			url:'https://fcttt.com:9202/api/get',
//        url:'http://47.97.204.207:7778/uploadUserBehavior',
        // url:'http://3.1.64.17:7778/uploadUserBehavior',
        url:"https://motorn.io/promoteApi/uploadUserBehavior",
        // url:'https://m.motorn.io/uploadUserBehavior',
        //  url:'/uploadUserBehavior',
        data: JSON.stringify({
            timestamp: now,
            address: address,
            invite_code: matchObj['invite_Code'],
            mint_num: mint_num,
            sig: window.SparkMD5.hash(`address=${address}${matchObj['invite_Code'] ? '&invite_code=' + matchObj['invite_Code'] : ''}&timestamp=${now}`)

        }),
        dataType: "json",
        success:function(res){

console.log("----"+res)


        }
    })


}
