<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Prospección de los clientes
    
    p Se puede interpretar a la prospección  como la búsqueda, localización e identificación de prospectos potenciales a través de actividades planeadas y métodos técnicos. La prospección de clientes hace parte del primer paso del proceso de la venta y consiste en encontrar posibles clientes de una empresa que tiene  grandes posibilidades de serlo. 
    p Los pasos necesarios en la realización de una venta son los siguientes: 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-5
          h5 Figura 8. 
          | Ciclo del proceso de la venta 
        img.mb-3(src='@/assets/curso/temas/Tema4/img01.svg', alt='Se muestra el proceso del ciclo de ventas, que comienza con la prospección, seguida del acercamiento, la entrevista, la demostración, la negociación y el cierre. Posteriormente, continúa con el servicio posventa y la construcción de relaciones a largo plazo, buscando siempre la validación y las referencias de parte de los clientes.')
    p El siguiente video profundiza un poco más sobre el proceso de prospección: 
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yf39HJoTW2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Prospección de los clientes 
    .py-3
    p Al contar con una base de datos muy elaborada con clientes segmentados según la oferta de productos de la empresa, se busca el acercamiento con cada prospecto y se pueden señalar dos puntos importantes:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .tarjeta.color.p-4
          img.mb-2(src='@/assets/curso/temas/Tema4/A.svg', alt='')
          p Tiene como propósito identificar prospectos e iniciar la comunicación con el cliente.
          br
      .py-2
      .col-lg-5
        .tarjeta.color.p-4
          img.mb-2(src='@/assets/curso/temas/Tema4/B.svg', alt='')
          p Requiere de un análisis previo del modelo de negocio (propio) y conocimiento detallado del negocio (mercado) en el cual se encuentra el o los clientes objetivo.
  
    p Se compone de los siguientes pasos:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-5
          h5 Figura 9. 
          | Pasos que componen un prospecto 
        img.mb-3(src='@/assets/curso/temas/Tema4/img02.svg', alt='Muestra los pasos que componen un prospecto, comenzando con la segmentación del mercado, seguida de la identificación de prospectos, la definición de candidatos, el contacto inicial y la preparación de la entrevista.')
    p En este ciclo de referidos o prospectos, se tienen en cuenta los siguientes aspectos: 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-5
          h5 Figura 10. 
          | Ciclo de prospectos
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img.mb-3(src='@/assets/curso/temas/Tema4/img03.svg', alt='Muestra que el proceso de prospecto incluye investigar detalladamente a cada cliente potencial, recopilando información específica como nombres completos, rango de edad, género, hábitos, estado civil y nivel de educación. Con esta información, se prepara una presentación de ventas adaptada a sus necesidades y deseos, destacando las características y beneficios del producto. Se programa un encuentro con el cliente ajustándose a sus condiciones de fecha y horario, aunque también se pueden realizar visitas en frío no planificadas. Tras concretar la cita, se entregan muestras o folletos como preparación para el siguiente paso. Si se trata de un servicio, se aclara el tipo de servicio ofrecido para facilitar la comprensión durante la entrevista.')
             

          .tarjeta.pc1.p-4(x="50%" y="17%" numero="")
            .h5.mb-2 Prospecto
            p Investigación de las particularidades de cada cliente en perspectiva. Se busca información más específica del cliente.
            p.mb-0 - Nombres completos
            p.mb-0 - Rango de edad  
            p.mb-0 - Género
            p.mb-0 - Hábitos
            p.mb-0 - Estado civil
            p.mb-0 - Nivel de educación

          .tarjeta.pc2.p-4(x="12%" y="45%" numero="")
            .h5.mb-2 Servicio
            p En caso de ser un servicio lo que se presta, se debe dejar claro el tipo de servicio que es, para que se haga más entendible el siguiente paso del proceso de la venta: la entrevista. 

          .tarjeta.pc3.p-4(x="25%" y="90%" numero="")
            .h5.mb-2 Entrega el producto o demostración
            p Luego de concretar la cita con el cliente, se puede entregar o dejar muestras o folletos para la preparación del siguiente paso de la venta.
              
          .tarjeta.pc4.p-4(x="74%" y="90%" numero="")
            .h5.mb-2 Cita o planificación de la visita en frío
            p Inmediatamente se busca el momento del encuentro con el posible cliente procurando ajustarse a sus condiciones de fecha, horario, entre otras. También se puede hacer visitas en frío, pero esta se puede decir no es una visita planeada. 
          
          .tarjeta.pc5.p-4(x="88%" y="47%" numero="")
            .h5.mb-2 Contacto antes de la cita
            p Con la información del cliente en las manos, se prepara una presentación de ventas adaptada a las necesidades o deseos de cada uno en perspectiva. 
            p Se deben conocer todas las características, beneficios del producto y las ventajas que tiene para el cliente. También, es necesario planificar una entrada que atraiga la atención del cliente, las preguntas que mantendrán su interés, los aspectos que despertarán su deseo, las respuestas a posibles preguntas u objeciones y la forma en la que se puede efectuar el cierre, induciendo a la acción de comprar. 

    
    
    
    




</template>

<script>
export default {
  name: 'Tema4',
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
