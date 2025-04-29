// =============================================
// BASE DE DATOS DE PRODUCTOS
// =============================================
const productos = [
    {
        id: 1,
        nombre: "Camisa Hombre Ruben Azul Frio",
        categoria: "camisas",
        descripcion: "Camisa de vestir en algodón Oxford de alta calidad con corte clásico y detalles en costuras reforzadas.",
        precio: 189.90,
        precioAnterior: 229.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/365836-1000-1248/2024378_1.jpg?v=638615767478600000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 2,
        nombre: "Pantalón Mujer Bella Beige",
        categoria: "pantalones",
        descripcion: "Pantalón chino en tejido resistente con corte slim fit y acabados premium en los bolsillos.",
        precio: 84.90,
        precioAnterior: 129.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/382331-1000-1248/3100864_2.jpg?v=638804253167830000",
        tallas: ["28", "30", "32", "34", "36"],
        destacado: false
    },
    {
        id: 3,
        nombre: "Chompa Mujer Rosa Crema Angora",
        categoria: "chaquetas",
        descripcion: "Blazer elegante en lana merino con corte slim fit y forro de seda. Ideal para ocasiones formales.",
        precio: 69.90,
        precioAnterior: 99.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383257-1000-1248/3089740_1.jpg?v=638809521184530000",
        tallas: ["S", "M", "L"],
        destacado: true
    },
    {
        id: 4,
        nombre: "Jean Hombre Yenko Total Dirty Cristal",
        categoria: "jeans",
        descripcion: "Jeans en tejido fluido con escote en V y detalles drapeados en la cintura.",
        precio: 279.90,
        precioAnterior: 349.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/382564-1000-1248/3129866_1.jpg?v=638804280342330000",
        tallas: ["28", "30", "32", "34"],
        destacado: true
    },
    {
        id: 5,
        nombre: "Polera Hombre Ernan Negro",
        categoria: "poleras",
        descripcion: "Polera Derby en cuero italiano genuino con suela de goma antideslizante y plantilla acolchonada.",
        precio: 389.90,
        precioAnterior: 459.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/380629-1000-1248/3095404_1.jpg?v=638793140980700000",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 6,
        nombre: "Camisa Hombre Steven Negro",
        categoria: "camisas",
        descripcion: "Camiseta básica en algodón Pima de alta densidad con costuras reforzadas y cuello redondo.",
        precio: 89.90,
        precioAnterior: 119.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/344094-1000-1248/1979664_1.jpg?v=638449834038530000",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 7,
        nombre: "Jean Mujer Dhapne Total Bio Blue",
        categoria: "jeans",
        descripcion: "Jeans con mezcla de elastano para mayor comodidad, corte slim fit y lavado oscuro premium.",
        precio: 119.90,
        precioAnterior: 169.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/382540-1000-1248/3129986_1.jpg?v=638804277577630000",
        tallas: ["28", "30", "32", "34"],
        destacado: false
    },
    {
        id: 8,
        nombre: "Abrigo Mujer Alana Negro",
        categoria: "abrigos",
        descripcion: "Abrigo de lana merino en color camel con solapas notch y bolsillos de vivo. Forro interior de satén.",
        precio: 149.90,
        precioAnterior: 229.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383309-1000-1248/3095887_1.jpg?v=638809521566270000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 9,
        nombre: "Jean Hombre Jarhet Negro",
        categoria: "jeans",
        descripcion: "Vestido cocktail en tejido con stretch, escote barco y detalles de encaje en los puños.",
        precio: 84.90,
        precioAnterior: 169.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/372606-1000-1248/2077268_1.jpg?v=638685170732070000 ",
        tallas: ["XS", "S", "M", "L"],
        destacado: true
    },
    {
        id: 10,
        nombre: "Abrigo Mujer Alexia Beige Natural",
        categoria: "abrigos",
        descripcion: "Botines Chelsea en cuero engrasado con elásticos laterales y suela de goma con tracción.",
        precio: 129.90,
        precioAnterior: 199.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383483-1000-1248/3095312_1.jpg?v=638810192960500000",
        tallas: ["38", "39", "40", "41", "42"],
        destacado: false
    },
    {
        id: 11,
        nombre: "Camisa Hombre Wenger Azul Atlántico",
        categoria: "camisas",
        descripcion: "Camisa de lino 100% natural con corte relaxed fit y mangas enrollables con botones.",
        precio: 59.90,
        precioAnterior: 99.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/378596-1000-1248/2076727_1.jpg?v=638764066093000000",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 12,
        nombre: "Chompa Mujer Onika Beige Sand",
        categoria: "chaquetas",
        descripcion: "Chaqueta bomber en nylon resistente al agua con forro interior de algodón y ribetes de cuero.",
        precio: 45.90,
        precioAnterior: 69.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383431-1000-1248/3097409_1.jpg?v=638810186761070000",
        tallas: ["S", "M", "L"],
        destacado: true
    },
    {
        id: 13,
        nombre: "Chaqueta Hombre Reversible Beige",
        categoria: "chaquetas",
        descripcion: "Chaqueta reversible acolchada en poliéster, ligera y abrigadora para temporada de frío.",
        precio: 159.90,
        precioAnterior: 229.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/369794-1000-1248/2057920_1.jpg?v=638650638151170000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 14,
        nombre: "Chaqueta Hombre Casual Negra",
        categoria: "chaquetas",
        descripcion: "Chaqueta tipo bomber negra con cierre frontal y bolsillos laterales, ideal para todo evento casual.",
        precio: 179.90,
        precioAnterior: 249.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/370155-1000-1248/2062273_1.jpg?v=638654582767430000",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 15,
        nombre: "Abrigo Hombre Largo Negro",
        categoria: "abrigos",
        descripcion: "Abrigo largo en tono negro, elegante y abrigador para los días más fríos.",
        precio: 249.90,
        precioAnterior: 349.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/371512-1000-1248/2071470_1.jpg?v=638670014093870000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 16,
        nombre: "Pantalón Hombre Slim Fit Azul",
        categoria: "pantalones",
        descripcion: "Pantalón de vestir slim fit en azul marino, ideal para oficina o eventos formales.",
        precio: 159.90,
        precioAnterior: 209.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/376713-1000-1248/3113095_1.jpg?v=638741017116530000",
        tallas: ["28", "30", "32", "34"],
        destacado: false
    },
    {
        id: 17,
        nombre: "Jean Hombre Slim Fit Azul Medio",
        categoria: "jeans",
        descripcion: "Jean de corte slim, azul medio lavado, versátil para looks casuales.",
        precio: 119.90,
        precioAnterior: 159.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383360-1000-1248/3111495_1.jpg?v=638809523579470000",
        tallas: ["28", "30", "32", "34"],
        destacado: false
    },
    {
        id: 18,
        nombre: "Camisa Hombre Casual Cuadros Rojos",
        categoria: "camisas",
        descripcion: "Camisa casual de cuadros en tonos rojos, confeccionada en algodón suave.",
        precio: 99.90,
        precioAnterior: 139.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/374314-1000-1248/3098985_1.jpg?v=638715972355730000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 19,
        nombre: "Chaqueta Hombre Windbreaker Negra",
        categoria: "chaquetas",
        descripcion: "Chaqueta rompevientos ligera, resistente al agua y de secado rápido.",
        precio: 139.90,
        precioAnterior: 189.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/365585-1000-1248/2022697_1.jpg?v=638614118915300000",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 20,
        nombre: "Abrigo Hombre Liso Azul Oscuro",
        categoria: "abrigos",
        descripcion: "Abrigo minimalista azul oscuro, de corte clásico, con solapas y botones frontales.",
        precio: 299.90,
        precioAnterior: 399.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/368996-1000-1248/2050635_1.jpg?v=638640095292100000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 21,
        nombre: "Pantalón Hombre Cargo Verde Militar",
        categoria: "pantalones",
        descripcion: "Pantalón estilo cargo con múltiples bolsillos y corte recto.",
        precio: 149.90,
        precioAnterior: 199.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/378116-1000-1248/3110864_1.jpg?v=638763657056000000",
        tallas: ["30", "32", "34", "36"],
        destacado: false
    },
    {
        id: 22,
        nombre: "Jean Hombre Tapered Azul Oscuro",
        categoria: "jeans",
        descripcion: "Jean tapered de algodón stretch, cómodo y moderno en color azul oscuro.",
        precio: 139.90,
        precioAnterior: 179.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/382757-1000-1248/3113533_1.jpg?v=638806001590800000",
        tallas: ["28", "30", "32", "34"],
        destacado: true
    },
    {
        id: 23,
        nombre: "Camisa Hombre Formal Blanca",
        categoria: "camisas",
        descripcion: "Camisa formal blanca en algodón, ideal para ocasiones especiales o reuniones laborales.",
        precio: 119.90,
        precioAnterior: 159.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383510-1000-1248/3086221_1.jpg?v=638810194685230000",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 24,
        nombre: "Camisa Hombre Denim Azul Oscuro",
        categoria: "camisas",
        descripcion: "Camisa de mezclilla en azul oscuro, corte casual, perfecta para todo el año.",
        precio: 139.90,
        precioAnterior: 189.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383143-1000-1248/3105566_1.jpg?v=638809517264800000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 25,
        nombre: "Chaqueta Hombre Casual Verde",
        categoria: "chaquetas",
        descripcion: "Chaqueta verde de poliéster con cierre frontal, ideal para días frescos.",
        precio: 149.90,
        precioAnterior: 199.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/369793-1000-1248/2057918_1.jpg?v=638650637902430000",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 26,
        nombre: "Chaqueta Hombre Azul Oscuro",
        categoria: "chaquetas",
        descripcion: "Chaqueta de corte moderno y color azul oscuro, perfecta para el invierno.",
        precio: 169.90,
        precioAnterior: 219.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/370159-1000-1248/2062277_1.jpg?v=638654582789530000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
    id: 27,
    nombre: "Abrigo Hombre Negro Elegante",
    categoria: "abrigos",
    descripcion: "Abrigo largo con botones, estilo formal y sobrio para ocasiones especiales.",
    precio: 299.90,
    precioAnterior: 389.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/371509-1000-1248/2071467_1.jpg?v=638670014049770000",
    tallas: ["M", "L", "XL"],
    destacado: true
    },
    {
    id: 28,
    nombre: "Pantalón Hombre Slim Negro",
    categoria: "pantalones",
    descripcion: "Pantalón de vestir slim negro, adaptable para oficina y eventos sociales.",
    precio: 139.90,
    precioAnterior: 189.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/375330-1000-1248/3113044_1.jpg?v=638725295556700000",
    tallas: ["30", "32", "34"],
    destacado: false
    },
    {
    id: 29,
    nombre: "Jean Hombre Straight Fit Azul Oscuro",
    categoria: "jeans",
    descripcion: "Jean corte straight, color azul oscuro, ideal para un look casual.",
    precio: 119.90,
    precioAnterior: 159.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/383355-1000-1248/3111464_1.jpg?v=638809523549170000",
    tallas: ["28", "30", "32", "34", "36"],
    destacado: true
    },
    {
    id: 30,
    nombre: "Camisa Hombre Casual Azul Claro",
    categoria: "camisas",
    descripcion: "Camisa casual en azul claro, ideal para combinar con jeans o pantalones chinos.",
    precio: 99.90,
    precioAnterior: 139.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/374317-1000-1248/3098991_1.jpg?v=638715972373770000",
    tallas: ["S", "M", "L"],
    destacado: false
    },
    {
    id: 31,
    nombre: "Chaqueta Hombre Acolchada Azul",
    categoria: "chaquetas",
    descripcion: "Chaqueta acolchada ligera, perfecta para clima templado a frío.",
    precio: 159.90,
    precioAnterior: 209.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/370157-1000-1248/2062275_1.jpg?v=638654582778630000",
    tallas: ["S", "M", "L", "XL"],
    destacado: true
    },
    {
    id: 32,
    nombre: "Abrigo Hombre Casual Beige",
    categoria: "abrigos",
    descripcion: "Abrigo casual en color beige, suave y abrigador para el invierno.",
    precio: 269.90,
    precioAnterior: 359.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/368999-1000-1248/2050639_1.jpg?v=638640095300700000",
    tallas: ["M", "L", "XL"],
    destacado: false
    },
    {
    id: 33,
    nombre: "Pantalón Hombre Chino Beige",
    categoria: "pantalones",
    descripcion: "Pantalón chino beige de corte slim, versátil para outfits casuales o smart casual.",
    precio: 139.90,
    precioAnterior: 179.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/378113-1000-1248/3110856_1.jpg?v=638763657027300000",
    tallas: ["30", "32", "34"],
    destacado: true
    },
    {
    id: 34,
    nombre: "Jean Hombre Regular Fit Azul Claro",
    categoria: "jeans",
    descripcion: "Jean regular fit azul claro, resistente y cómodo para el uso diario.",
    precio: 129.90,
    precioAnterior: 169.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/383358-1000-1248/3111485_1.jpg?v=638809523563030000",
    tallas: ["28", "30", "32", "34"],
    destacado: false
    },
    {
    id: 35,
    nombre: "Camisa Hombre Manga Larga Azul Oscuro",
    categoria: "camisas",
    descripcion: "Camisa manga larga de algodón, color azul oscuro, para un look sofisticado.",
    precio: 119.90,
    precioAnterior: 159.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/383153-1000-1248/3105565_1.jpg?v=638809517300300000",
    tallas: ["M", "L", "XL"],
    destacado: true
    },
    {
    id: 36,
    nombre: "Chaqueta Hombre Casual Gris",
    categoria: "chaquetas",
    descripcion: "Chaqueta gris de poliéster con detalles en ribete, práctica para diario.",
    precio: 149.90,
    precioAnterior: 199.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/369798-1000-1248/2057924_1.jpg?v=638650638181070000",
    tallas: ["S", "M", "L", "XL"],
    destacado: false
    },
    {
    id: 37,
    nombre: "Abrigo Hombre Azul Marino",
    categoria: "abrigos",
    descripcion: "Abrigo azul marino de diseño clásico, tejido grueso ideal para el invierno.",
    precio: 299.90,
    precioAnterior: 399.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/368993-1000-1248/2050633_1.jpg?v=638640095287700000",
    tallas: ["M", "L", "XL"],
    destacado: true
    },
    {
    id: 38,
    nombre: "Pantalón Hombre Jogger Negro",
    categoria: "pantalones",
    descripcion: "Jogger de algodón negro, ideal para un look urbano y relajado.",
    precio: 119.90,
    precioAnterior: 159.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/378115-1000-1248/3110861_1.jpg?v=638763657042270000",
    tallas: ["S", "M", "L"],
    destacado: false
    },
    {
    id: 39,
    nombre: "Jean Hombre Skinny Azul Medio",
    categoria: "jeans",
    descripcion: "Jean skinny fit azul medio lavado, moderno y estilizado.",
    precio: 139.90,
    precioAnterior: 179.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/382763-1000-1248/3113535_1.jpg?v=638806001629800000",
    tallas: ["28", "30", "32", "34"],
    destacado: true
    },
    {
    id: 40,
    nombre: "Camisa Hombre Casual Estampada Azul",
    categoria: "camisas",
    descripcion: "Camisa de algodón estampada azul, perfecta para un estilo relajado.",
    precio: 99.90,
    precioAnterior: 139.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/374315-1000-1248/3098987_1.jpg?v=638715972363070000",
    tallas: ["S", "M", "L", "XL"],
    destacado: false
    },
    {
    id: 41,
    nombre: "Chaqueta Hombre Cuero Sintético Negra",
    categoria: "chaquetas",
    descripcion: "Chaqueta negra de cuero sintético con diseño clásico y cierres metálicos.",
    precio: 199.90,
    precioAnterior: 249.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/365592-1000-1248/2022706_1.jpg?v=638614118948870000",
    tallas: ["M", "L", "XL"],
    destacado: true
    },
    {
    id: 42,
    nombre: "Abrigo Hombre De Lana Gris Oscuro",
    categoria: "abrigos",
    descripcion: "Abrigo de lana mezclada, gris oscuro, con corte recto y elegante.",
    precio: 319.90,
    precioAnterior: 429.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/368995-1000-1248/2050634_1.jpg?v=638640095291400000",
    tallas: ["M", "L", "XL"],
    destacado: false
    },
    {
    id: 43,
    nombre: "Pantalón Hombre Clásico Gris Claro",
    categoria: "pantalones",
    descripcion: "Pantalón clásico de corte recto en color gris claro, ideal para oficina.",
    precio: 129.90,
    precioAnterior: 179.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/376715-1000-1248/3113097_1.jpg?v=638741017141300000",
    tallas: ["30", "32", "34"],
    destacado: false
    },
    {
    id: 44,
    nombre: "Jean Hombre Slim Azul Clásico",
    categoria: "jeans",
    descripcion: "Jean slim fit azul clásico, imprescindible en cualquier guardarropa.",
    precio: 119.90,
    precioAnterior: 159.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/383359-1000-1248/3111494_1.jpg?v=638809523571030000",
    tallas: ["28", "30", "32", "34"],
    destacado: true
    },
    {
    id: 45,
    nombre: "Camisa Hombre Casual Blanca",
    categoria: "camisas",
    descripcion: "Camisa blanca casual, ideal para un estilo fresco y versátil.",
    precio: 89.90,
    precioAnterior: 129.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/374316-1000-1248/3098988_1.jpg?v=638715972368470000",
    tallas: ["S", "M", "L", "XL"],
    destacado: false
    },
    {
    id: 46,
    nombre: "Camisa Hombre Casual Denim Claro",
    categoria: "camisas",
    descripcion: "Camisa de mezclilla clara, de estilo relajado, perfecta para looks urbanos.",
    precio: 119.90,
    precioAnterior: 159.90,
    imagen: "https://topitop.vteximg.com.br/arquivos/ids/383157-1000-1248/3105567_1.jpg?v=638809517318900000",
    tallas: ["S", "M", "L"],
    destacado: true
    },
    {
        id: 47,
        nombre: "Chaqueta Hombre Bomber Negra",
        categoria: "chaquetas",
        descripcion: "Chaqueta bomber negra de tela ligera, perfecta para looks urbanos y casuales.",
        precio: 179.90,
        precioAnterior: 229.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/370161-1000-1248/2062280_1.jpg?v=638654582804770000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
      },
      {
        id: 48,
        nombre: "Jean Hombre Slim Fit Negro",
        categoria: "jeans",
        descripcion: "Jean slim fit color negro, elegante y versátil para todo tipo de ocasión.",
        precio: 129.90,
        precioAnterior: 179.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/382766-1000-1248/3113541_1.jpg?v=638806001648170000",
        tallas: ["28", "30", "32", "34", "36"],
        destacado: true
      }
];

// =============================================
// FUNCIONES PARA RENDERIZAR PRODUCTOS
// =============================================
function renderProductos(productosAMostrar) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    if (productosAMostrar.length === 0) {
        productGrid.innerHTML = '<p class="no-results">No se encontraron productos que coincidan con tu búsqueda.</p>';
        return;
    }

    productosAMostrar.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', producto.id);

        // Badge para productos destacados
        const badge = producto.destacado ? `<div class="product-badge">Destacado</div>` : '';

        // Opciones de tallas
        const sizes = producto.tallas.map(talla => 
            `<div class="size-option">${talla}</div>`
        ).join('');

        productCard.innerHTML = `
            <div class="product-image">
                ${badge}
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${producto.categoria.toUpperCase()}</div>
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price">
                    S/ ${producto.precio.toFixed(2)}
                    ${producto.precioAnterior ? `<span class="old-price">S/ ${producto.precioAnterior.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-sizes">${sizes}</div>
                <button class="add-to-cart">Añadir al carrito</button>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Añadir event listeners a los botones de talla
    document.querySelectorAll('.product-sizes').forEach(sizeContainer => {
        const sizeOptions = sizeContainer.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', function() {
                sizeOptions.forEach(opt => opt.classList.remove('selected')); // Quita seleccionado de todos
                this.classList.add('selected'); // Selecciona solo uno
            });
        });
    });
}

// =============================================
// FILTROS Y FUNCIONALIDAD
// =============================================

// Estado de los filtros
const state = {
    categorias: [],
    tallas: [],
    precioMin: 0,
    precioMax: 1000,
    terminoBusqueda: ''
};

// Función para aplicar todos los filtros
function aplicarFiltros() {
    const productosFiltrados = productos.filter(producto => {
        // Filtro por categoría
        const categoriaMatch = state.categorias.length === 0 || 
                             state.categorias.includes(producto.categoria);
        
        // Filtro por talla
        const tallaMatch = state.tallas.length === 0 || 
                          producto.tallas.some(talla => state.tallas.includes(talla));
        
        // Filtro por precio
        const precioMatch = producto.precio >= state.precioMin && 
                           producto.precio <= state.precioMax;
        
        // Filtro por búsqueda
        const busquedaMatch = state.terminoBusqueda === '' ||
                            producto.nombre.toLowerCase().includes(state.terminoBusqueda.toLowerCase()) ||
                            producto.descripcion.toLowerCase().includes(state.terminoBusqueda.toLowerCase()) ||
                            producto.categoria.toLowerCase().includes(state.terminoBusqueda.toLowerCase());
        
        return categoriaMatch && tallaMatch && precioMatch && busquedaMatch;
    });
    
    renderProductos(productosFiltrados);
    actualizarFiltrosActivos();
    actualizarOpcionesTallas();
}

// Función para actualizar la visualización de filtros activos
function actualizarFiltrosActivos() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    activeFiltersContainer.innerHTML = '';
    
    // Filtros de categoría activos
    state.categorias.forEach(categoria => {
        const filterTag = document.createElement('div');
        filterTag.className = 'active-filter-tag';
        filterTag.innerHTML = `
            ${categoria}
            <button class="remove-filter" data-type="categoria" data-value="${categoria}">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFiltersContainer.appendChild(filterTag);
    });
    
    // Filtros de talla activos
    state.tallas.forEach(talla => {
        const filterTag = document.createElement('div');
        filterTag.className = 'active-filter-tag';
        filterTag.innerHTML = `
            ${talla}
            <button class="remove-filter" data-type="talla" data-value="${talla}">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFiltersContainer.appendChild(filterTag);
    });
    
    // Filtro de precio activo (si no es el rango completo)
    if (state.precioMin !== 0 || state.precioMax !== 1000) {
        const filterTag = document.createElement('div');
        filterTag.className = 'active-filter-tag';
        filterTag.innerHTML = `
            S/${state.precioMin} - S/${state.precioMax}
            <button class="remove-filter" data-type="precio">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFiltersContainer.appendChild(filterTag);
    }
    
    // Event listeners para botones de eliminar filtro
    document.querySelectorAll('.remove-filter').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const value = this.getAttribute('data-value');
            
            if (type === 'categoria') {
                state.categorias = state.categorias.filter(cat => cat !== value);
                document.querySelector(`.filter-checkbox[value="${value}"]`).checked = false;
            } else if (type === 'talla') {
                state.tallas = state.tallas.filter(t => t !== value);
                document.querySelector(`.filter-checkbox[value="${value}"]`).checked = false;
            } else if (type === 'precio') {
                state.precioMin = 0;
                state.precioMax = 1000;
                document.getElementById('minPrice').value = 0;
                document.getElementById('maxPrice').value = 1000;
                document.getElementById('lowerPrice').value = 0;
                document.getElementById('upperPrice').value = 1000;
            }
            
            aplicarFiltros();
        });
    });
}

// Función para actualizar las opciones de tallas disponibles según categorías seleccionadas
function actualizarOpcionesTallas() {
    // Obtener productos filtrados (sin contar el filtro de talla)
    const productosFiltrados = productos.filter(producto => {
        // Filtro por categoría
        const categoriaMatch = state.categorias.length === 0 || 
                             state.categorias.includes(producto.categoria);
        
        // Filtro por precio
        const precioMatch = producto.precio >= state.precioMin && 
                           producto.precio <= state.precioMax;
        
        // Filtro por búsqueda
        const busquedaMatch = state.terminoBusqueda === '' ||
                            producto.nombre.toLowerCase().includes(state.terminoBusqueda.toLowerCase()) ||
                            producto.descripcion.toLowerCase().includes(state.terminoBusqueda.toLowerCase()) ||
                            producto.categoria.toLowerCase().includes(state.terminoBusqueda.toLowerCase());
        
        return categoriaMatch && precioMatch && busquedaMatch;
    });
    
    // Determinar qué tipo de tallas mostrar (letras o números)
    let mostrarTallasLetras = true;
    let mostrarTallasNumeros = true;
    
    if (state.categorias.length > 0) {
        // Si hay categorías seleccionadas, verificar qué tipo de tallas mostrar
        const categoriasConTallasNumeros = ['pantalones', 'jeans'];
        mostrarTallasLetras = !state.categorias.every(cat => categoriasConTallasNumeros.includes(cat));
        mostrarTallasNumeros = state.categorias.some(cat => categoriasConTallasNumeros.includes(cat));
    }
    
    // Obtener tallas disponibles
    const tallasDisponibles = {
        letras: new Set(),
        numeros: new Set()
    };
    
    productosFiltrados.forEach(producto => {
        producto.tallas.forEach(talla => {
            if (isNaN(talla)) {
                tallasDisponibles.letras.add(talla);
            } else {
                tallasDisponibles.numeros.add(talla);
            }
        });
    });
    
    // Actualizar visibilidad de los grupos de tallas
    document.querySelectorAll('.size-grid').forEach((grid, index) => {
        if ((index === 0 && !mostrarTallasLetras) || (index === 1 && !mostrarTallasNumeros)) {
            grid.style.display = 'none';
        } else {
            grid.style.display = 'grid';
        }
    });
    
    // Deshabilitar checkboxes de tallas no disponibles
    document.querySelectorAll('.filter-group[data-filter-group="size"] .filter-checkbox').forEach(checkbox => {
        const value = checkbox.value;
        const isLetra = isNaN(value);
        const isNumero = !isLetra;
        
        let disponible = false;
        
        if (isLetra && mostrarTallasLetras) {
            disponible = tallasDisponibles.letras.has(value);
        } else if (isNumero && mostrarTallasNumeros) {
            disponible = tallasDisponibles.numeros.has(value);
        }
        
        checkbox.disabled = !disponible;
        checkbox.parentElement.style.opacity = disponible ? '1' : '0.5';
        
        // Si la talla no está disponible y estaba seleccionada, quitarla del estado
        if (!disponible && state.tallas.includes(value)) {
            state.tallas = state.tallas.filter(t => t !== value);
            checkbox.checked = false;
        }
    });
}

// =============================================
// BÚSQUEDA Y SUGERENCIAS
// =============================================

function mostrarSugerencias(termino) {
    const sugerenciasContainer = document.getElementById('sugerenciasBusqueda');
    sugerenciasContainer.innerHTML = '';
    
    if (termino.length < 2) {
        sugerenciasContainer.style.display = 'none';
        return;
    }
    
    const terminoLower = termino.toLowerCase();
    const sugerencias = [];
    
    // Buscar en productos
    productos.forEach(producto => {
        const matches = [
            producto.nombre.toLowerCase().includes(terminoLower),
            producto.descripcion.toLowerCase().includes(terminoLower),
            producto.categoria.toLowerCase().includes(terminoLower)
        ];
        
        if (matches.some(m => m)) {
            sugerencias.push({
                tipo: 'producto',
                id: producto.id,
                texto: producto.nombre,
                categoria: producto.categoria
            });
        }
    });
    
    // Buscar en categorías
    const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];
    categoriasUnicas.forEach(categoria => {
        if (categoria.toLowerCase().includes(terminoLower)) {
            sugerencias.push({
                tipo: 'categoria',
                texto: categoria,
                categoria: null
            });
        }
    });
    
    // Limitar a 5 sugerencias
    const sugerenciasMostrar = sugerencias.slice(0, 5);
    
    if (sugerenciasMostrar.length === 0) {
        sugerenciasContainer.style.display = 'none';
        return;
    }
    
    // Renderizar sugerencias
    sugerenciasMostrar.forEach(sugerencia => {
        const item = document.createElement('div');
        item.className = 'sugerencia-item';
        item.setAttribute('data-id', sugerencia.id || '');
        item.innerHTML = `
            <i class="fas fa-${sugerencia.tipo === 'producto' ? 'tshirt' : 'tag'}"></i>
            <div>
                <div class="sugerencia-texto">${sugerencia.texto}</div>
                ${sugerencia.categoria ? `<div class="sugerencia-categoria">${sugerencia.categoria}</div>` : ''}
            </div>
        `;
        sugerenciasContainer.appendChild(item);
    });
    
    sugerenciasContainer.style.display = 'block';
}

function seleccionarSugerencia(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        // Mostrar solo este producto
        renderProductos([producto]);
        document.getElementById('activeFilters').innerHTML = `
            <div class="active-filter-tag">
                Resultado de búsqueda: ${producto.nombre}
                <button class="remove-filter" data-type="busqueda">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Añadir event listener para el botón de limpiar
        document.querySelector('.remove-filter[data-type="busqueda"]').addEventListener('click', () => {
            state.terminoBusqueda = '';
            document.getElementById('searchInput').value = '';
            aplicarFiltros();
        });
    }
    
    document.getElementById('sugerenciasBusqueda').style.display = 'none';
}







// =============================================
// INICIALIZACIÓN
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todos los productos al inicio
    renderProductos(productos);
    
    // Crear contenedor para sugerencias
    const searchContainer = document.querySelector('.search-container');
    const sugerenciasContainer = document.createElement('div');
    sugerenciasContainer.id = 'sugerenciasBusqueda';
    sugerenciasContainer.className = 'sugerencias-busqueda';
    searchContainer.appendChild(sugerenciasContainer);
    
    // Event listeners para checkboxes de categoría
    document.querySelectorAll('.filter-group[data-filter-group="category"] .filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const value = this.value;
            
            if (this.checked) {
                state.categorias.push(value);
            } else {
                state.categorias = state.categorias.filter(cat => cat !== value);
            }
            
            aplicarFiltros();
        });
    });
    
    // Event listeners para checkboxes de talla
    document.querySelectorAll('.filter-group[data-filter-group="size"] .filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const value = this.value;
            
            if (this.checked) {
                state.tallas.push(value);
            } else {
                state.tallas = state.tallas.filter(t => t !== value);
            }
            
            aplicarFiltros();
        });
    });
    
    // Event listeners para botones de rango de precio rápido
    document.querySelectorAll('.price-option').forEach(button => {
        button.addEventListener('click', function() {
            const min = parseInt(this.getAttribute('data-min'));
            const max = parseInt(this.getAttribute('data-max'));
            
            state.precioMin = min;
            state.precioMax = max;
            
            document.getElementById('minPrice').value = min;
            document.getElementById('maxPrice').value = max;
            document.getElementById('lowerPrice').value = min;
            document.getElementById('upperPrice').value = max;
            
            aplicarFiltros();
        });
    });
    
    // Event listeners para inputs de precio manual
    document.getElementById('minPrice').addEventListener('input', function() {
        const value = parseInt(this.value) || 0;
        state.precioMin = value;
        document.getElementById('lowerPrice').value = value;
        aplicarFiltros();
    });
    
    document.getElementById('maxPrice').addEventListener('input', function() {
        const value = parseInt(this.value) || 1000;
        state.precioMax = value;
        document.getElementById('upperPrice').value = value;
        aplicarFiltros();
    });
    
    // Event listeners para sliders de rango de precio
    document.getElementById('lowerPrice').addEventListener('input', function() {
        const value = parseInt(this.value);
        state.precioMin = value;
        document.getElementById('minPrice').value = value;
        aplicarFiltros();
    });
    
    document.getElementById('upperPrice').addEventListener('input', function() {
        const value = parseInt(this.value);
        state.precioMax = value;
        document.getElementById('maxPrice').value = value;
        aplicarFiltros();
    });
    
    // Event listener para botón de resetear filtros
    document.querySelector('.reset-filters').addEventListener('click', function() {
        // Resetear estado
        state.categorias = [];
        state.tallas = [];
        state.precioMin = 0;
        state.precioMax = 1000;
        state.terminoBusqueda = '';
        
        // Desmarcar checkboxes
        document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Resetear inputs de precio
        document.getElementById('minPrice').value = 0;
        document.getElementById('maxPrice').value = 1000;
        document.getElementById('lowerPrice').value = 0;
        document.getElementById('upperPrice').value = 1000;
        
        // Resetear búsqueda
        document.getElementById('searchInput').value = '';
        
        // Aplicar filtros (mostrar todos los productos)
        aplicarFiltros();
    });
    
    // Sincronizar sliders para que no se crucen
    const lowerSlider = document.getElementById('lowerPrice');
    const upperSlider = document.getElementById('upperPrice');
    
    lowerSlider.addEventListener('input', function() {
        if (parseInt(this.value) > parseInt(upperSlider.value)) {
            upperSlider.value = this.value;
            document.getElementById('maxPrice').value = this.value;
            state.precioMax = parseInt(this.value);
        }
    });
    
    upperSlider.addEventListener('input', function() {
        if (parseInt(this.value) < parseInt(lowerSlider.value)) {
            lowerSlider.value = this.value;
            document.getElementById('minPrice').value = this.value;
            state.precioMin = parseInt(this.value);
        }
    });
    
    // Event listener para búsqueda en tiempo real
    document.getElementById('searchInput').addEventListener('input', function() {
        state.terminoBusqueda = this.value;
        mostrarSugerencias(this.value);
        aplicarFiltros();
    });
    
    // Delegación de eventos para las sugerencias
    sugerenciasContainer.addEventListener('click', function(e) {
        const sugerenciaItem = e.target.closest('.sugerencia-item');
        if (sugerenciaItem && sugerenciaItem.getAttribute('data-id')) {
            seleccionarSugerencia(parseInt(sugerenciaItem.getAttribute('data-id')));
        }
    });
    
    // Ocultar sugerencias al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            sugerenciasContainer.style.display = 'none';
        }
    });
});

// Funcionalidad del carrito
// Obtener carrito del localStorage o inicializar vacío
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

// Guardar carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

// Actualizar contador de items en el carrito
function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const contador = carrito.reduce((total, item) => total + item.cantidad, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = contador;
    }
}

// Agregar producto al carrito
function agregarAlCarrito(productoId, talla = null) {
    const carrito = obtenerCarrito();
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto) {
        console.error('Producto no encontrado:', productoId);
        return;
    }
    
    const itemExistente = carrito.find(item => 
        item.id === productoId && 
        (talla === null || item.talla === talla)
    );
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            talla: talla,
            cantidad: 1
        });
    }
    
    guardarCarrito(carrito);
    
    actualizarContadorCarrito();
    
    mostrarNotificacion(`${producto.nombre} añadido al carrito`);
    animarCarritoAvanza();
}

// Mostrar notificación al añadir producto
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notification';
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Mostrar animación
    setTimeout(() => {
        notificacion.classList.add('show');
    }, 10);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// En js/catalogo.js necesitamos agregar el handler para los botones de "Añadir al carrito"
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar contador del carrito al cargar la página
    actualizarContadorCarrito();
    
    // Agregar delegación de eventos para los botones de "Añadir al carrito"
    document.getElementById('productGrid').addEventListener('click', function(e) {
        // Buscar si el clic fue en un botón de añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productCard = addToCartBtn.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.getAttribute('data-product-id'));
                // Encontrar la talla seleccionada (si hay)
                const selectedSize = productCard.querySelector('.size-option.selected');
                const talla = selectedSize ? selectedSize.textContent : null;
                
                // Si no hay talla seleccionada y hay opciones de talla, mostrar alerta
                const hasSizeOptions = productCard.querySelectorAll('.size-option').length > 0;
                if (hasSizeOptions && !talla) {
                    alert('Por favor selecciona una talla');
                    return;
                }
                
                agregarAlCarrito(productId, talla);
            }
        }
    });
});

// Función para calcular totales
function calcularTotales() {
    let subtotal = 0;
    const carrito = obtenerCarrito();
    
    carrito.forEach(producto => {
        subtotal += producto.precio * producto.cantidad;
    });
    
    // Costo de envío fijo (se podría hacer variable según distancia, peso, etc.)
    const costoEnvio = subtotal > 0 ? 5.99 : 0;
    
    // Calcular total
    const total = subtotal + costoEnvio;
    
    return {
        subtotal: subtotal.toFixed(2),
        costoEnvio: costoEnvio.toFixed(2),
        total: total.toFixed(2)
    };
}

