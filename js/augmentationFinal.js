start();

function start(){
    if($(".ws_augmentingMark").length==1) {
        var texto = "<div class='ws_augmentingMark'></div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        chrome.storage.local.get(null, function (items) {
            debugger;
            var elem = document.evaluate(items.current.aug.copy.xpathLocation, document, null, XPathResult.ANY_TYPE, null).iterateNext();
            if(items.current.aug.copy.location=="before"){
                $(elem).before(items.current.html);
            }else{
                $(elem).after(items.current.html);
            }
            var copia = {end:undefined, endText:undefined, start:undefined, startText:undefined, xpath:undefined, location:undefined, xpathLocation:undefined};
            var aug = {augmentedWebsite:undefined, helbidea:undefined, xpathButton:undefined, xpathFinalElem:undefined, xpathFirstStep:undefined, xpathPaste:undefined, dominio:undefined, copy:copia };
            var current = {html:undefined, lastStep:undefined, textoToSearch:undefined, aug:aug, tab:undefined};
            items = {copy: items.copy, augmentation: items.augmentation, current:current};
            chrome.storage.local.set(items, function () {
            });
        });
    }
}