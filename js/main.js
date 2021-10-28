var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = function(){
	document.getElementById('flipper').classList.toggle("flip");
}

registerButton.onclick = function(){
	document.getElementById('flipper').classList.toggle("flip");
}
// document.getElementById('flipper').addEventListener('click', animation())
// animation=function(){
// document.getElementById('title').classList.toggle()
// }