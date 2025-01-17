// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let experiencia = document.getElementById('experiencia').value;
    let tecnologiasSelecionadas = document.querySelectorAll('input[type="checkbox"]:checked');

    // Limpar mensagens de erro
    document.querySelectorAll('.erro-message').forEach(function(el) {
        el.textContent = '';
    });

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!nome || !sobrenome || !email || !experiencia) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Verificar se ao menos uma tecnologia foi selecionada
    if (tecnologiasSelecionadas.length === 0) {
        alert("Por favor, selecione ao menos uma tecnologia.");
        return;
    }

    // Verificar se o email é válido
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Se tudo estiver correto, redireciona para a página de sucesso
    window.location.href = 'sucesso.html'; // Redireciona
}

// Lógica para mostrar/ocultar campos dinâmicos
function configurarCamposDinamicos() {
    document.querySelectorAll('input[name="devweb"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === "fullstack") {
                document.getElementById('campo-experiencia-adicional').style.display = 'block';
            } else {
                document.getElementById('campo-experiencia-adicional').style.display = 'none';
            }
        });
    });
}

// Configurar a validação do formulário na submissão
document.getElementById('cadastro-form').addEventListener('submit', validarFormulario);

// Inicializar a configuração dos campos dinâmicos
document.addEventListener('DOMContentLoaded', configurarCamposDinamicos);
