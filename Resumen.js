JavaScript
Se define como orientado a objetos, basado en prototipos, imperativo, debilmente tipado y dinámico.
Siempre se deberá respetar el ; al final de una linea

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

                *Ambas se pueden ver modificadas o reasignadas.

            const nombrevariable= valor;
            Tipo de variable que no se puede reasignar su valor una vez que se ha creado, en los arreglos o objects todavía se pueden agregar valores pero no reasignar.

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

    Operadores matemáticos:
    -, /, *
    +(Puede usarse para combinarse strings)
        Sintaxis:
            Var word=('So'+' cool')
            console.log(word)
                En consola:
                So cool

    Operadores de asignación:

    CICLOS:
    Repite la sección del código dentro de {} una determinada cantidad de veces

        For... Of loop:
        Pasa por cada elemento de un string o arreglo, repitiendo el código para cada elemento.
            Sintaxis:
                Var exampleArray=[a, b, c, d];
                for (let element of exampleArray) {codigo a ejecutar;};

        Classic for loop:
        Repite el código una cantidad definida de veces.
        Se difine en 3 partes.
        for (variable de ciclado definida, prueba que determina continuidad del ciclo, modificador del valor por ciclo)
        {Código a interar hasta que el límite termine el ciclo}
            Sintaxis:
                for (var i=valorInicial, i prueba(<,>,===) valorLimite, i=i+-valordeActualización) {
                código a ejecutar;
                };

        Ciclos anidados:
        Ciclos dentro de otros ciclos que pueden ser muy útiles. Si tiene demasiados puede causar que la ejecución sea lenta o difícil de entender.