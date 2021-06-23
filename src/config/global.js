export default {
  global: {
    componenteFormativo: 'Elaboración de modelos femeninos',
    descripcionCurso:
      'En este componente formativo se abordan las temáticas de levantamiento de patrones base, básicos de patronaje femenino y desarrollos de moldería.<br><br>En la elaboración de moldes básicos desde el componente anatómico se logra interpretar diseños a partir de la transformación de los patrones base.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos para el diseño de patrones básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '1.1',
            titulo: 'Trazo de falda básica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.2',
            titulo: 'Trazo de faldas rotondas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.3',
            titulo: 'Trazo de base superior femenina',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.4',
            titulo: 'Análisis y trazo de sistema de ajuste',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Variantes de básicos femeninos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '2.1',
            titulo: 'Trazo básico blusa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-play-circle',
            numero: '2.2',
            titulo: 'Trazo blusa con almilla y cuello camisero',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Piezas complementarias',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-play-circle',
            numero: '2.4',
            titulo: 'Trazo de vestido clásico',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El pantalón femenino y sus variantes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Trazo pantalón femenino',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Distribución de aumentos de costura',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-play-circle',
            numero: '3.3',
            titulo: 'Patrones de pantalón femenino',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-play-circle',
            numero: '3.4',
            titulo: 'Variantes de pantalón femenino',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Taller experimental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Detalles piezas de diseño desde el molde',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Detalles piezas de diseño desde el molde',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-play-circle',
            numero: '4.3',
            titulo: 'Escotes, cuellos y solapas',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Mangas',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-play-circle',
            numero: '4.5',
            titulo: 'Análisis y comportamiento del patrón manga',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leidy Johana Velásquez Hernández',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquía',
      },
      {
        nombre: 'Paola Angélica Castro Salazar',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquía',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz ',
        cargo: 'Diseñadora instruccional ',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla ',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional ',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web ',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Ricardo Alonso González Vargas',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa villamziar',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
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
      link: 'https://co.pinterest.com/pin/469711436140532378/',
    },
    {
      referencia:
        'SENA. (2020). Análisis e interpretación de pantalón sudadera [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?app=desktop&v=xcUi9S-ZqzI&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Análisis y trazo de sistema de ajuste pinzas y cortes [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=Tq_3F32nynw&t=1759s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Base inferior de pantalón femenino [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=7XPqP_3v0L0&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Base inferior falda femenino [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=wl5EjrLU-8Y&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (2020). Generalidades de manga kimona y ranglan [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=tJWzjpSmkps&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia: 'SENA. (2020). Interpretación de mangas [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=2a81MoVG6Dg&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia:
        'SENA. (2020). Interpretación de prendas inferiores [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=K2SbwvDv7eA&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
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
        'https://www.youtube.com/watch?v=encNXGtE15Y&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia: 'SENA. (2020). Trazo de blusa femenina [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=euVdaqaTQlY&t=1523s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia: 'SENA. (2020). Trazo de faldas rotondas [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=NxZQL369p9Q&t=918s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      referencia:
        'SENA. (2020). Trazo de manga y cabezas de manga. [video]. YouTube.  ',
      link:
        'https://www.youtube.com/watch?v=EAl_FBfkYUE&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
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
      texto:
        'SENA. (2011). Manual de patronaje básico e interpretación de diseños. Centro de Manufactura en Textiles y Cuero.',
      tipo: 'Manual',
      descarga: '/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf',
    },
    {
      texto: 'SENA. (2020). Cuellos',
      tipo: 'PDF',
      descarga: '/downloads/CF4_Anexo1_Cuellos.pdf',
    },
    {
      texto: 'SENA. (2020). Mangas.',
      tipo: 'PDF',
      descarga: '/downloads/CF4_Anexo2_Mangas.pdf',
    },
    {
      texto: 'SENA. (2020). Bolsillos.',
      tipo: 'PDF',
      descarga: '/downloads/CF4_Anexo3_Bolsillos.pdf',
    },
    {
      texto: 'SENA. (2020). Pretinas.',
      tipo: 'PDF',
      descarga: '/downloads/CF4_Anexo4_pretinas.pdf',
    },
  ],
}
