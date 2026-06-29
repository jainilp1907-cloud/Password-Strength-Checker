const password = document.getElementById("password");

password.addEventListener("input", checkPassword);

function checkPassword(){

let pass = password.value;
let strength = 0;

if(pass.length>=8){
document.getElementById("length").innerHTML="✅ Minimum 8 Characters";
strength++;
}else{
document.getElementById("length").innerHTML="❌ Minimum 8 Characters";
}

if(/[A-Z]/.test(pass)){
document.getElementById("upper").innerHTML="✅ Uppercase Letter";
strength++;
}else{
document.getElementById("upper").innerHTML="❌ Uppercase Letter";
}

if(/[a-z]/.test(pass)){
document.getElementById("lower").innerHTML="✅ Lowercase Letter";
strength++;
}else{
document.getElementById("lower").innerHTML="❌ Lowercase Letter";
}

if(/[0-9]/.test(pass)){
document.getElementById("number").innerHTML="✅ Number";
strength++;
}else{
document.getElementById("number").innerHTML="❌ Number";
}

if(/[!@#$%^&*(),.?":{}|<>]/.test(pass)){
document.getElementById("special").innerHTML="✅ Special Character";
strength++;
}else{
document.getElementById("special").innerHTML="❌ Special Character";
}

let bar=document.getElementById("bar");
let text=document.getElementById("strength");

if(strength<=2){
bar.style.width="33%";
bar.style.background="red";
text.innerHTML="Strength : Weak";
}
else if(strength<=4){
bar.style.width="66%";
bar.style.background="orange";
text.innerHTML="Strength : Medium";
}
else{
bar.style.width="100%";
bar.style.background="green";
text.innerHTML="Strength : Strong";
}
}

function togglePassword(){

if(password.type==="password"){
password.type="text";
}
else{
password.type="password";
}

}