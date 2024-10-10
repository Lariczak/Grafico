const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    
    const pessoasConectadas = 1.32; // Alterado para 1,32 milhões
    const pessoasMundo = 7.888; // Alterado para 7.888 bilhões
    const municipios = 1672; // Alterado para 1.672 municípios
    const porcentagemConectada = ((pessoasConectadas / (pessoasMundo * 1e3)) * 100).toFixed(2); // Cálculo baseado no novo valor

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} milhões</span> são de alguma comunidade quilombola e estão em cerca de <span>${municipios}</span> municípios?<br>.`;
    
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}
visualizarInformacoesGlobais();