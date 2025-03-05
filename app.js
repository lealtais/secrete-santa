let Listaamigos = []; 

function addAmigos() {
    let amigosValor = document.getElementById('amigo').value.trim(); 

    if (amigosValor === "") {
        alert('Escreva um nome válido!');
        return;
        
    }
    if (Listaamigos.includes(amigosValor)) { 
        alert('Este nome já foi adicionado!');
        return;
    }

    Listaamigos.push(amigosValor); 
    document.getElementById('amigo').value = ''; // 

    addAmigosHTML(); 
}

function addAmigosHTML() {
    let listaHTML = document.getElementById('listaAmigos'); 
    listaHTML.innerHTML = ""; 

    Listaamigos.forEach((amigo) => {
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        listaHTML.appendChild(li); 
    });
}

function sortearAmigo() {
    if (Listaamigos.length === 0) {
        alert('A lista está vazia! Adicione pelo menos um amigo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * Listaamigos.length);
    let amigoSorteado = Listaamigos[indiceAleatorio];

    let resultadoHTML = document.getElementById('resultado'); 
    resultadoHTML.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`; 
}
