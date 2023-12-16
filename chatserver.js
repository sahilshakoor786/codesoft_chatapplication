const express=require('express')
const app = express()
const server=require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')
const fs = require('fs')
const r=require("uuid").v4
const mime = require('mime')
const multer=require('multer')
const cors=require('cors')
const bodyparser=require('body-parser')
var group = ['funny','savage','entertainer','intelligent']
app.use(express.static(__dirname+"/filea"))
var usrname
var docu=[]
var storage=multer.diskStorage({
  destination:(req,file,cb)=>{
cb(null,'filea')
  },
filename:(req,file,cb)=>{
var name=file.originalname
cb(null,name)
}
})
var upload= multer({storage:storage})
var verify=[]
var admin = require('firebase-admin');
// var firestore= require('@google-cloud/firestore')
//  var firestore=new firestore({
//   projectId:"bestfriendforevr-ccbac",
//   keyFilename: '/home/ayaan/Downloads/bestfriendforevr-ccbac-firebase-adminsdk-yljk2-5c50b598dd.json'
// })
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
app.use(cors({origin:
  ["https://0cd1-2409-4063-2190-60f8-b0c9-693b-cee8-c4bb.ngrok.io",'https://ajax.googleapis.com','https://kit.fontawesome.com','http://localhost:3000']}))
server.listen(3000).keepAliveTimeout=10000
app.set('view engine','ejs')
app.set('views','./')
app.use(express.static(path.join(__dirname)))
//app.use(express.static(__dirname))
app.set(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.render('index') 
    
})
//app.get('/socket.io/socket.io.js',(req,res)=>{
   // res.header({'Content-Type':'text/javascript'})
app.post('/',(req,res)=>{
	if(admin.firestore().collection('private').where('email','==',req.body[0].eml)){
	admin.firestore().collection('private').where('email','==',req.body[0].eml).get().then(asw=>{
		if(asw.size!=0){
		asw.forEach(item=>{
			
console.log(item.id)
})}else{
admin.firestore().collection('private').doc(req.body[0].eml).set({
usr:	req.body[0].usr,
pwd:req.body[0].pwd,
email:req.body[0].eml
	}).then(()=>console.log('success'))
console.log(req.body[0].pwd)
res.send('success!')
}
		}
		)
		}
	

})
//})
io.on('connection',(socket)=>{
socket.emit('test','connected')
socket.on('message-click',(data,name)=>{
    socket.emit('displaymsg',data)
    socket.to(docu[socket.id].substring(0,docu[socket.id].lastIndexOf('/'))).emit('displayothrmsg',data,name)
})
socket.on('usrconnected',data=>{
  socket.to(docu[socket.id].substring(0,docu[socket.id].lastIndexOf('/'))).emit('appendusrconn',data)
})
socket.on('liko',(person,msg,path,myname)=>{
  socket.to(path).emit('likomsg',person,msg,myname)
})
socket.on('photo',(imgarr,usrna)=>{
  console.log(imgarr)
  // for(var i=0;i<imgarr.length;i++){
    // console.log('b')
socket.emit('appendimg',imgarr,usrna)
socket.to(docu[socket.id].substring(0,docu[socket.id].lastIndexOf('/'))).emit('appendfimg',imgarr,usrna)
  // }
})
socket.on('removeusr',(location,NAME)=>{
  var indexof=location.indexOf('/')+1
  var lastindexof=location.lastIndexOf('/')+1
  var doc=location.substring(lastindexof).toString()
  col=location.substring(indexof,lastindexof-1).toString()
  admin.firestore().collection(col).doc(doc).update({
  users:admin.firestore.FieldValue.arrayRemove(NAME)
}).then(()=>{
  socket.emit('userremoved')
 // socket.to(docu[socket.id].substring(0,docu[socket.id].lastIndexOf('/'))).emit('rmvusrnoti',NAME)
})
})
socket.on('disconnect',()=>{
  var item =docu[socket.id]
  if(item==null||item==''){}
  else{
admin.firestore().doc(item.substring(0,item.lastIndexOf('/'))).update({
  users:admin.firestore.FieldValue.arrayRemove(item.substring(item.lastIndexOf('/')+1))
}).then(()=>{
  socket.to(docu[socket.id].substring(0,docu[socket.id].lastIndexOf('/')))
  .emit('rmvusrnoti',docu[socket.id].substring(docu[socket.id].lastIndexOf('/')+1))
})}
  })
socket.on('name',(name,location)=>{
  docu[socket.id]=location.substring(1)+'/'+name
  socket.join(location.substring(1))
})
})

app.get('/:group/:groupname',(req,res)=>{
  admin.firestore().collection(req.params.group).doc(req.params.groupname).get().then((doc)=>{
    if(doc.exists){
      if(doc.data().users){
        if(doc.data().limit>doc.data().users.length){
          res.render('chat',{GRPname:req.params.groupname})}
        else if( doc.data().limit<=doc.data().users.length){
          res.send('Group is full ')
      }
    }
      else {      
        res.render('chat',{GRPname:req.params.groupname})}
     
  
  }
    else
    { res.send('Group doesn`t exist')} 
  }
    )
})

app.get('/signup',(req,res)=>{
	res.sendFile(__dirname+'/signup.html')
})
app.get(('/login'),(req,res)=>{
res.sendFile(__dirname+'/login.html')
})
app.post(('/login'),(req,res)=>{
if(admin.firestore().collection('private').where('email','==',req.body[0].eml)){
	admin.firestore().collection('private').where('email','==',req.body[0].eml).get().then(asw=>{
		if(asw.size!=0){
		asw.forEach(item=>{			
		if(item.data().pwd==req.body[0].pwd){
console.log('success')
var a=Math.random().toString()
console.log(a)
verify.push({usrMail:item.data().email,username:item.data().usr,man:a})
res.send(a)
}else{res.send('Wrong email or password')}
})}else{
res.send('No user exists!')
}
		}
		)
		}
	
})
setInterval(()=>{
  group.forEach(data=>{
    admin.firestore().collection(data).get().then((doc)=>{
      doc.forEach((item)=>{
        if (item.data().users){
          if(item.data().users.length==0){
          setInterval(()=>{
            if (item.data().users.length==0){
              admin.firestore().collection(data).doc(item.id).delete()
            }
          },180000)
        }
        }
        else {
         if(!item.data().users){
           setInterval(()=>{
             if(!item.data().users){
               admin.firestore().collection(data).doc(item.id).delete()
             }
           },180000)
         }

        }
      })
    })
  })
},300000)
app.post('/check',(req,res)=>{
	verify.forEach(item=>{
if(item.man==req.body.man)	{
res.send(item.username)
}
	})
	})
  app.post("/file",upload.array('files'),(req,res)=>{
    fs.readdir(__dirname+'/filea',(err,item)=>{
      item.forEach(ads=>{
console.log(ads)
        if(ads.toString()== req.files[req.files.length-1].originalname.toString()){
    res.status(200).send('uploaded')
        }
      })
    })
  })