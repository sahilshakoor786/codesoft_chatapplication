const b = document.getElementById('back')
const btn = document.getElementById('submit')
const usr=document.getElementById('username')
const pwd=document.getElementById('password')
const eml=document.getElementById('email')
const err = document.getElementById('err')
b.onclick=()=>{
window.location.href="https://0cd1-2409-4063-2190-60f8-b0c9-693b-cee8-c4bb.ngrok.io"
}
btn.onclick=()=>{

if(usr.value.toString()!=""&&usr.value.toString()!=null&&usr.value.toString().length>3){
if(pwd.value.toString()!=""&&pwd.value.toString()!=null&&pwd.value.toString().length>5){
if(eml.value.toString()!=""&&eml.value.toString()!=null){
	if(eml.value.toString().includes('@')&&eml.value.toString().length>7){
	var usrdata=[{pwd:pwd.value.toString(),usr:usr.value.toString(),eml:eml.value.toString()}]
$.ajax({
type:"POST",	
url:'/',
data:	JSON.stringify(usrdata),
success:()=>{window.location.href="https://0cd1-2409-4063-2190-60f8-b0c9-693b-cee8-c4bb.ngrok.io/login"} ,
contentType:"application/json"
})

}
else{err.innerText="Please enter a valid email "}
console.log(JSON.stringify(usrdata))
}
else{err.innerText="Please enter email"}
}
else{err.innerText="Please enter password of more than 6 characters"}
}
else{err.innerText="Please enter username of more than 3 characters"}
}