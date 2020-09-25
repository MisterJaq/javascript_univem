function carregar(){
    let path = window.location.pathname;
    let html = "";
    switch(path){
        case "/Calculadora":
            html = "calculadora.html";
            break;
        case "/Primo":
            html = "primo.html";
            break;
        case "/Vogal":
            html = "vogal.html";
            break;
        }

    let container = document.getElementById("conteiner");

    if (html != ""){
        fetch(html)
        .then(
            resposta => resposta.text()
        )
        .then(function (texto) {
            container.innerHTML = texto
        });
    }
}

function mudarPara(event, path){
    event.preventDefault();
    window.history.pushState("", "", path);
    carregar();
}

window.addEventListener("load", () => carregar());