var titulo = document.getElementById("titulo");
var  parrafos = document.querySelectorAll(".parrafo");
var  cuerpo = document.getElementById("cuerpo");
var btn1 = document.getElementById("boton1");
var btn2 = document.getElementById("boton2");
var btn3 = document.getElementById("boton3");

// Modificar el título
titulo.textContent = "Nuevo Título"; 
titulo.style.color = "#333";  
titulo.style.fontWeight = "bold";  
titulo.style.marginBottom = "15px";  
titulo.style.textTransform = "uppercase";  

// Modificar los párrafos
// Modificar el primer párrafo
parrafos[0].textContent = "Este es el parrafo 1 con un nuevo texto.";
parrafos[0].style.color = "#e74c3c";  
parrafos[0].style.backgroundColor = "#ffe6e6";  
parrafos[0].style.borderLeft = "5px solid #c0392b";  
parrafos[0].style.borderRadius = "5px";  
parrafos[0].style.lineHeight = "1.6";  
parrafos[0].style.fontSize = "18px";  
parrafos[0].style.padding = "10px";  
parrafos[0].style.width = "60%";  
// Modificar el segundo párrafo
parrafos[1].textContent = "Este es el parrafo 2 con otro texto distinto.";
parrafos[1].style.color = "#2ecc71";
parrafos[1].style.backgroundColor = "#eaffea"; 
parrafos[1].style.borderLeft = "5px solid #27ea60";  
parrafos[1].style.borderRadius = "5px";  
parrafos[1].style.lineHeight = "1.6";  
parrafos[1].style.fontSize = "18px";  
parrafos[1].style.padding = "10px";  
parrafos[1].style.width = "60%";  
// Modificar el tercer párrafo
parrafos[2].textContent = "Este es el parrafo 3 con un tercer texto diferente.";
parrafos[2].style.color = "#3498db";  
parrafos[2].style.backgroundColor = "#e6f2ff";
parrafos[2].style.borderLeft = "5px solid #2980b9";  
parrafos[2].style.borderRadius = "5px";  
parrafos[2].style.lineHeight = "1.6";  
parrafos[2].style.fontSize = "18px";  
parrafos[2].style.padding = "10px";  
parrafos[2].style.width = "60%";  
// Modificar el cuerpo
cuerpo.style.backgroundColor = "#f4f4f4";
cuerpo.style.textAlign = "center";
cuerpo.style.display = "flex";
cuerpo.style.flexDirection = "column";
cuerpo.style.alignItems = "center";
cuerpo.style.justifyContent = "center";

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("boton 1").addEventListener("click", saludar);
    document.getElementById("boton 2").addEventListener("click", cambiarColor);
    document.getElementById("boton 3").addEventListener("click", cambiarParrafos);

    function saludar() {
        alert("Hola");
      }
    
      function cambiarColor() {
        document.body.style.backgroundColor = "black";
        const titulo = document.getElementById("titulo");
        titulo.textContent = "UD3.1 DOCUMENT OBJECT MODEL";
        titulo.style.color = "white";
      }
    
      function cambiarParrafos() {
        document.body.style.fontSize = "20px";
        document.body.style.letterSpacing = "2px";
        document.body.style.transform = "rotate(1deg)";
        document.body.style.fontWeight = "bold";
      }
});