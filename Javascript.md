```js

//Indagar Callbacks

JavaScript
Se define como orientado a objetos, basado en prototipos, imperativo, debilmente tipado y dinámico.
Siempre se deberá respetar el ; al final de una linea

Tipos de datos
Hay seis tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol.

    VALORES BOOLEANOS:
    //Binarios referidos a la verdad, TRUE o FALSE.
    JavaScript genera coerción de tipo para concluir un valor truthy o falsy en distinto casos sin que sea explícito.
    Esto refiere a que si en una espacio donde deberia haber una prueba hay otra cosa,dependiendo de lo que este en su interior JavaScript devolverá un True o un False en esa prueba.

        Coerciones resultantes en FALSE:
            False(directo y explícito)
            null
            undefined
            NaN
            0
            -0
            0n, -0n (BigInt)
            " ", ' ', ` ` (cadena de texto vacía)
            document.all

        Coerciones resultantes en TRUE:
            True
            Strings (cadenas de texto)
            Cualquier valor que no cuercione resultantente en False.

    IMPRESIÓN EN CONSOLA:
        Corre en consola aquello que se encuentre en el paréntesis.
            Sintaxis:
                console.log(muestreo pantalla);

    FUNCIÓN:
    Pueden tomar argumentos y darle información adicional a la computadora.
    Guarda un bloque de codigo para ser usado posteriormente.

        Sintaxis 1:
            function nombrefunción (argumentos) {
            Codigo a ejecutar
            };

        Sintaxis 2:
            () => {}
            No requiere ni siquiera nombre.
            Corresponde guardarlo dentro de una variable.
                Ej.:
                var nombrefunción= (argumentos) =>{
                Código a ejecutar
                };

        Se pueden crear funciones sin argumentos, simplemente se ejecutara su bloque al llamarla, util cuando no depende de ninguna eleccion del usuario.
            ejemplo:
                var num1=x;
                var num2=y;
                function suma(){
                    return console.log(num1+num2);
                };
                /*En terminal */
                >>suma()
                xy <<


    VARIABLES Y SU AMBITOS
    Almacena un valor, debe tener un nombre para ser referenciada (identificador) y su valor corresponde a un valor que puede ser un número, un string o datos más complejos (como un arreglo o un objeto).
    El ámbito de una variable es el bloque de codigo dónde se puede ejecutar.
    Se pueden declarar variables vacías y luego asignarseles un valor.
    Se pueden asignar variables a otras variables.

        Maneras de definir variables, sus sintaxis y sus ámbitos:

            var nombrevariable= valor;
            Son variables globales que se pueden referir en cualquier parte del código.

            let nombrevariable= valor;
            Son variables locales que se ejecutan únicamente en el bloque de codigo dónde se encuentren {}

                /*Ambas se pueden ver modificadas o reasignadas.*/

            const nombrevariable= valor;
            Tipo de variable que no se puede reasignar su valor una vez que se ha creado, en los arreglos o objects todavía se pueden agregar valores pero no reasignar.

                /*Tanto let como const suelen ser usados en bloques, contrario a var que es usado globalmente*/

    strings (cadenas de texto):
    Letras, palabras y textos ubicados entre comillas ''.
    Véase 'string'

    Arreglo (array):
    Lista de elementos enmarcadas en una variable. Puede compenerse por números, strings, o incluso otros arreglos (llamándose anidamiento de arreglos).
        Sintaxis:
            var secondArray=[1, 2, 3, 4];
            var exampleArray=[
            1, 'string', [secondArray]
            ];

        Indexación de arreglos y strings:
        Los elementos de un arreglo se indexan comenzando por índice 0.
            Sintaxis:
                Var firstArray=['ok', 'xd', 'nashei', 'fiumba'];
                    *anexo: 0=ok, 1=xd, 2=nashei, 3=fiumba.
                Var secondArray=first array [1];
                    *anexo: secondArray contiene el valor de índice 1 de firstArray, corresponde a 'xd'
                console.log(secondArray);
                    //En consola:
                    //xd

        De igual modo ocurre en los strings

    Objects:

    Indefinido:
    Valor falsy. Se devuelve en funciones que no tienen declaración return. De igual modo en índices de arreglo o propiedades de objects que no existan.
        undefined 

    If statement:
    Permite ejecutar una sección de código específica cuando una prueba es verdadera (también se aplica en valores booleanos directos)
        Sintaxis:
            if (prueba) {bloque a ejecutar si prueba=true;};

    If-Else:
    Ejecutan una sección de codigo tanto en caso de true como de false.
        Sintaxis:
            if (prueba) {ejecución si true} else {ejecución si false};

        Semántica con operador ternario:
        Ejecutan if else con menos código.
            Sintaxis:
                (prueba) ? (Ejecución true) : (Ejecución false);

    Pruebas:
    Si se cumplen devuelven true, de lo contrario false
        Igualdad: a===b
        Desigualdad: a!==b
        Menor y mayor que: a<b a>b
        Menor y mayor o igual que: a<=b a>=b

    Compuertas lógicas:
    Combinan pruebas
        Compuerta AND: casoA && casoB
        Compuerta OR: casoA || casoB
        Negacion: !condicion /*Negara el resultado de la preposicion.*/

```

### Operadores matemáticos:
    -, /, *,+
    
`Concatenar`
Para concatenar strings usamos `+`, pudiendo usarse en cualquier suma que involucre al menos un `string`. Si hay una combinacion larga de strings y numeros, se ejecuta en funcion de su `presedencia`, realizandose las sumas de manera simple hasta alcanzar el primer string y a partir de ahi se concatenara ese resutado con todo lo demas.

    ```js
    Var word=('So'+' cool')
    console.log(word)  //   So cool
    ```

`Operador modulo %`
Devuelve el resto de la division entre ambos operandos, hace un return con ese resultado.
        a % b

`Operador exponenciacion **`
De igual modo esta definida para numeros no enteros,aplicandose la radicacion cuando el exponente es fraccion.
        a ** b

`Conversion numerica, unario`
Si se le aplica un signo `+` a un valor que no es de tipo `numerico`, dicho
valor es convertido en un numero, respondiendo a lassemejansas con los valores booleanos.

    ```js
    alert( +true);  //  1
    alert( +' ' );  // 0
    ```
La funcion `number()` ejecuta lo mismo

`Operadores de asignación`
///////////////////////////////////////



### CICLOS:
Repite la sección del código dentro de {} una determinada cantidad de veces

### For loop
`For... Of loop`
Pasa por cada elemento de un string o arreglo, repitiendo el código para cada elemento.

    ```js
    Var exampleArray=[a, b, c, d];
    for (let element of exampleArray){
        codigo a ejecutar;
        };
    ```

### Classic for loop
Repite el código una cantidad definida de veces.
Se difine en 3 partes.
`for (variable de ciclado definida, prueba que determina continuidad del ciclo, modificador del valor por ciclo){Código a interar hasta que el límite termine el ciclo}`

    ```js
    for (var i=valorInicial, i prueba(<,>,===) valorLimite, i=i+-valordeActualización){
    código a ejecutar;
    };
    ```

### Ciclos anidados
Ciclos dentro de otros ciclos que pueden ser muy útiles. 
Si tiene demasiados puede causar que la ejecución sea lenta o difícil de entender.

### Otros ciclos
while, do while, foreach
    
`while-sintaxis` 

    ```js
    var variable;
    while(variable!=='condicion'){
        accion();
        variable++;
    };
    ```

`dowhile`
Ejecuta la accion y luego analiza la variable para ver si lo repite.

    ```js
    var variable;
    do {
        accion();
        variable++;                
    } while (variable!=='condicion');
    ```

### SWITCH:
Tiene una sintaxis practica para el analisis recurrente de una variable que derive en muchos casos distintos.

    ```js
    var ejemplo;
    switch(variable){
        case 'valor1':
            accion1();
                break;
        case 'valor2':
            accion2();
                break;
        case 'valor3':
            accion3();
                break;
        default:
            acciondefault();
                break; /*termina el case.*/
    };      
    /*Aplicable a loops en funcion de un horario especifico. */
    ```


### Funcion alert   
Al iniciar la website salta un mensaje que contiene el argumento de la funcion.

    ```js
    alert('Mensaje a abrir');
    ```

### Funcion prompt
Esta funcion es similar a la de alert pero solicita al usuario un dato bajo la premisa escrita en el argumento. En otras palabras el argumento es lo que le explica al usuario que debe ingresar en el campo.

    ```js
    prompt('Ingrese un dato:')
    ```
    Podemos guardar este prompt en una variable

    ```js
    var dato = prompt('Ingrese un dato')
    ```

### Funcion write en elementos
Se elige el elemento en el que se escribira el argumento de la funcion.

    ```js
    document.write('contenido');
    ```

### Escribiendo en html
Creamos un div con un id especifico en el que se escribira lo buscado.

    ```html
    <div id="datos">
    ```

Incluimos ese elemento html en una variable y trabajamos sobre la misma

    ```js
    var datos = document.getElementById("datos");

    datos.innerHTML = "contenido";
    ```

Se debe tener en cuenta que si escribimos algo inmediatamente sin que se haga un llamado a una `funcion` sera necesario que el elemento `script` aparezca al final del `body` para que se leen todos los `id` y recien ahi se `ejecute`.

Se puede escribir html en el elemento elegido de la siguiente manera

    ```js
    datos.innerHTML = `
    <h1>primer texto</h1>
    <h2>segundo texto</h2>
    <h3>Esto es una variable: $(nombre) </h3>
    `;
    ```

Para recibir la entrada de un input se recurre a la siguiente sintaxis

    ```js
    let temperatura = document.getElementById('temperatura').value;
    ```

En caso de tratarse de marcar una casilla o un elemento se termina la estructura con un `.checked` en vez de un `.value`