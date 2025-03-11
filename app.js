//Declaración de Variables

let amigos = [];


//Función de agregar amigos
function agregarAmigo(){
    //Capturar el valor del input como texto
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(typeof(nombreAmigo));
    console.log(nombreAmigo);

    //Condicional para verificar que el espacio no este vacío
    if((typeof nombreAmigo === 'string') && (nombreAmigo.trim().length > 0)){
        amigos.push(nombreAmigo.trim()); //Agrega el nuevo nombre a la lista
        console.log(amigos);
        mostrarLista(); //Invocación de lista
        document.getElementById('amigo').value = '';  //Limpiar la caja de ingreso de datos
    }else{
        alert('Porfavor, inserte un nombre');
    }
}

//Funcion para mostrar la lista de amigos en pantalla
function mostrarLista(){ 
    let lista = document.getElementById('listaAmigos'); //Obtener los elementos de la lista
    lista.innerHTML = ''; //Limpiar la lista

    for (i = 0; i < amigos.length; i++){
        let item = document.createElement('li'); //Se crea el elemento li
        item.textContent = amigos[i]; //Se agrega los nombres al li
        lista.appendChild(item); //Se agrega el li a la lista
    }
}

//Función para el sorteo del amigo secreto
function sortearAmigo(){
    if(amigos.length === 0){
        alert('No hay amigos en la lista para realizar el sorteo'); 
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Obteniendo el número aleatorio
        let amigoSorteado = amigos[indiceAleatorio]; //Se selecciona el amigo de la lista
        let resultado = document.getElementById('resultado'); //Se hace referencia en el codigo JS el espacio del HTML donde se mostrará la información
        resultado.innerHTML = `El amigo secreto es ${amigoSorteado}`; //Se muestra el resultado
    }
}