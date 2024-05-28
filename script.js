var data= {
    chatinit:{
        title: ["Olá! Bem-vindo ao nosso chat para tirar as suas dúvidas!' &#128075;</span>","Como posso te ajudar hoje?"],
        options: ["Modelos", "Marcas", "PreAnalise", "Contato"]
    },
    modelos: {
        title:["Por favor, escolha um modelo de veículo"],
        options:['Sedan', 'SUVs', 'Hatches', 'Picapes', 'Outros'],
        url : {
            
        }
    },
    
    marcas: {
        title:["Por favor, escolha uma marca de veículo"],
        options:["BMW", "Ford", "Audi", "Mercedes", "Volkswagen"],
        url : {
           
        }
    },
    preanalise: {
        title: ["Por favor, acessa o nosso site para fornecer as seguintes informações para uma pré-análise:"],
        options: ["RG", "CPF", "Data de Nascimento", "Nome Completo", "Endereço", "Renda", "Holerite", "Telefone para Contato", "É habilitado?", "Tem conta aberta?", "Tem entrada?"],
        url : {

        }
    },
    contato: {
        title:["Entre em contato conosco para mais informações"],
        options:['Telefone', 'E-mail', 'Visita à concessionária'],
        url : {
            more: ["https://jrm-veiculos.vercel.app/"],
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    sedan: {
        title:["Obrigado pela a sua resposta!, Temos algumas opções do modelo a seguir:"],
        options:['Virtus','Passat','Jetta','Ford Fusion'],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    suvs: {
        title:["Obrigado pela a sua resposta!, Temos algumas opções do modelo a seguir:"],
        options:['Ford Escape','Q3','Atlas','X3'],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    hatches: {
        title:["Obrigado pela a sua resposta!, Temos algumas opções do modelo a seguir:"],
        options:['Golf','Polo','A1','Ford Fiesta'],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    picapes: {
        title:["Obrigado pela a sua resposta!, Temos algumas opções do modelo a seguir:"],
        options:['F-150','Classe X','Ford Ranger','Amarok'],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    bmw: {
        title:["Veja alguns carros que temos da marca BMW:"],
        options: ["X4","X7","iX","i7"],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    ford: {
        title:["Veja alguns carros que temos da marca Ford:"],
        options: ["Ford Ka","Focus","Ranger","Territory"],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    audi: {
        title:["Veja alguns carros que temos da marca Audi:"],
        options: ["A3","Q3","Q5","e-tron GT"],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    mercedes: {
        title:["Veja alguns carros que temos da marca BMW:"],
        options: ["GLC","EQE","EQC","Classe A"],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
    volkswagen: {
        title:["Veja alguns carros que temos da marca BMW:"],
        options: ["Gol","Voyage","Fox","Jetta"],
        url : {
            more:"https://jrm-veiculos.vercel.app/s",
            link:["https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/","https://jrm-veiculos.vercel.app/"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='COMEÇAR CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='FECHAR CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'Veja mais</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}