function autenticar() {
  
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;

    let alerts = document.getElementById("alertCadastro");
    let mensagem_error = document.getElementById("mensagem_erro");

    if (emailVar == "" || senhaVar == "") {
        alerts.style.display = "flex";
        mensagem_error.innerHTML = "Email ou senha inválidos!";
        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    })
    .then(res => {
        if (!res.ok) throw "Erro no login";
        return res.json();
    })
    .then(data => {

        sessionStorage.ADM = data.adm;
        sessionStorage.ID_USUARIO = data.id;
        sessionStorage.NOME_USUARIO = data.nome;
        window.location = "index.html";
    })
    .catch(err => {
        console.log(err);
        alerts.style.display = "flex";
        mensagem_error.innerHTML = "Email ou senha inválidos!";
    });

    return false;
}