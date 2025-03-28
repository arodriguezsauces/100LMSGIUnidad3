var titulo = document.getElementById("titulo")
var par = document.getElementsByClassName("parrafo")
var body = document.getElementById("cuerpo")

titulo.innerText= "Nuevo Titulo"
par[0].innerText = "Parrafo 1 modificado"
par[1].innerText = "Parrafo 2 modificado"
par[2].innerText = "Parrafo 3 modificado"

par[0].outerHTML = "<div>Parrafo 1 modificado</div>"

body.style.backgroundColor="#f4f4f4"
body.style.textAlign="center"

titulo.style.color="#333"
titulo.style.textTransform="uppercase"


par.style.size="18px"

par[0].style.color="#f4f4f4"
par[0].style.backgroundColor="#ffe6e6"
par[0].style.border=""
par[1]
par[2]