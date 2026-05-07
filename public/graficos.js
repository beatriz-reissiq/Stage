const grfGenero = document.getElementById('graficoGenero');
    new Chart(grfGenero, {
        type: 'doughnut',
        data: {
        labels: ['Homens', 'Mulheres'],
            datasets: [{
            labels:'Usuários',
            data: [10,15],
            backgroundColor:['#5E3527','#B39289'],
            borderWidth: 1 }]
        },
         options: {
             plugins: {
                legend: {
                    position: 'bottom',
        scales: {
            y: {
                beginAtZero: true
            }
        }
        }
    }
 }

});
/* ------------------------------ */

    const grfIdade = document.getElementById('graficoIdade');
    new Chart(grfIdade, {
        type: 'doughnut',
        data: {
        labels: ['16-20','20-30', '30+'],
            datasets: [{
            labels:'Usuários',
            data: [10, 30, 20],
            backgroundColor:['#5E3527','#B39289', '#835e54' ],
            borderWidth: 1 }]
        },
        options: {
             plugins: {
                legend: {
                    position: 'bottom',
        scales: {
            y: {
                beginAtZero: true
            }
        }
        }
    }
 }

});


