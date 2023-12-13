start();

function start(){
    if($(".ws_pasteMessage").length==0) {
        var texto = "<div class='ws_pasteMessage'>SELECT THE ELEMENT YOU WANT TO SEE ALWAYS</div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        $(document).mouseover(function(e){
            var elem = $(e.target);
            $(elem).addClass("ws_nonSartu");
            elem.css({cursor: 'url("http://downloads.totallyfreecursors.com/cursor_files/quesboxblueglit.ani"), url("http://downloads.totallyfreecursors.com/thumbnails/quesboxblueglit.gif"), auto'});
            e.preventDefault();
            e.stopPropagation();
        });
        $(document).mouseout(function(e){
            var elem = $(e.target);
            $(elem).removeClass("ws_nonSartu");
            elem.css({cursor:""});
            e.preventDefault();
            e.stopPropagation();
        });
        $(document).click(function(e){debugger;
            var elem = $(e.target);
            $(elem).removeClass("ws_nonSartu");
            elem.css({cursor:""});
            $(document).off("mouseover");
            $(document).off("mouseout");
            $(document).off("click");
            e.preventDefault();
            e.stopPropagation();
            var elementClick = e.target;
            var xpathLastStep = minimizeXPath(generateXPath(elementClick, document, null, {showId: true}), document).join("");
            chrome.extension.sendMessage({operation: "guardarLastStep",xpathLastStep :xpathLastStep});
        });
    }
}