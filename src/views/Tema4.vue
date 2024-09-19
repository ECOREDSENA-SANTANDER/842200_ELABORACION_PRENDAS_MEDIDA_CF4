<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Taller experimental

  
    .row.mb-5
      .col-sm-12.col-lg-9
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.mt-5
            .bloque-texto-a__texto.p-4
              p La exploración de la forma en los patrones permite hacer un ejercicio de creatividad y aplicación de la comprensión del cuerpo y el espacio, generando desarrollos de nuevos moldes e interpretaciones que suman para mejorar el resultado de las prendas sobre medidas para los clientes.
      .col-sm-12.col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema_4/img_1.svg')
    Separador  
    #t_4_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 4.1 Detalles piezas de diseño desde el molde

    .row.mb-5
      .col-lg-8
        p La finalidad de este molde es poder aplicar detalles y cortes que suman al diseño desde el patrón, llevando la implementación de los básicos hacia diferentes tipos de prendas. Es importante tener en cuenta el análisis de cada prenda: tipo de prenda, características que tiene el básico, tipo de plano, sistema de cierre, sistema de ajuste, complementos y señalización. Los conceptos y aplicación tienen una connotación no solo de estructura sino también de estética, que adiciona fuerza al diseño del producto.

      .col-lg-4
        img(src="@/assets/curso/tema_4/img_2.svg")

    
    Separador  
    #t_4_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 4.2 El prense, la tabla y la alforza

    p.mb-5 Son aumentos aplicados en los moldes para generar volumen y diseños diferentes en las prendas. A continuación, se relacionan algunos tipos de aumentos. 

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Prense cuchilla").px-5
            .col-sm-12.col-lg-6
              p Debe ser confeccionado, para lo cual se dobla un solo lado por los piquetes en donde se encuentran los excesos de tela, creando un efecto visual como de abanico, donde la tela se dobla hacia adelante y hacia atrás continuamente para que todos los pliegues parezcan apuntar en una dirección alrededor del cuerpo. Finalmente, queda con una medida de cara y una medida de profundidad, como se presenta en las siguientes figuras. 

              p Si ciertos componentes de la fibra se sintetizan artificialmente y los prenses se endurecen por calor, entonces los pliegues realmente permanecerán en la tela. Esta es una de las razones por las que la organización de poliéster puede tener un buen efecto de  plisado. Si se requiere lograr el mismo efecto, la tela previamente debe ser enviada a la tintorería y luego ser cortada según el molde. Este efecto de plegado se puede lograr también de forma manual, dependiendo de la tela y de los procesos continuos de planchado.
          
            .col-sm-12.col-lg-6
              .row.align-items-center
                .col-sm-12.col-lg-6
                  .bg09.p-2
                    .titulo-sexto.color-acento-contenido
                      h5 Figura 30.
                      span
                        |   Falda con prense cuchilla
                    figure
                      img(src='@/assets/curso/tema_4/img_3.png', alt='Fotografía de una modelo luciendo una falda tipo prense cuchilla.')
                      figcaption Nota. The Cutting Class (2021)
                .col-lg-6
                  .bg09.p-2
                    .titulo-sexto.color-acento-contenido
                      h5 Figura 31.
                      span
                        |  Prense cuchilla
                    figure
                      img.mb-4(src='@/assets/curso/tema_4/img_4.svg', alt='La imagen detalla la forma del prense cuchilla.')
                       

        
      .row(titulo="Prense chato, caja o tabla").px-5
        .col-sm-12.col-lg-6
          p.mb-5 Los “pliegues de caja” son casi como pliegues de cuchillo que se han colocado espalda con espalda. Al colocar los pliegues de cuchillo uno al lado del otro se forma un plano rectangular de tela o forma de caja en el exterior de la prenda, que es como el pliegue de caja recibe su nombre, en el momento de ser confeccionado tendrá en total cuatro piquetes, dos se unirán para un lado y los otros dos hacia el lado opuesto, finalmente queda con una cara que suele medir el doble de las dos profundidades, tal como se ilustra en las siguientes figuras.

          a.anexo.mb-4(:href="obtenerLink('/downloads/prenses_de_tabla.pdf')" target="_blank").ml-0-cus
            .anexo__icono
              img(src="@/assets/template/icono-pdf-2.svg")
            .anexo__texto
              p #[strong Anexo.] Definición prenses de tabla.

        .col-sm-12.col-lg-6
          .row.align-items-center
            .col-lg-6
              .bg09.p-2
                .titulo-sexto.color-acento-contenido
                  h5 Figura 32.
                  span
                    | Prense tabla en falda
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_5.png', alt='Fotografía de una modelo luciendo una falda con prense tabla.')
                  figcaption Nota. The Cutting Class (2021)
            .col-lg-6
              .bg09.p-2
                .titulo-sexto.color-acento-contenido
                  h5 Figura 33.
                  span
                    |  Prense tabla
                figure.py-3
                  img.my-2(src='@/assets/curso/tema_4/img_6.png', alt='La imagen detalla la forma del prense tabla.')
                   

      .row(titulo="Las alforzas").px-5
        .col-sm-12.col-lg-6
          p Son prenses mucho más delgados, en algunos casos se perciben como una simple línea abultada. Tienen una cara y profundidad y, suelen ser en total inferiores a 1 cm hasta 0.2 cm. El ancho y espaciado de las alforzas depende del espesor de la tela y del detalle que desee hacer en la prenda. Las alforzas cosidas del derecho son decorativas, en tanto que las del revés sirven para dar forma; la distancia entre las costuras es el doble del ancho de la alforza terminada, tal como se presenta en las siguientes figuras.

        .col-sm-12.col-lg-6
          .row.align-items-center
            .col-lg-6
              .bg09.p-2
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 34.
                    span
                      | Diseño plano con alforzas
                  figure
                    img.img-a.mb-2(src='@/assets/curso/tema_4/img_7.png', alt='La figura detalla la forma de un alforza.')
                    figcaption Nota. Pinterest (2021)
            .col-lg-6
              .bg09.p-2
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 35.
                    span
                      |  Alforza
                  figure.py-3
                    img.my-5(src='@/assets/curso/tema_4/img_8.png', alt='Fotografía de una falta con alforzas. ')
                     

      .row(titulo="Drapeados").px-5
        .col-12
          .row.mb-5
            .col-sm-12.col-lg-4
              p Es la técnica más antigua en cuanto a diseño de prendas de vestir, hoy en día es utilizada en cualquier tipo de prenda. En este caso, la caída de la tela es muy importante para el buen ajuste de los pliegues, es recomendado para todos los tipos de cuerpos, ya que puede favorecer las zonas complicadas en la figura, como se presenta en la figura 36.
              p Se puede drapear cualquier parte del patrón o tipología, creando primero el diseño sobre una muselina, sobre un retal de tela y una vez que esté seguro pasarlo a la tela definitiva, y así evidenciar el comportamiento de la caída según el cuerpo. 

            .col-sm-12.col-lg-8
              .row.align-items-center
                .col-lg-4
                  .bg09.p-2
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 36.
                        span
                          |  Vestidos drapeados
                      figure
                        img.pb-3(src='@/assets/curso/tema_4/img_9.png', alt='Fotografía de dos modelos sobre una pasarela luciendo vestidos con estilos drapeados.')
                        figcaption Nota. The Cutting Class (2021)
                .col-lg-4
                  .bg09.p-2.justify-content-center
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 37.
                        span
                          |  Líneas guías de drapeado
                      figure.text-center
                        img.py-2(src='@/assets/curso/tema_4/img_35.svg', alt='La figura presenta un boceto de un vestido con líneas marcadas como guías para realizar un drapeado.')
                        figcaption Nota. Carrera de diseño y gestión de moda (2015)
                .col-lg-4
                  .bg09.p-2
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 38.
                        span
                          |  Apertura de molde
                      figure
                        img.py-2(src='@/assets/curso/tema_4/img_34.svg', alt='La figura detalla un molde para un drapeado marcando las líneas guías. ')
                        figcaption Nota. Carrera de diseño y gestión de moda (2015)
          p.mt-5 Se parte de un patrón básico, una vez trazado se dibujan líneas hacia un punto en específico que será la dirección de la caída; se procede a recortar por las líneas, pero sin llegar al final, se coloca el patrón sobre otro papel y se abren sus trozos en abanico, la apertura depende del volumen buscado en el diseño, como paso final se calca el nuevo patrón, tal como se presenta en las figuras 37 y 38.
    Separador  
    #t_4_3.titulo-segundo.color-primario
      h2 4.3  Escotes, cuellos y solapas

    .row.mb-5
      .col-lg-12
        p Cuando se habla de cuellos, lo primero que se debe tener en cuenta es la base y forma de cada escote, es decir, si se habla de la parte funcional del cuello, el cuello es una extensión o pieza adicional que se une a un escote tanto delantero como posterior. Los escotes son modificaciones o “desahogos” que se dan desde el básico, dependiendo el requerimiento del diseño, los escotes se componen de ancho y largo. Los anchos son las medidas que se dan por hombro, desde el punto del cuello hombro, hacia el punto de acromio o por el recorrido del hombro, como se ilustra en las siguientes figuras.
    SlyderF.mb-5(columnas="col-sm-12 col-lg-4 px-0")
      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-3
            .titulo-sexto.color-acento-contenido
              h5 Figura 39.
              span
                |  Cuello hombro
            img(src='@/assets/curso/tema_4/img_31.svg', alt='La figura es un boceto donde se detalla un cuello.')
             

      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 40.
                span
                  |  Curva disímil
              img(src='@/assets/curso/tema_4/img_32.svg', alt='En la figura se detalla la curva del escote sobre un molde de una camisa.')
               
              
      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 41.
                span
                  |  Tipos de escotes
              img(src='@/assets/curso/tema_4/img_33.svg', alt='La figura es un boceto de una persona con una capucha, por delante y por detrás.')
               
              
      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 42.
              span
                |  Escote cuadrado 
            img(src='@/assets/curso/tema_4/img_36.svg', alt='La figura es un boceto que detalla la forma del escote cuadrado, por delante y por detrás.')
             
            
      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 43.
                span
                  |  Escote bandeja
              img(src='@/assets/curso/tema_4/img_37.svg', alt='En la figura se detalla el molde de un escote tipo bandeja, sobre el molde de una camisa.')
               
              
      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 44.
                span
                  |  Escote en "V"
              img(src='@/assets/curso/tema_4/img_38.svg', alt='La figura es un boceto que detalla la forma de un escote en V.')
               
              
      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 45.
                span
                  |  Escote tipo blusa
              img(src='@/assets/curso/tema_4/img_39.svg', alt="La figura es un boceto que detalla la forma de un escote tipo blusa.")
               
              
      .tarjeta
        .row.justify-content-center.mb-3.p-0.mx-0
          .col-sm-12.col-lg-12.px-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 46.
                span
                  |  Escote en solapa
              img(src='@/assets/curso/tema_4/img_40.svg', alt='La figura es un boceto que detalla un escote en solapa.')
               
              
    p.mb-5 Los nombres de la forma en los cuellos varían de acuerdo con el entorno comercial, así que lo más relevante es la parte técnica del funcionamiento o la lógica de cómo debe quedar la prenda sobre el cuerpo. Para el trazo de cuellos se trabajó bajo el contexto funcional y no comercial, todos los cuellos en patronaje se dividen en tres grandes grupos: cuellos por medida de contorno, por unión de hombro y por extensión.
    p.mb-5 En el siguiente video puede consultar el paso a paso para el trazo de escotes y tipos de cuellos.

   
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Fd19HkRegQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de escotes y tipos de cuellos.
    Separador  
    #t_4_4.titulo-segundo.color-primario
      h2 4.4 Mangas

    p En el patronaje las mangas van conectadas no solo al tamaño de los brazos sino también a la postura de la persona, estos son factores que se deben tener en cuenta desde el análisis antropométrico del cliente.

    p.mb-5 #[strong Análisis de los brazos]: el conocimiento de la conformación anatómica de los brazos es indispensable para la correcta ejecución de las mangas, sobre todo de las mangas ceñidas y las básicas. Los tipos de brazos más comunes son: 

    .row.mb-5
      .col-sm-12.col-lg-3
        .tarjeta--container.mb-5.px-1
          .tarjeta--boton-3.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_19.svg', alt='Texto que describa la imagen')
              
            .h2.text-center.text-white Brazo regular
            p.text-white.text-center Conformación casi recta desde la espalda al codo y con la muñeca ahusada.

      .col-sm-12.col-lg-3
        .tarjeta--container.mb-5.px-1
          .tarjeta--boton-3.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_20.svg', alt='Texto que describa la imagen')
              
            .h2.text-center.text-white Brazo delgado
            p.text-white.text-center Constitución de estructura fina de los huesos y la anatomía, tanto en la parte superior del brazo como en la inferior.

      
      .col-sm-12.col-lg-3
        .tarjeta--container.mb-5.px-1
          .tarjeta--boton-3.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_21.svg', alt='Texto que describa la imagen')
              
            .h2.text-center.text-white Brazo grueso
            p.text-white.text-center Constitución voluminosa desde el hombro hasta el codo.
      
      .col-sm-12.col-lg-3
        .tarjeta--container.mb-5.px-1
          .tarjeta--boton-3.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_22.svg', alt='Texto que describa la imagen')
              
            .h2.text-center.text-white Brazo muy grueso
            p.text-white.text-center Constitución muy voluminosa desde el hombro al codo; incluso el antebrazo es grueso. 


    p.mb-5 #[strong Análisis de la posición de los brazos]: el análisis de la posición del brazo respecto al cuerpo es muy importante para una perfecta caída de la manga. De hecho, la posición de la manga en el centro del hombro debe adaptarse a la constitución del sujeto y a la posición del brazo. Los principales defectos de posición son el brazo adelantado y el brazo atrasado.

    .titulo-sexto.color-acento-contenido
      h5 Figura 47.
      span
        |  Posición de brazos
    figure.mb-5
      img(src='@/assets/curso/tema_4/img_23.svg', alt='La figura presenta, de manera comparativa con tres cuerpos, la forma correcta de la posición de los brazos (brazos adelantados, brazos regulares y brazos atrasados), y dónde debe quedar el centro de la manga.')
      figcaption 
        p Nota. Carrera de diseño y gestión de moda (2015)

    h5 Brazo regular
    p.mb-5 El centro del brazo se alinea exactamente con el centro del cuerpo, por lo que el centro de la manga posicionada en el centro del hombro producirá una caída perfecta.

    h5 Brazo adelantado
    p.mb-5 Arastra consigo el omóplato y la columna vertebral, de modo que la amplitud y la convexidad del sector posterior aumentan, y el sector anterior se contrae y se aplana. Cuando el brazo está adelantado, el centro de la manga debe desplazarse hacia atrás con respecto al centro del hombro del corpiño. Además, esta constitución aumenta la medida del torso posterior y disminuye la anterior y, por lo tanto, es preciso modificar la base del patrón en la medida necesaria.

    h5 Brazo atrasado
    p Con este aumenta el hueco del centro de la espalda, mientras que disminuye la protuberancia del omóplato y la inclinación del hombro. Disminuye también el sector torácico posterior y la curva dorsal, y aumenta en cambio la punta del busto. Por lo tanto, será necesario adaptar el modelo a la constitución midiendo cuidadosamente las partes. Con el brazo atrasado, el centro de la manga se desplaza hacia adelante con respecto al centro del hombro del corpiño.
    Separador  
    #t_4_5.titulo-segundo.color-primario
      h2 4.5 Análisis y comportamiento del patrón manga

    p.mb-5 Cuando se habla de manga, básicamente se entiende o identifica como una pieza circular que cubre el brazo; sin embargo, existen diferentes tipos de puntos a tener en cuenta:

    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta.color-acento-botones
          span 1
        | #[b Largo de manga]
        p.mt-3.mb-5 El largo de manga anatómico es aquel que va desde el punto de acromio hasta la muñeca, se debe tener en cuenta que, sin importar el diseño, largo o forma del cuerpo de la manga, siempre se debe partir desde el largo anatómico.

      li 
        .lista-ol--cuadro__vineta.color-acento-botones
          span 2
        | #[b  Altura o cabeza de manga ]
        p.mt-3 Cuando se habla de cabeza de manga se identifican diferentes tipos de medidas, se puede trabajar con medida de cuadro de tallas, medida deducida o estandarizada. Es importante tener en cuenta que el largo de manga siempre será el mismo, sin importar qué tipo de prenda o cabeza de manga se implemente.

    .row
      .col-lg-8
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta.color-acento-botones
              span 3
            | #[b Comportamiento de cabeza de manga ]
          p.mt-3 Entre más larga sea la altura de cabeza de manga otorgará menor movimiento sobre el cuerpo dando incomodidad, pero mayor estructura; esta descripción corresponde a las prendas que van ajustadas o con la horma del cuerpo. Entre más corta sea la altura de cabeza de manga otorgará mayor movimiento sobre el cuerpo dando comodidad, pero menor estructura, esta descripción corresponde a las prendas que van holgadas o desestructuradas sobre el cuerpo. 
          p Básicamente si está descripción se divide o se categoriza en prendas de vestir se estaría diciendo que:

          ul.lista-ul--color
            li 
              i.fas.fa-bullseye
              | Entre más corta sea la cabeza de manga, corresponde a prendas deportivas.
            li 
              i.fas.fa-bullseye
              | Entre más larga sea la cabeza de manga, corresponde a prendas formales.
            li 
              i.fas.fa-bullseye
              | Un punto intermedio entre las dos anteriores, corresponde a prendas casuales.

          p.mb-5 Tal como se aprecia en la siguiente figura.
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 48.
          span
            |   Tipos de mangas.
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_4/img_24.svg', alt='La figura es un boceto donde se detallan los tipos de manga con líneas de diferente punteadas sobre una camisa: sin manga: justo por el punto de acromio. Manga coqueta: diagonal entre la axila y donde termina el hombro. Manga conta: en la mitad del brazo. Manga alta codo: justo sobre el codo. Manga tres cuartos: en la mitad del antebrazo.')
           
    .row.mb-5
      .col-lg-8
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta.color-acento-botones
              span 4
            | #[b Cabeza de manga por cuadro de tallas]

          p.mt-3 Suele ser categorizada para prendas casuales, la medida se identifica en el cuadro de tallas, este tipo de cabeza de manga es estandarizada, no se tiene en cuenta el comportamiento sobre el cuerpo y el tipo de prenda, como se presenta en la siguiente figura.
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 49.
          span
            |   Cabeza de manga.
        figure
          img.img-a(src='@/assets/curso/tema_4/img_25.svg', alt='La figura presenta un boceto donde se detallan dos tipos de cabeza de manga: uno recto y el otro irregular.')
           
    .row.mb-5
      .col-lg-12
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.color-acento-botones
              span 5
            | #[b Cabeza de manga por medida deducida ]
            p.mt-3 Sale según el tipo de plano y línea que se trabaja, es decir, que cada vez que se esté trazando un plano, sobre ese plano con la medida de recorrido de sisa delantera y sisa posterior se identifica la cabeza de manga, la sumatoria de esas dos medidas son divididas de acuerdo con el tipo de prenda, para identificar la cabeza de manga. 
            ul.lista-ul--color.mb-5
              li 
                i.fas.fa-bullseye
                | Cabeza de manga deportiva = sisa delantera + sisa posterior / 5.
              li 
                i.fas.fa-bullseye
                | Cabeza de manga casual = sisa delantera + sisa posterior / 4.
              li 
                i.fas.fa-bullseye
                | Cabeza de manga sastre o formal = sisa delantera + sisa posterior / 3.
              li 
                i.fas.fa-bullseye
                | Cabeza de manga estandarizada: las cabezas de manga estandarizadas, suelen ser medidas que, sin explicación alguna, son entregadas para el desarrollo de las prendas.

      


    p.mb-5 Para el desarrollo del trazo o marcación de cabeza de manga existen infinidad de formas, fórmulas o metodologías, sin importar el tipo de línea es importante que tenga en cuenta siempre la lógica del comportamiento de las cabezas de manga según el tipo de prenda. 
    p.mb-5 A continuación, se relacionan las medidas para las mangas: 
    .row.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 50.
          span
            |  Medida de contornos en brazo
        figure.mb-3
          img.img-a(src='@/assets/curso/tema_4/img_27.svg', alt='La figura presenta los lugares donde se deben tomar las medidas en el brazo; sobre el biceps, sobre el codo y sobre la muñeca.')
          figcaption Nota. Carrera de diseño y gestión de moda (2015)
        p #[strong Circunferencia brazo]: se mide pasando la cinta métrica alrededor de la parte más ancha del brazo, cerca de la axila. 
        p #[strong Circunferencia codo]: se mide la circunferencia en la parte central del codo. 
        p #[strong Circunferencia muñeca]: se mide la circunferencia justo sobre la mano.
     
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 51.
          span
            |  Medida de largo en brazo
        figure.mb-3
          img.img-a(src='@/assets/curso/tema_4/img_28.svg', alt='La figura describe la manera como se debe tomar la medida de largo del brazo')
          figcaption Nota. Carrera de diseño y gestión de moda (2015)
        p #[strong Largo total brazo]:  se mide a partir de la costura del hombro, en el mismo punto donde se mide el ancho de los hombros, llegando por el codo, con el brazo ligeramente doblado y hasta la articulación del antebrazo con la mano. La altura del codo se mide desde la costura del hombro hasta el hueso del codo.
    p.mb-5 Para el desarrollo del trazo o marcación de cabeza de manga existen infinidad de formas, fórmulas o metodologías; sin embargo, la clasificación anterior hace referencia a lo que se trabaja en el manual, en cualquier línea. Sin importar el tipo de línea es importante que tenga en cuenta siempre la lógica del comportamiento de las cabezas de manga, según el tipo de prenda.
    .row.mb-5
      .col-lg-12
        ol.lista-ol--cuadro.mt-5
          li 
            .lista-ol--cuadro__vineta.color-acento-botones
              span 6
            | #[b  Trazo de cabeza de manga ]
        p En el desarrollo de curvas y trazos en las cabezas de manga existen varias formas de trazarlas. Es importante tener en cuenta que el trazo de manga y las medidas de las sisas dependen del trazo de la prenda o diseño a trabajar, es decir, que siempre en este punto las mangas hacen parte de los complementos en los pasos del patronaje. A continuación, se relacionan algunos de los aspectos más representativos para las medidas: 
    .row.mb-5
      .col-sm-12.col-lg-9
          ul.lista-ul--color.mb-5
            li 
              i.fas.fa-bullseye
              | Recorrido sisa delantera (medidas que salen del plano).
            li 
              i.fas.fa-bullseye
              | Recorrido sisa posterior (medidas que salen del plano).
            li 
              i.fas.fa-bullseye
              | Tipo de cabeza de manga.
            li 
              i.fas.fa-bullseye
              | Largo de manga.
          p Cada uno de estos aspectos corresponden a las medidas deducidas, quiere decir que siempre se va a trazar una cabeza de manga, lo primero que debe analizar es el comportamiento y la funcionalidad sobre el cuerpo, lo importante es que el comportamiento de la cabeza de manga sobre el cuerpo sea equivalente al diseño o prenda que se va a trabajar.
          p.mb-5 Consulte el siguiente video para que conozca el paso a paso sobre la definición del trazo de manga y cabezas de manga. 

      .col-sm-12.col-lg-3
          figure.mb-3
            img(src='@/assets/curso/tema_4/img_29.png', alt='Trazo de cabeza de manga')

      
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OW9pbGduLBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo de manga y cabezas de manga.
    .row.mb-5
      .col-sm-12.col-lg-6
        p.mb-5 De igual manera, consulte el manual de patronaje básico para interpretación de diseños, con el fin de que conozca las formas para sacar o deducir la altura de la cabeza de manga, para ello lea las páginas 26 a la 44. 

      .col-sm-12.col-lg-6
          a.mb-5.anexo.ml-0-cus(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf-2.svg")
            .anexo__texto
              p.my-0 #[strong Anexo]. Manual de patronaje básico para interpretación de diseños
    .row.mb-3
      .col-sm-12.col-lg-12  
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.color-acento-botones
              span 7
            | #[b  Interpretación de mangas]

        p Para profundizar en los conceptos y detalles trabajados en el trazo de mangas, se hará el análisis de diferentes diseños desde dibujo plano e imagen, con el fin de tener referencias visuales de lo que se va trabajando se tendrán varias imágenes de referencia, en este punto y con la firme intención de afianzar cada vez más el conocimiento se implementará una serie de cortes, traslados y aumentos que irán generando volúmenes o estructuras diferentes sobre el cuerpo, todo partiendo desde el desarrollo del trazo base de manga.

    .row
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Por tanto, es importante que consulte tanto los videos que se presentan a continuación, como el manual de patronaje básico e interpretación de diseños, teniendo en cuenta las páginas de lectura indicadas.

     
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/brjPw6zwFoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Interpretación de mangas

      

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Lu36CdMzP40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Generalidades de manga kimona y ranglan.

      .row.justify-content-center
        .col-sm-12.col-lg-10
          a.mb-5.anexo.ml-0-cus(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf-2.svg")
                .anexo__texto
                  p.my-0 #[strong Anexo]. Manual de patronaje básico e interpretación de diseños. 
                  p Conozca el esquema de la manga kimona, p. 48. 
                  p Conozca el esquema de la manga ranglan formal e informal, p. 49-50. 
                  p Conozca el esquema de la manga, p.51-53. 

        //.col-sm-12.col-lg-6

          a.mb-5.anexo.ml-0-cus(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf-2.svg")
                .anexo__texto
                  p.my-0 #[strong Anexo]. Manual de patronaje básico e interpretación de diseños. 
                  p Conozca el esquema de la manga ranglan formal e informal, p. 49-50. 
      //.row.justify-content-center
        .col-sm-12.col-lg-6
          a.mb-5.anexo.ml-0-cus(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf-2.svg")
                .anexo__texto
                  p.my-0 #[strong Anexo]. Manual de patronaje básico e interpretación de diseños.
                  p Conozca el esquema de la manga, p.51-53. 

      p Finalmente, se debe tener en cuenta que las medidas implementadas o referenciadas en los videos son solo ejemplos y guías, cada plano o cada uno tendrá referencias diferentes, esto depende del tipo de trazo, elementos o incluso el tipo de lápiz que se trabaje; lo importante es referenciar siempre las medidas del cuadro de tallas y las fórmulas indicadas.

      
    
   

    
      
</template>

<script>
export default {
  name: 'Tema4',
}
</script>

<style lang="sass" scoped></style>
