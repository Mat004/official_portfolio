// Seleciona os botões e as seções de conteúdo
const sobreTab = document.getElementById('sobre-tab');
const projetosTab = document.getElementById('projetos-tab');
const mediumTab = document.getElementById('medium-tab');
const certificacoesTab = document.getElementById('certificacoes-tab'); // Nova aba de Certificações

const sobreContent = document.getElementById('sobre-content');
const projetosContent = document.getElementById('projetos-content');
const mediumContent = document.getElementById('medium-content');
const certificacoesContent = document.getElementById('certificacoes-content'); // Conteúdo de Certificações

// Função para alternar entre abas
function switchTab(tab) {
    // Remove 'active' de todas as abas
    sobreTab.classList.remove('active');
    projetosTab.classList.remove('active');
    mediumTab.classList.remove('active');
    certificacoesTab.classList.remove('active'); // Remove 'active' de Certificações

    // Remove 'active' de todas as seções de conteúdo
    sobreContent.classList.remove('active');
    projetosContent.classList.remove('active');
    mediumContent.classList.remove('active');
    certificacoesContent.classList.remove('active'); // Remove 'active' do conteúdo de Certificações

    // Adiciona 'active' de acordo com a aba selecionada
    if (tab === 'sobre') {
        sobreTab.classList.add('active');
        sobreContent.classList.add('active');
    } else if (tab === 'projetos') {
        projetosTab.classList.add('active');
        projetosContent.classList.add('active');
    } else if (tab === 'medium') {
        mediumTab.classList.add('active');
        mediumContent.classList.add('active');
    } else if (tab === 'certificacoes') {
        certificacoesTab.classList.add('active');
        certificacoesContent.classList.add('active');
    }
}

// Adiciona eventos de clique
sobreTab.addEventListener('click', () => switchTab('sobre'));
projetosTab.addEventListener('click', () => switchTab('projetos'));
mediumTab.addEventListener('click', () => switchTab('medium'));
certificacoesTab.addEventListener('click', () => switchTab('certificacoes')); // Evento de clique para a aba Certificações
