/* Promises & Async Await. */

//Callback;
/*const fs = require("fs");
const filePath =
  "C:\\Users\\91987\\Documents\\GitHub\\webjs\\JavaScript\\JavaScript-MoreAdvance";

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("The file does not exist.");
    return;
  }

  // File exists, you can proceed to read it.
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
});*/

//Callback Hell
/*fs.readdir(source, function (err, files) {
     if (err) {
       console.log('Error finding files: ' + err)
     } else {
       files.forEach(function (filename, fileIndex) {
         console.log(filename)
         gm(source + filename).size(function (err, values) {
           if (err) {
             console.log('Error identifying file size: ' + err)
           } else {
             console.log(filename + ' : ' + values)
             aspect = (values.width / values.height)
             widths.forEach(function (width, widthIndex) {
               height = Math.round(width / aspect)
               console.log('resizing ' + filename + 'to ' + height + 'x' + height)
               this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
                 if (err) console.log('Error writing file: ' + err)
               })
             }.bind(this))
           }
         })
       })
     }
   })*/

async function asyncCall(file1, file2, file3) {
  let a1 = fs.readFile(file1, "utf-8");
  let a2 = fs.readFile(file2, "utf-8");
  let a3 = fs.readFile(file3, "utf-8");
  let c1 = await a1;
  console.log(a1);
  let c2 = await a2;
  console.log(a2);
  let c3 = await a3;
  console.log(a3);
}
asyncCall();

//Promises

// let fs = require("fs/promises");

// let a = fs.readFile("file.txt", "utf-8");
// console.log(a);
