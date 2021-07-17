/*
_Abrir el archivo evaluacion4.html para realizar el ejercicio y guardarlo como evaluacion4_apellido.html (por ejemplo: evaluacion4_perez.html)
_Utilizando los contenidos desarrollados en esta unidad (DOM), realizar las siguientes acciones:
*Aplicar color de fondo #fcf79f al documento.
*Cambiar el color de todos los párrafos (etiqueta p) a verde (#0ca001).
*Aumentar el tamaño de la fuente a 24px, solo del elemento con id "destacado".
*Cambiar la familia tipográfica por Arial a los títulos (etiqueta h2).
*Crear un vínculo con la referencia "https://www.lipsum.com".
*/

window.onload =()=>{
//consignas
    const fondo= document.body;
    const parrafo= document.getElementsByTagName('p');
    const destacado= document.getElementById('destacado');
    const subtitulos= document.getElementsByTagName('h2')
    
cambiarFondo(fondo);
cambiarColor(parrafo);
cambiarFuente(destacado);
cambiarTipografia(subtitulos);
crearEnlace();
//Plus

}

const cambiarFondo =(element)=>{
 element.style.backgroundColor="#fcf79f";
}

const cambiarColor=(element)=>{
    for(let i=0; i<element.length; i++){
        element[i].style.color="#0ca001";
    }
}

const cambiarFuente =(element)=>{
  element.style.fontSize="24px";
}

const cambiarTipografia=(element)=>{
    for(let i=0; i<element.length; i++){
        element[i].style.fontFamily="Arial"
    }
}

const crearEnlace =(element)=>{
    
element=document.createElement("a");
element.setAttribute("href","https://www.lipsum.com");
const elementText = document.createTextNode("Lipsum");
element.appendChild(elementText);
document.body.appendChild(element);
}


