let coleccionfotos = ['./multimediaAdec/imgsociosadec.jpg ','./multimediaAdec/imgsociosadec2.jpg','./multimediaAdec/imgsociosadec3.jpg']
let posicion = 0
let intervalo
let interruptor = false

function muestraImg(id) {

    let img = document.getElementById('img_galeria')
    img.src = './multimediaAdec/imgsociosadec.jpg'
    document.getElementById('divimg_galeria').style.display = "flex"
    document.getElementById('botones_mini').style.display = "flex"
    document.getElementById('boton_inicio').style.display = "none"
}

function cambiaImg(num) {
    let img = document.getElementById('img_galeria')

    posicion = posicion + num

    if (posicion < 0) {
        posicion = coleccionfotos.length - 1 //asi podriamos saber cuantos hay dentro del array, sacar la longitud y quitarle el de la cuenta del cero con el menos uno
    }
    if (posicion >= coleccionfotos.length) {
        posicion = 0
    }

    img.src = coleccionfotos[posicion]
}

function fotoDirecta(pos) {
    //falta poner filtros para que no tenga errores
    let img = document.getElementById('img_galeria')
    img.src = coleccionfotos[pos]
    posicion = pos //para seguir con la misma caja para el resto
}


function carruselFotos() {
    //hace falta poner un stop
    //bajo hacemos que no le puedan dar varias veces al auto y evitar que se acumulen y exploten.De esta manera solo se acumula una vez
    //document.getElementById("img_galeria").addEventListener("click", clearInterval(intervalo))

    if (interruptor == false) {
       
       document.getElementById('flecha_der').style.zIndex="-3"
       document.getElementById('icon_img1').style.zIndex="-3"
       document.getElementById('flecha_iz').style.zIndex="-3"
       document.getElementById('icon_img2').style.zIndex="-3"
       document.getElementById('icon_img3').style.zIndex="-3"
       document.getElementById('divimg_galeria').style.width="40rem"
       intervalo = setInterval(() => {
            cambiaImg(1)
        }, 2000);
        interruptor = true
    }
    else {
       
       document.getElementById('flecha_der').style.zIndex="0"
       document.getElementById('icon_img1').style.zIndex="0"
       document.getElementById('flecha_iz').style.zIndex="0"
       document.getElementById('icon_img2').style.zIndex="0"
       document.getElementById('icon_img3').style.zIndex="0"
       document.getElementById('divimg_galeria').style.width="20rem"
        clearInterval(intervalo)

        interruptor=false
    }
}