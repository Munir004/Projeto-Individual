var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n\n function autenticar(): ", email, senha)
    var instrucaoSql = `
        SELECT id as idUsuario, nome, apelido, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, apelido, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n\n function cadastrar():", nome, apelido, email, senha);
    var instrucaoSql = `
        INSERT INTO usuario (nome, apelido, email, senha) VALUES ('${nome}', '${apelido}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};