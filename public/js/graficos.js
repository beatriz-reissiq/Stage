const grfGenero = document.getElementById('graficoGenero');

new Chart(grfGenero, {
    type: 'doughnut',

    data: {
        labels: ['Homens', 'Mulheres'],

        datasets: [{
            label: 'Usuários',

            data: [10, 15],

            backgroundColor: [
                '#5E3527',
                '#B39289'
            ],

            borderWidth: 1
        }]
    },

    options: {
        plugins: {

            title: {
                display: true,
                text: 'Usuários por Gênero'
            },

            legend: {
                position: 'bottom'
            }
        }
    }
});
/* ------------------------------ */

const grfIdade = document.getElementById('graficoIdade');

new Chart(grfIdade, {
    type: 'doughnut',

    data: {
        labels: ['16-20', '20-30', '30+'],

        datasets: [{
            label: 'Usuários',

            data: [10, 30, 20],

            backgroundColor: [
                '#5E3527',
                '#B39289',
                '#835e54'
            ],

            borderWidth: 1
        }]
    },

    options: {
        plugins: {

            title: {
                display: true,
                text: 'Faixa Etária dos Usuários'
            },

            legend: {
                position: 'bottom'
            }
        }
    }
});

/* ------------------------------- */

    const grfPosts = document.getElementById('graficoQtdPosts');

new Chart(grfPosts, {
    type: 'bar',

    data: {
        labels: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio'
        ],

        datasets: [{
            label: 'Quantidade de Posts',

            data: [10, 20, 5, 16, 25],

            backgroundColor: [
                '#5E3527',
                '#B39289',
                '#835e54',
                '#a27b70',
                '#d1b5ad'
            ],

            borderWidth: 1
        }]
    },

    options: {
        plugins: {

            legend: {
                display: false
            },

            title: {
                display: true,

                text: 'Quantidade de Posts Mensais',

                color: '#5E3527',

                font: {
                    size: 15
                }
            }
        },

        scales: {
            y: {
                beginAtZero: true
            },
        }
    }
});

const grfEngajamento = document.getElementById('graficoEngajamento');

new Chart(grfEngajamento, {
    type: 'line',

    data: {
        labels: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio'
        ],

        datasets: [{
            label: 'Curtidas Mensais',

            data: [10, 20, 5, 16, 25],

            borderColor: '#5E3527',

            backgroundColor: '#B39289',

            borderWidth: 2,

            fill: false
        }]
    },

    options: {
        plugins: {

            legend: {
                display: false
            },

            title: {
                display: true,

                text: 'Curtidas Mensais',

                color: '#5E3527',

                font: {
                    size: 15
                }
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




