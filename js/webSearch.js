var info;
var div1=$("<div id='ws_divfterbefore' style='position: relative !important; height:0px !important;width:0px !important; z-index:1000000 !important;'><div style='height:30px !important;width:30px !important;background:blue !important;display:block !important; position: absolute;'></div></div>");
//var htmlBackground = '<div id="ws_textBackground">A</div>';
startSearchAugmentation();

function startSearchAugmentation(){
    $(document).mouseover(function(e){
        var elem = $(e.target);
        var xInside=e.originalEvent.pageX-elem.offset().left;
        var middle=elem.outerWidth()/2;
        var actPosition=xInside<middle?"left":"right";
        $("#ws_divfterbefore").remove();
        //     $("#ws_textBackground").remove();
        $(elem).addClass("ws_nonSartu");
        if(actPosition=="left"){
      //      var test=htmlBackground.substring(0,28)+"B"+htmlBackground.substring(29,35);
      //      $(elem).before(test);
            div1.find("div").text("B");
            div1.css('color', 'white');
            $("#ws_divfterbefore").remove();
            elem.before(div1);
        }else{//actPosition=="right"
      //      var test=htmlBackground.substring(0,28)+"A"+htmlBackground.substring(29,35);
      //      $(elem).after(test);
            div1.find("div").text("A");
            div1.css('color', 'white');
            $("#ws_divfterbefore").remove();
            elem.after(div1);
        }
        //$(elem).append(test);
        elem.css({cursor: 'url("http://downloads.totallyfreecursors.com/cursor_files/quesboxblueglit.ani"), url("http://downloads.totallyfreecursors.com/thumbnails/quesboxblueglit.gif"), auto'});
        e.preventDefault();
        e.stopPropagation();
    });
    $(document).mouseout(function(e){
        var elem = $(e.target);
        $(elem).removeClass("ws_nonSartu");
        $("#ws_divfterbefore").remove();
      //  $("#ws_textBackground").remove();
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
}

function insertarDivParaURL(elem, location) {
    if(location=="before"){
        elem.before("<div class='ws_direccion'>INSERT URL: <br> <input id='ws_helbidea'> <button class='ws_urlButton'> DONE!</button> </div>");
    }else{
        elem.after("<div class='ws_direccion'>INSERT URL: <br> <input id='ws_helbidea'> <button class='ws_urlButton'> DONE!</button> </div>");
    }
    $(".ws_urlButton").click(function(e){debugger;
        //CHEQUEAR QUE LA URL ES CORRECTA
        var helbidea = $("#ws_helbidea").val();
        if(is_url(helbidea)){
            //Aqui hay que tener mucho ojo xq para que se ejecute tiene que tener exactamente la misma URL en el background js
            //Si yo le he puesto http en y luego el se pone https, no se ejecuta ni el proceso de aumentacion ni la aumentacion en si
     //       helbidea = reconstruirCorrectamenteUrl(helbidea);
            $(".ws_direccion").remove();
            $(".ws_urlButton").off("click");
            e.preventDefault();
            e.stopPropagation();
            copyElement(helbidea, elem, location);
        }else{
          alert("THIS IS NOT A VALID URL. PLEASE INSERT A CORRECT ONE");
        }
    });
}

function reconstruirCorrectamenteUrl(helbidea){
    var finalHel;
    if(helbidea.substring(0,11)=="https://www"){
        finalHel=helbidea;
    }else if(helbidea.substring(0,11)=="http://www"){
        finalHel=helbidea;
    }else if(helbidea.substring(0,3)=="www"){
        finalHel="http://"+helbidea;
    }else{
        finalHel="http://www."+helbidea;
    }
    return finalHel;
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

function copyElement(helbidea, elem, location){
    if(location=="before"){
        elem.before("<div class='ws_direccion'>COPY YOUR SEARCH ELEMENT AND CLICK HERE!   <button class='ws_urlButton'> DONE!</button> </div>");
    }else{
        elem.after("<div class='ws_direccion'>COPY YOUR SEARCH ELEMENT AND CLICK HERE!   <button class='ws_urlButton'> DONE!</button> </div>");
    }
    $(window).bind("copy", function(ev){htmlCopy(ev, helbidea, elem, location);});
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
  //  info={copy:copy, helbidea:helbidea};

    $(".ws_urlButton").click(function(e){debugger;
        e.preventDefault();
        e.stopPropagation();
        $(".ws_direccion").remove();
        $(".ws_urlButton").off("click");
 //       insertarIframe(helbidea, elem);
        chrome.extension.sendMessage({operation:"guardarCopy", copy:copy, helbidea:helbidea, augmentedWebsite:document.URL, dominio:document.domain});
//        localStorage.setItem("ws_copy", JSON.stringify(info));
 //       setTimeout(function(){ window.location.replace(helbidea); }, 100);
    });
}


//EN VEZ DE IFRAME RECARGAR LA WEB DE FILMAFFINITY E IR GUARDANDO TODO