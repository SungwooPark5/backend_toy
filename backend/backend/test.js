const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'quipu_backend_toy'
})

connection.connect()

connection.query('SELECT *from posts', (err, rows, fields) => {
  if (err) throw err

  console.log('Query 결과', rows)
})


connection.end()