// Animção da pagina

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}

// Validação do Formulário

/*const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const erro = document.getElementById('erro');
const enviar = document.getElementById('enviar');

function validar() {
    if(nome.value === '') {
        erro.innerHTML = 'Digite seu nome';
        erro.style.color = 'red';
        nome.style.border = '1px solid red';
        return false

    } 

    if(email.value === '') {
        erro.innerHTML = 'Digite seu email';
        erro.style.color = 'red';
        email.style.border = '1px solid red';
        return false
    }

    if(mensagem.value === '') {
        erro.innerHTML = 'Digite seu nome';
        erro.style.color = 'red';
        mensagem.style.border = '1px solid red';
        return false
    }

    if(nome != "" && email != "" && mensagem != "") {
        erro.innerHTML = 'Envie sua mensagem';
        erro.style.color = 'green';

    }
}*/
