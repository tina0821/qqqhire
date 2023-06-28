const fs = require('fs');

function readJsonFile(filePath, callback) {
  filePath = '../'
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('文件出錯：', err);
    }

    var jsonData = JSON.parse(data);
    callback(jsonData);
  });
}


