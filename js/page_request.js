let httpRequest="";

let loading = "<center><img class='loading' src='images/load.gif'></center>";

function page_request(url, destino){

    document.getElementById(destino).innerHTML = loading;

    if(window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        try{
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");        
        }
        catch(e){
            try{
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }           
            catch(e){
                alert("Impossível instanciar o objeto XMLHttpRequest para esse navegador/versão");
            }
        }
    }

    if(!httpRequest){
        alert("Erro ao tentar criar uma instância do objeto XMLHttpRequest");
        return false;
    }

    httpRequest.onreadystatechange = status_request;
    
    httpRequest.open("GET", url);
    httpRequest.send();
}

function status_request(){
    if(httpRequest.readyState == 4){
        if(httpRequest.status == 200){
           document.getElementById('content').innerHTML = httpRequest.responseText;
        }
    }
}