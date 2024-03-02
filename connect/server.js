const mysql = require('mysql'); 

// Configurações para conexão ao banco de dados
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '--------',
    database: 'bd_tela_login'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão ao banco de dados bem-sucedida');
  });
