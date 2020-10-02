async function buscarCep(event) {
    let input = event.target.value;
    let cep = input.match(/\d+/g).join('');

    let res = await fetch("https://viacep.com.br/ws/" + cep + "/json");
    if (res.status == 200) {
        let endereco = await res.json();

        let cidade = document.querySelector("form input[name=cidade]");
        cidade.value = endereco.localidade;

        
        let uf = document.querySelector("form input[name=uf]");
        uf.value = endereco.uf;
        
        let bairro = document.querySelector("form input[name=bairro]");
        bairro.value = endereco.bairro;

        if (document.getElementById("bairro").value.length == ' '){
            document.getElementById("bairro").focus();
            return false
        }

        let logradouro = document.querySelector("form input[name=logradouro]");
        logradouro.value = endereco.logradouro;

        let numero = document.querySelector("form input[name=numero]");
        numero.focus();
    }
}

function formDataToJson(form) {
    let data = new FormData(form);
    let jsonObj = {};

    for (const item of data.keys()) {
        let v = data.get(item);
        jsonObj[item] = v;
    }
    return jsonObj;
}

async function registrar(event) {
    event.preventDefault();
    let form = event.target;

    let jsonBody = formDataToJson(form);
    console.log(jsonBody);

    let jsonString = JSON.stringify(jsonBody);

    const urlApi = "https://javascriptunivem.azurewebsites.net";

    let res = await fetch(urlApi + "/api/usuario", {
        method: "POST",
        body: jsonString,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (res.status == 200) {
        alert("Cadastrado com sucesso! Vá para a pagina de login");
    } else {
        alert("Houve erro na criacao do usuario")
    }
}