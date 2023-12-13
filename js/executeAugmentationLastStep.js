start();

function start(){
    if($(".ws_augmentingMark").length==0) {
        var texto = "<div class='ws_augmentingMark'></div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        chrome.storage.local.get(null, function (items) {
            var element =  document.evaluate(items.current.aug.xpathFinalElem, document, null, XPathResult.ANY_TYPE, null).iterateNext();
         //   var element = document.evaluate("//*[@id=\"soldByThirdParty\"]/span[1]", document, null, XPathResult.ANY_TYPE, null).iterateNext();
            var html = flo.getStyledNode(element);
            items.current.html = html;
            chrome.storage.local.set(items, function () {
                chrome.extension.sendMessage({operation: "augmenationHTML", url: items.current.aug.augmentedWebsite});
            });
        });
    }
}