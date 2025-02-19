<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 La prospección de clientes es una técnica o metodología que se utiliza para buscar y encontrar clientes potenciales. De ahí la importancia de comprenderlos tanto desde su perspectiva como desde la organización. El siguiente video expone brevemente lo que se desarrollará en el transcurso de este componente, a partir del cliente:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/o-UWF_MFahc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: prospección de clientes: introducción
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
