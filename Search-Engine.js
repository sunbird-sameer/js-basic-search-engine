// Import the filesystem module
//const fs = require("fs");
const fs = require('fs')

let directory_name = "dir_name";

let filenames = fs.readdirSync(directory_name);
  
keyword = 'index'

for  ( index in filenames) { 
   // console.log("Checking " + filenames[index])
    if (filenames[index].includes(keyword))
        console.log(filenames[index])
        alert(filenames[index])
}
