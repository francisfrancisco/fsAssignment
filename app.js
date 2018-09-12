let fs = require('fs');

//challenge1
fs.readFile("challenge1/info.txt", "utf8", (err, data)=>{
  if (err){
    throw err;
  }
  console.log(data);
})

// let data = fs.readFileSync("challenge1/info.txt", "utf8")
// console.log(data);

//challenge2
let names = fs.readFileSync('challenge2/info.txt', 'utf-8')
names = names + "moe\n" + "larry\n" + "curly\n"
fs.writeFileSync('challenge2/info.txt', names)

//fs.appendFileSync('./challenge2/info.txt', 'tom, frank, sean')

//challenge3
fs.renameSync("challenge3/binfo.txt", "challenge3/info.txt")

// challenge4
fs.mkdirSync("challenge4/copyfolder");
fs.copyFileSync('challenge4/info.txt', 'challenge4/copyfolder/info.txt');

//challenge5
let noSpaces = fs.readFileSync('challenge5/info.txt', 'utf-8')
noSpaces = noSpaces.split("-").join(" ")
fs.writeFileSync('challenge5/info.txt', noSpaces)
console.log(noSpaces)

//noSpaces = noSpaces.replace(/-/g, " ")

//challenge6 Display all files that end with ".txt". Don't hard code the file names!
let files = fs.readdirSync('challenge6');
for(let i=0; i<files.length; i++){
  if(files[i].endsWith(".txt")){
    console.log(files[i])
  }
}
