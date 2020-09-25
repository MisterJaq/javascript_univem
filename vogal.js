function contarvogal(){
    let palavra = document.getElementById("texto").value;
    let vogal = palavra.match(/[a,e,i,o,u]/gi);
    alert (vogal.length);
}