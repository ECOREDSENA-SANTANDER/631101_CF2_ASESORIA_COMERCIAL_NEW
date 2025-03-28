export default {
  global: {
    Name: 'Prospección de clientes',
    Description:
      'En este componente se identifica el conjunto de actividades que realiza una empresa para seleccionar a sus clientes. Así mismo, se expondrá su tipología, los mercados en los cuales se desenvuelven y las estrategias que se utilizan con el fin de atraerlos, retenerlos y fidelizarlos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mercado de consumo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: ' Mercados industriales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Mercados de revendedores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mercados de gobierno',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Mercados internacionales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relación del mercadeo y los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atraer clientes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Retener clientes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fidelizar clientes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Clasificación de clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Prospección de los clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_631101_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. El cliente',
      referencia:
        'Quiroa, M. (2021). Cliente que es y cuál es su importancia. Economipedia. https://economipedia.com/definiciones/cliente.html',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      tema: '1. El cliente',
      referencia:
        'Pursell, S. (2021). Clientes potenciales: qué son, qué tipos existen y cómo identificarlos. HobSpot. https://blog.hubspot.es/marketing/tipos-de-clientes-potenciales ',
      tipo: 'Página web',
      link: 'https://blog.hubspot.es/marketing/tipos-de-clientes-potenciales ',
    },
    {
      tema: '1.1. Mercado de consumo',
      referencia:
        'Pacheco, J. (2020). Web y empresas. Mercado de Consumo (definición, características y clasificación). Web y empresa. https://www.webyempresas.com/mercado-de-consumo-definicion-caracteristicas-y-clasificacion/ ',
      tipo: 'Página web',
      link:
        'https://www.webyempresas.com/mercado-de-consumo-definicion-caracteristicas-y-clasificacion/',
    },
    {
      tema: '2. Relación del mercado y los clientes',
      referencia:
        'González, M. (2002). Concepto de mercado y sus tipos. Gestiopolis. https://www.gestiopolis.com/concepto-mercado-tipos/ ',
      tipo: 'Página web',
      link: 'https://www.gestiopolis.com/concepto-mercado-tipos/',
    },
    {
      tema: '2.1. Atraer clientes',
      referencia:
        'Quiroa, M. (2020). Captación de clientes. Economipedia. https://economipedia.com/definiciones/captacion-de-clientes.html ',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/captacion-de-clientes.html',
    },
    {
      tema: '3. Clasificación de clientes',
      referencia:
        'Bee Digital. (2020). Tipos de clientes: características y cómo tratarlos. https://www.beedigital.es/experiencia-de-cliente/tipos-de-clientes-caracteristicas/ ',
      tipo: 'Página web',
      link:
        'https://www.beedigital.es/experiencia-de-cliente/tipos-de-clientes-caracteristicas/',
    },
    {
      tema: '4. Prospección de los clientes',
      referencia:
        'Da Silva, D. (2020). Zendesk. Qué es prospección de clientes y 5 claves para implementar su estrategia. Zendesk. https://www.zendesk.com.mx/blog/que-es-prospeccion-clientes/  ',
      tipo: 'Página web',
      link: 'https://www.zendesk.com.mx/blog/que-es-prospeccion-clientes/',
    },
  ],
  referencias: [
    {
      referencia:
        'Agüero, C. (2014). Estrategia de fidelización de clientes. Universidad de Cantabria.',
      link: '',
    },
    {
      referencia:
        'Escamilla, G. (2020). Fidelización del cliente: concepto, importancia, consejos y métricas. RD Station.',
      link: '',
    },
    {
      referencia:
        'González, M. (2002). Concepto de mercado y sus tipos. Gestiópolis.',
      link: 'https://www.gestiopolis.com/concepto-mercado-tipos/',
    },
    {
      referencia:
        'González Camacho, M. (2018). Segmentación, Definición de Público Objetivo y Posicionamiento. [presentación] Universidad Interamericana para el desarrollo. ',
      link: '',
    },
    {
      referencia:
        'Gronroos, C. (1994). Marketing y Gestión de servicios. Diaz de Santos. 1a Edición.',
      link: '',
    },
    {
      referencia:
        'Hatch, H. (2016). La fidelización de clientes no sólo tiene forma de tarjeta. ',
      link: 'https://soy.marketing/la-fidelizacion-de-clientes/ ',
    },
    {
      referencia:
        'Promove Consultoría e formación SLNE. (2012). Atraer y fidelizar clientes. CEEI Galicia. ',
      link: 'https://issuu.com/josevalencia/docs/atraer_y_fidelizar_clientes',
    },
    {
      referencia:
        'Pursell, S. (2021). Clientes potenciales: qué son, qué tipos existen y cómo identificarlos. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/tipos-de-clientes-potenciales ',
    },
    {
      referencia:
        'Quiroa, M. (2020). Cliente: Qué es y cuál es su importancia. Economipedia.',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      referencia:
        'Redacción emprendedores (2021). ¿Qué significa modelo de negocio? Emprendedores.es. ',
      link:
        'https://www.emprendedores.es/estrategia/que-significa-modelo-de-negocio/',
    },
    {
      referencia:
        'Schnarch, A. (2013). <i>Marketing</i> para <i>pymes</i>. Alfa Omega. ',
      link: '',
    },
    {
      referencia:
        'Torres Morales, V. (2014). Administración de ventas. Grupo Editorial Patria.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'es la persona o entidad que accede a un producto o servicio por medio de una transacción financiera (dinero) u otro medio de pago.',
    },
    {
      termino: 'Fidelizar',
      significado:
        'una acción dirigida a conseguir que los clientes mantengan relaciones estables y continuadas con la empresa a lo largo del tiempo (Hatch, 2016).',
    },
    {
      termino: 'Mercado de consumo',
      significado:
        'se compone por todas aquellas personas que adquieren o compran bienes y servicios y luego lo utilizan para  satisfacer sus necesidades finales.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'es una herramienta previa al plan de negocio que te permitirá definir con claridad qué vas a ofrecer al mercado, cómo lo vas a hacer, a quién se lo vas a vender, cómo se lo vas a vender y de qué forma vas a generar ingresos. (Redacción emprendedores, 2021).',
    },
    {
      termino: 'Prospecto',
      significado:
        'es un cliente potencial que encaja con las características del cliente ideal, dispone de los medios para comprar (dinero) y está autorizado a tomar decisiones de compra.',
    },
    {
      termino: 'Retener',
      significado:
        'sucede cuando una empresa planifica un conjunto de estrategias de fidelización y acciones con la finalidad de mantener a los clientes actuales a largo plazo.',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'es un grupo de consumidores, en su mayoría homogéneo, ya sea por determinadas características o por sus necesidades, los cuales son identificados como un mercado que presenta deseos o hábitos de compra parecidas y que potencialmente responderían similar a la estrategia desarrollada por el <i>mix</i> de <i>marketing</i>. (Quiroa, 2020)',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor técnico',
          centro: 'Centro de Comercio y Servicio - Regional Bolívar',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Corrector de estilo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhana Johanna Bustillo Ardila',
          cargo: 'Revisión de estilo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Erika Fernandez Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
