var contenedor = document.getElementById('dark-contenedor')
var boton = document.getElementById('botonaso');
var body = document.getElementById('bott')
var conteiner = document.getElementById('cardib')

boton.addEventListener("click", function() {
    if (boton.classList.contains("btn-light")) {
      boton.classList.remove("btn-light");
      boton.classList.add("darkmode");
      body.classList.add("darkbody");
      contenedor.classList.add("darkcont");
      conteiner.classList.add('darkcard')


    } else {
      boton.classList.remove("darkmode");
      boton.classList.add("btn-light");
      contenedor.classList.remove("darkcont");
      body.classList.remove("darkbody");
      conteiner.classList.remove('darkcard')
    }
  });











// boton.addEventListener("click",function(){
//     if (boton.classList.contains('darkmode')) {
//         boton.classList.remove('darkmode')
//     }
// })
