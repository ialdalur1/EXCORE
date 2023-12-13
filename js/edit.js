
insertMenu();
checkAugmentation();

function checkAugmentation(){
    var info = JSON.parse(localStorage.getItem("wa_personalization"));
    if(info!=null){
        var xpaths = info.xpaths;
        if(document.URL == info.url){
            for (var i=0; i<xpaths.length; i++){
                var node = document.evaluate(xpaths[i].xpath, document.body, null, XPathResult.ANY_TYPE, null).iterateNext();
                //node.style.display = "none";
            //    node.className += " wa_deployRemoved";
                node.classList.add("wa_deployRemoved");
            }
        }
    }
    personalizationMenuWebAugmented(info);
}
function insertMenu(){
    /*var texto = "<div class='title'> Responsive Breadcrumbs </div> <div class='breadcrumbs'> <div class='inner'> <ul class='cf'>
        <li> <a> <span>1</span> <span>Home</span> </a> </li> <li> <a class='active'> <span>2</span> <span>Service</span> </a> </li> <li> <a> <span>3</span> <span>Menu</span>
        </a> </li> <li> <a> <span>4</span> <span>Checkout</span> </a> </li> <li> <a> <span>5</span>
        <span>Success</span> </a> </li> </ul> </div> </div>";*/
    var texto = "<div id='cssmenu'>"+
        "<ul>"+
        "<li id='wa_menuEdit'><a href='#'><span>Edit</span></a></li>"+
    "<li id='wa_menuSave'><a href='#'><span>Save</span></a></li>"+
    "<li id='wa_menuRemove'><a href='#'><span>Remove</span></a></li>"+
    "<li id='wa_menuShow'><a href='#'><span>Show all</span></a></li>"+
        "<li id='wa_menuHide' class='last'><a href='#'><span>Hide</span></a></li>"+
    "</ul>"+
    "</div>";
        document.body.innerHTML = texto + document.body.innerHTML;
        document.getElementById("wa_menuEdit").addEventListener("click", editAugmentation);
    document.getElementById("wa_menuSave").addEventListener("click",saveAugmentation);
    document.getElementById("wa_menuRemove").addEventListener("click",removeAugmentation);
    document.getElementById("wa_menuShow").addEventListener("click",showElements);
    document.getElementById("wa_menuHide").addEventListener("click",hideElements);
}

function editAugmentation(){
    ponerBlockMio();
    personalizationMenuEditing();
    visibizarOcultos();
    var numBlock = 0;
    var bloques = document.getElementsByClassName("block");
    for(var i=0; i<bloques.length; i++){
        var para = document.createElement("a");
        //para.setAttribute("id", "boxclose");
        para.setAttribute("class", "boxclose");
        para.setAttribute("wa_number", "wa_"+numBlock);
        bloques[i].insertBefore(para, bloques[i].firstElementChild);
        numBlock++;
    }
    for( var j=0; j<document.getElementsByClassName("boxclose").length; j++){
        document.getElementsByClassName("boxclose")[j].addEventListener("click", removeElement);
    }
}

function ponerBlockMio(){
    var elems = document.getElementsByClassName("block");
    for(var i=0; i<elems.length; i++){
        elems[i].classList.add("blockMio");
    }
}

function visibizarOcultos(){
    var elements = document.getElementsByClassName("wa_deployRemoved");
    for(var i=0; i<elements.length; i){
        elements[i].classList.add("wa_removed");
        elements[i].classList.remove("wa_deployRemoved");
    }
}

function removeElement(e){
    var target = e.target || e.srcElement;
    if(target.parentNode.classList.contains("wa_removed")){
        target.parentNode.classList.add("blockMio");
        target.parentNode.classList.remove("wa_removed");
     //   target.parentNode.setAttribute("class", "block");
    }else{
        target.parentNode.classList.remove("blockMio");
        target.parentNode.classList.add("wa_removed");
    //    target.parentNode.setAttribute("class", "wa_removed");
    }
}

function saveAugmentation(){
    var xpathList = new Array();
    var elemsSaved;
    deletedElems = document.getElementsByClassName("wa_removed");
    for(var i=0; i<deletedElems.length; i++){
        var xpath=minimizeXPath(generateXPath(deletedElems[i],document,null,{showId:true}),document).join("");
        xpathList.push({xpath:xpath});
    }
    elemsSaved = {url:document.URL, xpaths:xpathList};
    localStorage.setItem("wa_personalization", JSON.stringify(elemsSaved));
    location.reload();
}

function removeAugmentation(){
   // var info = JSON.parse(localStorage.getItem("wa_personalization"));debugger;
    localStorage.removeItem("wa_personalization");
    location.reload();
}


function showElements(){
    personalizationMenuShowingAll();
    var elements = document.getElementsByClassName("wa_deployRemoved");
    for(var i=0; i<elements.length; i){
        elements[i].classList.add("wa_visibleHidden");
        elements[i].classList.remove("wa_deployRemoved");
    }
}

function hideElements(){
    personalizationMenuHidding();
    var elements = document.getElementsByClassName("wa_visibleHidden");
    for(var i=0; i<elements.length; i){
        elements[i].classList.add("wa_deployRemoved");
        elements[i].classList.remove("wa_visibleHidden");
    }
}

function personalizationMenuWebAugmented(info){
    document.getElementById("wa_menuEdit").classList.remove("wa_menuDisable");
    document.getElementById("wa_menuSave").classList.add("wa_menuDisable");
    if(info!=null){
        document.getElementById("wa_menuRemove").classList.remove("wa_menuDisable");
        document.getElementById("wa_menuShow").classList.remove("wa_menuDisable");
    }else{
        document.getElementById("wa_menuRemove").classList.add("wa_menuDisable");
        document.getElementById("wa_menuShow").classList.add("wa_menuDisable");
    }
    document.getElementById("wa_menuHide").classList.add("wa_menuDisable");
}

function personalizationMenuEditing(){
    var info = JSON.parse(localStorage.getItem("wa_personalization"));
    document.getElementById("wa_menuEdit").classList.add("wa_menuDisable");
    document.getElementById("wa_menuSave").classList.remove("wa_menuDisable");
    if(info!=null){
        document.getElementById("wa_menuRemove").classList.remove("wa_menuDisable");
    }else{
        document.getElementById("wa_menuRemove").classList.add("wa_menuDisable");
    }
    document.getElementById("wa_menuShow").classList.add("wa_menuDisable");
    document.getElementById("wa_menuHide").classList.add("wa_menuDisable");
}

function personalizationMenuShowingAll(){
    document.getElementById("wa_menuEdit").classList.add("wa_menuDisable");
    document.getElementById("wa_menuSave").classList.add("wa_menuDisable");
    document.getElementById("wa_menuRemove").classList.add("wa_menuDisable");
    document.getElementById("wa_menuShow").classList.add("wa_menuDisable");
    document.getElementById("wa_menuHide").classList.remove("wa_menuDisable");
}

function personalizationMenuHidding(){
    document.getElementById("wa_menuEdit").classList.remove("wa_menuDisable");
    document.getElementById("wa_menuSave").classList.add("wa_menuDisable");
    document.getElementById("wa_menuRemove").classList.remove("wa_menuDisable");
    document.getElementById("wa_menuShow").classList.remove("wa_menuDisable");
    document.getElementById("wa_menuHide").classList.add("wa_menuDisable");
}