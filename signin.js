const b = document.getElementById('back')
const btn = document.getElementById('submit')
const pwd=document.getElementById('password')
const eml=document.getElementById('email')
const err = document.getElementById('err')
b.onclick=()=>{
window.location="https://0cd1-2409-4063-2190-60f8-b0c9-693b-cee8-c4bb.ngrok.io"
}
btn.onclick=()=>{

if(pwd.value.toString()!=""&&pwd.value.toString()!=null){
if(eml.value.toString()!=""&&eml.value.toString()!=null){
	if(eml.value.toString().includes('@')){
	var usrdata=[{pwd:pwd.value.toString(),eml:eml.value.toString()}]
$.ajax({
type:"POST",	
url:'/login',
data:	JSON.stringify(usrdata),
success: (res)=>{
localStorage.setItem('man',res.toString())
window.location.href='/'
}    ,
contentType:"application/json"
})

}
else{err.innerText="Please enter a valid email"}
}
else{err.innerText="Please enter email"}
}
else{err.innerText="Please enter password"}
}
