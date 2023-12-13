start();

function start(){
    if($(".ws_augmentingMark").length==0) {
        var texto = "<div class='ws_augmentingMark'></div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        chrome.storage.local.get(null, function (items) {debugger;
            var searchBar =  document.evaluate(items.current.aug.xpathPaste, document, null, XPathResult.ANY_TYPE, null).iterateNext();
            var searchButton =  document.evaluate(items.current.aug.xpathButton, document, null, XPathResult.ANY_TYPE, null).iterateNext();
            searchBar.value = items.current.textoToSearch;
            searchButton.click();
        });
    }
}