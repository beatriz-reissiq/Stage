 function cadastrar() {
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_confirmacao.value;
  var vocacao = ipt_vocacao.value;


  let alerts = document.getElementById("alertCadastro");
  let mensagem_error = document.getElementById("mensagem_erro");

   let caracteresEsp = [
        "!", "#", "$", "%", "&", "'", "(", ")", "*",
        "+", "-", ".", "/", ":", ";", "<", "=",
        ">", "?", "@", "[", "]", "^", "_",
        "{", "|", "}", "~"
    ];

  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" ||
    vocacao == ""
  ) {
    alerts.style.display = 'flex'
    mensagem_error.innerHTML = "Preencha todos os campos!";  
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
          }, 2000);
    return false;
  }

  if (senhaVar != confirmacaoSenhaVar) {
    alerts.style.display = "flex";
    mensagem_error.innerHTML = `As senhas não coincidem!`
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
          }, 2000);
    return false;
  }

  if (!emailVar.includes("@") || !emailVar.includes(".")) {
    alerts.style.display = "flex";
    mensagem_error.innerHTML = "O email informado está inválido!";
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
          }, 2000);
      return false
    }

 let possuiEspecial = false;

  for (let i = 0; i < senhaVar.length; i++) {
    let ascii = senhaVar.charCodeAt(i);

    if (
        !(ascii >= 48 && ascii <= 57) && // números
        !(ascii >= 65 && ascii <= 90) && // maiúsculas
        !(ascii >= 97 && ascii <= 122)   // minúsculas
    ) {
        possuiEspecial = true;
    }
}

if (possuiEspecial == false) {

    mensagem_error.innerHTML =
    "A senha precisa conter ao menos um caractere especial!";
    alerts.style.display = "flex";
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
    }, 2000);
    return false;
}


  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
      vocacaoServer: vocacao
    }),
  })
    .then(res => {
      if (res.ok) {
        mensagem.innerHTML = "Cadastro realizado com sucesso! Redirecionando...";
        setTimeout(() => {
          window.location = "login.html";
        }, 2000);
      } else {
        mensagem.innerHTML = "⚠︎ Erro ao realizar cadastro.";
        setTimeout(() => {
        }, 1000);
      }
    })
    .catch(err => {
      console.log(err);
    });

  return false;
}