# Python
Python es un lenguaje de programación interpretado, de alto nivel y de propósito general.

## Contenidos
- [Introduccion a Python](#introduccion-a-python)
    - [Tipos de datos basicos](#tipos-de-datos-basicos)
        - [Type](#type)
    - [Palabras reservadas](#palabras-resevadas)
    - [Funciones internas](#funciones-internas)
    - [Declarar funciones](#declarar-funciones)
    - [Estructuras de control](#estructuras-de-control)
        - if
        - if else
            - elif
        - while
        - for
    - [Estructuras de datos]()

- [Buenas practicas]()
- [Pendiente](#pendiente)


## Introduccion a Python
- Fue diseñado para ser simple y fácil de aprender. Por lo tanto, reduce el tiempo de desarrollo general del código del proyecto.
- Le permite trabajar rápidamente e integrar sistemas de manera más eficiente.
- Su facilidad de codificación y el soporte de la comunidad de código abierto ha llevado al crecimiento exponencial de Python.
- Utilizado tanto por principiantes como por programadores experimentados
- Tiene un conjunto de diferentes bibliotecas y API que soportan el análisis, la visualización y la manipulación de datos.

### Tipos de datos basicos
- `Números`
Dentro de los números tenemos de dos tipos:
1 - `Número Entero (int)`
2 - `Número Decimal (float)`
Este tipo de dato se corresponde con números reales con parte decimal. Hay que tener en cuenta que el separador decimal en Python es el punto (.) y no la coma (,).
- `Cadenas`
1 - `Caracter (chr)`
Este tipo de dato se corresponde con un símbolo tipográfico, es decir, una letra, número, coma, espacio, signo de puntuación, etc.
2 - `Cadena de Texto (str)`
Este tipo de datos se corresponde con una cadena de caracteres.
Lógicos
- `Booleano (bool)`
Este tipo de dato reconoce solamente dos valores: Verdadero (True) y Falso (False)
#### Type
Cuando uno no está seguro del tipo que tiene un determinado valor, puede
preguntárselo al interprete de Python usando el comando "type"
Ejemplo:
>>> type("Hola, mundo")
<type 'string'>
>>> type(17)
<type 'int'>

### Palabras resevadas
- and
- continue
- else
- for
- import
- not
- raise
- assert
- def
- except
- from
- in
- or
- return
- break
- del
- exec
- global
- is
- pass
- try
- class
- elif
- finally
- if
- lambda
- print
- while

### Operadores matematicos
- `Destacar`:

    - Division
    Python lleva a cabo una división de enteros, redondeandose siempre el resultado a la baja.
        Una alternativa posible en este caso es el cálculo de un porcentaje y no el de una fracción:

        ```py
        >>> minuto*100/60
        98
        ```
        Se destaca la division entera señalada con dos barras `//`

    - Modulo
    Puede usar el operador modulo para extraer el dígito más a la derecha de un número. Por ejemplo, x % 10 devuelve el dígito más a la derecha de x (en base 10). De forma similar, x % 100 devuelve los dos últimos dígitos.

    - Comparacion
    ==, !=, >, <, >=, <=

    - Operadores logicos

        and
        x >0 and x <10

        or
        n %2 == 0 or n %3 ==0

        not
        not (x >y)

### Funciones internas
- `input()`
Cuando llamamos a esta función, el programa se detiene y espera a que el usuario escriba algo. Cuando el usuario pulsa la tecla Return o Enter, el programa se reanuda e `input` devuelve lo que el usuario escribió
como tipo string
    entrada = input()
Antes de llamar a `input` es conveniente mostrar un mensaje que le pida al usuario el dato solicitado. Este mensaje se llama indicador (prompt en inglés). Puede proporcionarle un indicador a input como argumento:
    nombre = input ("Como te llamas? ")

### Declarar funciones
Recurrimos a `def` nombre de la funcion `:`, luego desarrollamos la ejecucion y en cada linea de la ejecucion se le aplica necesariamente una sangria para que forme parte del cuerpo de la funcion.
Por ultimo, presionamos dos teclas <ENTER> indicando a Python
que se acabó el cuerpo de la función.

    ```py
    def holaMundo():
        print ("Hola Mundo!")
        print ("Estoy programando en Python.")


    holamundo()     """se ejecuta la funcion"""
    ```

### Estructuras de control
Aceptan condiciones de doble comparacion como en matematicas. 
Ej.: 20 > x > 40

- `if`

    ```py
    if x > 0:
        print("x es positivo")
    ```

- `if else`
`elif` es una abreviatura de `"else if"`. De nuevo, sólo se ejecutará una rama. No hay limite al número de sentencias `elif`, pero sólo se permite `una sentencia else` (que puede omitirse) y debe ser la ultima rama de la sentencia

    ```py
    if x%2 == 0:
        print("x es par")
    else:
        print("x es par")

    """Otro ejemplo"""
    if x < y:
        print (x, "es menor que", y)
    elif x > y:  """Estos elif pueden repetirse indefinidamente"""
        print (x, "es mayor que", y)
    else:
        print (x, "y", y, "son iguales")
    ```

- `while`

    ```py
    n = int (input ("Ingrese un numero: "))
    while n > 0:
        print n
        n = n-1
        print ("Despegando!")
    ```

- `for`

    ```py
    palabras = ['gato', 'ventana', 'defenestrado']
    for p in palabras:
        print (p, len (p))
    ```

## Buenas practicas
- Estructuras

    ```py
    if __name__ == '__main__':
    ```
## pendiente
https://packaging-python-org.translate.goog/en/latest/guides/installing-using-pip-and-virtual-environments/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp#creating-a-virtual-environment
pip y virtual enviroments - buenas practicas
en los repos podemos armar una carpeta de entorno que tenga todas las dependencias instaladas.

pep8,convenciones y normativas para hacer codigo python eficiente, que permita que se le hagan testeos, guias de estilo para python
https://peps.python.org/pep-0008/ 

https://code.visualstudio.com/docs/python/python-tutorial#_prerequisites 
ver video y clase
ver camino para usar python en la extension python
ver carpeta con paginas de python

entornos virtuales, dependencias - tener muchas versiones de python en una misma computadora.