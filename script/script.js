const textoCripto = document.querySelector('.principal__textoBotoes--cripto');
const textoDescripto = document.querySelector('.apresentacao__descripto');
const labelPlaceholder = document.querySelector('label');
const copiar = document.querySelector('.copiar');

const matrizCripto = [
    ["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]
];

function cripto(string) {
    string = string.toLowerCase();
    matrizCripto.forEach((par) => {
        string = string.replaceAll(par[0], par[1]);
    });
    return string;
}

function Descripto(string) {
    string = string.toLowerCase();
    matrizCripto.forEach((par) => {
        string = string.replaceAll(par[1], par[0]);
    });
    return string;
}

function imgPlaceholderVisivel(visivel) {
    if (visivel) {
        textoDescripto.style.backgroundImage = 'none';
        labelPlaceholder.style.display = 'none';
    }else {
        textoDescripto.style.backgroundImage = '';
        textoDescripto.style.backgroundImage = 'block';
        labelPlaceholder.style.display = 'block';
    }
}

imgPlaceholderVisivel(false);

function btnCripto() {
    const texto = textoCripto.value;
    if (validar(texto)) {
        textoDescripto.value = cripto(texto);
        textoCripto.value = '';
        imgPlaceholderVisivel(true);
        copiar.style.visibility = 'visible';
    }else {
        alert ('Insira apenas letras minúsculas e sem acento.');
    }
    
}

function btnDescripto() {
    const texto = textoCripto.value;
    if (validar(texto)) {
        textoDescripto.value = Descripto(texto);
        textoCripto.value = '';
        imgPlaceholderVisivel(true);
        copiar.style.visibility = 'visible';
    }else {
        alert ('Insira apenas letras minúsculas e sem acento.');
    }
    
}

function btnCopiar() {
    const textCopiar = textoDescripto.value;
    if (textCopiar === '') {
        alert('Insira o texto a ser copiado')
    }else {
        textoDescripto.select();
        document.execCommand('cut');
        imgPlaceholderVisivel(false);
        copiar.style.visibility = 'hidden';
    }
}

function validar(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}