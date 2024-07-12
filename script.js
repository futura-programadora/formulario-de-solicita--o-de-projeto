function generateFile() {
    // Seleciona o formulário HTML com o id 'projectForm'
    const form = document.getElementById('projectForm');
    
    // Cria um objeto FormData a partir do formulário selecionado
    const formData = new FormData(form);
    
    // Inicializa uma string vazia para armazenar os dados do formulário
    let data = '';
    
    // Itera sobre cada par chave-valor do FormData
    formData.forEach((value, key) => {
        // Adiciona cada par chave-valor à string 'data' no formato 'chave: valor'
        data += `${key}: ${value}\n`;
    });

    // Cria um Blob (Binary Large Object) contendo os dados do formulário em formato de texto
    const blob = new Blob([data], { type: 'text/plain' });
    
    // Cria uma URL temporária que aponta para o Blob
    const url = window.URL.createObjectURL(blob);
    
    // Cria um elemento <a> para possibilitar o download do arquivo
    const a = document.createElement('a');
    a.style.display = 'none'; // Esconde o elemento <a>
    a.href = url; // Define a URL do arquivo a ser baixado
    a.download = 'formulario_projeto.txt'; // Define o nome do arquivo a ser baixado
    
    // Adiciona o elemento <a> ao corpo do documento
    document.body.appendChild(a);
    
    // Programa um clique no elemento <a>, iniciando o download do arquivo
    a.click();
    
    // Revoga a URL temporária para liberar memória
    window.URL.revokeObjectURL(url);
    
    // Exibe um alerta informando que o formulário foi baixado com sucesso
    alert('Formulário baixado com sucesso!');
}
