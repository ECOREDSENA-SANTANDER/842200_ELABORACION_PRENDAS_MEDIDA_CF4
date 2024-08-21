export default {
  global: {
    componenteFormativo: 'Elaboración de modelos femeninos',
    descripcionCurso:
      'En este componente formativo se abordan las temáticas de levantamiento de patrones base, básicos de patronaje femenino y desarrollos de moldería.<br><br>En la elaboración de moldes básicos desde el componente anatómico se logra interpretar diseños a partir de la transformación de los patrones base.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Fundamentos para el diseño de patrones básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Trazo de falda básica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Trazo de faldas rotondas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazo de base superior femenina',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Análisis y trazo de sistema de ajuste',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Variantes de básicos femeninos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trazo básico blusa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Trazo blusa con almilla y cuello camisero',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Piezas complementarias',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Trazo de vestido clásico',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'El pantalón femenino y sus variantes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Trazo pantalón femenino',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Distribución de aumentos de costura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Patrones de pantalón femenino',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Variantes de pantalón femenino',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Taller experimental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Detalles piezas de diseño desde el molde',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Detalles piezas de diseño desde el molde',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Escotes, cuellos y solapas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Mangas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Análisis y comportamiento del patrón manga',
            hash: 't_4_5',
          },
        ],
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
        download: 'downloads/material.pdf',
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
  referencias: [
    {
      referencia:
        'Carrera de diseño y gestión de moda. (2015). Técnicas de patronaje. Tomo II - Hombre. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/41258',
    },
    {
      referencia: 'Confecciones Linda. (2019). Tipos de faldas rotondas',
      link: 'https://i.ytimg.com/vi/X0Vee6CuvV0/maxresdefault.jpg',
    },
    {
      referencia: 'Pinterest. (2021). Diseño plano con alforzas. ',
      link: 'https://co.pinterest.com/pin/668362400975891532/',
    },
    {
      referencia:
        'SENA. (2020). Análisis e interpretación de pantalón sudadera [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?app=desktop&v=8vgwqHz6Qio?si=tiGPKAAte-ODbzK2&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Análisis y trazo de sistema de ajuste pinzas y cortes [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=pb0f6QFi9Y8?si=5LxEL8mnTjbGyIi6&t=1759s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Base inferior de pantalón femenino [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=k0-m6ftaKts?si=JPq17VJXCmfUZgkK&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Base inferior falda femenino [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=kw9nde2uyBs?si=JSUu75IUfdlvNg9Y&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Generalidades de manga kimona y ranglan [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=bsxn_w-kS5Y?si=g4cSIf_4tf6YYJms&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia: 'SENA. (2020). Interpretación de mangas [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=jAAy_cQfRok?si=NDoa4uu77_s515zu&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia:
        'SENA. (2020). Interpretación de prendas inferiores [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=fkHL3e5EOPI?si=Wcu0WVoyVObLpqBk&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia:
        'SENA. (2011). Manual de patronaje básico e interpretación de diseños. ',
      link:
        ' https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },

    {
      referencia:
        'SENA. (2011). Manual de patronaje básico e interpretación de diseños. Centro de Manufactura en Textiles y Cuero. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4725/Manual_patronaje_basico_interpretacion_disenos.PDF;jsessionid=CDC8FDE9468D98E37FFD127332113A29?sequence=1',
    },

    {
      referencia:
        'SENA. (2020). Traslados de pinza correctiva de talles [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=EpSXWyWzcPo?si=7wMuK33shGHoeBk-&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia: 'SENA. (2020). Trazo de blusa femenina [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=DamxUrw0CZM?si=GdB77qVEzP6BxoAg&t=1523s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia: 'SENA. (2020). Trazo de faldas rotondas [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=DJIfqv1L4FA?si=O_A8hE4p4iOQWpHT&t=918s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia:
        'SENA. (2020). Trazo de manga y cabezas de manga. [video]. YouTube.  ',
      link:
        'https://www.youtube.com/watch?v=bOKMgtgSzM4?si=dSmjoRRkF8JOVQTs&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia:
        'The Cutting Class. (2021). Pleats at Antipodium, Victoria Beckham & Alexander Wang. ',
      link:
        'https://www.thecuttingclass.com/pleats-at-antipodium-victoria-beckham-alexander/',
    },
  ],
  glosario: [
    {
      termino: 'Acabados',
      significado:
        'son los diferentes sistemas industriales para perfeccionar un producto. El acabado en los tejidos comprende el blanqueado, teñido, encogido, estirado, estampado, satinado y planchado.',
    },
    {
      termino: 'Almilla',
      significado:
        'en las prendas de hombre es el corte ubicado en la parte superior de la espalda de la camisa.',
    },
    {
      termino: 'Antropometría',
      significado:
        'parte de la Antropología que estudia las proporciones y medidas del cuerpo humano. La antropometría es una técnica auxiliar de la paleontología.',
    },
    {
      termino: 'Aplomo',
      significado:
        'referencia interna (taladro) o externa (piquete) que se da a una pieza o patrón para indicar uniones en las piezas o situación de piezas superpuestas, bordados, etc.',
    },
    {
      termino: 'Base (patrón)',
      significado:
        'modelo que sirve de muestra para sacar otro igual o semejante.',
    },
    {
      termino: 'Caída',
      significado:
        'característica básica de cada tejido que se rige por la forma en que fue manufacturado y el peso de la fibra. Los materiales sintéticos con base plástica no caen tan bien como los de fibras naturales.',
    },
    {
      termino: 'Cartera',
      significado:
        'tapa con la cual se cierra el bolsillo. Adorno que cubre la abertura del bolsillo de algunas prendas del vestido.',
    },
    {
      termino: 'Contorno',
      significado:
        'conjunto de líneas que limitan una figura o el perímetro de esta.',
    },
    {
      termino: 'Cruce',
      significado:
        'línea formando un margen entre el centro y el canto de botonadura.',
    },
    {
      termino: 'Fruncidos',
      significado:
        'son pliegues blandos de tela, cercanos a las costuras y orientados hacia el interior del cuerpo.',
    },
    {
      termino: 'Medida deducidar',
      significado:
        'cuadro de tallas y medidas industriales para la elaboración de patrones de prendas de vestir.',
    },
    {
      termino: 'Pinza',
      significado:
        'pliegue que se cose en la tela para darle una forma determinada.',
    },
  ],
  complementario: [
    {
      tema: 'Patronaje e interpretación de prendas de vestir ',
      referencia:
        'SENA. (2011). Manual de patronaje básico e interpretación de diseños. Centro de Manufactura en Textiles y Cuero.',
      tipo: 'Manual',
      descarga: '/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquía - Diseño, Confección y Moda',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquía - Diseño, Confección y Moda',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz ',
          cargo: 'Diseñadora Instruccional ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Vilma Lucía Perilla ',
          cargo: 'Revisora Metodológica y Pedagógica ',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y Evaluadora Instruccional ',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador Web',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>Full-Stack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>Full-Stack</i> Junior',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
}
