<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Prospección de cliente',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Apropiarse de los conocimientos asociados a la prospección de clientes, así como su tipología, los mercados en los cuales se desenvuelven y las estrategias que se utilizan para atraerlos, retenerlos y fidelizarlos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Es el principal objetivo hacia donde la empresa realiza su mayor esfuerzo; hacía él todos los planes y las estrategias de mercadeo deben enfocarse, desarrollarse e implementarse en función de ese cliente.',
          imagen: require('@/assets/componentes/img01.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El cliente', esCorrecta: true },
            { id: 'b', texto: 'Las empresas', esCorrecta: false },
            { id: 'c', texto: 'Mercados de gobierno', esCorrecta: false },
            { id: 'd', texto: 'El mercado de consumo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Se compone por todas aquellas personas que adquieren o compran bienes y servicios y luego lo utilizan para satisfacer sus necesidades finales. Tiene un papel importante en el desarrollo socioeconómico de una economía.',
          imagen: require('@/assets/componentes/img02.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El cliente', esCorrecta: false },
            { id: 'b', texto: 'Las empresas', esCorrecta: false },
            { id: 'c', texto: 'Mercados de gobierno', esCorrecta: false },
            { id: 'd', texto: 'El mercado de consumo', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Está formado por las instituciones del gobierno o del sector público que adquieren bienes o servicios para llevar a cabo sus principales funciones.',
          imagen: require('@/assets/componentes/img03.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Los clientes de los mercados industriales',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Las empresas', esCorrecta: false },
            { id: 'c', texto: 'Mercados de gobierno', esCorrecta: true },
            { id: 'd', texto: 'El mercado de consumo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Son todas las empresas que demandan los satisfactores que produce una empresa, con el propósito de usarlos en su proceso de producción.',
          imagen: require('@/assets/componentes/img04.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Los clientes de los mercados industriales',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Mercados de gobierno', esCorrecta: false },
            { id: 'c', texto: 'El mercado de consumo', esCorrecta: false },
            { id: 'd', texto: 'El cliente', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El Marketing relacional de acuerdo con Gronroos (1994), es el “conjunto de relaciones a corto plazo que las empresas pretenden crear, mantener y fomentar con clientes, con el objetivo de alcanzar una relación sólida y duradera.',
          imagen: require('@/assets/componentes/img01.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Los negocios internacionales involucran el proceso de exportación e importación de algún producto entre países o naciones.',
          imagen: require('@/assets/componentes/img02.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Para atraer clientes a la empresa, soportados en el portafolio de productos y su valor agregado, esta debe seguir un proceso de captación.',
          imagen: require('@/assets/componentes/img03.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Las empresas no deben gastar su tiempo en revisar aquellos clientes que compraron y que no volvieron hacerlo por alguna razón.',
          imagen: require('@/assets/componentes/img04.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los clientes potenciales son aquellos que adquirirán alguno de los productos o servicios que son ofertados por la empresa, pero aún no deciden la compra. ',
          imagen: require('@/assets/componentes/img01.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            ' Los clientes de compra frecuente asisten a comprar en periodos irregulares; los de compra habitual son menos asiduos, pero tienen alta probabilidad de convertirse en compradores frecuentes; y los de compra ocasional son aquellos que acostumbran a hacer visitas regulares y su interés se enfoca en las promociones u ofertas. ',
          imagen: require('@/assets/componentes/img02.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
