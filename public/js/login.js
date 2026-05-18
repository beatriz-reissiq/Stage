function autenticar() {

    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;

    if (emailVar == "" || senhaVar == "") {
        alert("Preencha todos os campos!");
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

        sessionStorage.ADM = data.Adm;
        sessionStorage.ID_USUARIO = data.id;
        sessionStorage.NOME_USUARIO = data.nome;

        alert("Olá, " + data.nome + "!");

        window.location = "index.html";
    })
    .catch(err => {
        console.log(err);
        alert("Email ou senha inválidos!");
    });

    return false;
}