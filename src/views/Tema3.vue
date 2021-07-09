<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 El pantalón femenino y sus variantes

    .row.justify-content-center
      .col-lg-10
        p.mb-5 La tipología del pantalón parte de una base inferior y se refiere a una copia de la horma del cuerpo que parte de la cintura hasta el suelo, dicha base, será la plantilla que se adecuará para convertirse en diferentes tipologías según las modificaciones de largos, amplitudes, detalles y cortes. De las variaciones de pantalón femenino se pueden obtener los básicos de short, capri, jean, bermudas, entre otros.

        .bloque-texto-f.tarj_color.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .h4.text-regular.bloque-texto-f__texto Defensora de los derechos de las mujeres en Estados Unidos quiso introducir los pantalones en la ropa de las mujeres. Se inspiró en el estilo turco y creó una falda que se podía usar con pantalones debajo, su propuesta se consideró una amenaza en ese momento y su labor no tuvo éxito.
          .bloque-texto-f__autor.mb-3
            .h3.mb-0 Amelia Bloomer
              p 1818 -  1894
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen')

    .titulo-segundo
      #t_3_1.h2 3.1 Trazo pantalón femenino

    .row.align-items-center.mb-5
      .col-lg-8
        p Es importante antes de su construcción realizar el análisis de la base inferior; esta base sale del plano, trazando primero la parte delantera y sobre el delantero trazando el posterior, esto se debe a que varias de las medidas curvas y demás son tomadas de la referencia del trazo del delantero. La base de pantalón femenina sale con margen de costura, en este caso, aunque es un básico se trabaja con margen de costura, con el fin de manejar los desniveles de medida para la horma, el caso está en diferenciar y entender el porqué y el cómo del margen de costura.
        p Para lograr identificar o entender el margen de costura es necesario identificar los contornos por los que va pasando el pantalón, estos son: contorno de cintura, contorno de cadera, contorno de rodilla y contorno de bota.

      .col-lg-4
        img(src="@/assets/curso/tema_3/img_2.png")

    p Al identificar cada uno de los contornos se podrían categorizar como contornos completos cintura y cadera, contornos que deben repetirse o marcarse dos veces sobre el cuerpo, rodilla y bota, debido a la división del cuerpo en las extremidades inferiores.
    p.mb-5 Al tener en cuenta la introducción anterior, es importante aclarar que en los contornos se identifica el aumento de costura por: 

    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/tema_3/img_3.png")
      .col-lg-8
        ol.lista-ol--cuadro.lista-ol--separador.mb-5
          li 
            .lista-ol--cuadro__vineta
              span 1
            p Cintura y cadera
          li 
            .lista-ol--cuadro__vineta
              span 2
            p Centro frente, centro atrás, costado delantero y costado posterior.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p Rodilla y bota.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p Costado delantero, costado posterior, entrepierna delantera, entrepierna posterior.

    .row.justify-content-center.mb-5
      .col-lg-10
        p En este caso para poder trabajar el margen de costura de manera lineal se elabora únicamente con una de las extremidades inferiores, es decir, con la mitad del cuerpo para lograr cubrir el contorno de pierna sin inconveniente.
        p La sumatoria de los márgenes de costura depende del tipo de maquinaria y operación que se trabaje en la empresa: sin embargo, el común denominador del margen de costura que se asigna es de 1 cm,  es decir, que si se trabaja cada uno de los puntos de referencia para asignar el margen de costura quedaría de la siguiente manera.

    .row.justify-content-center.mb-5
      .col-lg-8
        p.BorTit Figura 12, Puntos de referencia para una costura.
        figure
          img(src='@/assets/curso/tema_3/img_4.svg', alt='Bolsillo delantero de jean')
          figcaption Nota. SENA (2021).

    .titulo-segundo
      #t_3_2.h2 3.2. Distribución de aumentos de costura

    p.mb-5 Ya teniendo claro cómo funciona cada uno de los puntos, márgenes de costura y plano del pantalón, lo primero que se debe hacer es el trazo del rectángulo base. Para este rectángulo se debe trabajar el contorno más protuberante y el largo más largo de las partes que se va a cubrir o en este caso, la intersección entre extremidades inferiores y contornos generales del cuerpo, como se muestra en la tabla 1.

    .row.justify-content-center.mb-5
      .col-lg-10
        p.BorTit Tabla 1, Aumentos de costura
        figure
          img(src='@/assets/curso/tema_3/img_5.svg', alt='Aumentos de costura')
          figcaption Nota. Tomados del SENA (2021)

    .titulo-segundo
      #t_3_3.h2 3.3. Patrones de pantalón femenino

    p.mb-5 A partir de la tipología se adecúan ampliaciones, largos y cortes que dan lugar a la creación de otros básicos que pueden ser utilizados para ser cortados en la tela. Además de lo anterior, es importante conocer los pasos para el pantalón inferior femenino, para el que se debe tener en cuenta las siguientes medidas: largo pantalón, alto del tiro, contorno de cadera y contorno de cintura. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.nav-bg.p-4
          .col-lg-4
            img(src="@/assets/curso/tema_3/img_6.png")
          .col-lg-6
            p Con el propósito de que conozca los pasos para crear la base de pantalón inferior femenino consulte el manual de patronaje básico para interpretación de diseños, desde la página 28 a la 30.

            a.mb-5.anexo(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.my-0 #[strong Anexo]. Manual de patronaje básico para interpretación de diseños

    p.mb-5.text-center De igual forma, consulte el siguiente video que le permitirá conocer cómo realizar la base inferior del pantalón femenino.

    p.BorTit Base inferior de pantalón femenino
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7XPqP_3v0L0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5
      .col-lg-10
        .jumbo_2
          p.text-center A continuación, se presentan las medidas a tomar de la #[strong parte delantera] del pantalón femenino
          
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Primera parte")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img.img-a(src="@/assets/curso/tema_3/img_7.png")
        
          .col-md-6
            ol.lista-ol--cuadro.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span 1
                p Trazar un rectángulo con las medidas correspondientes del cliente:
            .row.justify-content-center
              .col-lg-11
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    | Ancho: contorno de cadera/ 4 + costura.
                  li 
                    i.lista-ul__vineta
                    | Largo: altura de tiro o largo de tiro.
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p Identificar en el rectángulo la línea de cintura, línea de tiro, centro frente y costado.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                p Identificar cada una de las líneas que divide el cuerpo y por las que va a pasar la base:

              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  p #[strong Largos]: entre la línea de cintura y la línea de tiro, aparece la línea de #[strong altura de cadera].
          

      .py-3.py-md-4(titulo="Segunda parte")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p.BorTit Línea de tiro
            figure.mb-5
              img(src='@/assets/curso/tema_3/img_8.svg', alt='Texto que describa la imagen')
              figcaption Nota.  SENA (2021)

            p.BorTit División en línea de tiro
            figure
              img(src='@/assets/curso/tema_3/img_9.png', alt='Texto que describa la imagen')
              figcaption Nota. SENA (2021)
        
          .col-md-6
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta
                  span 4
                p Identificar el punto medio o la línea de aplome, es necesario identificar la extensión del tiro.

              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  p #[strong Gancho o amplitud de tiro]: ancho del rectángulo base/4 = constante de 0 - 1.5 cm, es decir, que inicia desde 0, restando 1.5 cm.
                li 
                  i.lista-ul__vineta
                  p Sobre la línea de tiro por centro frente se prolonga la medida o el resultado de la fórmula. Todo lo anterior tal como se ilustra en la imagen línea de tiro.
                li 
                  i.lista-ul__vineta
                  p #[strong Conocer la línea de aplome]: corresponde a la alineación de todo el pantalón. Para esto se debe trazar ½ de medida por la línea de tiro, incluyendo la extensión o gancho de tiro, como se muestra en la imagen división en línea de tiro.
                li 
                  i.lista-ul__vineta
                  p #[strong Largos]: entre la línea de tiro y la línea de largo total, aparece la línea de altura de rodilla.
                li 
                  i.lista-ul__vineta
                  p #[strong Línea de rodilla]: desde la línea de tiro hasta el largo total por línea de aplome / 2, de la mitad hacia arriba subir 5 cm.

        
      .py-3.py-md-4(titulo="Tercera parte")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img.img-a(src="@/assets/curso/tema_3/img_10.png")
        
          .col-md-6
             ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta
                  span 5
                p #[strong Definir la cintura]: luego de tener el rectángulo inicial con las divisiones base del cuerpo se debe identificar cada uno de los puntos de referencia en la parte posterior. Para el pantalón, la cintura se debe ajustar por el centro, frente y costado, con el fin de tener una mejor horma, hacer un ajuste por el centro-frente de 1 cm; desde el ajuste de cintura por el centro-frente se marca la medida de cintura, sobre el contorno de cintura / 4 cm + costura.

              li 
                .lista-ol--cuadro__vineta
                  span 6
                p Realizar la línea del centro frente para unir desde el punto de cintura del centro frente en línea recta, hasta la intersección de la altura de cadera y del centro-frente. Además, se debe unir el punto de altura de cadera y del centro-frente en línea curva hasta la intersección y la extensión de tiro o gancho.

              li 
                .lista-ol--cuadro__vineta
                  span 7
                p #[strong Definir curva de cadera]: unir desde el punto de cintura costado en línea curva hasta la línea base de costado, suavizando la unión.

      .py-3.py-md-4(titulo="Cuarta parte")
        .row.justify-content-center
          .col-md-3.mb-4.mb-md-0
            p.BorTit División en bota
            figure.mb-5
              img(src='@/assets/curso/tema_3/img_11.png', alt='División en bota')
              figcaption Nota. SENA (2021)

            p.BorTit Aumento en bota
            figure
              img(src='@/assets/curso/tema_3/img_12.png', alt='Aumento en bota')
              figcaption Nota. SENA (2021)
        
          .col-md-6
            ol.lista-ol--cuadro.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span 8
                p #[strong Definir ancho de rodilla y ancho de bota]: en el trazo de pantalón para poder identificar el ancho de rodilla es necesario identificar el ancho de bota, se sugiere aumentar por bota, desde la línea de aplome aumentar 8 cm a cada lado, como medida estándar, sin importar la talla o medidas del cliente; sin embargo, existen varias fórmulas o medidas deducidas que van acordes a la talla para sacar el ancho de bota, en este caso se sugiere utilizar la división y el aumento de la bota, para la cual su identificación se realizará teniendo en cuenta el ancho de rodilla, como se observa en las imagenes división en bota y aumento en bota.  

            .row.justify-content-center
              .col-lg-11
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    p En este caso la imagen aumento en bota para identificar el ancho de rodilla se trabaja con la medida de bota más 1 cm.

            ol.lista-ol--cuadro.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span 9
                p Definir el cierre del pantalón donde se debe marcar de bota a rodilla en línea recta, por costado y entrepierna. Desde el punto de línea de tiro costado se une en curvas encontradas.

    .row.justify-content-center.mb-5
      .col-lg-10
        .jumbo_2
          p.text-center A continuación, se relacionan las #[strong medidas de la parte posterior]

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Primera parte")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img.img-a(src="@/assets/curso/tema_3/img_13.png")
        
          .col-md-6
             ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta
                  span 1
                p Definir cada una de las partes para realizar el trazo, para lo cual se debe tener en cuenta los mismos pasos de la parte delantera.

              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | La cintura se debe ajustar por el centro, atrás y costado, con el fin de tener una mejor horma.
                li 
                  i.lista-ul__vineta
                  | Para identificar los desniveles de cintura se debe ajustar por el centro atrás, 3 centímetros. 
                li 
                  i.lista-ul__vineta
                  | Desde la línea de tiro por el centro atrás entrar 0.5 cm, para trazar la nueva línea de tiro del centro de atrás en línea recta.
                li 
                  i.lista-ul__vineta
                  | Desde el ajuste de cintura por el centro atrás se marca la medida de cintura.
                li 
                  i.lista-ul__vineta
                  | Para la cintura se debe tomar el contorno de cintura / 4 cm + costura + pinza.

          
            
      .py-3.py-md-4(titulo="Segunda parte")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p.BorTit Pinza en la cintura
            figure
              img.mb-3(src='@/assets/curso/tema_3/img_14.png', alt='Texto que describa la imagen')
              figcaption Nota.  SENA (2021)
        
          .col-md-6
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p Marcar la prolongación por la línea de cadera desde el contorno de cadera / 4 cm + costura. 

              li 
                .lista-ol--cuadro__vineta
                  span 3
                p Marcar la prolongación por la línea de tiro para escuadrar la medida de línea de cadera por el costado.

              li 
                .lista-ol--cuadro__vineta
                  span 4
                p Separar el busto y el vértice de pinza desde los básicos; se suelen identificar los puntos de vértice de pinza, los cuales sirven como punto de referencia para cualquier implementación del manual. El vértice de pinza es ½ de medida de cintura, incluyendo la pinza y la costura, como se muestra en la siguiente figura.

             
      .py-3.py-md-4(titulo="Tercera parte")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p.BorTit Ancho de pinza
            figure
              img(src='@/assets/curso/tema_3/img_15.png', alt='Ancho de pinza')
              figcaption Nota.  SENA (2021)
        
          .col-md-6
            ol.lista-ol--cuadro.mb-5
              li 
                .lista-ol--cuadro__vineta
                  span 5
                p Definir el ancho de pinza, el cual se compone por primer y segundo lado de pinza, por lo general se suele distribuir el ancho a lado y lado del vértice, es decir, en este caso que la pinza es de 3 cm la distribución se hace desde el vértice de pinza 1.5 cm a cada lado, tal como se muestra en la siguiente figura.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                p Definir el largo de pinza, el cual se encuentra estandarizado o se puede sacar por medida deducida con 11 centímetros y, desde el vértice de pinza es importante escuadrar por la línea de cintura hacia el centro atrás, teniendo en cuenta la inclinación y dirección de la línea de cintura.

      .py-3.py-md-4(titulo="Cuarta parte")
        
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 7
            p Cerrar pinza, para lo cual se debe unir el primer y el segundo lado de la pinza con el largo de la pinza.
          li 
            .lista-ol--cuadro__vineta
              span 8
            p Definir el gancho o extensión de tiro posterior, uniendo la intersección de altura de cadera – centro atrás hasta la extensión de tiro posterior, en curvas encontradas.
          li 
            .lista-ol--cuadro__vineta
              span 9
            p Definir el ancho de rodilla y ancho de bota sobre la línea de rodilla y bota, en la parte posterior se aumenta el margen de costura asignado a 4 cm de margen de costura, y 2 cm a cada lado.
          li 
            .lista-ol--cuadro__vineta
              span 10
            p Cerrar la parte posterior del pantalón, se debe tener en cuenta el mismo trazo y dirección de la parte delantera:
        
          ul.lista-ul
            li 
              i.lista-ul__vineta
              p De bota a rodilla en línea recta, por costado y entrepierna.
            li 
              i.lista-ul__vineta
              p Desde el punto de línea de tiro costado se une en curvas encontradas.
            li 
              i.lista-ul__vineta
              p Desde el punto de línea de tiro, extensión de tiro o gancho, trazar en línea recta y curva.

    .titulo-segundo
      #t_3_4.h2 3.4. Variantes de pantalón femenino   

    p.mb-5 Según modificaciones de largos, amplitudes, detalles y cortes se pueden obtener los básicos inferiores. Las medidas de largos se deben tomar desde la cintura del cliente hasta el punto de la pierna que lo sugiera el diseño, como se muestra en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-lg-8
        p.BorTit Figura 19, Tipologías de pantalón según largo
        figure
          img(src='@/assets/curso/tema_3/img_16.svg', alt='Ancho de pinza')
          figcaption Nota. Carrera de diseño y gestión de moda (2015).
              
    p.text-center.mb-5 Consulte el siguiente video con el propósito de que conozca los pasos para la interpretación de prendas inferiores.

    p.BorTit Interpretación de prendas inferiores
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/K2SbwvDv7eA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.BorTit Análisis e interpretación de pantalón sudadera
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xcUi9S-ZqzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
