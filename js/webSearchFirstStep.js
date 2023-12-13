start();

function start(){
    if($(".ws_pasteMessage").length==0) {
        var texto = "<div class='ws_pasteMessage'> CLICK ON THE DESIRED ELEMENT</div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        $(document).click(function (e) {
            var elementClick = e.target;
            var xpathFirstStep = minimizeXPath(generateXPath(elementClick, document, null, {showId: true}), document).join("");
            chrome.extension.sendMessage({operation: "guardarFirstStep",xpathFirstStep :xpathFirstStep});
        });
    }
}