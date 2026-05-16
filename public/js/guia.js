
let conteudoViolao = document.getElementById('conteudoViolao');
let conteudoAfinacao = document.getElementById('conteudoAfinacao');
let conteudoVergonha = document.getElementById('conteudoVergonha');

let btnViolao = document.getElementById('btnViolao');
let btnAfinacao = document.getElementById('btnAfinacao');
let btnVergonha = document.getElementById('btnVergonha');

btnViolao.onclick = function () {

    conteudoAfinacao.style.display = 'none';
    conteudoVergonha.style.display = 'none';

    conteudoViolao.style.display = 'block';
}


btnAfinacao.onclick = function () {

    conteudoViolao.style.display = 'none';
    conteudoVergonha.style.display = 'none';

    conteudoAfinacao.style.display = 'block';
}


btnVergonha.onclick = function () {

    conteudoViolao.style.display = 'none';
    conteudoAfinacao.style.display = 'none';

    conteudoVergonha.style.display = 'block';
}