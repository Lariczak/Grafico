import { getCSS, tickConfig } from "./common.js";

async function porcentagemConectados() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';
    const res = await fetch(url);
    const dados = await res.json();

    const pessoasConectadas = dados.total_pessoas_conectadas; // Ajustar para pegar os dados do JSON
    const pessoasMundo = dados.total_pessoas_mundo;

    const porcentagemConectada = ((pessoasConectadas / pessoasMundo) * 100).toFixed(2);

    const data = [{
        values: [porcentagemConectada, 100 - porcentagemConectada],
        labels: ['Conectados', 'Desconectados'],
        type: 'pie',
        marker: {
            colors: [getCSS('--cor-principal'), getCSS('--cor-secundaria')]
        }
    }];

    const layout = {
        title: {
            text: 'Porcentagem de Pessoas Conectadas',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        showlegend: true,
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

porcentagemConectados();
