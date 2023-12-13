
start();

function start(){
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