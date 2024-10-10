async function evolucaoPopulacao() {
    const anos = [2018, 2019, 2020, 2021];
    const populacaoConectada = [100, 120, 150, 170]; // Dados fictícios

    const data = [{
        x: anos,
        y: populacaoConectada,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {
            color: getCSS('--cor-secundaria')
        }
    }];

    const layout = {
        title: {
            text: 'Evolução da População Conectada ao Longo dos Anos',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            title: {
                text: 'Ano',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            },
            tickfont: tickConfig,
        },
        yaxis: {
            title: {
                text: 'População Conectada (milhões)',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            },
            tickfont: tickConfig,
        },
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

evolucaoPopulacao();
