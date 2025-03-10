function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => {
            console.error("Erro ao carregar conteúdo:", error);
            document.getElementById("content").innerHTML = "<p>Erro ao carregar a página.</p>";
        });
}
