function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

// offset - propiedad solo lectura, lo estamos poniendo pa que no se salga de la pantalla
 
let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let modoInventor = document.getElementsByClassName("modoinventor")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('We know it 👿👿')

    modoInventor.style.display = 'block';
    const cancion = new Audio('img\\Ding A ling.mp3');
    cancion.play();
});

// 1 45 56