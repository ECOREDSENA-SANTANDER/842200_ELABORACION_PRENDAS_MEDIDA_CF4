<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-sm-12.col-lg-7
        img(src='@/assets/curso/introduccion/img2.png' alt='AvatarTop')

      .col-sm-12.col-lg-5.pt-5
        .tarjeta-avatar.color-acento-contenido.mt-5
          img(src='@/assets/curso/introduccion/img1.svg' alt='AvatarTop')
          
          .tarjeta.color-acento-contenido.h-auto
            .text-center.p-4
              p Bienvenidos al componente formativo "Elaboración de modelos femeninos" Es hora de abordar las temáticas en levantamiento de patrones básicos femeninos que son desarrollados desde la elaboración de moldes básicos, con componentes anatómicos, que se logran a partir de la interpretación de diseños; para esto se debe hacer la transformación de patrones que guarden sinergia entre el cuerpo y el diseño, de acuerdo con el material textil que se utilice. 
    .row
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-5 En el desarrollo de proyectos que tienen como finalidad la elaboración de prendas de vestir es elemental incorporar los métodos y procedimientos apropiados con altos modelos de calidad. Este componente posibilita comprender cómo el cuerpo humano se puede calcar en un papel mediante un esquema, denominado patrón base o básicos, que a partir de la toma de medidas se puede adaptar o construir de cero, por consiguiente, desde los patrones base se desprenden los patrones básicos de prendas superiores e inferiores para línea femenina, logrando obtener una serie de moldes que serán adaptados según el diseño. 
          p El logro de este proceso formativo es asimilar la comprensión antropomórfica como punto de partida para ejecutar los movimientos claves y precisos en los patrones mencionados anteriormente, para ello se proporcionan los pasos y temáticas en orden técnico y así, como resultado de aprendizaje, conseguir la construcción desde la interpretación del diseño y la adaptabilidad en diferentes cuerpos.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
