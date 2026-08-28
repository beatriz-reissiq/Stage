fetch("/dashboard/graficoGenero")
  .then(function (resposta) {
    return resposta.json();

  })

  .then(function (dados) {

    let homens = 0;
    let mulheres = 0;
    let outros = 0;

    for (let i = 0; i < dados.length; i++) {

      if (dados[i].genero == "Homem") {
        homens = dados[i].quantidade;
      }

      if (dados[i].genero == "Mulher") {
        mulheres = dados[i].quantidade;
      }

      if (dados[i].genero == "Outro") {
        outros = dados[i].quantidade;

      }

    }

    graficoGenero.data.datasets[0].data = [homens, mulheres, outros];
    graficoGenero.update();

  });



fetch(`/usuarios/listar`)
  .then(function (resposta) {
    return resposta.json();

  })

  .then(function (dadosUsuarios) {

    let faixaEtaria = [];
    let faixaEtariaAtual = [0, 0, 0];

    for (let i = 0; i < dadosUsuarios.length; i++) {
      let dadoPosicaoAtual = dadosUsuarios[i];
      let dataNasc = new Date(dadoPosicaoAtual.dataNascimento);
      let dataHoje = new Date();
      let timeNasc = dataNasc.getTime();
      let timeHoje = dataHoje.getTime();
      let tempoDeVida = timeHoje - timeNasc;
      let idade = tempoDeVida /1000/60/60/24/365

      if (dataNasc != null) {

        if (idade >= 16 && idade <= 20) {
          faixaEtariaAtual[0]++

        } else if (idade <= 30) {
          faixaEtariaAtual[1]++

        } else if (idade > 30) {
          faixaEtariaAtual[2]++
        }

      } else {
        faixaEtaria.push(null);
      }

      faixaEtaria = ["16-20", "21-30", "30+"];
      graficoIdade.data.labels = faixaEtaria;
      graficoIdade.data.datasets[0].data = faixaEtariaAtual;
      graficoIdade.update();

    }

  });


fetch("/dashboard/graficoQtdPosts")
  .then(function (resposta) {
    return resposta.json();

  })

  .then(function (dados) {

    let nomesMeses = [];
    let quantidadePosts = [];

    for (let i = 0; i < dados.length; i++) {
      let numeroMes = dados[i].mes;
      nomesMeses.push(meses[numeroMes - 1]);
      quantidadePosts.push(dados[i].totalPosts);

    }

    graficoPosts.data.labels = nomesMeses;
    graficoPosts.data.datasets[0].data = quantidadePosts;
    graficoPosts.update();

  });


fetch("/dashboard/graficoEngajamento")
  .then(function (resposta) {
    return resposta.json();

  })

  .then(function (dados) {

    let nomesMeses = [];
    let curtidas = [];

    for (let i = 0; i < dados.length; i++) {

      let numeroMes = dados[i].mes;
      nomesMeses.push(meses[numeroMes - 1]);
      curtidas.push(dados[i].totalCurtidas);

    }

    graficoEngajamento.data.labels = nomesMeses;
    graficoEngajamento.data.datasets[0].data = curtidas;
    graficoEngajamento.update();

  });


 //kpi

fetch("/dashboard/totalUsuarios")
  .then(function (resposta) {
    return resposta.json();
  })

  .then(function (dados) {
    document.getElementById("kpiUsuarios").innerHTML = dados[0].totalUsuarios;

  });


fetch("/dashboard/totalPosts")
  .then(function (resposta) {
    return resposta.json();

  })

  .then(function (dados) {
    document.getElementById("kpiPosts").innerHTML = dados[0].totalPosts;

  });


fetch("/dashboard/totalCurtidas")
  .then(function (resposta) {
    return resposta.json();

  })

  .then(function (dados) {
    document.getElementById("kpiCurtidas").innerHTML = dados[0].totalCurtidas;
    
  });