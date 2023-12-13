/*function executeLibraries(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
    chrome.tabs.executeScript(tabId, { file: "js/webSearch.js" }, function() {
        chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {
            chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {

                 /                 chrome.tabs.insertCSS(tabId, { file: "css/close.css"}, function(){
                                      chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
                                          chrome.tabs.executeScript(tabId, { file: "js/xpath.js"}, function(){
                                              chrome.tabs.executeScript(tabId, { file: "htmlclipper/htmlclipper.js"}, function(){
                                                  if(callback!=null){callback(tabId,params);};
                                              });
                                          });
                                      });
                                  });/
                              });
                          });
                      });
            });
        });
    });
}

function activasPaste(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, { file: "js/webSearchPaste.js" }, function() {
                    chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {
                        chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                        });
                    });
                });
            });
        });
    });
}


function activateFirstStep(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, { file: "js/webSearchFirstStep.js" }, function() {
                    chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {
                        chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                        });
                    });
                });
            });
        });
    });
}

function activateLastStep(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, { file: "js/webSearchLastStep.js" }, function() {
                    chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {
                        chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                        });
                    });
                });
            });
        });
    });
}

function executeLibrariesSave(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/xpath.js" }, function() {
        chrome.tabs.executeScript(tabId, {file: "js/save.js"}, function () {
            /*    chrome.tabs.insertCSS(tabId, { file: "css/personalizing.css"}, function() {
                }); *
        });
    });
}

function executeLibrariesDelete(tabId){
 //   chrome.tabs.executeScript(tabId, { file: "js/xpath.js" }, function() {
        chrome.tabs.executeScript(tabId, {file: "js/delete.js"}, function () {
            /    chrome.tabs.insertCSS(tabId, { file: "css/personalizing.css"}, function() {
                }); /
        });
 //   });
}

function executeAugmentation(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                chrome.tabs.executeScript(tabId, { file: "js/executeAugmentation.js" }, function() {
     //               chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {

                        });
                    });
      //          });
            });
        });
    });
}

function executeAugmentationPaste(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, { file: "js/executeAugmentationPaste.js" }, function() {
                    //               chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {
                    chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                    });
                });
                //          });
            });
        });
    });
}

function executeAugmentatiosFirstStep(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                    chrome.tabs.executeScript(tabId, { file: "js/executeAugmentatiosFirstStep.js" }, function() {
                        //               chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {

                    });
                });
                //          });
            });
        });
    });
}

function executeAugmentationLastStep(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                    chrome.tabs.executeScript(tabId, {file: "js/htmlclipper.js"}, function () {
                    chrome.tabs.executeScript(tabId, { file: "js/executeAugmentationLastStep.js" }, function() {
                        //               chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {
                    });
                    });
                });
                //          });
            });
        });
    });
}

function executeAugmentationFinal(tabId){
    chrome.tabs.executeScript(tabId, { file: "js/jquery-2.0.3.min.js"}, function(){
        chrome.tabs.executeScript(tabId, { file: "js/jquery-ui-1.10.3.custom.js"}, function(){
            chrome.tabs.insertCSS(tabId, { file: "css/jquery-ui-1.10.3.custom.css"}, function(){
                chrome.tabs.executeScript(tabId, {file: "js/xpath.js"}, function () {
                        chrome.tabs.executeScript(tabId, { file: "js/augmentationFinal.js" }, function() {
                            //               chrome.tabs.insertCSS(tabId, { file: "css/webSearch.css"}, function() {
                        });
                });
                //          });
            });
        });
    });
}*/
//var div1='<p><span style="background-color: #DC143C; color: #ffffff; padding: 0 3px;font-size: 15px;">One of the required nodes has not been found and the process has been aborted <i id="wm_info" style="color: blue;">More info</i><strong id="wm_xpathInfo"></strong></span></p>'

chrome.extension.onMessage.addListener( function(request, sender, sendResponse) {

    if (request.operation == "startAugmentation") {
        onBrowserActionClicked();
    }
    if (request.operation == "deleteAugmentation") {
        onBrowserActionClickedDelete();
    }
	if (request.operation == "saveAugmentation") {
        fromDevelopingToExecuting();
    }
});
var editingTab;
function onRequestHandler(req, msg) {
    if(req.operation=="runEditor") {
        var tabId=msg.tab.id;
		editingTab=msg.tab.id;
    //    executeLibraries(tabId);
		chrome.tabs.sendMessage(tabId, { operation: "startEditing" });
    }
    if(req.operation=="saveEditor") {
        var tabId=msg.tab.id;
    //    executeLibrariesSave(tabId);
    }
    if(req.operation=="deleteEditor") {debugger;
        var tabId=msg.tab.id;
       executeDelete(tabId, msg.url);
    }
};

function onBrowserActionClicked(){
    chrome.tabs.executeScript(null, {
        code: "chrome.extension.sendRequest({ operation: 'runEditor'});"
    });
}

function onBrowserActionClickedDelete(){
    chrome.tabs.executeScript(null, {
        code: "chrome.extension.sendRequest({ operation: 'deleteEditor'});"
    });
}

function executeDelete(tabId, url){
	chrome.storage.local.get(null,function(items){
		debugger;
		var hayQueEliminar = false;
		for (var i = 0; i < items.executing.length; i++) {
			if (url.includes(items.executing[0].dominio.host)) {
				items.executing.splice(i, 1);
				hayQueEliminar = true;
			}
        }
		if(hayQueEliminar){
			chrome.storage.local.set(items,function(){
				chrome.tabs.reload(tabId);
			});
		}
	});
	
}

function fromDevelopingToExecuting(){
	chrome.storage.local.get(null,function(items){
		var tab = items.developing.editingTab
		var executing = {steps:items.developing.steps, dominio:items.developing.dominio};
		var aux = new Array();
		aux.push(executing);
		if(items.executing == undefined){
			var info = {developing: null, executing: aux};
		}else{
			items.executing.push(executing);
			var info = {developing: null, executing: items.executing};
		}
		chrome.storage.local.set(info,function(){
			chrome.tabs.reload(tab);
		});
	});
}

chrome.extension.onRequest.addListener(onRequestHandler);

chrome.extension.onMessage.addListener( function(request, sender, sendResponse) {
	if(request.operation=="inicio"){
        chrome.storage.local.get(null,function(items){
			var steps = [[]];//new Array();
            if (items.developing != undefined){
				var aux = {
						already: true,
						steps: steps,
                        dominio:request.location,
						paralelizando:false,
						editingTab:editingTab
                    };
                var info = {developing: aux, executing: items.executing};
			}else{
				var aux = {
						already: true,
						steps: steps,
                        dominio:request.location,
						paralelizando:false,
						editingTab:editingTab
                    };
                var info = {developing: aux, executing: items.executing};
			}
			chrome.storage.local.set(info,function(){});
        });
    }
	
	if(request.operation=="saveStep"){
        chrome.storage.local.get(null,function(items){debugger;
			var info = {type:request.type, data:request.data, location:request.location};
			var aux = {type:null};
			var aux2 = new Array();
			aux2.push(aux);
			if(request.type == "guardarHTML"){
				items.developing.steps[items.developing.steps.length-1].push(info);
				items.developing.steps.push(aux2);
			}else if(request.type == "guardarkeys"){
				if(items.developing.steps[items.developing.steps.length-1][items.developing.steps[items.developing.steps.length-1].length-1] != undefined){
					if(items.developing.steps[items.developing.steps.length-1][items.developing.steps[items.developing.steps.length-1].length-1].data.xpath == request.data.xpath){
						items.developing.steps[items.developing.steps.length-1][items.developing.steps[items.developing.steps.length-1].length-1].data.nodeValue = request.data.nodeValue;
					}else{
						items.developing.steps[items.developing.steps.length-1].push(info);
					}
				}else{
					items.developing.steps[items.developing.steps.length-1].push(info);
				}
			}else{
				items.developing.steps[items.developing.steps.length-1].push(info);
			}
            chrome.storage.local.set(items,function(){
				var x = items;
				if(request.type=="clickSearchButton" && request.paralelizando){
					 chrome.tabs.create({url:request.data});
				}
			});
        });
    }
	
	if(request.operation=="paralelizando"){
        chrome.storage.local.get(null,function(items){
			items.developing.paralelizando = request.paralelizando;
			var info = {type:request.operation, xpath:request.xpath, location:request.location};
			items.developing.steps[items.developing.steps.length-1].push(info);
            chrome.storage.local.set(items,function(){
				if(!request.paralelizando){
					chrome.tabs.getSelected(null, function (tabId){
						chrome.tabs.sendMessage(items.developing.editingTab, { operation: "parallelAnswer", html:request.html});
						chrome.tabs.remove(tabId.id, function(){});
					});
				}
			});
        });
    }
	
	if(request.operation=="aumentacionFinal"){
		chrome.tabs.getSelected(null, function (tabId){
			var auxId = tabId.id;
			chrome.storage.local.get(null,function(items){
				var tabs = new Array();
				var localExecution = [[]];
				if(request.exec.steps.length > 1){
					request.exec.steps.splice(request.exec.steps.length-1,1);
				}
				for (var i = 0; i < request.exec.steps.length; i++){debugger;
					for (var j = 0; j < request.exec.steps[i].length; j++){
						if(request.exec.steps[i] != undefined && request.exec.steps[i][j] != undefined && request.exec.steps[i][j].type != null){
							if(request.exec.dominio.host == request.exec.steps[i][j].location.host){
								if(/*request.exec.steps[i][j].type != "guardarPaste" && */request.exec.steps[i][j].data != undefined && request.exec.steps[i][j].data.xpath != ".//input[@id='ws_helbidea']"){
									if(request.exec.steps[i][j].type != "clickSearchButton"){debugger;
										var lagun = {paso:request.exec.steps[i][j], i:i, j:j};
										localExecution[0].push(lagun);
									}
								}
							}
						}
					}
				}
				var exec = {exec:request.exec, documento:request.document, location:request.location, tabs:tabs, localExecution:localExecution};
				var info = {developing: items.developing, executing: items.executing, moment:exec};
				chrome.storage.local.set(info,function(){
					setTimeout(function(){ chrome.tabs.sendMessage(auxId, { operation: "localStepsAumentacionFinal", localExecution:localExecution});}, 0);
					for (var i = 0; i < request.exec.steps.length; i++){
						var j = 0;
						var urlLanzada = false;
						while (!urlLanzada && j < request.exec.steps[i].length){
							if(request.exec.steps[i][j].type == "clickSearchButton"){
								urlLanzada = true;
								var updateProperties = { 'active': true };
								chrome.tabs.create({url:request.exec.steps[i][j].data});
								chrome.tabs.update(auxId, updateProperties, (tab) => { });
							}
							j++
						}
					}
				});
			});
        });
    }
	
/*	if(request.operation=="augmentedWebsiteFinal"){
		chrome.storage.local.get(null,function(items){
			items.moment.exec.steps[request.i][request.j].data = request.fullText;
			items.moment.exec.steps[request.i][request.j].type = "doneGuardarCopy"
			chrome.storage.local.set(items,function(){
			});
		});
	}*/
	
	if(request.operation=="getTabId"){	
		chrome.storage.local.get(null,function(items){debugger;
		if(request.i >= 0){
			items.moment.tabs.push({i:request.i, j:request.j, tabId: sender.tab.id, url:request.url});
			chrome.storage.local.set(items,function(){debugger;
				chrome.tabs.sendMessage(sender.tab.id, { operation: "pasosExecutionFinal", pasos:items.moment.exec.steps[request.i], i:request.i});
			});
		}/*else if (request.i == -1){
			if(existeTab(items.moment.tabs, sender.tab.id)){
				var tabInfo = getTabInfo(items.moment.tabs, sender.tab.id);
				if(tabInfo >= 0){
					chrome.tabs.sendMessage(sender.tab.id, { operation: "pasosExecutionFinal", pasos:items.moment.exec.steps[tabInfo], i:tabInfo});
				}
			}
		}*/
		else if(request.i == -2){
			items.moment = null;
			chrome.storage.local.set(items,function(){
				chrome.tabs.sendMessage(sender.tab.id, {operation: "spiner2"});
			});
		}
	//	for(var i = 0; i < items.moment.exec.steps.length; i++){
	//		for (var j = 0; j < items.moment.exec.steps[i].length; j++){
	//			if(items.moment.exec.steps[i][j].type == "clickSearchButton" && items.moment.exec.steps[i][j].data == tab.pendingUrl){
					
	//			}
	//		}
	//	}
		
	});
	}
	
	if(request.operation=="finalishedThisSteps"){	
		chrome.tabs.getSelected(null, function (tabId){
			var auxId = tabId.id;
			 chrome.storage.local.get(null,function(items){
				 debugger;
				 var html = items.moment.exec.steps[request.i][items.moment.exec.steps[request.i].length-1].html;
				 if(request.html != null){
					  html = request.html;
					  items.moment.exec.steps[request.i][items.moment.exec.steps[request.i].length-1].html = request.html;
					  items.moment.exec.steps[request.i][items.moment.exec.steps[request.i].length-1].type = "doneGuardarHTML";
				 }/*else{
					 html = div1;
				 }*/
				 var xpath = findParalelizandoXpath(items.moment.exec.steps[request.i]);
				 chrome.tabs.sendMessage(auxId, { operation: "terminando", html:html, xpath:xpath, i:request.i});
				 chrome.tabs.remove(sender.tab.id, function(){});
			//	 if(todosLosPasosTerminados(items.moment.exec.steps)){
					// items.moment = null;
					// chrome.tabs.sendMessage(auxId, {operation: "spiner"});
					 chrome.storage.local.set(items,function(){
					 });
			//	 }
			 });
		});
	}
	
	if(request.operation=="errorDetected"){	
		chrome.tabs.getSelected(null, function (tabId){
			var auxId = tabId.id;
			 chrome.storage.local.get(null,function(items){
				 debugger;
				chrome.tabs.sendMessage(auxId, { operation: "erroresDetectados", i:request.i, xpath:request.xpath, url: request.url});
			 });
		});
	}
	
 /*   if(request.operation=="guardarPrimero"){
        chrome.storage.local.get(null,function(items) {
            debugger;
            if (items.developing != undefined){
          //      if (items.developing.already== undefined) {
					var copyPaste = new Array();
					var paso = {type: "first", copy: request.copy, helbidea: request.helbidea};
					copyPaste.push(paso);
                    var aux = {
						already: true,
						steps: copyPaste,
                        augmentedWebsite: request.augmentedWebsite,
                        dominio:request.dominio
                    };
                    var info = {developing: aux, executing: items.executing};
           //     }
        }else{
			var copyPaste = new Array();
					var paso = {type: "first", copy: request.copy, helbidea: request.helbidea};
					copyPaste.push(paso);
           var aux = {
						already: true,
						steps: copyPaste,
                        augmentedWebsite: request.augmentedWebsite,
                        dominio:request.dominio
                    };
            var info = {developing: aux, executing: items.executing};
        }debugger;
            chrome.storage.local.set(info,function(){
                chrome.tabs.getSelected(null, function (tabId){debugger;
      //              chrome.tabs.remove(tabId.id, function(){
                        chrome.tabs.create({url:info.developing.steps[0].helbidea});
                    });
      //          });
            });
        });
    }*/
	
/*	if(request.operation=="guardarCommonClick"){
        chrome.storage.local.get(null,function(items){debugger;
            var info = {type:"click", xpath:request.xpath, location:request.location};
			items.developing.steps.push(info);
            chrome.storage.local.set(items,function(){
            });
        });
    }
	
	if(request.operation=="guardarCopy"){
        chrome.storage.local.get(null,function(items){debugger;
            var info = {type:"copy", copy:request.copy, location:request.location};
			items.developing.steps.push(info);
            chrome.storage.local.set(items,function(){
            });
        });
    }
	
    if(request.operation=="guardarPaste"){
        chrome.storage.local.get(null,function(items){debugger;
            var info = {type:"paste", paste:request.paste, location:request.location};
			items.developing.steps.push(info);
            chrome.storage.local.set(items,function(){
            });
        });
    }
	
	if(request.operation=="guardarkeys"){
        chrome.storage.local.get(null,function(items){debugger;
            var info = {type:"keyPress", key:request.key, location:request.location};
			items.developing.steps.push(info);
            chrome.storage.local.set(items,function(){
            });
        });
    }*/
	
	
 /*   if(request.operation=="guardarFirstStep") {
        chrome.storage.local.get(null, function (items) {
            var aux = {
                copy: items.copy.copy,
                helbidea: items.copy.helbidea,
                dominio:items.copy.dominio,
                augmentedWebsite:items.copy.augmentedWebsite,
                xpathPaste: items.copy.xpathPaste,
                xpathButton: items.copy.xpathButton,
                xpathFirstStep: request.xpathFirstStep
            };
            var info = {copy:aux, augmentation:items.augmentation};
            chrome.storage.local.set(info, function () {
            });
        });
    }
      if(request.operation=="guardarLastStep"){
            chrome.storage.local.get(null,function(items){
                var aux = {copy:items.copy.copy, helbidea:items.copy.helbidea, dominio:items.copy.dominio, augmentedWebsite:items.copy.augmentedWebsite, xpathPaste:items.copy.xpathPaste, xpathButton: items.copy.xpathButton,xpathFirstStep: items.copy.xpathFirstStep, xpathFinalElem: request.xpathLastStep};
                var loadAugWeb = items.copy.augmentedWebsite;
                var copia = {copy:undefined, helbidea:undefined, dominio:undefined, augmentedWebsite:undefined, xpathPaste:undefined, xpathButton: undefined,xpathFirstStep: undefined, xpathFinalElem: undefined};
                if(items.augmentation == undefined){
                    var newAug = new Array();
                    newAug.push(aux);
                    var info = {copy:copia, augmentation:newAug};
                }else{
                    var info = {copy:copia, augmentation:items.augmentation.concat(aux)};
                }
                chrome.storage.local.set(info,function(){
                    chrome.tabs.getSelected(null, function (tabId){
                        chrome.tabs.remove(tabId.id, function(){
                            chrome.tabs.create({url:loadAugWeb});
                        });
                    });
                });
                });
    }
    if(request.operation=="augmenationHTML"){
        chrome.tabs.getSelected(null, function (tabId){
            chrome.storage.local.get(null,function(items) {
                chrome.tabs.remove(items.current.tab, function(){
               //     chrome.tabs.create({url:request.url});
                    executeAugmentationFinal(tabId.id);
                });
            });
        });
    }
    if(request.operation=="deleteProject"){
        chrome.tabs.getSelected(null, function (tabId) {
            chrome.storage.local.get(null, function (items) {
                debugger;
                var i = deleteSelectedAugmentation(items, request.helbidea);
                if (i != -1) {
                    items.augmentation.splice(i, 1);
                }
                chrome.storage.local.set(items, function () {
                    chrome.tabs.reload(tabId.id);
                });
            });
        });
    }
    if(request.operation=="augmenationPaste") {
        chrome.tabs.getSelected(null, function (tabId) {
           // chrome.tabs.remove(tabId.id, function () {
                //       chrome.tabs.create({'url': request.textoToSearch}, function(tab){  chrome.tabs.highlight(tabId); })
                chrome.tabs.create({url: request.textoToSearch},function(t){
                    chrome.storage.local.get(null,function(items) {
                        debugger;
                        items.current.tab = t.id;
                        chrome.storage.local.set(items,function(){
                            chrome.tabs.update(tabId.id, {highlighted:true});
                        });
                    });
                });
          //  });
        });
    }
  */  if(request.operation=="currentWebPageStatus"){
        chrome.tabs.getSelected(null, function (tabId) {
            chrome.extension.sendMessage({ operation: 'checkPopup', url:tabId.url });
        });
    }
/*
 chrome.tabs.onUpdated.addListener(function (tabId,changeInfo, tab ) {
     chrome.storage.local.get(null,function(items){
     if(items.copy!=undefined) {
         if (tab.url == items.copy.helbidea) {
            activasPaste(tabId);
         }
         else if (items.copy.xpathPaste != undefined && tab.url.includes(items.copy.helbidea) && items.copy.xpathFirstStep == undefined) {
             activateFirstStep(tabId);
         }
         else if (items.copy.xpathFirstStep != undefined && items.copy.xpathFinalElem == undefined) {
             activateLastStep(tabId);
         }
     }
     if(items.augmentation!=undefined) {debugger;
         if (items.augmentation.length > 0) {
             if (hayAumentacionAqui(items, tab.url)) {
                 if (items.current != undefined) {
                     if (items.current.html != undefined) {
                         executeAugmentationFinal(tabId);
                     }else{
                         executeAugmentation(tabId);
                     }
                 } else {
                     executeAugmentation(tabId);
                 }
             } else if (items.current != undefined) {
                 if (items.current.textoToSearch != undefined && items.current.aug.helbidea == tab.url && !items.current.lastStep) {
                     executeAugmentationPaste(tabId);
                 } else if (items.current.textoToSearch != undefined && tab.url.includes(items.current.aug.helbidea) && !items.current.lastStep) {
                     executeAugmentatiosFirstStep(tabId);
                 } else if (items.current.lastStep) {
                     executeAugmentationLastStep(tabId);
                 }
             }
         }
     }
     });*/
 });

 function deleteSelectedAugmentation(items, helbidea){debugger;
     var dev = -1;
     for(var i=0; i<items.augmentation.length; i++){
         if(items.augmentation[i].augmentedWebsite == helbidea || (new URL(helbidea)).hostname==items.augmentation[i].dominio){
             dev=i;
         }
     }
     return dev;
 }

 function hayAumentacionAqui (items, url){
     var hayAumentacion = false;
     var i=0;
     while(items.augmentation[i]!=undefined && !hayAumentacion){
         if(items.augmentation[i].augmentedWebsite != undefined && (url == items.augmentation[i].augmentedWebsite || items.augmentation[i].dominio==(new URL(url)).hostname)){
             hayAumentacion=true;
         }
         i++;
     }
     return hayAumentacion;
 }
 //chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
/*chrome.tabs.onCreated.addListener(function(tab) {
	chrome.storage.local.get(null,function(items){
		for(var i = 0; i < items.moment.exec.steps.length; i++){
			for (var j = 0; j < items.moment.exec.steps[i].length; j++){
				if(items.moment.exec.steps[i][j].type == "clickSearchButton" && items.moment.exec.steps[i][j].data == tab.pendingUrl){
					items.moment.tabs.push({i:i, j:j, tabId: tab.id, url:tab.pendingUrl});
				}
			}
		}
		chrome.storage.local.set(items,function(){
			//while (tab.status == "loading"){}
			//chrome.tabs.sendMessage(tab.id, { operation: "pasosExecutionFinal", pasos:items.moment.exec.steps[i]});
		});
	});
});*/

/*chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
	chrome.storage.local.get(null,function(items){debugger;
		for(var i = 0; i < items.moment.exec.steps.length; i++){
			for (var j = 0; j < items.moment.exec.steps[i].length; j++){
				if(items.moment.exec.steps[i][j].type == "clickSearchButton" && items.moment.exec.steps[i][j].data == tab.pendingUrl && existeTab(items.moment.exec.tabs, tabId)){
					chrome.tabs.sendMessage(tab.id, { operation: "pasosExecutionFinal", pasos:items.moment.exec.steps[i]});
				}
			}
		}
	});
});*/

function existeTab(lista, tabId){
	var encontrado = false;
	for (var i = 0; i < lista.length; i++){
		if(lista[i].tabId == tabId){
			encontrado = true;
		}
	}
	return encontrado;
}

function getTabInfo(tabs, id){
	var devolver = -1;
	for (var i=0; i < tabs.length; i++){
		if (tabs[i].tabId == id){
			devolver = tabs[i].i;
		}
	}
	return devolver;
}

function findParalelizandoXpath(pasos){
	var devolver = "/html/body";
	for (var i = 0; i < pasos.length; i++){
		if(pasos[i].type == "paralelizando"){
			devolver = pasos[i].xpath;
		}
	}
	return devolver;
}

/*function todosLosPasosTerminados(steps){
	var allExecuted = true;
	for(var i = 0; i < steps.length; i++){
		for (var j = 0; j < steps[i].length; j++){
			if(steps[i][j].type != null){
				if(steps[i][j].type != "paralelizando" && steps[i][j].type != "clickSearchButton" && steps[i][j].type.substring(0, 4) != "done"){
					allExecuted = false;
				}
			}
		}
	}
	return allExecuted;
}
*/