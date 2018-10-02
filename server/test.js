var mysql = require( 'mysql');  //导入mysql模块

var connection = mysql.createConnection({   //配置连接参数
      host : 'localhost',
      user : 'root',
      password : '123456',
      database : 'testdb'
});

connection.connect();     //连接

 connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.end();
/**********************修改数据*************************/

/*

var updateSql = 'UPDATE user set name= ? where id = ?';
var updateParams = ['无敌强',22];

connection.query(updateSql,updateParams,function(err,result){
             if(err){
                    console.log('[UPDATE ERROR] '+ err.message)
             }else{
                console.log(`------------------------------------UPDATE-------------------`);
                console.log(`UPDATE SUCCESS `+ result.affectedRows);        //成功影响了x行  1
                console.log(`-------------------------------------------------------------`);
      }
})

*/


/**********************查询数据*************************/
connection.query( 'SELECT * FROM user', function(err, results, fields) {
         if (err) {
                console.log(err);
          }else{
                console.log(results);
          }
})


/**********************插入数据*************************/
/*var addSql = 'INSERT INTO user (id,name,age) VALUES(?,?,?)';
var addSqlParams = [2,"小华",15];

connection.query(addSql,addSqlParams, function(err, results, fields) {
             if (err) {
                      console.log(err);
              }else{
                      console.log(results);
               }
})*/