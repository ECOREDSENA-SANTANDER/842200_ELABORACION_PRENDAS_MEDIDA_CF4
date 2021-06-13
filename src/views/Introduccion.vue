<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-3 En el desarrollo de proyectos que tienen como finalidad la elaboración de prendas de vestir es elemental incorporar los métodos y procedimientos apropiados con altos modelos de calidad. Este componente posibilita comprender cómo el cuerpo humano se puede calcar en un papel mediante un esquema, denominado patrón base o básicos, que a partir de la toma de medidas se puede adaptar o construir de cero, por consiguiente, desde los patrones base se desprenden los patrones básicos de prendas superiores e inferiores para línea femenina, logrando obtener una serie de moldes que serán adaptados según el diseño. 

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
