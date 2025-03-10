document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".sidebar a");
    const contentDiv = document.getElementById("content");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            const page = this.getAttribute("data-page");

            fetch(page)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Erro ao carregar a página.");
                    }
                    return response.text();
                })
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => {
                    contentDiv.innerHTML = "<p style='color:red;'>Erro ao carregar o conteúdo.</p>";
                    console.error("Erro ao carregar a página:", error);
                });
        });
    });
});
