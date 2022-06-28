# Layout
Desarrollo de distintas herramientas y estrategias usadas para ubicar elementos en una pantalla.

[Volver al inicio](./README.md)

## Contenidos
- [Propiedad display](#propiedad-display)
- [Flexbox y Grid](#flexbox-y-css-grid)
- [Flexbox](#flexbox)
- [CSS Grid](#css-grid)
- [Disposición de flujo](#disposicion-de-flujo)
    - `Bloque en linea`
    - `Flotadores`
    - `Disposicion multicolumna`
    - `Posicionamiento`
- [Media Queries](#media-queries)
    - `Tipos de media`
    - `Meta Tag Viewport`

### Propiedad display
La propiedad display hace dos cosas. Lo primero es determinar si la caja a la que se aplica actúa como en línea o en bloque.
La propiedad display también determina el comportamiento de los hijos de un elemento.

`display: inline;`
    No puede establecer un ancho y un alto explícito en elementos en línea. Los elementos circundantes ignorarán cualquier margen y espacio de relleno a nivel de bloque.

`display: block;`
    Los elementos de bloque no se sientan uno al lado del otro. Crean una nueva línea para ellos mismos. Un elemento de bloque se expandirá al tamaño de la dimensión en línea (a menos que sea cambiado por otro código CSS), por lo tanto, abarcará todo el ancho en un modo de escritura horizontal. Se respetará el margen en todos los lados de un elemento de bloque.

`display:flex`
    Establecer la propiedad a display: flex hace de la caja una caja a nivel de bloque, y también convierte a sus hijos en elementos flexibles. Esto habilita las propiedades flexibles que controlan la alineación, el orden y el flujo.

### Flexbox y CSS Grid 
Hay dos mecanismos de diseño principales que crean reglas de diseño para múltiples elementos, flexbox y grid. 
Comparten similitudes, pero están dirigidos a resolver diferentes problemas de diseño.
Es conveniente usar CSS grid para definir estructuras y Flexbox para alinear elementos o espaciarlos.

    Siempre que haya un elemento en un contenedor, es ideal usar la propiedad gap para distanciarlos.

    En cada bloque que se desee aplicar uno de estos flujos se debera recurrir a la propiedad display respectiva. Sin importar que el bloque sea hijo de otro bloque con esta propiedad.

### Flexbox
Mecanismo de diseño para diseños unidimensionales, horizontal o vertical.

            ```css 
            .my-element {
                display: flex;
                flex-wrap: wrap; /*si los elementos no caben se acomodan abajo*/
                Gap: ; /*espaciado interno entre los elementos de un contenedor flex*/
                width: calc(xx% de ancho buscado - yy espaciado planteado); /*Es necesario ponerle a las cartas o elementos internos esta propiedad para calcular el porcentaje del ancho buscado al agregar un espaciado entre los mismos para que se respete*/
            }
            ```

        De forma predeterminada, flexbox alineará los elementos hijos del elemento uno al lado del otro, en la dirección en línea, y los estirará en la dirección del bloque para que todos tengan la misma altura.

        Los elementos permanecerán en el mismo eje y no se ajustarán cuando se queden sin espacio. En lugar de ello, intentarán encajarse en la misma línea que el otro. Este comportamiento es modificable con `align-items`, `justify-content` y `flex-wrap`.

Flexbox también convierte los elementos hijos en **elementos flexibles**, lo que significa que puede escribir reglas sobre cómo se comportan dentro de un contenedor flexible. Puede cambiar la alineación, el orden y la justificación de un objeto individual. También puede cambiar la forma en que se encoge o crece utilizando la propiedad `flex`.

            ```css
            .my-element div {
                flex: 1 0 auto;
            }
            ```
        La propiedad flex esta abreviando las subpropiedades flex-grow, flex-shrink y flex-basis

### CSS Grid
Diseñado para controlar diseños de varios ejes en lugar de diseños de un solo eje (espacio vertical u horizontal). 
Permite escribir reglas de diseño en un elemento que tiene `display: grid;` e introduce algunas primitivas nuevas para el estilo de diseño, como las funciones `repeat()` y `minmax()`. 
    La unidad fr (una fracción del espacio restante) es una unidad de cuadrícula útil. Simplifica el designar las medidas al tratarse de porciones. 
    Al mismo timpo no se le debe especificar nada al elemento hijo.
    
    Puede construir cuadrículas tradicionales de 12 columnas, con un espacio entre cada objeto, con 3 propiedades CSS:

            ```css
            .my-element {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                gap: 1rem; /*espaciado interno entre los elementos de un contenedor flex*/
            }
            ```

Este flujo permite que alguno de los elementos o cards ocupen el espacio de mas de una columna o fila facilmente sin hacer calculos complejos
    
        Podríamos definir que el primer elemento de esta cuadrícula ocupa 2 filas y 3 columnas:

            ```css
            .my-element :first-child {
                grid-row: 1/3;
                grid-column: 1/4;
            }
            ```

        Indican al primer elemento de la cuadrícula que se extienda desde la primera columna hasta el inicio de la cuarta columna, luego se extienda desde la primera fila hasta el inicio de la tercera fila.

### Disposicion de flujo
Si no usa grid o flexbox, sus elementos se muestran en flujo normal.

`Bloque en línea`  
    El uso de `inline-block` le brinda un cuadro que tiene algunas de las características de un elemento a nivel de bloque, pero que aún fluye en línea con el texto. Por ejemplo respetarán sus márgenes de bloque y el relleno en un elemento.

`Flotadores`
    La propiedad `float` indica a un elemento que **flote** en el lugar especificado. 

            ```css
            img {
                float: left;
                margin-right: 1em;
            }
            ```

    A la imagen de este ejemplo se le indica que flote a la izquierda, lo que permite que los elementos hermanos se "envuelvan" a su alrededor. 
    Puede indicarle a un elemento que flote en left, right o inherit.
    Cuando utilice float, tenga en cuenta que cualquier elemento que siga al elemento flotante puede tener su diseño ajustado. Para evitar esto, puede borrar el flotador, ya sea usando clear: both en un elemento que sigue a su elemento flotante o con display: flow-root en el padre de sus elementos flotantes.

`Disposición multicolumna` 
    Si tiene una lista muy larga de elementos puede resultar en un desplazamiento y pérdida de tiempo muy grandes para un usuario. También puede crear un exceso de espacios en blanco en la página. Con el CSS multicolumna, puede dividir su lista en varias columnas para ayudar con ambos problemas.

            ```css
            ul {
                column-count: 2;
                column-gap: 1rem;
            }
            ```

            Esto divide automáticamente esa lista larga en dos columnas y agrega un espacio entre las columnas.

En lugar de establecer el número de columnas en las que se divide el contenido, con `column-width` se puede definir un ancho mínimo deseado. A medida que haya más espacio disponible en la ventana gráfica, se crearán automáticamente más columnas y, a medida que se reduzca el espacio, las columnas también se reducirán. Esto es muy útil en contextos de diseño web receptivo.

            ```css
            ul {
                width: 100%;
                column-width: 260px;
                column-gap: 1em;
            }
            ```

`Posicionamiento`
    La propiedad `position` cambia el comportamiento de un elemento dentro del flujo normal del documento y la manera en que se relaciona con otros elementos. Las opciones disponibles son `relative`, `absolute`, `fixed` y `sticky` con el valor predeterminado de `static`.

    Relative
        Este elemento se desplaza 10 píxeles hacia abajo en función de su posición actual en el documento. Agregar position: relative a un elemento también lo convierte en el bloque contenedor de cualquier elemento hijo con position: absolute. Esto significa que el hijo ahora se reposicionará de acuerdo a este elemento en particular, en lugar de al padre relativo superior, cuando se le aplique una posición absoluta. 

            ```css
            .my-element {
                position: relative;
                top: 10px;
            }
            ```

    Absolute
        El elemento del flujo de documentos actual se separa. 
            1 - Puede usar top, right, bottom y left en el padre relativo más cercano de un elemento para colocarlo donde quiera.
            2 - Todo el contenido que rodea a un elemento absoluto se reajusta para llenar el espacio restante. 

    Fixed 
        Se comporta de manera similar a absolute, siendo su padre el elemento raíz <html>
        Los elementos de posición fija permanecen anclados desde la parte superior izquierda según los valores top, right, bottom y left que establezca.

    Sticky 
        Puede lograr los aspectos anclados y fijos de fixed, y los aspectos más predecibles que respetan el flujo de documentos de relative mediante el uso de sticky. 
        A medida que la ventana gráfica se desplaza más allá del elemento, permanece anclada a los valores top, right, bottom y left establecidos.

### Media Queries
Son la forma de poder especificiar diferentes estilosCSS para diferentes tamaños de pantalla que obtenga el navegador. Limitando los estilos CSS hasta cierto punto donde cabiarán.
Estos puntos de cambios son denominados `Break Points`, son los puntos de resolucion en pixeles definidos por nosotros para poder ejecutar los cambios de estilo.
Consisten de un `media type`, el tipo de medio bajo el cual ocurren estos cambios, esta consulta funciona como un condicional (viene acompañado de los operadores `and`, `not` y `only`).

`Tipos de media`
- `ALL` Especifica todo tipo de media.
- `Aural` Para el habla y el sonido fonético.
- `Handhelp` Para pequeños dispositivos de mano 
- `Screen` Para las pantallas del computador
- `TV` Para dispositivos de tipo televisión

        ```css
        @media <media types> {
        }

        @media screen and (min-width:780px) and (max-width:1024px) {
            .box {
                background: #464646;
            }
        }
        ```

`Meta tag viewport`
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        Maximum scale define el maximo zoom que puede llegar a tener. 
        Idem minimum scale. 
        User Scale define si queremos usar el zoom o no.