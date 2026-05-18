 function cadastrar() {
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_confirmacao.value;
  var vocacao = ipt_vocacao.value;

  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" ||
    vocacao == ""
  ) {
    alert("Preencha todos os campos!");
    return false;
  }

  if (senhaVar != confirmacaoSenhaVar) {
    alert("As senhas não coincidem!");
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