let resposta=[];
let area="";
let tool="";
let nome="";
let email="";

function submit(nquest, resp){

    let destino = 'content';

    let url;

    if(nquest==2){
        if(resp=='a'){
            add_answers(nquest,resp);
            return page_request('page2-1.html', destino)
        }
    }
    if(nquest==2.1){
        url='page3.html';
        add_answers(nquest,resp);
        return page_request(url, destino);
    }
    else{
        add_answers(nquest,resp);
        url='page'+(nquest+1)+'.html';
        return page_request(url, destino);
    }
}

function addArea(){
    area = document.getElementById('area').value;
    submit(3,area);
}

function addTool(){
    tool = document.getElementById('tool').value;
    submit(6,tool);
}
  

/**Adicionar elementos das listas**/
function add_answers(nquest, resp){
    
    resposta.push({nquest,resp});
}

function post() {

    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;

    let data = { nome: nome, email: email, resposta};

    if(data.nome!="" && data.email!=""){
      firebase.firestore().collection('leads').add(data).then(docRef =>{
        console.log(docRef.id);
        page_request('page8.html', 'content'); 
     })
    }
}