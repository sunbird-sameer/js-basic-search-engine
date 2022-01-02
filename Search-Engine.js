// Import the filesystem module
//const fs = require("fs");
import {fs} from 'C:\\Users\\srigo\\Documents\\GitHub\\node\\lib\\fs.js'

let directory_name = "C:\\Users\\srigo\\Downloads\\Search-Engine";

let filenames = fs.readdirSync(directory_name);
  
keyword = 'index'

for  ( index in filenames) { 
   // console.log("Checking " + filenames[index])
    if (filenames[index].includes(keyword))
        console.log(filenames[index])
        alert(filenames[index])
}
