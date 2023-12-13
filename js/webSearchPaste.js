start();

function start(){
    if($(".ws_pasteMessage").length==0){
        var texto = "<div class='ws_pasteMessage'> PASTE PREVIOUSLY COPIED EXPRESSION ON THE SEARCH INPUT AND CLICK ON THE SEARCH BUTTON</div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        $(window).bind("paste", function(ev){htmlPaste(ev);});
    }
}

function htmlPaste(ev){debugger;
    var input = ev.target;
    var xpathPaste=minimizeXPath(generateXPath(input,document,null,{showId:true}),document).join("");
    $(document).click(function(e){debugger;
     //   e.preventDefault();
     //   e.stopPropagation();
        var searchButton = e.target;
        var xpathButton=minimizeXPath(generateXPath(searchButton,document,null,{showId:true}),document).join("");
        chrome.extension.sendMessage({operation:"guardarPaste", xpathPaste:xpathPaste, xpathButton:xpathButton});
    });
    $(document).keypress(function(e){debugger;
     //   e.preventDefault();
     //   e.stopPropagation();
        if(e.keyCode==13) {debugger;
            var searchButton = e.target;
            var xpathButton = minimizeXPath(generateXPath(searchButton, document, null, {showId: true}), document).join("");
            chrome.extension.sendMessage({operation: "guardarPaste", xpathPaste: xpathPaste, xpathButton: xpathButton});
        }
    });
}