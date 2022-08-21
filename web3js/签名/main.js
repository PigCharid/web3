


function fileImport() {

    var selectedFile = document.getElementById('files').files[0];
    var name = selectedFile.name;

    var reader = new FileReader();


    reader.readAsText(selectedFile);
    reader.onload = function () {
//                   provider = new ethers.providers.Web3Provider(window.ethereum)
        var json_contract_abi = JSON.parse(this.result);
        iface = new web3.utils.Interface(json_contract_abi);
//                   console.log(iface.functions)
        var iface_functions = iface.functions

        Generate_drop_down_box(iface_functions)
    }

}
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