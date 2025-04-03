const mysql = require('mysql2/promise');
// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '********',
  database: 'powerbank',
})
//  连接数据库
// connection.connect((err) => {
//   if (err) {
//     console.error('数据库连接失败:', err);
//     return;
//   }
//   console.log('数据库连接成功');
// })
// //  执行查询
// connection.query('SELECT * FROM bank', (err, results) => {
//   if (err) {
//     console.error('查询失败:', err);
//     return;
//   }else{
//   console.log('查询结果:', results);
//   }
// });
//查询数据库
async function queryDatabase() {
  let conn;
  try {
      // 获取数据库连接
      conn = await connection;
      // 执行 SQL 查询
      const [rows] = await conn.execute('SELECT * FROM bank');
      return rows;
  } catch (error) {
      console.error('查询数据库时出错: ', error);
      throw error;
  } finally {
      if (conn) {
          try {
              // 关闭数据库连接
              await conn.end();
              console.log('数据库连接已成功关闭');
          } catch (closeError) {
              console.error('关闭数据库连接时出错，具体错误信息如下：', closeError);
          }
      }
  }
}
// 调用函数并处理结果
queryDatabase()
  .then((results) => {
    console.log('查询结果:', results);
  })
  .catch((error) => {
    console.error('处理查询结果时出错: ', error);
  });

//导出
module.exports = {
  queryDatabase
}




