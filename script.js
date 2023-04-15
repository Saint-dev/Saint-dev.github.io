/ animation /

                    function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 190 * i)

  });
}
const titulo = document.querySelector('.container-ab h1');
typeWrite(titulo);




