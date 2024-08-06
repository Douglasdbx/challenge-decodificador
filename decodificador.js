
var textInput = document.querySelector("#input-texto");

function criptografar() {
    var texto = textInput.value;
    var resultCripto = texto.replace(/a/g, "ai")
                            .replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = `
        <textarea readonly id="result-texto">${resultCripto}</textarea>
        <button class="btn-copiar" onclick="copiar('result-texto')">Copiar</button>
        <button class="btn-colar" onclick="colar('result-texto')">Colar</button>
    `;
}

function descriptografar() {
    var texto = textInput.value;
    var resultDescripto = texto.replace(/ai/g, "a")
                               .replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = `
        <textarea readonly id="result-texto">${resultDescripto}</textarea>
        <button class="btn-copiar" onclick="copiar('result-texto')">Copiar</button>
        <button class="btn-colar" onclick="colar('result-texto')">Colar</button>
    `;
}

function copiar(id) {
    var textoCop = document.getElementById(id);

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}

function colar(id) {
    var textoColar = document.getElementById(id).value;
    textInput.value = textoColar;
}







/*var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

    function criptografar() {
        var texto = textInput.value;
        var resultCripto = texto.replace(/a/g, "ai")
                                .replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");

        document.getElementById('output').innerHTML = `
            <textarea readonly id="result-texto">${resultCripto}</textarea>
            <button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>
            <button class="btn-colar" id="colar" onclick="colar()">Colar</button>
        `;
    }

    function descriptografar() {
        var texto = textInput.value;
        var resultDescripto = texto.replace(/ai/g, "a")
                                   .replace(/enter/g, "e")
                                   .replace(/imes/g, "i")
                                   .replace(/ober/g, "o")
                                   .replace(/ufat/g, "u");

        document.getElementById('output').innerHTML = `
            <textarea readonly id="result-texto">${resultDescripto}</textarea>
            <button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>
            <button class="btn-colar" id="colar" onclick="colar()">Colar</button>
        `;
    }
    function copiar() {
        var textoCop = document.getElementById('result-texto');

        textoCop.select();
       

        document.execCommand('copy');
        alert("Texto copiado.");
    }
    function colar() {
        var textoColar = document.getElementById('result-texto').value;
        textInput.value = textoColar;
    }




 
/*function copiar() {
    var textoCop = document.getElementById("input-texto");

    textoCop.ariaSelected();
    document.execCommand("copy");
    
}

/*var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
} */ 