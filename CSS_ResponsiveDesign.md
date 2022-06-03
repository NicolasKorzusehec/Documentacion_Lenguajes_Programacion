Media Queries
    Son la forma de poder especificiar diferentes estilosCSS para difrentes tamaños que obtenga el navegador. Limitando los estilos CSS hasta cierto donde cabiarán.
    Estos puntos de cambios son denominados `Break Points` , son los puntos de resolucion en pixeles definidos por nosotros para poder ejecutar los cambiios de estilo.
Consisten de un `media type`, el tipo de medio bajo el cual ocurren estos cambios, esta consulta funciona como un condicional (viene acompañado de los operadores `and`, `not` y `only`).

Tipos de media 
    `ALL`
        Especifica todo tipo de media
    `Aural`
        Para el habla y el sonido fonético.
    `Handhelp`
        Para pequeños dispositivos de mano 
    `Screen` 
        Para las pantallas del computador
    `TV`
        Para dispositivos de tipo televisión

    ```css
    @media <media types> {

    }

    @media screen and (min-width:780px) and (max-width:1024px) {
        .box {
            background: #464646;
        }
    }
    ```

Meta tag viewport
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        Maximum scale define el maximo zoom que puede llegar a tener. 
        Idem minimum scale. 
        User Scale define si queremos usar el zoom o no.
        
    
