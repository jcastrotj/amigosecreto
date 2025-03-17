// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const ingresoAmigo = document.getElementById("amigo") //Elemento nombres de amigos
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos"); //Elemento lista de amigos
const ulResultado = document.getElementById("resultado"); //Elemento amigo sorteado

function focusElemento() {
    document.getElementById("amigo").focus();
}

function agregarAmigo(){
    if (ingresoAmigo.value == '') {
        alert('Por favor ingrese un nombre válido');
    } else {
        listaAmigos.push(ingresoAmigo.value);
        ulListaAmigos.innerHTML += `<li>${ingresoAmigo.value}</li>`;
        document.querySelector("#amigo").value = ''
        focusElemento();
        //console.log(listaAmigos);
    }
}

function sortearAmigo(){
    if (listaAmigos.length < 2) {
        //alert('Por favor, primero ingrese los nombres de sus amigos');
        alert(`Por favor, ${(listaAmigos.length == 0) ? 'primero ingrese los nombres de sus amigos' : 'ingrese más nombres de amigos (solo hay uno)'}`);
        focusElemento();
        //console.log(listaAmigos.length);
    } else {
        const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
        ulListaAmigos.innerHTML = '';
        listaAmigos.splice(0);
        focusElemento();
        //console.log(listaAmigos);
    }
}