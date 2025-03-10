const tipos = ["mudança_de endereço", "instalação", "troca_equipamento", "troca_onu"];
const campos = [
    { id: "data", label: "Data", type: "date" },
    { id: "agente", label: "Agente", type: "text" },
    { id: "login", label: "Login Roteador", type: "text", default: "SEGUE DESCRIÇÃO LOGIN" },
    { id: "senha", label: "Senha do Roteador", type: "text", default: "SEGUE DESCRIÇÃO LOGIN" },
    { id: "onu", label: "ONU", type: "text" },
    { id: "pon", label: "PON", type: "text" },
    { id: "cto", label: "CTO", type: "text" },
    { id: "porta", label: "Porta", type: "text" },
    { id: "equipe", label: "Equipe Técnica", type: "text" },
    { id: "sinalCto", label: "Sinal da CTO", type: "text" },
    { id: "sinalOnu", label: "Sinal ONU", type: "text" },
    { id: "protocolo", label: "Protocolo", type: "text" }
];

function definirDataAtual() {
    document.querySelectorAll("input[type='date']").forEach(input => {
        input.value = new Date().toISOString().split('T')[0];
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

function carregarModoEscuro() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
}

function criarFormularios() {
    const container = document.getElementById("formularios");
    const select = document.getElementById("tipo_atendimento");

    tipos.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo.replace("_", " ").toUpperCase();
        select.appendChild(option);

        const form = document.createElement("div");
        form.className = "form-container";
        form.id = `${tipo}_container`;
        form.innerHTML = `<h3>${tipo.replace("_", " ").toUpperCase()}</h3>
            <form id="${tipo}_form">${gerarCampos(tipo)}
                <button type="button" class="generate" onclick="gerarTexto('${tipo}')">Gerar Texto 📄</button>
                <button type="button" class="copy" onclick="copiarTexto('${tipo}')">Copiar Texto 📋</button>
                <button type="button" class="clear" onclick="limparCampos('${tipo}')">Limpar Campos ❌</button>
                <pre id="${tipo}_resultado"></pre>
            </form>`;
        container.appendChild(form);
    });

    definirDataAtual();
    carregarModoEscuro();
}

function gerarCampos(tipo) {
    return campos.map(campo =>
        `<label>${campo.label}: <input type="${campo.type}" id="${tipo}_${campo.id}" value="${campo.default || ''}"></label>`
    ).join('');
}

function exibirFormulario() {
    tipos.forEach(tipo => {
        document.getElementById(`${tipo}_container`).style.display = "none";
    });
    const tipoSelecionado = document.getElementById("tipo_atendimento").value;
    if (tipoSelecionado) {
        document.getElementById(`${tipoSelecionado}_container`).style.display = "block";
    }
    definirDataAtual();
}

function gerarTexto(tipo) {
    let texto = `${tipo.replace("_", " ").toUpperCase()}\n`;
    campos.forEach(({ id, label }) => {
        const valor = document.getElementById(`${tipo}_${id}`).value;
        texto += `${label.toUpperCase()}: ${valor}\n`;
    });

    document.getElementById(`${tipo}_resultado`).textContent = texto;

    const blob = new Blob([texto], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${tipo}_registro.txt`;
    a.click();
}

function copiarTexto(tipo) {
    const texto = document.getElementById(`${tipo}_resultado`).textContent;
    navigator.clipboard.writeText(texto).then(() => {
        mostrarMensagem("Texto copiado com sucesso!", "green");
    }).catch(() => {
        mostrarMensagem("Erro ao copiar texto!", "red");
    });
}

function limparCampos(tipo) {
    campos.forEach(({ id }) => {
        const campo = document.getElementById(`${tipo}_${id}`);
        if (campo) {
            campo.value = '';
        }
    });
    document.getElementById(`${tipo}_resultado`).textContent = '';
}

function mostrarMensagem(texto, cor) {
    const msg = document.getElementById("mensagem");
    msg.textContent = texto;
    msg.style.color = cor;
    msg.style.display = "block";
    setTimeout(() => msg.style.display = "none", 3000);
}

criarFormularios();