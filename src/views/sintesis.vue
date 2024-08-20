<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      p(data-aos="fade-down").mb-5 Este componente se enfoca en detallar los fundamentos para el diseño y las variantes básicas al elaborar prendas de vestir femeninas, teniendo encuento los ajustes necesarios para moldear los cuerpos curvilíneos femeninos, se presenta información de forma teórico-práctica para que el aprendiz adquiera la competencia. En el siguiente diagrama se describen los conceptos y temas más relevantes dentro del componente:  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="La documentación técnica se da bajo el contexto técnico y sus requisitos, que a su vez responden a la orientación web y/o de software, teniendo en cuenta los estándares y las buenas prácticas documentales.")
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
