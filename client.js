const firebaseConfig = {
    apiKey: "AIzaSyDIL2XOa-EjSkekiz9HbUBuylD3OedmSFM",
    authDomain: "bestfriendforevr-ccbac.firebaseapp.com",
    projectId: "bestfriendforevr-ccbac",
    storageBucket: "bestfriendforevr-ccbac.appspot.com",
    messagingSenderId: "404608700088",
    appId: "1:404608700088:web:a7fb3b67ad14e07e2d2e4d",
    measurementId: "G-VXWW2SNS34"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var checkusr= ()=> {
  	if(localStorage.getItem('man')!=null){
var checkdata={man:localStorage.getItem('man')}
$.ajax({
	type:"POST",
	url:'/check',
	data:checkdata,
	success:(res)=>{
	document.getElementById('bluee').innerText='H'
		document.getElementById('normal').innerText='i,'
			document.getElementById('bluee2').innerText=res.substring(0,1)
				document.getElementById('normal2').innerText=res.substring(1)
				loginbtn.innerText='Logout'
				logbtn2.innerText='Logout'
	}   ,
	
})    
    }}
    checkusr()
const cat_div = document.getElementById('lll')
const funny= document.getElementById('funny')
const entertainer = document.getElementById('Entertainer')
const intelligent = document.getElementById('Intelligent')
const savage = document.getElementById('Savage')
const conthead=document.getElementById('cont-head')
const crtbtn=document.getElementById('createbtn')
const grpname=document.getElementById('grp-names')
const alpo = document.getElementById('chkbox')
const usrgrw=document.getElementById("usrgrpnm")
var othergrp=[]
const loginuser=document.getElementById('loginuser')
const loginbtn=document.getElementById("logbtn")
const bffdiv=document.getElementById("bffdiv")
const searchbar=document.getElementById('search-bar')
const searchicon=document.getElementById('searchicon')
const plane = document.getElementById('plane')
const logbtn2=document.getElementById('logbtn2')
var searchcst
const db= firebase.firestore()
const socket=io(window.location.href.toString())
var limitn
function logen2(){
    if( logbtn2.innerText=="Login"){
   window.location.href='/login'
    }
else if( logbtn2.innerText=="Logout"){
     localStorage.removeItem('man')
logbtn2.innerText="Login"
document.getElementById('loggedUser').remove()
    }
}
function logen(){
    if( loginbtn.innerText=="Login"){
    window.location.href='/login'
    }
else if( loginbtn.innerText=="Logout"){
    localStorage.removeItem('man')
    document.getElementById('loggedUser').remove()
    loginbtn.innerText="Login"
    }
}
funny.onclick=()=>{
    savage.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    entertainer.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    intelligent.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    funny.style.backgroundImage= " linear-gradient(165deg,black 42%, rgb(7, 58, 146), rgb(7, 58, 146))"
    conthead.innerText="Funny"
    crtbtn.style.visibility='visible'
    searchbar.style.visibility='visible'
    searchicon.style.visibility='visible'
    plane.style.visibility='hidden'
    searchcst='funny'
    grpname.textContent=''
    grpname.setAttribute('class','grp-ma')
    crtbtn.setAttribute('class','funnycat')
 
db.collection('funny').get().then(element=>element.forEach( doc => {

    if (doc.data().users){
    
         creategrp(doc.id.toString(),doc.data().limit,doc.data().users.length,'funny')
    }
        else{
             creategrp(doc.id.toString(),doc.data().limit,0,'funny')}
           
        
        })).then(()=>{
            document.querySelectorAll('#aman').forEach((grp)=>{
                if(grp.getAttribute('name')!='funny'){
                    grp.remove()
                }
            })
    const aman = document.querySelectorAll('#aman')
    aman.forEach(item=>item.onclick=(e)=>{
        console.log('ga' +e.target.innerText )
        window.location.href+='funny/'+e.target.className
    })
    })

}

entertainer.onclick=()=>{
  
    savage.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    funny.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    intelligent.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
   entertainer.style.backgroundImage= " linear-gradient(165deg,black 42%, rgb(7, 58, 146), rgb(7, 58, 146))"
   conthead.innerText="Entertainer"
   crtbtn.style.visibility='visible'
   searchbar.style.visibility='visible'
   plane.style.visibility='hidden'
   searchicon.style.visibility='visible'
   searchcst='entertainer'
   grpname.textContent=''
   grpname.setAttribute('class','grp-ma')
   crtbtn.setAttribute('class','entertainercat')
db.collection('entertainer').get().then(element=>element.forEach(async doc => {

    if (doc.data().users){
        return   creategrp(doc.id.toString(),doc.data().limit,doc.data().users.length,'entertainer')}
        else{
            return   creategrp(doc.id.toString(),doc.data().limit,0,'entertainer')}
            
})).then(()=>{
    document.querySelectorAll('#aman').forEach((grp)=>{
        if(grp.getAttribute('name')!='entertainer'){
            grp.remove()
        }
    })
    const aman = document.querySelectorAll('#aman')
    aman.forEach(item=>item.onclick=(e)=>{
        console.log('ga' +e.target.innerText )
        window.location.href+='entertainer/'+e.target.className
    })
    })
    
}
savage.onclick=()=>{
  
    entertainer.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    funny.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    intelligent.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    savage.style.backgroundImage= " linear-gradient(165deg,black 42%, rgb(7, 58, 146), rgb(7, 58, 146))"
    conthead.innerText="Savage"
    crtbtn.style.visibility='visible'
    plane.style.visibility='hidden'

    searchbar.style.visibility='visible'
    searchicon.style.visibility='visible'
    searchcst='savage'
    grpname.textContent=''
    grpname.setAttribute('class','grp-ma')
    crtbtn.setAttribute('class','savagecat')
db.collection('savage').get().then(element=>element.forEach(doc => {
    $(othergrp).empty()
        othergrp.push(doc.id)

     if (doc.data().users){
        return   creategrp(doc.id.toString(),doc.data().limit,doc.data().users.length,'savage')}
        else{
            return   creategrp(doc.id.toString(),doc.data().limit,0,'savage')}
        }
)).then(()=>{
    document.querySelectorAll('#aman').forEach((grp)=>{
        if(grp.getAttribute('name')!='savage'){
            grp.remove()
        }
    })
    const aman = document.querySelectorAll('#aman')
    aman.forEach(item=>item.onclick=(e)=>{
        console.log('ga' +e.target.innerText )
        window.location.href+='savage/'+e.target.className
    })
    })
 }
// intelligent.ondblclick=()=>{return intelligent.onclick()}
 intelligent.onclick=()=>{

    grpname.textContent=''
    savage.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    funny.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    entertainer.style.backgroundImage="linear-gradient(rgb(17,17,17),rgb(17,17,17)" 
    intelligent.style.backgroundImage= " linear-gradient(165deg,black 42%, rgb(7, 58, 146), rgb(7, 58, 146))"
    conthead.innerText="Intelligent"
    crtbtn.style.visibility='visible'  
    searchbar.style.visibility='visible'
    plane.style.visibility='hidden'
    
    searchicon.style.visibility='visible'
    searchcst='intelligent'
   
    grpname.setAttribute('class','grp-ma')
    crtbtn.setAttribute('class','intelligentcat')
db.collection('intelligent').get().then(element=>element.forEach(doc => {
    if (doc.data().users){
    return   creategrp(doc.id.toString(),doc.data().limit,doc.data().users.length,'intelligent')}
    else{
        return   creategrp(doc.id.toString(),doc.data().limit,0,'intelligent')}
    }
)).then(()=>{
    document.querySelectorAll('#aman').forEach((grp)=>{
        if(grp.getAttribute('name')!='intelligent'){
            grp.remove()
        }
    })
    const aman = document.querySelectorAll('#aman')
    aman.forEach(item=>item.onclick=(e)=>{
        console.log('ga' +e.className )
        window.location.href+='intelligent/'+e.target.className
    })
    })
}
 crtbtn.style.bottom='-140px'
 crtbtn.onclick=()=>{
     var backdiv=document.createElement('div')
     backdiv.style.cssText="position:fixed;top:0;bottom:0;left:0;right:0;z-index:2000;background-color:black;opacity:70%;align-items:center;justify-content:center"
var grpdetails=document.createElement('div')
grpdetails.setAttribute('id','grpdetails')
var hsg=document.createElement('label')
hsg.innerText="Enter group name"
hsg.setAttribute('id','usrgrpnm')
hsg.style.cssText="margin:1%;position:absolute;left:240px;border-bottom:6px solid  rgb(7, 58, 146);"
var usrgrp=document.createElement('input')
usrgrp.setAttribute('placeholder',"enter group name")
usrgrp.setAttribute('required',true)
usrgrp.setAttribute('id',"nnamegrp")
usrgrp.style.cssText="position:absolute;width:40%;left:190px;margin-top:45px;text-align:center;border-radius:20px"
var usernum=document.createElement('label')
usernum.innerText='Limit of group'
usernum.setAttribute('id','usernum')
usernum.style.cssText="position:relative;bottom:-30%;border-bottom:6px solid  rgb(7, 58, 146)"
var pplcheck11=document.createElement('label')
pplcheck11.innerText='2 people'
var pplcheck1 = document.createElement('input')
var pplcheck22=document.createElement('label')
pplcheck22.innerText='4 people'
var pplcheck2 = document.createElement('input')
var pplcheck33=document.createElement('label')
pplcheck33.innerText='6 people'
var pplcheck3 = document.createElement('input')
var pplcheck44=document.createElement('label')
pplcheck44.innerText='8 people'
var pplcheck4 = document.createElement('input')
var pplcheck55=document.createElement('label')
pplcheck55.innerText='10 people'
var pplcheck5 = document.createElement('input')
pplcheck1.setAttribute('type','checkbox')
pplcheck2.setAttribute('type','checkbox')
pplcheck3.setAttribute('type','checkbox')
pplcheck4.setAttribute('type','checkbox')
pplcheck5.setAttribute('type','checkbox')
pplcheck1.setAttribute('id','ceckbox')
pplcheck2.setAttribute('id','ceckbox')
pplcheck3.setAttribute('id','ceckbox')
pplcheck4.setAttribute('id','ceckbox')
pplcheck5.setAttribute('id','ceckbox')
pplcheck1.style.cssText="position:relative;bottom:-48%;margin:2%"
pplcheck2.style.cssText="position:relative;bottom:-48%;margin:2%"
pplcheck3.style.cssText="position:relative;bottom:-48%;margin:2%"
pplcheck4.style.cssText="position:relative;bottom:-48%;margin:2%"
pplcheck5.style.cssText="position:relative;bottom:-48%;margin:2%"
var chdiv=document.createElement('div')
chdiv.setAttribute('id','chdiv')
chdiv.append(pplcheck11,pplcheck1,pplcheck22,pplcheck2,pplcheck33,pplcheck3,pplcheck44,pplcheck4,pplcheck55,pplcheck5)
var cretbtn=document.createElement('button')
cretbtn.innerText='Create group'
cretbtn.style.bottom='-60%'
cretbtn.style.position="relative"
cretbtn.setAttribute('id','cretbitn')
var closebtn=document.createElement('button')
closebtn.setAttribute('id','closebtn')
closebtn.innerText='X'
closebtn.style.cssText="position:relative;background:0;color:red;right:-10%;bottom:-60%;border-radius:50px"
grpdetails.append(hsg,usrgrp,usernum,chdiv,cretbtn,closebtn)
//backdiv.append(grpdetails)
document.querySelector('body').append(backdiv)
document.querySelector('body').append(grpdetails)
pplcheck1.onclick=()=>{
        pplcheck2.checked=false
    pplcheck3.checked=false
    pplcheck4.checked=false
    pplcheck5.checked=false
    limitn = 2
}
pplcheck2.onclick=()=>{
pplcheck1.checked=false
    pplcheck3.checked=false
    pplcheck4.checked=false
    pplcheck5.checked=false
     limitn = 4
}
pplcheck3.onclick=()=>{
     pplcheck2.checked=false
    pplcheck1.checked=false
    pplcheck4.checked=false
    pplcheck5.checked=false

     limitn = 6
}
pplcheck4.onclick=()=>{
        pplcheck2.checked=false
    pplcheck1.checked=false
    pplcheck3.checked=false
    pplcheck5.checked=false
    limitn = 8
}
pplcheck5.onclick=()=>{
      pplcheck2.checked=false
    pplcheck1.checked=false
    pplcheck4.checked=false
    pplcheck3.checked=false
    limitn = 10
}
closebtn.addEventListener('click',()=>{
    backdiv.remove()
    grpdetails.remove()
})

cretbtn.onclick=()=>{
 grpdetails.remove()
 backdiv.remove()
 console.log(limitn)
 var groupnm=usrgrp.value.toString()
 if(groupnm.length==0){
     alert('enter group name')
    return crtbtn.onclick()
 }

 else if(limitn==null){
    alert('Select group limit')
    return crtbtn.onclick()
}
 else if(groupnm.length<=15){
 
 if(crtbtn.className=='funnycat'){
db.collection('funny').doc(groupnm).set({
   
    limit:limitn
}).then(()=>{return funny.onclick()})
}
else if(crtbtn.className=='intelligentcat'){
    db.collection('intelligent').doc(groupnm).set({
       
        limit:limitn
     
    }).then(()=>{return intelligent.onclick()})}
    else  if(crtbtn.className=='entertainercat'){
        db.collection('entertainer').doc(groupnm).set({
           
            limit:limitn
    
        }).then(()=>{return entertainer.onclick()})}
        else if(crtbtn.className=='savagecat'){
            db.collection('savage').doc(groupnm).set({
               
                limit:limitn
            }).then(()=>{return savage.onclick()})}
        }
        else{alert("Group name must be of less than 15 letters")
    return crtbtn.onclick()
    }
 }}

 function creategrp(kkal,limit,usrs,group){
     if(kkal==''){
         alert('Enter group name')
         return crtbtn.onclick()
     }else{
    var j = document.createElement('button')
    usrs=usrs||'0'
    if(usrs==limit){
        j.innerText=kkal+'\n'+usrs+' | '+limit+" Full"
        j.disabled=true
    }else{
    j.innerText=kkal+'\n'+usrs+' | '+limit}
    j.style.cssText='margin:2px;border-radius:10px'
j.setAttribute('id','aman')
j.setAttribute('name',group)
j.className=kkal
grpname.append(j)
}
 }
 var nogrp
 function searchgrp(){
     if(searchbar.value.toString()!=null||searchbar.value.toString()!=''){
db.collection(searchcst).get().then(groups=>{
          groups.forEach(doc=>{
  if(doc.id.includes(searchbar.value.toString())){
       console.log(doc.id)
       grpname.innerHTML=''
       creategrp(doc.id.toString(),doc.data().limit,doc.data().users.length,searchcst)
       
    const aman = document.querySelectorAll('#aman')
    aman.forEach(item=>item.onclick=(e)=>{
        console.log('ga' +e.target.innerText )
        window.location.href+='funny/'+e.target.className
    })
       nogrp=doc.id
       setTimeout(()=>nogrp='',500)
   }
   if(nogrp==null||nogrp==''){
    grpname.innerHTML=''
    grpname.innerText="No groups found"
}
}
    )
     })}
     else{
         stop()
     }
 }
 socket.on('usrLog',()=>{
 	console.log('loggedIn')})
