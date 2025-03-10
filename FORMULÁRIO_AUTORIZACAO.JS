<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Registro</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 500px; margin: auto; background-color: #f4f4f4; color: #333; transition: background 0.3s, color 0.3s; }
        h2 { text-align: center; }
        .dark-mode h2 { color: #f4f4f4; }
        .form-container { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; display: none; background: white; }
        label { display: flex; flex-direction: column; font-weight: bold; margin-top: 5px; }
        input { width: 100%; padding: 6px; margin-top: 3px; border: 1px solid #ccc; border-radius: 4px; }
        button { margin-top: 10px; padding: 10px; cursor: pointer; width: 100%; border: none; border-radius: 5px; }
        .generate { background-color: #28a745; color: white; }
        .copy { background-color: #007bff; color: white; }
        .clear { background-color: #dc3545; color: white; }
        .dark-mode { background-color: #333; color: #f4f4f4; }
        .dark-mode .form-container { background: #444; border-color: #666; }
        .message { text-align: center; font-weight: bold; margin-top: 10px; display: none; }
    </style>
</head>
<body onload="definirDataAtual()">
    <h2>Registro de Atendimento</h2>
    <button onclick="toggleDarkMode()">Alternar Modo Escuro</button>
    <label for="tipo_atendimento">Tipo de Atendimento:</label>
    <select id="tipo_atendimento" onchange="exibirFormulario()">
        <option value="">Selecione...</option>
    </select>
    <div id="formularios"></div>
    <div id="mensagem" class="message"></div>

    <script src="FORMULÁRIO_AUTORIZACAO.js"></script>
</body>
</html>
