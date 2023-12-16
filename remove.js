const fs = require("fs")
fs.readdir(__dirname+'/filea',(err,item)=>{
    item.forEach(ads=>{
fs.unlink(`${__dirname}/filea/${ads}`,(err)=>{
    
})
    })
  })