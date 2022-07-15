let nombre 

let cadena

while (nombre !== 'ESC') {
    
    nombre = prompt('ingresa tu nombre, escribe ESC para salir')
    
    cadena = "Hola! " +  nombre
    // console.log (cadena)

    if (nombre != 'ESC'){
        console.log (cadena)
    }
}    



