
        async function jaaw(){await
        $.getScript('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js').then(
        await $.getScript('https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js')).then(

        await $.getScript('https://www.gstatic.com/firebasejs/8.4.1/firebase-auth.js')).then(

        await $.getScript('https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js')).then(
        await $.getScript('https://www.gstatic.com/firebasejs/8.4.1/firebase-analytics.js')).then(()=>{
      

          var firebaseConfig = {
              apiKey: "AIzaSyDIL2XOa-EjSkekiz9HbUBuylD3OedmSFM",
              authDomain: "bestfriendforevr-ccbac.firebaseapp.com",
              projectId: "bestfriendforevr-ccbac",
              storageBucket: "bestfriendforevr-ccbac.appspot.com",
              messagingSenderId: "404608700088",
              appId: "1:404608700088:web:a7fb3b67ad14e07e2d2e4d",
              measurementId: "G-VXWW2SNS34"
            }
           const app= firebase.initializeApp(firebaseConfig)
            firebase.analytics()
          const socket= io(window.location.href.toString())
          var date = new Date()
          const message = document.getElementById('messages')
          const send = document.getElementById('sendbtn')
          const selfmsg = document.getElementById("selfmsg")
          const chatbox = document.getElementById("chat-box")
          const namesubmit=document.getElementById('namesubmit')
          const popup=document.getElementById('ppup')
          const UsersName=document.getElementById('UsersName')
          const likodiv=document.getElementById('likodiv')
          var NAME
          var nameP
          var msgGrp= [{msg:' I love you',icon:'far fa-heart'},
{msg:"I like you  ",icon:'far fa-grin-hearts'},{msg:"you're cool ",icon:'far fa-grin-stars'},
{msg:" Nice, talking to you ",icon:'far fa-grin-beam'},{msg:" you're ok",icon:' far fa-grin'},
{msg:"you're weird   ",icon:'far fa-grin-beam-sweat'},{msg:"  you're boring  ",icon:'far fa-meh '},
{msg:"  i'm not having good time ",icon:'far fa-frown-open '},{msg:"  you're worst ",
icon:'far fa-angry'}
]

          const likostar=document.getElementById('likostar')
          const likometer=document.getElementById('likometer')
          const connmsg=document.getElementById('connmsg')
          const username=document.getElementById('username')
          const sendicon=document.getElementById('sendicon')
          const msgconnected=document.getElementById('msgconnected')
          const usy=document.getElementById('usersGrp')
          const leavebtn= document.getElementById('leavebtn')
          // const imgname=document.getElementById("imgname")
          // imgname.style.marginTop=$('#maindiv').height()+'px'
usy.onclick=()=>{
  if(usy.style.color=='white'){
    usy.style.color='rgb(7,58,500)'
msgconnected.style.visibility='visible'
connmsg.style.visibility='visible'
  }
  else{
    usy.style.color='white'
    msgconnected.style.visibility='hidden'
  }
}
        //  const boldicon=document.getElementById('bold')
        likometer.onclick=()=>{
        
          likodiv.style.border='rgb(17,17,17)'
          if(likometer.style.backgroundColor=='rgb(17, 17, 17)'){
            likometer.style.border='1.5px solid rgb(7,58,600)'
            $('#likodiv').children().remove()
            likodiv.style.overflowY='hidden'
          likometer.style.backgroundColor="black"
        likodiv.style.visibility='visible'
        firebase.firestore().doc(window.location.pathname.substring(1).toString()).get().then(grp=>{
          $('#likodiv').children().remove()
          if(grp.data().users.length>=7){
            likodiv.style.overflowY='scroll'
          }
   
          grp.data().users.forEach(item=>{
            var usersingrp = document.createElement('div')
            usersingrp.setAttribute('id','likodivitems')
            usersingrp.innerText=item
            likodiv.append(usersingrp)
          })
        }).then(()=>{
          likodiv.style.border='2px solid rgb(7,58,699)'
          const likodivitems=document.querySelectorAll('#likodivitems')
          likodivitems.forEach(item=>item.onclick=(e)=>{
nameP=e.target.textContent
console.log(nameP)
$('#likodiv').children().remove()
likodiv.style.cssText+='overflow-y: scroll ;scrollbar-color:rgb(7, 58, 146) #333333;scrollbar-width: thin'
var heart=document.createElement('div')
heart.innerHTML="<i   class='far fa-heart' style='font-size:18px;color:red'>"+'<span style="color:white;font-size:1rem">'+" I love you"+'</span>'+"</i>"
likodiv.append(heart)
var smiley=document.createElement('div')
smiley.innerHTML="<i   class='far fa-grin-hearts' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+" I like you"+'</span>'+"</i>"
likodiv.append(smiley)
var star=document.createElement('div')
star.innerHTML="<i   class='far fa-grin-stars' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+" you're cool"+'</span>'+"</i>"
likodiv.append(star)
var good=document.createElement('div')
good.innerHTML="<i   class='far fa-grin-beam' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+"  Nice, talking to you"+'</span>'+"</i>"
likodiv.append(good)
var normal=document.createElement('div')
normal.innerHTML="<i   class='far fa-grin' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+" you're ok"+'</span>'+"</i>"
likodiv.append(normal)
var awkward=document.createElement('div')
awkward.innerHTML="<i   class='far fa-grin-beam-sweat' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+" you're weird"+'</span>'+"</i>"
likodiv.append(awkward)
var bore=document.createElement('div')
bore.innerHTML="<i   class='far fa-meh ' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+" you're boring"+'</span>'+"</i>"
likodiv.append(bore)
var bad=document.createElement('div')
bad.innerHTML="<i   class='far fa-frown-open ' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+" i'm not having good time"+'</span>'+"</i>"
likodiv.append(bad)
var worst=document.createElement('div')
worst.innerHTML="<i   class='far fa-angry ' style='font-size:18px;color:yellow'>"+'<span style="color:white;font-size:1rem">'+" you're worst"+'</span>'+"</i>"
likodiv.append(worst)
var h=[worst,awkward,good,star,heart,bore,bad,smiley,normal]
h.forEach(item=>{
  item.setAttribute('id','likodivmsg')
})
 var likodivmsg=document.querySelectorAll('#likodivmsg')
          likodivmsg.forEach(item=>item.onclick=(e)=>{
var namePa=e.target.innerText
likometer.onclick()
console.log(namePa)
socket.emit('liko',nameP,namePa,window.location.pathname.substring(1).toString(),NAME)
//    Sent
/*var s = document.getElementById('ssent')
s.style.visibility='visible'
s.innerText='Sent'
$('#ssent').slideUp(500)
$('#ssent').delay(10000).slideDown(1000,'linear')*/
//   /Sent
})
  /* const likodivitemsmsg=document.getElementById('likodivitems')
          likodivitemsmsg.onclick=(e)=>{
var namePa=e.target.textContent
console.log(namePa)
}*/
})
       }).then(()=>{
       
       })
        }
          else{
            likometer.style.backgroundColor='rgb(17, 17, 17)'
            likodiv.style.visibility='hidden'
            likometer.style.border='black'
          }
        }
            message.contentEditable='true'
          const db = firebase.firestore()
          var bold
          message.style.overflowY='hidden'
          sendicon.onclick=()=>{return send.onclick()}
         /* boldicon.onclick=()=>{   
              boldicon.style.color="rgb(7, 58, 146)"
            document.execCommand('bold',false,null)
            bold=true
            console.log(message.style.fontWeight)
          }
          */
          var grpnme=['funny','savage','entertainer','intelligent']
          namesubmit.onclick=()=>{
              NAME=username.value.toString()
          if(NAME!=""&&NAME!=null){
          if(NAME.length<=10){
              console.log(NAME,window.location.pathname.substring(1))
              console.log(location)
              socket.emit('name',NAME,location)
              db.doc(window.location.pathname.substring(1).toString()).get().then((data)=>{
                if(!data.data().users){
                  db.doc(window.location.pathname.substring(1).toString()).set({
                    limit:data.data().limit,
                users: firebase.firestore.FieldValue.arrayUnion(NAME)}
              )}
              else{
                db.doc(window.location.pathname.substring(1).toString()).update({
                users: firebase.firestore.FieldValue.arrayUnion(NAME)})
              }
              }
              )
              var connmsg=document.createElement('div')
              connmsg.setAttribute('id','connmsg')
              connmsg.innerHTML='<span id="nameofusr">'+'You'+'</span>'+'<span id="connected"style="color:green">'+' connected'+'</span>'
              msgconnected.append(connmsg)
              socket.emit('usrconnected',NAME)
          popup.remove()
          UsersName.remove()}
          else{alert('Name too big')}
          }
          else(alert("Please Enter your Name"))
          }
          message.addEventListener('focus',()=>{
              message.style.borderBottom="3px solid rgb(7, 58, 146)"
              message.classList.add('removebefore')
              message.style.overflowY='hidden'
              setInterval(()=>{
if (message.style.height=='100px'){
  message.style.overflowY='scroll'
}},200)
              })
              message.onkeypress=(e)=>{
               if(e.keyCode==13){
                 message.style.height="18px"
                return send.onclick()
               }
               if(e.keyCode==32){
                 if(message.textContent.length==80){
                 message.style.height="auto"

                 }
              //  message.style.height="auto"
               }
              }
          
function matari(){
  for(let a=0;a<filebtn.files.length;a++){
    if (filebtn.files[a].name.endsWith('.jpg')||filebtn.files[a].name.endsWith('.jpeg')||filebtn.files[a].name.endsWith('.png')){
             socket.emit('photo',filebtn.files[a].name,NAME)
                                }else{ alert("File type isn\'t supported. ")}              }
  form.reset()
  
}
          send.onclick=()=>{
              var messageval=message.textContent.toString()
       if(messageval!=""&&messageval!=null){
          socket.emit('message-click',messageval,NAME)
          message.textContent=''
          $('$messages').focus()
        }
          }
          socket.on('appendimg',(imgsrc,na)=>{
            let mmsg=document.createElement('img')
            console.log('hiimg')
              // mymsg.innerHTML+=' '+'<span id="time">'+new Date().getHours()+':'+new Date().getMinutes()+'</span>'
              mmsg.className="selfmsg"
              mmsg.id='myimg'
              mmsg.src='https://0cd1-2409-4063-2190-60f8-b0c9-693b-cee8-c4bb.ngrok.io/filea/'+imgsrc
              mmsg.style.visibility="visible"
              mmsg.style.width="auto"
              mmsg.style.height="auto"
          mmsg.onclick=(e)=>{
            // $.fileDownload(e.target.src).done(()=>console.log('done').fail(()=>{}))
            var s =document.createElement('a')
              sjh=e.target.src
              console.log(sjh)
              s.download=sjh
              s.style.display="none"
              s.id="gygy"
              s.href=sjh
              document.body.append(s)
              s.click()
        }
             
              chatbox.append(mmsg)
              chatbox.scrollTo(0,10000000)
              // chatbox.scroll(0,10000)
           })
           socket.on('appendfimg',(imgsrc,na)=>{
            let senmsg=   document.createElement('img')
          // sentmsg.innerHTML+=othrmsg+'<span id="senderDetails">'+" "+'<br />'+na+' | '+new Date().getHours()+':'+new Date().getMinutes()+'</span>'
          senmsg.className="chatmsg"
          senmsg.id='othrimg'
          senmsg.src='https://0cd1-2409-4063-2190-60f8-b0c9-693b-cee8-c4bb.ngrok.io/filea/'+imgsrc
          senmsg.style.visibility="visible"
          senmsg.onclick=(e)=>{
            // $.fileDownload(e.target.src).done(()=>console.log('done').fail(()=>{}))
            var s =document.createElement('a')
              sjh=e.target.src
              console.log(sjh)
              s.download=sjh
              s.style.display="none"
              s.id="gygy"
              s.href=sjh
              document.body.append(s)
              s.click()
        }
             
          chatbox.append(senmsg)
          // senmsg.onclick=(e)=>{$.fileDownload(e.target.src).done(()=>console.log('done').fail(()=>{}))}
          console.log($(senmsg).height())
   //       chatbox.scrollTo(0,100000)
          chatbox.scrollTo(0,10000)
          // chatbox.scroll(0,10000)
           })
          socket.on('test',k=>{
              console.log(k)
              $('#loading').addClass('rmload')
          })
          socket.on('appendusrconn',usr=>{
            var nmsg=document.createElement('div')
              nmsg.setAttribute('id','connmsg')
              nmsg.innerHTML='<span id="nameofusr">'+usr+'</span>'+'<span id="connected" style="color:green">'+' connected'+'</span>'
              msgconnected.append(nmsg)
          })
          socket.on('rmvusrnoti',data=>{
            var nmasg=document.createElement('div')
              nmasg.setAttribute('id','connmsg')
              nmasg.innerHTML='<span id="nameofusr">'+data+'</span>'+'<span id="connected" style="color:red">'+' disconnected'+'</span>'
              msgconnected.append(nmasg)
          })
          socket.on('displaymsg',msg=>{
              var mymsg=document.createElement('div')
              mymsg.innerHTML=msg+' '+'<span id="time">'+new Date().getHours()+':'+new Date().getMinutes()+'</span>'
              mymsg.className="selfmsg"
              mymsg.style.visibility="visible"
              chatbox.append(mymsg)
              chatbox.scrollTo(0,100000)
          })
          var location=window.location.pathname
       //   console.log(location)
          leavebtn.onclick=()=>{
            leavebtn.disabled=true
            socket.emit('removeusr',location,NAME)
          }
          socket.on('userremoved',()=>{
            window.location.href="/"
          })
          
     /*     function usrremove(NAE){
            var indexof=location.indexOf('/')+1
  var lastindexof=location.lastIndexOf('/')+1
  var doc=location.substring(lastindexof).toString()
  var col=location.substring(indexof,lastindexof-1).toString()
  db.collection(col).doc(doc).update({
  users:firebase.firestore.FieldValue.arrayRemove(NAE)
        }).then(()=>{
          window.location.href="/"
        })
      }*/
      /*socket.on('disconnect',()=>{
usrremove(NAME)
      })*/
      
      socket.on('likomsg',(person,msga,senderName)=>{
      
        if(person==NAME){
          var likomsa=document.createElement('div')
        likomsa.setAttribute('id','likostarcon')
       var i=msgGrp.find(item=>item.msg.includes(msga))
        likomsa.innerHTML='<i class="'+i.icon+'"  style="font-size:18px;color:yellow"' + '</i>'+'<span style="color:white;font-size:.85rem">'+" "+ msga+'</span>'+" - "+'<span id="sendername">'+senderName+'</span>'
        likostardiv.append(likomsa)
       console.log( ($(likostardiv).height()/window.screen.height)*100)
         if(($(likostardiv).height()/window.screen.height)*100>=14){
           likostardiv.style.overflowY='scroll'
         }     
      }
      })
      const likostardiv=document.getElementById('likostardiv')
      likostar.onclick=()=>{
        if(likostar.style.color=='white'){
        likostar.style.color='rgb(7,58,300)'
        likostardiv.style.visibility='visible'
        likostardiv.style.border="1.5px solid rgb(7,58,200)"
        }
        else{
          likostar.style.color='white'
          likostardiv.style.visibility='hidden'
          likostardiv.style.border="0px solid rgb(17,17,17)"
        }
      }
          socket.on('displayothrmsg',(othrmsg,name)=>{
          var sentmsg=   document.createElement('div')
          sentmsg.innerHTML=othrmsg+'<span id="senderDetails">'+" "+'<br />'+name+' | '+new Date().getHours()+':'+new Date().getMinutes()+'</span>'
          sentmsg.className="chatmsg"
          sentmsg.style.visibility="visible"
          chatbox.append(sentmsg)
          console.log($(sentmsg).height())
   //       chatbox.scrollTo(0,100000)
          chatbox.scrollTo(0,1000000)
        })
        var form = document.getElementById('fileform')
        var filebtn=document.getElementById('filebtn')
        var mbtn=document.getElementById("imgicon")
        mbtn.onclick=()=>{
          return filebtn.click()
        }
        filebtn.onchange=()=>{
      //  let df=filebtn.files

for(var i=0;i<filebtn.files.length;i++){
  if (filebtn.files[i].name.endsWith('.jpg')||filebtn.files[i].name.endsWith('.jpeg')||filebtn.files[i].name.endsWith('.png')){
 sbtn.click()          
  // while(new Date().getSeconds!=new Date.getSeconds+4){}

}
else{
// return (alert('File Type isn\'t supported '))
}
}      
          
        

        }
        sbtn.onclick=(e)=>{
                       // document.querySelector('.progress-horizontal').style.visibility='visible'
                       var div = document.createElement('div')
                       div.className='progress-horizontal'
                       var kl = document.createElement('div')
                       kl.className='bar-horizontal'
                       div.append(kl)
                       document.body.append(div)
                       document.querySelector('.progress-horizontal').style.marginTop=$('#maindiv').height()+"px"
          e.preventDefault()
          console.log("A\n"+new FormData(form))
          $.ajax({
            type:"POST",
            url:"/file",
            // 'content-Type':"multipart/form-data",
            data:new FormData(form),
            beforeSend:()=>{
// document.querySelector('#imgname').style.visibility='hidden'
              // document.querySelector('.bar-horizontal').style.visibility='visible'
 
            },
            processData: false,
    contentType: false,
    success:(res)=>{
      console.log(res)
      if(res=='uploaded'){
        document.querySelector('.progress-horizontal').remove()
        // document.querySelector('#imgname').style.visibility='visible'

    matari() 
    }
  }
          })
          $('#imgname').children().remove()
        }
        
        })} 
        jaaw()
       
