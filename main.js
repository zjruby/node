const {queryDatabase}= require('./db.js')

async function main() {
  try {
    //await异
    const results = await queryDatabase();
    console.log(results);
  } catch (error) {
    console.error('查询失败:', error); 
  }
}
main();