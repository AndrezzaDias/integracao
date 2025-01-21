// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede a navegação do link

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let experiencia = document.getElementById('experiencia').value;
    let tecnologiasSelecionadas = document.querySelectorAll('input[type="checkbox"]:checked');
    let devwebSelecionado = document.querySelector('input[name="devweb"]:checked');
    let senioridadeSelecionada = document.getElementById('senioridade').value;

    // Limpar mensagens de erro
    document.querySelectorAll('.erro-message').forEach(function(el) {
        el.textContent = '';
    });

    let isValid = true;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!nome) {
        document.getElementById('erro-nome').textContent = 'Nome é obrigatório.';
        isValid = false;
    }
    if (!sobrenome) {
        document.getElementById('erro-sobrenome').textContent = 'Sobrenome é obrigatório.';
        isValid = false;
    }
    if (!email) {
        document.getElementById('erro-email').textContent = 'Email é obrigatório.';
        isValid = false;
    }
    if (!experiencia) {
        document.getElementById('erro-experiencia').textContent = 'Experiência é obrigatória.';
        isValid = false;
    }
    if (!devwebSelecionado) {
        document.getElementById('erro-devweb').textContent = 'Escolha uma área de desenvolvimento.';
        isValid = false;
    }
    if (!senioridadeSelecionada) {
        document.getElementById('erro-senioridade').textContent = 'Selecione sua senioridade.';
        isValid = false;
    }
    if (tecnologiasSelecionadas.length === 0) {
        document.getElementById('erro-tecnologias').textContent = 'Selecione ao menos uma tecnologia.';
        isValid = false;
    }

    // Verificar se o email é válido
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailPattern.test(email)) {
        document.getElementById('erro-email').textContent = 'Por favor, insira um email válido.';
        isValid = false;
    }

    // Se tudo estiver correto, redireciona para a página de sucesso
    if (isValid) {
        window.location.href = 'sucesso.html'; // Redireciona
    }
}

// Configurar a validação do formulário quando o link for clicado
document.getElementById('submit-link').addEventListener('click', validarFormulario);
