// FASE INICIAL
var div1='<span>One of the required nodes has not been found and the process has been aborted <i id="wm_info" style="color: blue;">Technical info</i><ul style="display:none;"><li>See on the opened in which step has happened the error</li></ul></span>'
chrome.runtime.onMessage.addListener(onEditorEnable);
var activarUnaVez = true;
//var firstTimePlus = true;
function onEditorEnable(request, sender){
	chrome.storage.local.get(null,function(items){
    if(request.operation=="startEditing"){
        debugger;
		//startSearchAugmentation();
		chrome.extension.sendMessage({location:location, operation:"inicio"});
		cargarDesarrollo();
    }
	if(request.operation=="parallelAnswer"){
		paralelizando = false;
		var positionElem = items.developing.steps.length-2;
		$(".ws_direccion").after("<div class='ws_paralelos' wm_data_position='"+positionElem.toString()+"'><button class='wm_btn'>+</button>"+request.html+"</div>");
		$(".ws_direccion").remove();debugger;
	//	if(firstTimePlus){
	//		firstTimePlus = false;
			$(".wm_btn").off("click");
			$(".wm_btn").click(function(e){
				funcionalidadPlus(e);
			});
	//	}
	}  
	if(request.operation=="localStepsAumentacionFinal"){
		getDataAumentacionFinal(request.localExecution);
		$(document.body).after("<div class='loader'></div>");
	} 
	if(request.operation=="pasosExecutionFinal"){
		getDataAumentacionFinalisimo(request.pasos, request.i);
	}
	
	if(request.operation=="terminando"){
//		if(!insertadoAnteriormenteHTML(request.html)){
			var eliminar = document.getElementById('wm_insertado'+request.i);
			eliminar.remove();
			var node =  document.evaluate(request.xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
			$(node).after("<div id='wm_insertado"+request.i+"' class='wm_insertedFinish'>"+request.html+"</div>");
			insertados[request.i] = true;
			checkFinished();
//			insertedHTML.push(request.xpath);
//		}
	}
/*	if(request.operation=="spiner"){
		document.getElementsByClassName("loader")[0].style.display = 'none';
	}*/
	if(request.operation=="spiner2"){
		setTimeout(function(){ 
		if(document.getElementsByClassName("loader")[0] != undefined){
			document.getElementsByClassName("loader")[0].style.display = 'none'; 
		}}, 0);
		
	}
	if(request.operation=="erroresDetectados"){
		var node = document.getElementById('wm_insertado'+request.i);
		var btn = document.createElement("LI");
		btn.innerHTML = "AN ERROR HAS HAPPEND IN "+request.url+" WITH THE ELEMENT "+request.xpath;
		try{		
			node.children[0].children[1].append(btn);
			insertados[request.i] = true;
		} catch(err){
	
		}
		checkFinished();
		if(activarUnaVez && document.getElementById("wm_info") != null){
			activarUnaVez = false;
			activateTechInfoListener();
		}
	}
	});
}

function funcionalidadPlus(e){
	debugger;
	paralelizando = true;
	insertarDivParaURL($(e.target.parentNode));
	var nodo = e.target.parentNode.previousElementSibling;
	while(nodo.previousElementSibling.classList.value == "ws_paralelos"){
		nodo = nodo.previousElementSibling;
	}
	var xpath = minimizeXPath(generateXPath(nodo,document,null,{showId:true}),document).join("")
	chrome.extension.sendMessage({operation:"paralelizando", paralelizando:true, xpath:xpath, location:location});
}

function activateTechInfoListener(){
	let elementsArray = document.querySelectorAll('#wm_info');
	elementsArray.forEach(function(elem) {
		elem.addEventListener("click", function() {
		//  var aaa = document.getElementById("wm_info");
		  if(elem.parentNode.children[1].style.display == "none"){
			elem.parentNode.children[1].style.display = "block";
		  }else{
			  elem.parentNode.children[1].style.display = "none";
		  }
		});
	});
}

function checkFinished(){
	chrome.storage.local.get(null,function(items){
	//	if(document.getElementsByClassName("wm_insertedFinish").length == items.moment.exec.steps.length){
		var todos = true;
		for(var i = 0; i < items.moment.exec.steps.length; i++){
			if(insertados[i] == false){
				todos = false;
			}
		}
		if(todos || insertados.length == 0){
			document.getElementsByClassName("loader")[0].style.display = 'none';
		}
	});
}
var insertados = new Array();
function insertAllFailures(items){
	if(items.moment != null){
		for(var i = 0; i < items.moment.exec.steps.length; i++){
			var devolver = {xpath:null, i:-1};
			for(var j = 0; j < items.moment.exec.steps[i].length; j++){
				if(items.moment.exec.steps[i][j].type == "paralelizando"){
					insertados.push(false);
					var node =  document.evaluate(items.moment.exec.steps[i][j].xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
					if(node!=null){
						$(node).after("<div id='wm_insertado"+i+"' class='wm_insertedFinish' style='background-color: #DC143C; color: #ffffff; padding: 0 3px;font-size: 15px;'>"+div1+"</div>");
					}else{
						$('body').after('<div id="wm_insertado"'+i+' class="wm_insertedFinish" style="background-color: #DC143C; color: #ffffff; padding: 0 3px;font-size: 15px;">I CANNOT COMPLETE STEP '+i+' AND THE EXECUTION FAILS</div>');
					}
				}
			}
		}
	}else{//Si no se extraen elementos de otras web, para meter mensaje de error
		$('body').after('<div id="wm_insertado0" class="wm_insertedFinish" style="background-color: #DC143C; color: #ffffff; padding: 0 3px;font-size: 15px;">I CANNOT COMPLETE STEP AND THE EXECUTION FAILS</div>');
	}
}

/*function insertadoAnteriormenteHTML(html){
	var insertado = false;
	for(var i = 0; i < insertedHTML.length; i++){
		if(html == insertedHTML[i]){
			insertado = true;
		}
	}
	return insertado;
}*/

function getDataAumentacionFinal(datos){
chrome.storage.local.get(null,function(items){
	insertAllFailures(items);
	for (var i = 0; i < datos.length; i++){
		for (var j = 0; j < datos[i].length; j++){
			if(datos[i][j].paso.type == "guardarCopy"){
				executeGuardarCopy(datos[i][j], items);
			}
			if(datos[i][j].paso.type == "guardarCommonClick"){
				executeGuardarCommonClick(datos[i][j], items);
			}
			if(datos[i][j].paso.type == "guardarHTML"){
				//executeGuardarHTML(datos[i][j], items);
			}
			if(datos[i][j].paso.type == "guardarPaste"){
				executeGuardarPaste(datos[i][j], items);
			}
			if(datos[i][j].paso.type == "guardarkeys"){
				executeGuardarkeys(datos[i][j], items);
			}
		}
	}
	checkFinished();
});
}

function getDataAumentacionFinalisimo(datos, i){
chrome.storage.local.get(null,function(items){debugger;
	if(datos!=undefined){
		for (var k = 0; k < datos.length; k++){
				if(datos[k].type == "guardarCopy"){
					executeGuardarCopyFinalisimo(datos[k], items, i, k);
				}
				if(datos[k].type == "guardarCommonClick"){
					executeGuardarCommonClickFinalisimo(datos[k], items, i, k);
				}
				if(datos[k].type == "guardarHTML"){
					executeGuardarHTMLFinalisimo(datos[k], items, i, k);
				}
				if(datos[k].type == "guardarPaste"){
					executeGuardarPasteFinalisimo(datos[k], items, i, k);
				}
				if(datos[k].type == "guardarkeys"){
					executeGuardarkeysFinalisimo(datos[k], items, i, k);
				}
		}
	}
});
}

function executeGuardarCopy(data, items){
	//debugger;
	var doc = $(document)[0];
	var textNode = doc.evaluate(data.paso.data.xpath, doc, null, XPathResult.ANY_TYPE, null).iterateNext();
	if(textNode == null){
		chrome.extension.sendMessage({operation:"errorDetected", i:data.i, xpath:data.paso.data.xpath, url: location.origin});debugger;
	}try{
		var textoToSearchFull = textNode.outerText;
		var textoToSearchConcrete = textNode.outerText.substring(data.paso.data.start, data.paso.data.end);
		items.moment.exec.steps[data.i][data.j].data = textoToSearchFull;
		items.moment.exec.steps[data.i][data.j].type = "doneGuardarCopy"
		chrome.storage.local.set(items,function(){});
	}catch(err){}
}

function executeGuardarCommonClick(data, items){
	var nodeToClick =  document.evaluate(data.paso.data, document, null, XPathResult.ANY_TYPE, null).iterateNext();
	if(nodeToClick == null){
		chrome.extension.sendMessage({operation:"errorDetected", i:data.i, xpath:data.paso.data, url: location.origin});debugger;
	}try{
		nodeToClick.click();
		items.moment.exec.steps[data.i][data.j].type = "doneGuardarCommonClick";
		chrome.storage.local.set(items,function(){});
	}catch(err){}
}

function executeGuardarHTML(data, items){
	debugger;
}

function executeGuardarPaste(data, items){
	debugger;
	if(!is_url(data.paso.data.content)){
		var nodeToPaste =  document.evaluate(data.paso.data.xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
		if(nodeToPaste == null){
			chrome.extension.sendMessage({operation:"errorDetected", i:data.i, xpath:data.paso.data.xpath, url: location.origin});debugger;
		}try{
			nodeToPaste.value = getPreviousCopyValue(items.moment.exec.steps[data.i], data.j);
		}catch(err){}
	}
	items.moment.exec.steps[data.i][data.j].type = "doneGuardarPaste";
	chrome.storage.local.set(items,function(){
	});
}

function executeGuardarkeys(data, items){
	debugger;
	var nodeToPaste =  document.evaluate(data.paso.data.xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
	if(nodeToPaste == null){
		chrome.extension.sendMessage({operation:"errorDetected", i:data.i, xpath:data.paso.data.xpath, url: location.origin});debugger;
	}try{
		nodeToPaste.value = data.paso.data.nodeValue;
		items.moment.exec.steps[data.i][data.j].type = "doneGuardarkeys";
		chrome.storage.local.set(items,function(){});
	}catch(err){}
}


function executeGuardarCopyFinalisimo(data, items, i, j){
	debugger;
	var doc = $(document)[0];
	var textNode = doc.evaluate(data.data.xpath, doc, null, XPathResult.ANY_TYPE, null).iterateNext();
	if(textNode == null){
		chrome.extension.sendMessage({operation:"errorDetected", i:i, xpath:data.data.xpath, url: data.location.origin});debugger;
	}
		var textoToSearchFull = textNode.outerText;
		var textoToSearchConcrete = textNode.outerText.substring(data.data.start, data.data.end);
		items.moment.exec.steps[i][j].data = textoToSearchFull;
		items.moment.exec.steps[i][j].type = "doneGuardarCopy"
		chrome.storage.local.set(items,function(){});
}

function executeGuardarCommonClickFinalisimo(data, items, i, j){
	debugger;
	var nodeToClick =  document.evaluate(data.data, document, null, XPathResult.ANY_TYPE, null).iterateNext();
	if(nodeToClick == null){
		chrome.extension.sendMessage({operation:"errorDetected", i:i, xpath:data.data, url: data.location.origin});debugger;
	}
		nodeToClick.click();
		items.moment.exec.steps[i][j].type = "doneGuardarCommonClick";
		chrome.storage.local.set(items,function(){});
}

function executeGuardarHTMLFinalisimo(data, items, i, j){
	debugger;
	var nodoFinal = document.evaluate(data.data, document, null, XPathResult.ANY_TYPE, null).iterateNext();
	if(nodoFinal == null){
		chrome.extension.sendMessage({operation:"errorDetected", i:i, xpath:data.data, url: data.location.origin});debugger;
	}
	try{
		var html = flo.getStyledNode(nodoFinal);
	}catch(err){
		var html = null;
	}
	items.moment.exec.steps[i][j].type = "doneGuardarHTML";
	items.moment.exec.steps[i][j].html = html;
	chrome.storage.local.set(items,function(){
		chrome.extension.sendMessage({operation:"finalishedThisSteps", i:i, html:html});
	});
	
}

function executeGuardarPasteFinalisimo(data, items, i, j){
	debugger;
	if(!is_url(data.data.content)){
		var nodeToPaste =  document.evaluate(data.data.xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
		if(nodeToPaste == null){
			chrome.extension.sendMessage({operation:"errorDetected", i:i, xpath:data.data.xpath, url: data.location.origin});debugger;
		}
			nodeToPaste.value = getPreviousCopyValue(items.moment.exec.steps[i], j);
		
	}
	items.moment.exec.steps[i][j].type = "doneGuardarPaste";
	chrome.storage.local.set(items,function(){
	});
}

function executeGuardarkeysFinalisimo(data, items, i, j){
	debugger;
	var nodeToPaste =  document.evaluate(data.data.xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
	if(nodeToPaste == null){
		chrome.extension.sendMessage({operation:"errorDetected", i:i, xpath:data.data.xpath, url: data.location.origin});debugger;
	}
		nodeToPaste.value = data.data.nodeValue;
		items.moment.exec.steps[i][j].type = "doneGuardarPaste";
		chrome.storage.local.set(items,function(){});
}

function getPreviousCopyValue(pasos, j){
	var lastCopy = "";
	var k = j;
	while (k >= 0 && lastCopy == ""){
		if(pasos[k].type == "doneGuardarCopy"){
			lastCopy = pasos[k].data;
		}
		if(pasos[k].type == "guardarCopy"){
			// habria que esperar a que se haga
		}
		k--;
	}
	return lastCopy;
}


/*function startSearchAugmentation(){
    $(document).mouseover(function(e){
        var elem = $(e.target);
        var xInside=e.originalEvent.pageX-elem.offset().left;
        var middle=elem.outerWidth()/2;
        var actPosition=xInside<middle?"left":"right";
        $("#ws_divfterbefore").remove();
        $(elem).addClass("ws_nonSartu");
        if(actPosition=="left"){
            div1.find("div").text("B");
            div1.css('color', 'white');
            $("#ws_divfterbefore").remove();
			try{
				elem.before(div1);
			}catch(e){
				console.log("ERROR INSERT");
			}
            
        }else{//actPosition=="right"
            div1.find("div").text("A");
            div1.css('color', 'white');
            $("#ws_divfterbefore").remove();
			try{
				 elem.after(div1);
			}catch(e){
				console.log("ERROR INSERT");
			}
           
        }
        elem.css({cursor: 'url("http://downloads.totallyfreecursors.com/cursor_files/quesboxblueglit.ani"), url("http://downloads.totallyfreecursors.com/thumbnails/quesboxblueglit.gif"), auto'});
        e.preventDefault();
        e.stopPropagation();
    });
    $(document).mouseout(function(e){
        var elem = $(e.target);
        $(elem).removeClass("ws_nonSartu");
        $("#ws_divfterbefore").remove();
        elem.css({cursor:""});
        e.preventDefault();
        e.stopPropagation();
    });
    $(document).click(function(e){debugger;
        var location;
        var elem = $(e.target);
        $("#ws_divfterbefore").remove();
        $(elem).removeClass("ws_nonSartu");
        elem.css({cursor:""});
        $(document).off("mouseover");
        $(document).off("mouseout");
        $(document).off("click");
        e.preventDefault();
        e.stopPropagation();
        if(div1.text()=="A"){
            location="after";
        }else{
            location="before";
        }
        insertarDivParaURL(elem, location);
    });
}*/

function insertarDivParaURL(elem) {
 //   if(location=="before"){
 //       elem.before("<div class='ws_direccion'>INSERT URL: <br> <input id='ws_helbidea'> <button class='ws_urlButton'> DONE!</button> </div>");
 //   }else{
        elem.after("<div class='ws_direccion'>INSERT THE URL AND COPY YOUR SEARCH ELEMENT IF YOU HAVE: <br> <input id='ws_helbidea'> <br> <p class='wm_wrongurl'>* THIS IS NOT A VALID URL. PLEASE INSERT A CORRECT ONE.</p> <button class='ws_urlButton'> DONE!</button> </div>");
 //   }
//	$("#ws_divfterbefore").remove();
    $(".ws_urlButton").click(function(e){debugger;
        //CHEQUEAR QUE LA URL ES CORRECTA
        var helbidea = $("#ws_helbidea").val();
        if(is_url(helbidea)){
            //Aqui hay que tener mucho ojo xq para que se ejecute tiene que tener exactamente la misma URL en el background js
            //Si yo le he puesto http en y luego el se pone https, no se ejecuta ni el proceso de aumentacion ni la aumentacion en si
            $(".ws_urlButton").remove();
            $(".ws_urlButton").off("click");
			chrome.extension.sendMessage({type:"clickSearchButton", data:helbidea, location:location, operation:"saveStep", paralelizando:paralelizando});
            e.preventDefault();
            e.stopPropagation();
          //  copyElement(helbidea, elem);
        }else{
          $(".wm_wrongurl").css('display', 'block');
        }
    });
}

function is_url(str)
{
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function copyElement(helbidea, elem){
 //   if(location=="before"){
      //  elem.before("<div class='ws_direccion'>COPY YOUR SEARCH ELEMENT AND CLICK HERE!   <button class='ws_urlButton'> DONE!</button> </div>");
//		elem.before("<div class='ws_direccion'>COPY YOUR SEARCH ELEMENT</div>");
//    }else{
     //   elem.after("<div class='ws_direccion'>COPY YOUR SEARCH ELEMENT AND CLICK HERE!   <button class='ws_urlButton'> DONE!</button> </div>");
		elem.after("<div class='ws_direccion'>COPY YOUR SEARCH ELEMENT</div>");
 //   }
 //   $(window).bind("copy", function(ev){htmlCopy(ev, helbidea, elem, location);});
 }

function htmlCopy(ev, helbidea, elem, location){
    var sel=ev.currentTarget.getSelection();
    var texto = sel.getRangeAt(0).commonAncestorContainer.textContent.substring(sel.getRangeAt(0).startOffset, sel.getRangeAt(0).endOffset);
    //QUEDARIA GUARDAR CUANDO LO SELECCIONADO NO ES EL NODO COMPLETO
    var xpath = minimizeXPath(generateXPath(ev.target,document,null,{showId:true}),document).join("");debugger;
    var xpathLocation = minimizeXPath(generateXPath(elem[0],document,null,{showId:true}),document).join("");
    if(sel.getRangeAt(0).startOffset==0 && sel.getRangeAt(0).endOffset==sel.getRangeAt(0).commonAncestorContainer.length){
        var copy = {start: null, end: null, startText: null, endText:null, xpath:xpath, xpathLocation:xpathLocation, location:location};
    }else{
        var copy = {start: sel.getRangeAt(0).startOffset, end: sel.getRangeAt(0).endOffset, startText: 0, endText:0, xpath:xpath, xpathLocation:xpathLocation, location:location};
    }

    $(".ws_urlButton").click(function(e){debugger;
        e.preventDefault();
        e.stopPropagation();
        $(".ws_direccion").remove();
        $(".ws_urlButton").off("click");
        chrome.extension.sendMessage({type:"guardarPrimero", copy:copy, helbidea:helbidea, augmentedWebsite:document.URL, dominio:document.domain});
    });
}

//RESTO DE FASES

$( document ).ready(function() {
	chrome.storage.local.get(null, function(items){
		var encontradoParalelizacion = false;
		if(Object.keys(items).length!=0){
			if(items.developing!=undefined || items.developing!=null){
				paralelizando = items.developing.paralelizando;
				cargarDesarrollo();
			}else{
				//COMPROBAR SI HAY QUE AUMENTAR
			//	if(items.moment==undefined || items.moment==null){
					for (var i = 0; i < items.executing.length; i++) {
						if(items.executing[i].dominio.host == location.host){
							cargarAumentacion(items.executing[i]);
						}
					}
			//	}
			}
			if(items.moment != undefined || items.moment != null){
								for(var i = 0; i < items.moment.exec.steps.length; i++){
									for (var j = 0; j < items.moment.exec.steps[i].length; j++){
										if(items.moment.exec.steps[i][j].type == "clickSearchButton" && items.moment.exec.steps[i][j].data.includes(location.host)){//items.moment.exec.steps[i][j].data == location.href
											chrome.extension.sendMessage({operation:"getTabId", i:i, j:j, url:location.host});
											encontradoParalelizacion = true;
											console.log(j);
										}/*else if(items.moment.exec.steps[i][j].type == "clickSearchButton"){
											chrome.extension.sendMessage({operation:"getTabId", i:-1, j:-1, url:null});
											encontradoParalelizacion = true;
										}*/
									}
								}
								if(!encontradoParalelizacion){
									chrome.extension.sendMessage({operation:"getTabId", i:-2, j:-1, url:null});
								}
			}
		}
	});
});

function estaTab(tab, items){debugger;
	var encontrado = false;
	for (var i = 0; i < items.moment.tabs.length; i++){
		if(tab.id == items.moment.tabs[i].tabId){
			encontrado = true;
		}
	}
	return encontrado;
}

/*function executarCadaPestana (moment){
	for (var i = 0; i < moment.exec.steps.length; i++){
		for (var j = 0; j < moment.exec.steps[i].length; j++){
			if(moment.exec.steps[i][j].type == "clickSearchButton"){
				if(moment.exec.steps[i][j].data == location.href){
					chrome.extension.sendMessage({i:i, j:j, location:location, operation:"getTabId"});
				}
			}
		}
	}
}*/

function cargarAumentacion(exec){
	chrome.extension.sendMessage({operation:"aumentacionFinal", exec:exec, documento:document, location:location});
}

var paralelizando = false;
function cargarDesarrollo(){
	 $(document).mouseover(function(e){
        var elem = $(e.target);
		if(document.getElementsByClassName("ws_direccion")[0] != undefined){
			if(!document.getElementsByClassName("ws_direccion")[0].contains(e.target)){
			$(elem).addClass("ws_nonSartu");
			e.preventDefault();
			e.stopPropagation();
			}
		}else if(document.getElementsByClassName("ws_paralelos")[0] != undefined){
			if(!document.getElementsByClassName("ws_paralelos")[0].contains(e.target)){
				$(elem).addClass("ws_nonSartu");
				e.preventDefault();
				e.stopPropagation();
			}
		}else{
			$(elem).addClass("ws_nonSartu");
			e.preventDefault();
			e.stopPropagation();
		}
    });
    $(document).mouseout(function(e){
        var elem = $(e.target);
        $(elem).removeClass("ws_nonSartu");
        elem.css({cursor:""});
        e.preventDefault();
        e.stopPropagation();
    });
	var clicks = 0;
	var timer = null;
	
    $(document).click(function(e){debugger;
		if(e.target.id != "wm_btn"){
		clicks++;
		var elem = $(e.target);
		$(elem).removeClass("ws_nonSartu");
		if(clicks===1){
			try{
				if(window.getSelection().getRangeAt(0).startOffset == window.getSelection().getRangeAt(0).endOffset){ //SI NO HAY NADA SELECCIONADO
					var xpath = minimizeXPath(generateXPath(e.target,document,null,{showId:true}),document).join("");
					if(xpath!=".//input[@id='ws_helbidea']"){
						chrome.extension.sendMessage({type:"guardarCommonClick", data:xpath, location:location, operation:"saveStep"});
					}
				}
			}catch(err){
				var xpath = minimizeXPath(generateXPath(e.target,document,null,{showId:true}),document).join("");
				if(xpath!=".//input[@id='ws_helbidea']"){
					chrome.extension.sendMessage({type:"guardarCommonClick", data:xpath, location:location, operation:"saveStep"});
				}
			}
			timer = setTimeout(function(){
				$(elem).removeClass("ws_nonSartu");
				elem.css({cursor:""});
				   //     $(document).off("mouseover");
				   //     $(document).off("mouseout");
				   //     $(document).off("click");
				   
				   clicks=0;
				 //       e.preventDefault();
				 //       e.stopPropagation();
				
			}, 700);
		}else{
			clearTimeout(timer);
		//	$("#ws_divfterbefore").remove();
			if(paralelizando == false){
				paralelizando = true;
				insertarDivParaURL(elem);
				var xpath = minimizeXPath(generateXPath(e.target,document,null,{showId:true}),document).join("")
				chrome.extension.sendMessage({operation:"paralelizando", paralelizando:true, xpath:xpath, location:location});
			}else{
				//COGER ESE NODO E INSERTARLO DONDE SE DEBERIA
				paralelizando = false;
				var elementClick = e.target;debugger;
				var xpathLastStep = minimizeXPath(generateXPath(elementClick, document, null, {showId: true}), document).join("");
				var html = flo.getStyledNode(elementClick);
				chrome.extension.sendMessage({operation:"paralelizando", paralelizando:false, html:html});debugger;
				chrome.extension.sendMessage({type:"guardarHTML", data:xpathLastStep, location:location, operation:"saveStep"});
			}
			
			clicks = 0;
		}
		}
	});

	$(document).on('copy', function(e){debugger;
		var elem = $(e.target);
		$(elem).removeClass("ws_nonSartu");
		var sel=e.currentTarget.getSelection();
		try{
			var texto = sel.getRangeAt(0).commonAncestorContainer.textContent.substring(sel.getRangeAt(0).startOffset, sel.getRangeAt(0).endOffset);
		}catch(ex){
			var texto = "";
		}
		var xpath = minimizeXPath(generateXPath(e.target,document,null,{showId:true}),document).join("");debugger;
		if(texto!=""){
			if(sel.getRangeAt(0).startOffset==0 && sel.getRangeAt(0).endOffset==sel.getRangeAt(0).commonAncestorContainer.length){
				var copy = {start: null, end: null, startText: null, endText:null, xpath:xpath, location:location};
			}else{
				var copy = {start: sel.getRangeAt(0).startOffset, end: sel.getRangeAt(0).endOffset, startText: 0, endText:0, xpath:xpath, location:location};
			}
			chrome.extension.sendMessage({type:"guardarCopy", data:copy, location:location, operation:"saveStep"});
		}
	//	 e.preventDefault();
    //    e.stopPropagation();
	});
	
	$(document).on('paste', function(e){
		setTimeout(function(){
		debugger;
			var target = e.target;
			$(target).removeClass("ws_nonSartu");
			var content = $(e.target).val();
			var xpath = minimizeXPath(generateXPath(e.target,document,null,{showId:true}),document).join("");debugger;
			var paste = {xpath:xpath, target:target, content:content};
			chrome.extension.sendMessage({type:"guardarPaste", data:paste, location:location, operation:"saveStep"});
	//		 e.preventDefault();
	//        e.stopPropagation();
		}, 0);
	});
	
	$(document).on('keypress', function(e){
		debugger;
		var target = e.target;
		var xpath = minimizeXPath(generateXPath(e.target,document,null,{showId:true}),document).join("");debugger;
		var node =  document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
		var key = {key:e.key, keyCode:e.keyCode, xpath:xpath, nodeValue:node.value+""+e.key};
		chrome.extension.sendMessage({type:"guardarkeys", data:key, location:location, operation:"saveStep"});
//		 e.preventDefault();
 //       e.stopPropagation();
	});
}