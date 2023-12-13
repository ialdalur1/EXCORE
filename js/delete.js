start();

function start(){
    chrome.extension.sendMessage({operation:"deleteProject", helbidea:document.URL});
}