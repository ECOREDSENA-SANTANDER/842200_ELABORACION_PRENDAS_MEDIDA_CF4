<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      p(data-aos="fade-down").mb-5 Este componente se enfoca en detallar los fundamentos para el diseño y las variantes básicas al elaborar prendas de vestir femeninas, teniendo en cuenta los ajustes necesarios para moldear los cuerpos curvilíneos femeninos, se presenta información de forma teórico-práctica para que el aprendiz adquiera la competencia. En el siguiente diagrama se describen los conceptos y temas más relevantes dentro del componente:  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="En el diagrama se presentan los temas trabajados dentro del componente: fundamentos para el diseño de patrones básicos, variantes básicas femeninos, pantalón femenino y sus variantes. adicionalmente, en cada uno de los temas se relacionan los diferentes trazos tratados.")
        .col-auto
          a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
  </template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
