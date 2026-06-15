const countries = {

    colombia:{
        name:"Colombia",
        capital:"Bogotá",
        population:"52 Millones",
        region:"América",
        currency:"COP",
        language:"Español",
        weather:"28°C",
        attractions:[
            "Cartagena",
            "Parque Tayrona",
            "Monserrate",
            "San Andrés",
            "Guatapé"
        ],
        flag:"https://flagcdn.com/w320/co.png"
    },

    japon:{
        name:"Japón",
        capital:"Tokio",
        population:"125 Millones",
        region:"Asia",
        currency:"JPY",
        language:"Japonés",
        weather:"22°C",
        attractions:[
            "Monte Fuji",
            "Tokio Tower",
            "Kioto",
            "Osaka",
            "Nara"
        ],
        flag:"https://flagcdn.com/w320/jp.png"
    },

    canada:{
        name:"Canadá",
        capital:"Ottawa",
        population:"40 Millones",
        region:"América",
        currency:"CAD",
        language:"Inglés y Francés",
        weather:"18°C",
        attractions:[
            "Niágara",
            "Toronto",
            "Vancouver",
            "Banff",
            "Montreal"
        ],
        flag:"https://flagcdn.com/w320/ca.png"
    },

    españa:{
        name:"España",
        capital:"Madrid",
        population:"48 Millones",
        region:"Europa",
        currency:"EUR",
        language:"Español",
        weather:"25°C",
        attractions:[
            "Sagrada Familia",
            "Parque Güell",
            "Museo del Prado",
            "Alhambra",
            "Ibiza"
        ],
        flag:"https://flagcdn.com/w320/es.png"
    },

    francia:{
        name:"Francia",
        capital:"París",
        population:"68 Millones",
        region:"Europa",
        currency:"EUR",
        language:"Francés",
        weather:"20°C",
        attractions:[
            "Torre Eiffel",
            "Museo del Louvre",
            "Versalles",
            "Mont Saint-Michel",
            "Costa Azul"
        ],
        flag:"https://flagcdn.com/w320/fr.png"
    },

    alemania:{
        name:"Alemania",
        capital:"Berlín",
        population:"84 Millones",
        region:"Europa",
        currency:"EUR",
        language:"Alemán",
        weather:"18°C",
        attractions:[
            "Puerta de Brandeburgo",
            "Castillo Neuschwanstein",
            "Muro de Berlín",
            "Catedral de Colonia",
            "Selva Negra"
        ],
        flag:"https://flagcdn.com/w320/de.png"
    },

    italia:{
        name:"Italia",
        capital:"Roma",
        population:"59 Millones",
        region:"Europa",
        currency:"EUR",
        language:"Italiano",
        weather:"24°C",
        attractions:[
            "Coliseo",
            "Venecia",
            "Torre de Pisa",
            "Pompeya",
            "Costa Amalfitana"
        ],
        flag:"https://flagcdn.com/w320/it.png"
    },

    brasil:{
        name:"Brasil",
        capital:"Brasilia",
        population:"203 Millones",
        region:"América",
        currency:"BRL",
        language:"Portugués",
        weather:"30°C",
        attractions:[
            "Cristo Redentor",
            "Copacabana",
            "Amazonas",
            "Pan de Azúcar",
            "Cataratas de Iguazú"
        ],
        flag:"https://flagcdn.com/w320/br.png"
    },

    argentina:{
        name:"Argentina",
        capital:"Buenos Aires",
        population:"46 Millones",
        region:"América",
        currency:"ARS",
        language:"Español",
        weather:"23°C",
        attractions:[
            "Obelisco",
            "Perito Moreno",
            "Ushuaia",
            "Bariloche",
            "Cataratas de Iguazú"
        ],
        flag:"https://flagcdn.com/w320/ar.png"
    },

    mexico:{
        name:"México",
        capital:"Ciudad de México",
        population:"129 Millones",
        region:"América",
        currency:"MXN",
        language:"Español",
        weather:"27°C",
        attractions:[
            "Chichén Itzá",
            "Cancún",
            "Teotihuacán",
            "Tulum",
            "Los Cabos"
        ],
        flag:"https://flagcdn.com/w320/mx.png"
    },

    estadosunidos:{
        name:"Estados Unidos",
        capital:"Washington D.C.",
        population:"340 Millones",
        region:"América",
        currency:"USD",
        language:"Inglés",
        weather:"21°C",
        attractions:[
            "Estatua de la Libertad",
            "Gran Cañón",
            "Times Square",
            "Disney World",
            "Las Vegas"
        ],
        flag:"https://flagcdn.com/w320/us.png"
    },

    reinounido:{
        name:"Reino Unido",
        capital:"Londres",
        population:"68 Millones",
        region:"Europa",
        currency:"GBP",
        language:"Inglés",
        weather:"17°C",
        attractions:[
            "Big Ben",
            "London Eye",
            "Stonehenge",
            "Castillo de Windsor",
            "Tower Bridge"
        ],
        flag:"https://flagcdn.com/w320/gb.png"
    },

    china:{
        name:"China",
        capital:"Pekín",
        population:"1410 Millones",
        region:"Asia",
        currency:"CNY",
        language:"Chino",
        weather:"19°C",
        attractions:[
            "Gran Muralla China",
            "Ciudad Prohibida",
            "Shanghai Tower",
            "Guerreros de Terracota",
            "Zhangjiajie"
        ],
        flag:"https://flagcdn.com/w320/cn.png"
    },

    india:{
        name:"India",
        capital:"Nueva Delhi",
        population:"1430 Millones",
        region:"Asia",
        currency:"INR",
        language:"Hindi",
        weather:"31°C",
        attractions:[
            "Taj Mahal",
            "Jaipur",
            "Goa",
            "Kerala",
            "Agra"
        ],
        flag:"https://flagcdn.com/w320/in.png"
    },

    coreadelsur:{
        name:"Corea del Sur",
        capital:"Seúl",
        population:"52 Millones",
        region:"Asia",
        currency:"KRW",
        language:"Coreano",
        weather:"22°C",
        attractions:[
            "Torre N Seúl",
            "Palacio Gyeongbokgung",
            "Busan",
            "Jeju",
            "Lotte World"
        ],
        flag:"https://flagcdn.com/w320/kr.png"
    },

    australia:{
        name:"Australia",
        capital:"Canberra",
        population:"27 Millones",
        region:"Oceanía",
        currency:"AUD",
        language:"Inglés",
        weather:"26°C",
        attractions:[
            "Ópera de Sídney",
            "Gran Barrera de Coral",
            "Melbourne",
            "Uluru",
            "Bondi Beach"
        ],
        flag:"https://flagcdn.com/w320/au.png"
    },

    rusia:{
        name:"Rusia",
        capital:"Moscú",
        population:"144 Millones",
        region:"Europa y Asia",
        currency:"RUB",
        language:"Ruso",
        weather:"10°C",
        attractions:[
            "Plaza Roja",
            "Kremlin",
            "Lago Baikal",
            "San Petersburgo",
            "Transiberiano"
        ],
        flag:"https://flagcdn.com/w320/ru.png"
    },

    suiza:{
        name:"Suiza",
        capital:"Berna",
        population:"9 Millones",
        region:"Europa",
        currency:"CHF",
        language:"Alemán, Francés e Italiano",
        weather:"15°C",
        attractions:[
            "Zúrich",
            "Alpes Suizos",
            "Lago Lemán",
            "Lucerna",
            "Interlaken"
        ],
        flag:"https://flagcdn.com/w320/ch.png"
    },

    turquia:{
        name:"Turquía",
        capital:"Ankara",
        population:"86 Millones",
        region:"Europa y Asia",
        currency:"TRY",
        language:"Turco",
        weather:"24°C",
        attractions:[
            "Estambul",
            "Capadocia",
            "Santa Sofía",
            "Pamukkale",
            "Éfeso"
        ],
        flag:"https://flagcdn.com/w320/tr.png"
    },

    egipto:{
        name:"Egipto",
        capital:"El Cairo",
        population:"112 Millones",
        region:"África",
        currency:"EGP",
        language:"Árabe",
        weather:"34°C",
        attractions:[
            "Pirámides de Giza",
            "Esfinge",
            "Luxor",
            "Valle de los Reyes",
            "Río Nilo"
        ],
        flag:"https://flagcdn.com/w320/eg.png"
    },

    sudafrica:{
        name:"Sudáfrica",
        capital:"Pretoria",
        population:"63 Millones",
        region:"África",
        currency:"ZAR",
        language:"Inglés y otros",
        weather:"23°C",
        attractions:[
            "Ciudad del Cabo",
            "Table Mountain",
            "Parque Kruger",
            "Durban",
            "Cabo de Buena Esperanza"
        ],
        flag:"https://flagcdn.com/w320/za.png"
    },

    emiratosarabes:{
        name:"Emiratos Árabes Unidos",
        capital:"Abu Dabi",
        population:"10 Millones",
        region:"Asia",
        currency:"AED",
        language:"Árabe",
        weather:"38°C",
        attractions:[
            "Burj Khalifa",
            "Dubái Mall",
            "Palm Jumeirah",
            "Desierto de Dubái",
            "Mezquita Sheikh Zayed"
        ],
        flag:"https://flagcdn.com/w320/ae.png"
    },

    singapur:{
        name:"Singapur",
        capital:"Singapur",
        population:"6 Millones",
        region:"Asia",
        currency:"SGD",
        language:"Inglés, Chino y Malayo",
        weather:"31°C",
        attractions:[
            "Marina Bay Sands",
            "Gardens by the Bay",
            "Sentosa",
            "Merlion",
            "Orchard Road"
        ],
        flag:"https://flagcdn.com/w320/sg.png"
    },

    tailandia:{
        name:"Tailandia",
        capital:"Bangkok",
        population:"71 Millones",
        region:"Asia",
        currency:"THB",
        language:"Tailandés",
        weather:"32°C",
        attractions:[
            "Bangkok",
            "Phuket",
            "Chiang Mai",
            "Ayutthaya",
            "Krabi"
        ],
        flag:"https://flagcdn.com/w320/th.png"
    },

    portugal:{
        name:"Portugal",
        capital:"Lisboa",
        population:"10 Millones",
        region:"Europa",
        currency:"EUR",
        language:"Portugués",
        weather:"22°C",
        attractions:[
            "Lisboa",
            "Oporto",
            "Algarve",
            "Sintra",
            "Torre de Belém"
        ],
        flag:"https://flagcdn.com/w320/pt.png"
    },

    

};