
window.addEventListener("load", cargar, true);
var actualTabURL;
var query = { active: true, currentWindow: true };
function callback(tabs) {debugger;
  var currentTab = tabs[0]; // there will be only one in this array
 // console.log(currentTab); // also has properties like currentTab.id
  actualTabURL = currentTab.url;
}
chrome.tabs.query(query, callback);
function cargar(){
	//$( "#popup" ).menu();
	//$( "#importexport" ).menu();
	//desactivarTodos();
    chrome.extension.sendMessage({ operation: 'currentWebPageStatus' });
}

chrome.extension.onMessage.addListener( function(request, sender, sendResponse) {
    if(request.operation=="checkPopup"){
        checkAugmentation(request.url);
    }
});

function checkAugmentation(url){
    chrome.storage.local.get(null,function(items) {//Habra que ver en el elsif que pasa si cambia la URL
        if(hayAumentacionAqui (items, url)){
            document.getElementById("wa_delete").addEventListener("click", deleteAugmentation, false);
            document.getElementById("wa_edition").classList.remove("button2");
			document.getElementById("wa_save").classList.remove("button2");
            document.getElementById("wa_edition").classList.add("buttonDeselected");
			document.getElementById("wa_save").classList.add("buttonDeselected");
        }else if(items.developing != undefined || items.developing != null){
				if(actualTabURL.includes(items.developing.dominio.host)){//Nohay aumentaciones
					document.getElementById("wa_save").addEventListener("click", guardarEditing, false);
					document.getElementById("wa_edition").classList.remove("button2");
					document.getElementById("wa_edition").classList.add("buttonDeselected");
					document.getElementById("wa_delete").classList.remove("button2");
					document.getElementById("wa_delete").classList.add("buttonDeselected");	
				}					
        }else{
			document.getElementById("wa_edition").addEventListener("click", startEditing, false);
			document.getElementById("wa_delete").classList.remove("button2");
            document.getElementById("wa_delete").classList.add("buttonDeselected");	
			document.getElementById("wa_save").classList.remove("button2");
			document.getElementById("wa_save").classList.add("buttonDeselected");
		}
    });
}

function hayAumentacionAqui (items, url){
    var hayAumentacion = false;
    if(items.executing!=undefined && items.executing != null) {
        for (var i = 0; i < items.executing.length; i++) {
			if (url.includes(items.executing[i].dominio.host)) {
				hayAumentacion = true;
			}
        }
    }
    return hayAumentacion;
}

function startEditing (){
    chrome.extension.sendMessage({operation:"startAugmentation"});
    window.close();
}

function deleteAugmentation(){
    chrome.extension.sendMessage({operation:"deleteAugmentation"});
    window.close();
}

function guardarEditing(){
	chrome.extension.sendMessage({operation:"saveAugmentation"});
	window.close();
}


