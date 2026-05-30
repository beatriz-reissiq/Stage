const grfGenero = document.getElementById("graficoGenero");
const graficoGenero = new Chart(grfGenero, {
  type: "doughnut",
  data: {
    labels: ["Homens", "Mulheres", "Outros"],
    datasets: [
      {
        data: [],
        backgroundColor: ["#B39289", "#835e54","#5E3527",],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        display: true,
        text: "Usuários por Gênero",
        font: {
          size: 15
        }
      },

      legend: {
        position: "bottom",
        labels: {
           boxWidth: 15,
           boxHeight: 15
        }
      },
    },
  },
});

const grfIdade = document.getElementById("graficoIdade");
const graficoIdade = new Chart(grfIdade, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#B39289", "#835e54","#5E3527",],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        display: true,
        text: "Faixa Etária dos Usuários",
        font: {
          size: 15
        }
      },

      legend: {
        position: "bottom",
        labels: {
           boxWidth: 15,
           boxHeight: 15
        }
      },
    },
  },
});

const grfPosts = document.getElementById("graficoQtdPosts");
const graficoPosts = new Chart(grfPosts, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Quantidade de Posts",
        data: [],
        backgroundColor: [
          "#5E3527",
          "#B39289",
          "#835e54",
          "#a27b70",
          "#d1b5ad",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Quantidade de Posts Mensais",
        font: {
          size: 15,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const grfEngajamento = document.getElementById("graficoEngajamento");
const graficoEngajamento = new Chart(grfEngajamento, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Curtidas Mensais",
        data: [],
        borderColor: "#5E3527",
        backgroundColor: "#B39289",
        borderWidth: 2,
        fill: false,
      },
    ],
  },

  options: {
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Curtidas Mensais",
        font: {
          size: 15,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});