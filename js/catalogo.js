// Base de datos de productos
const productos = [
    {
        id: 1,
        nombre: "Camisa Hombre Ruben Azul Frio",
        categoria: "camisas",
        descripcion: "Camisa de vestir en algodón Oxford de alta calidad con corte clásico y detalles en costuras reforzadas.",
        precio: 189.90,
        precioAnterior: 229.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/365836-1000-1248/2024378_1.jpg?v=638615767478600000https://topitop.vteximg.com.br/arquivos/ids/365836-1000-1248/2024378_1.jpg?v=638615767478600000",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 2,
        nombre: "Pantalón Hombre Kevin Negro",
        categoria: "pantalones",
        descripcion: "Pantalón chino en tejido resistente con corte slim fit y acabados premium en los bolsillos.",
        precio: 219.90,
        precioAnterior: 259.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/365712-1000-1248/2026341_1.jpg?v=638615737494600000",
        tallas: ["28", "30", "32", "34", "36"],
        destacado: false
    },
    {
        id: 3,
        nombre: "Chompa Hombre Keane Azul Pageant",
        categoria: "chompas",
        descripcion: "Blazer elegante en lana merino con corte slim fit y forro de seda. Ideal para ocasiones formales.",
        precio: 499.90,
        precioAnterior: 599.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/382719-1000-1248/3092133_1.jpg?v=638808673212100000",
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
        tallas: ["XS", "S", "M"],
        destacado: true
    },
    {
        id: 5,
        nombre: "Polera Hombre Ernan Negro",
        categoria: "polera",
        descripcion: "polera Derby en cuero italiano genuino con suela de goma antideslizante y plantilla acolchonada.",
        precio: 389.90,
        precioAnterior: 459.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/380629-1000-1248/3095404_1.jpg?v=638793140980700000",
        tallas: ["38", "39", "40", "41", "42"],
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
        nombre: "Jeans Slim Fit Elastano",
        categoria: "pantalones",
        descripcion: "Jeans con mezcla de elastano para mayor comodidad, corte slim fit y lavado oscuro premium.",
        precio: 179.90,
        precioAnterior: 219.90,
        imagen: "https://i.ibb.co/3YJc0LQ/jeans-slim.jpg",
        tallas: ["28", "30", "32", "34"],
        destacado: false
    },
    {
        id: 8,
        nombre: "Abrigo de Lana Camel",
        categoria: "abrigos",
        descripcion: "Abrigo de lana merino en color camel con solapas notch y bolsillos de vivo. Forro interior de satén.",
        precio: 659.90,
        precioAnterior: 799.90,
        imagen: "https://i.ibb.co/0mXQ3xX/abrigo-lana.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
    },
    {
        id: 9,
        nombre: "Vestido Cocktail Negro",
        categoria: "vestidos",
        descripcion: "Vestido cocktail en tejido con stretch, escote barco y detalles de encaje en los puños.",
        precio: 319.90,
        precioAnterior: 389.90,
        imagen: "https://i.ibb.co/6r4w2vK/vestido-cocktail.jpg",
        tallas: ["XS", "S", "M", "L"],
        destacado: true
    },
    {
        id: 10,
        nombre: "Botines Chelsea de Cuero",
        categoria: "zapatos",
        descripcion: "Botines Chelsea en cuero engrasado con elásticos laterales y suela de goma con tracción.",
        precio: 429.90,
        precioAnterior: 499.90,
        imagen: "https://i.ibb.co/0jX9Yq3/botines-chelsea.jpg",
        tallas: ["38", "39", "40", "41", "42"],
        destacado: false
    },
    {
        id: 11,
        nombre: "Camisa Lino Relaxed Fit",
        categoria: "camisas",
        descripcion: "Camisa de lino 100% natural con corte relaxed fit y mangas enrollables con botones.",
        precio: 159.90,
        precioAnterior: 199.90,
        imagen: "https://i.ibb.co/8XZJQz4/camisa-lino.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
    },
    {
        id: 12,
        nombre: "Chaqueta Bomber Premium",
        categoria: "abrigos",
        descripcion: "Chaqueta bomber en nylon resistente al agua con forro interior de algodón y ribetes de cuero.",
        precio: 379.90,
        precioAnterior: 449.90,
        imagen: "https://i.ibb.co/2ZRkZ0L/chaqueta-bomber.jpg",
        tallas: ["S", "M", "L"],
        destacado: true
    }
];

// Función para renderizar productos
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
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="product-info">
                <div class="product-category">${producto.categoria.toUpperCase()}</div>
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price">
                    S/ ${producto.precio.toFixed(2)}
                    ${producto.precioAnterior ? `<span>S/ ${producto.precioAnterior.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-sizes">${sizes}</div>
                <button class="add-to-cart">Añadir al carrito</button>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Añadir event listeners a los botones de talla
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
}

// Nueva función para mostrar sugerencias de búsqueda
function mostrarSugerencias(termino) {
    const sugerenciasContainer = document.getElementById('sugerenciasBusqueda');
    if (!termino || termino.length < 2) {
        sugerenciasContainer.innerHTML = '';
        sugerenciasContainer.style.display = 'none';
        return;
    }

    const terminoLower = termino.toLowerCase();
    const sugerencias = productos.filter(producto => {
        return (
            producto.id.toString().includes(terminoLower) ||
            producto.nombre.toLowerCase().includes(terminoLower) ||
            producto.categoria.toLowerCase().includes(terminoLower) ||
            producto.descripcion.toLowerCase().includes(terminoLower)
        );
    }).slice(0, 5); // Limitar a 5 sugerencias

    if (sugerencias.length === 0) {
        sugerenciasContainer.innerHTML = '<div class="sugerencia-item">No se encontraron coincidencias</div>';
    } else {
        sugerenciasContainer.innerHTML = sugerencias.map(producto => 
            `<div class="sugerencia-item" data-id="${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div>
                    <div class="sugerencia-nombre">${producto.nombre}</div>
                    <div class="sugerencia-categoria">${producto.categoria}</div>
                </div>
            </div>`
        ).join('');
    }

    sugerenciasContainer.style.display = sugerencias.length ? 'block' : 'none';
}

// Función para manejar la selección de una sugerencia
function seleccionarSugerencia(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        document.getElementById('searchInput').value = producto.nombre;
        document.getElementById('sugerenciasBusqueda').style.display = 'none';
        buscarProductos();
        // Opcional: desplazarse al producto seleccionado
        setTimeout(() => {
            const productElement = document.querySelector(`[data-product-id="${idProducto}"]`);
            if (productElement) {
                productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                productElement.classList.add('highlight');
                setTimeout(() => productElement.classList.remove('highlight'), 2000);
            }
        }, 300);
    }
}

// Función para buscar productos
function buscarProductos() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    const productosFiltrados = productos.filter(producto => {
        // Filtro por búsqueda (ahora incluye ID)
        const matchesSearch = 
            producto.id.toString().includes(searchTerm) ||
            producto.nombre.toLowerCase().includes(searchTerm) || 
            producto.categoria.toLowerCase().includes(searchTerm) ||
            producto.descripcion.toLowerCase().includes(searchTerm);
        
        // Resto de los filtros (se mantienen igual)
        const matchesCategory = categoryFilter === 'all' || producto.categoria === categoryFilter;
        
        let matchesPrice = true;
        if (priceFilter !== 'all') {
            const [min, max] = priceFilter.split('-');
            if (max) {
                matchesPrice = producto.precio >= parseInt(min) && producto.precio <= parseInt(max);
            } else {
                matchesPrice = producto.precio >= parseInt(min.replace('+', ''));
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProductos(productosFiltrados);
}

// Actualización de los event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProductos(productos);
    
    // Crear contenedor para sugerencias
    const searchContainer = document.querySelector('.search-container');
    const sugerenciasContainer = document.createElement('div');
    sugerenciasContainer.id = 'sugerenciasBusqueda';
    sugerenciasContainer.className = 'sugerencias-busqueda';
    searchContainer.appendChild(sugerenciasContainer);

    // Event listeners
    document.getElementById('searchInput').addEventListener('input', function() {
        buscarProductos();
        mostrarSugerencias(this.value);
    });
    
    document.getElementById('searchBtn').addEventListener('click', buscarProductos);
    document.getElementById('categoryFilter').addEventListener('change', buscarProductos);
    document.getElementById('priceFilter').addEventListener('change', buscarProductos);

    // Delegación de eventos para las sugerencias
    sugerenciasContainer.addEventListener('click', function(e) {
        const sugerenciaItem = e.target.closest('.sugerencia-item');
        if (sugerenciaItem) {
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

// Inicializar la página con todos los productos
document.addEventListener('DOMContentLoaded', () => {
    renderProductos(productos);
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