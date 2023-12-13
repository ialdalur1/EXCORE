start();

function start(){
    if($(".ws_augmentingMark").length==0) {
        var texto = "<div class='ws_augmentingMark'></div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        chrome.storage.local.get(null, function (items) {
            debugger;
            var element = document.evaluate(items.current.aug.xpathFirstStep, document, null, XPathResult.ANY_TYPE, null).iterateNext();
            console.log(element);
            items.current.lastStep = true;
            chrome.storage.local.set(items, function () {
                element.click();
            });
        });
    }
}
