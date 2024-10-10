import { getCSS, tickConfig } from "./common.js";

async function evolucaoPopulacao() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/evolucao-populacao.json'; // Ajuste para a URL correta
    const res = await fetch(url);
    const dados = await res.json();

    // Supondo que os dados sejam um array de objetos com ano e populacao
    const anos = dados.map(item => item.ano);
    const populacaoConectada = dados.map(item => item.populacao_conectada);

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
