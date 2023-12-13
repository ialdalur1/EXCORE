start();

function start(){
    if($(".ws_augmentingMark").length==0) {
        var texto = "<div class='ws_augmentingMark'></div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        chrome.storage.local.get(null, function (items) {debugger;
            var aug = sacarAugmentationInfo(items);
            var doc = $(document)[0];
            var textNode = doc.evaluate(aug.copy.xpath, doc, null, XPathResult.ANY_TYPE, null).iterateNext();
            var textoToSearch = textNode.outerText;
            var info = {textoToSearch:textoToSearch, aug:aug};
            items.current = info;
            chrome.storage.local.set(items, function () {
                chrome.extension.sendMessage({operation:"augmenationPaste", textoToSearch:aug.helbidea});
            });

   //         loadPasteWeb(textoToSearch, items);
   //         loadIframe(textoToSearch, items);
        });
    }
}

function sacarAugmentationInfo(items){
    var hayAumentacion = false;
    var devolver;
    var i=0;
    while(items.augmentation[i]!=undefined && !hayAumentacion){
        if(items.augmentation[i].augmentedWebsite != undefined && (document.URL == items.augmentation[i].augmentedWebsite || document.domain==items.augmentation[i].dominio)){
            hayAumentacion=true;
            devolver = items.augmentation[i];
        }
        i++;
    }
    return devolver;
}

/*function loadPasteWeb(textoToSearch, items){
    $.ajax({ //Load URL
        type: "GET",
        url: items.helbidea,
        success: function(data,status,xhr) {
            var a = data;
            var b = status;
            var c = xhr;
            var doc=document.implementation.createHTMLDocument();
            doc.documentElement.innerHTML=data;
            var base=doc.createElement("base");
            var loc=xhr.getResponseHeader("Location")!=null?xhr.getResponseHeader("Location"):items.helbidea;
            base.href=loc; //Or Location
            doc.documentElement.firstElementChild.appendChild(base);
            var inputNode = doc.evaluate(items.xpathPaste,doc,null, XPathResult.ANY_TYPE, null).iterateNext();
            var searchButton = doc.evaluate(items.xpathButton,doc,null, XPathResult.ANY_TYPE, null).iterateNext();
            inputNode.value = textoToSearch;debugger;
            var botonBuscar = formCercano(searchButton);
            if(botonBuscar!=null){
                searchButton.parentNode.parentNode.click();
                botonBuscar.submit();
                     }else{
                alert("I'M SORRY BUT ERROR");
            }

            doc.addEventListener("submit", function(e){
                debugger;
            })
           setTimeout(function(){
                //do what you need here
                 clickAction(doc, items);
            }, 20000);
            doc.getElementsByTagName("FORM")[0].addEventListener('submit', function(e){
                debugger;
            });
        }
    })
}*/

/*function formCercano(searchButton){
    var node=searchButton;
    while(node.tagName!="FORM" && node.tagName!="BODY"){
        node=node.parentNode;
    }
    if(node.tagName=="FORM"){
        return node;
    }else{
        return null;
    }
}

function clickAction(doc, items){
    doc.addEventListener("load", function(e){
        debugger;
    })
    $(doc).on("load", function(e){
        debugger;
    });
    console.log("click action");
    console.log(doc);
}*/

/*function loadIframe(textoToSearch, items){
    var iframe=$("<iframe>").attr({src:items.helbidea,scrolling:"no"});
    iframe.css({width:0,height:0,top:0,left:0,border:"0px",overflow:"hidden"});
    // iframe[0].style.setProperty("position","relative","important");
    //  res.append(iframe);
    $('body').append(iframe);
    iframe[0].addEventListener("load",function(e) {
        try {
            var inputNode = doc.evaluate(items.xpathPaste,doc,null, XPathResult.ANY_TYPE, null).iterateNext();
            var searchButton = doc.evaluate(items.xpathButton,doc,null, XPathResult.ANY_TYPE, null).iterateNext();
        } catch (e) {
            var inputNode = null;
            var searchButton = null;
        }
        inputNode.value = textoToSearch;debugger;
    });
}*/