//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Funcion de ajuste del menu
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const navbar = document.getElementById('navbar');
const navbarButton = document.getElementById('navbarButton');
const contMenu = document.getElementById('contMenu');
let prevScrollPos = window.pageYOffset;
var menuHeight = navbar.style.height;
let navbarHeight = navbar.clientHeight; // Inicialización de navbarHeight
let retractHeight = 0.95 * navbarHeight;

// Obtener el elemento con el id "C4"
var elementoCenter = document.getElementById('mostrar_tabla');
var elementoV1 = document.getElementById('V1');
var elementoC1 = document.getElementById('C1');

// Función para calcular la altura de la barra de navegación y actualizar los valores
function updateNavbarHeight() {
	navbarHeight = navbar.clientHeight;
    retractHeight = 0.95 * navbarHeight;
    contMenu.style.height = navbarHeight + 'px';
    document.getElementById('navbarHeightValue').textContent = navbarHeight;
    document.getElementById('retractHeightValue').textContent = retractHeight;

	arrowDarw ();
	
}

// Llamada inicial a la función para establecer los valores
updateNavbarHeight();

// Listener para el evento resize
window.addEventListener('resize', updateNavbarHeight);

window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
		navbar.style.top = '0';
	} else {
		navbar.style.top = `-${navbarHeight}px`;
	}
	prevScrollPos = currentScrollPos;
};

navbarButton.addEventListener('mouseenter', function() {
	navbar.style.top = '0';
});

navbar.addEventListener('mouseleave', function() {
	navbar.style.top = `-${navbarHeight}px`;
});

function scrollToSection(sectionId) {
	var section = document.getElementById(sectionId);
	var sectionTop = section.offsetTop - navbarHeight - 15;
	window.scrollTo({top: sectionTop, behavior: 'smooth'});
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Funcion de generacion de la Flecha
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function arrowDarw () {



	var input = document.getElementById('inputNum').value;

	// Obtener la posición del elemento con respecto al viewport
	var posCenter = elementoCenter.getBoundingClientRect();
	var posicionV1 = elementoV1.getBoundingClientRect();
	var posicionC1 = elementoC1.getBoundingClientRect();

	// La posición incluye propiedades como top, bottom, left, right, width y height
	var posCenterLeft = posCenter.left
	var posicionV1Left = posicionV1.left;
	var posicionC1Left = posicionC1.left;
	var widthV1 = posicionV1.width;
	var widthC1 = posicionC1.width;
	

	// posicion de la felcha
	var lengFlecha = (( widthV1 + widthC1 ) * input ) + 4;
	var iniFlecha = posicionV1Left - posCenterLeft + ( widthV1 + widthC1/2 ) - 5;
	var posFlecha = iniFlecha + lengFlecha - 9;

	//valores en las variables
	flechaUp.style.setProperty("--leftFUp", posFlecha + "px");
	colaF.style.setProperty("--leftCola", iniFlecha + "px");
	colaF.style.setProperty("--widthCola", lengFlecha + "px");
	colaFL.style.setProperty("--leftCola", iniFlecha + "px");
	colaFL.style.setProperty("--widthCola", lengFlecha + "px");


	//impresion de valores
	document.getElementById('leftCenter').innerHTML=('Posición de la tabla: ' + posCenterLeft);
	document.getElementById('leftV1').innerHTML=('Posición left V1: ' + posicionV1Left);
	document.getElementById('leftC1').innerHTML=('Posición left C5: ' + posicionC1Left);
	document.getElementById('AnchoV1').innerHTML=('Ancho V1: ' + widthV1);
	document.getElementById('AnchoC1').innerHTML=('Ancho C1: ' + widthC1);

	document.getElementById('inputDruck').innerHTML=('Numero de espacios: ' + input);
}