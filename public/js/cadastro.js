function cadastrar() {
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_confirmacao.value;
  var vocacao = ipt_vocacao.value;

  let alerts = document.getElementById("alertCadastro");
  let mensagem_error = document.getElementById("mensagem_erro");

  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" ||
    vocacao == ""
  ) {
    alerts.style.display = 'flex';
    mensagem_error.innerHTML = "Preencha todos os campos!";  
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
    }, 2500);
    return false;
  }

  if (senhaVar != confirmacaoSenhaVar) {
    alerts.style.display = "flex";
    mensagem_error.innerHTML = `As senhas não coincidem!`;
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
    }, 2500);
    return false;
  }

  if ((senhaVar.length) < 8) {
    alerts.style.display = "flex";
    mensagem_error.innerHTML = `A senha deve conter ao menos 8 caracteres!`;
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
    }, 2500);
    return false;
  }

  let temArroba = false
  let temPonto = false
  for (let e = 0; e < emailVar.length; e++) {

    if (emailVar[e] == '@') {
      temArroba = true
    } if (emailVar[e] == '.') {
      temPonto = true
    }

    let indexArroba = emailVar.indexOf('@')
    let indexPonto = emailVar.indexOf('.')

    if (indexArroba > indexPonto) {
       if (!temArroba || !temPonto) {
        alerts.style.display = "flex";
        mensagem_error.innerHTML = "O email informado é inválido!";
        setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
        }, 2500);
      return false;
    }
  }
}
  
  let possuiEspecial = false;
  let simbolos = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '`', '~', '/', '-', 
  '+', '.', ':', ';', '<', '=', '>', '?', '[', ']', '_', '{', '|', '}'];
  
  for (let i = 0; i < senhaVar.length; i++) {
    for (let j = 0; j < simbolos.length; j++) {
      if (senhaVar[i] === simbolos[j]) {
        possuiEspecial = true;
      }
    }
  }

  if (!possuiEspecial) {
    mensagem_error.innerHTML = "A senha precisa conter ao menos um caractere especial!";
    alerts.style.display = "flex";
    setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
    }, 2500);
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
        return res.json();
      } else {
        throw new Error("Erro ao realizar cadastro.");
      }
    })
    .then(data => {
      sessionStorage.ADM = data.adm;
      sessionStorage.ID_USUARIO = data.id;
      sessionStorage.NOME_USUARIO = data.nome;
      
      let mensagem = document.getElementById("mensagem") || mensagem_error;
      mensagem.innerHTML = "Cadastro realizado com sucesso! Redirecionando...";
      
      setTimeout(() => {
        window.location = "index.html";
      }, 2500);
    })
    .catch(err => {
      console.log(err);
      alerts.style.display = "flex";
      mensagem_error.innerHTML = "⚠︎ Erro ao realizar cadastro.";
      setTimeout(() => {
        mensagem_error.innerHTML = "";
        alerts.style.display = "none";
      }, 2500);
      return false;
    });
}