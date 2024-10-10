import { getCSS, tickConfig } from "./common.js";

async function porcentagemConectados() {
    const pessoasConectadas = 2.5; // Novo valor em milhões
    const pessoasMundo = 8.0; // Novo valor em bilhões

    const porcentagemConectada = ((pessoasConectadas / (pessoasMundo * 1e3)) * 100).toFixed(2);

    const data = [{
        values: [porcentagemConectada, 100 - porcentagemConectada],
        labels: ['Em comunidades', 'Fora de comunidades'],
        type: 'pie',
        marker: {
            colors: [getCSS('--cor-principal'), getCSS('--cor-secundaria')]
        }
    }];

    const layout = {
        title: {
            text: 'Porcentagem de Pessoas Quiombolas no mundo',
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
