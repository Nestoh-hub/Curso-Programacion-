let operacion = prompt(`¿Qué operación quieres hacer? Suma (s), Resta (r), Multiplicación (m), División (d) Modulo (Mod) Potencia ( P) Radiacion (Rad)`);
let dato, dato2;
if (operacion === "Rad") {
  dato = Number (prompt("Inserta el numero para la raiz cuadrada"));
} else{
  dato= Number(prompt("Inserta tu primer digito"))
  dato2 = Number (prompt("Inserta tu segundo digito"))
}



switch (operacion) {
  case "s":
    let suma = dato + dato2;
    console.log(suma);
    break; 

  case "r":
    let resta = dato - dato2;
    console.log(resta); 
    break;

  case "m":
    let multiplicacion = dato * dato2;
    console.log(multiplicacion);
    break;

  case "d":
    
    let division = dato / dato2;
    console.log(division);
    break;
    
    case "mod":
    let mod = dato % dato2;
    console.log (modulo);
    break;

    case "p":
    let p = dato ** dato2;
    console.log (p);
    break;
    

    case "Rad":
      let Rad = dato ** 0.5;
      console.log (Rad)
      break

     
   

    
    

}

