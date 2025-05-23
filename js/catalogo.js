// =============================================
// BASE DE DATOS DE PRODUCTOS
// =============================================
const productos = [
    {
        id: 1,
        nombre: "Camisa Hombre Ruben Azul Frio",
        categoria: "camisas",
        descripcion: "Camisa en algodón Oxford de alta calidad con corte clásico y costuras reforzadas.",
        precio: 189.90,
        precioAnterior: 229.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/365836-1000-1248/2024378_1.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
      },
      {
        id: 2,
        nombre: "Jean Hombre Yenko Dirty Cristal",
        categoria: "jeans",
        descripcion: "Jean slim fit con lavado oscuro, ideal para un look urbano y moderno.",
        precio: 279.90,
        precioAnterior: 349.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/382564-1000-1248/3129866_1.jpg",
        tallas: ["28", "30", "32", "34"],
        destacado: true
      },
      {
        id: 3,
        nombre: "Camisa Hombre Steven Negro",
        categoria: "camisas",
        descripcion: "Camiseta básica en algodón Pima, cuello redondo y costuras reforzadas.",
        precio: 89.90,
        precioAnterior: 119.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/344094-1000-1248/1979664_1.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      },
      {
        id: 4,
        nombre: "Camisa Hombre Wenger Azul Atlántico",
        categoria: "camisas",
        descripcion: "Camisa de lino relaxed fit con mangas enrollables para estilo casual.",
        precio: 59.90,
        precioAnterior: 99.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/378596-1000-1248/2076727_1.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      },
      {
        id: 5,
        nombre: "Pantalón Hombre Chino Beige",
        categoria: "pantalones",
        descripcion: "Pantalón chino de algodón stretch, corte ajustado y bolsillos invisibles.",
        precio: 149.90,
        precioAnterior: 199.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/381243-1000-1248/3100812_1.jpg",
        tallas: ["30", "32", "34", "36"],
        destacado: true
      },
      {
        id: 6,
        nombre: "Jean Hombre Jax Medium Blue",
        categoria: "jeans",
        descripcion: "Jean de mezclilla flexible, corte tapered fit y lavado medio.",
        precio: 179.90,
        precioAnterior: 229.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/383111-1000-1248/3106870_1.jpg",
        tallas: ["28", "30", "32", "34", "36"],
        destacado: true
      },
      {
        id: 7,
        nombre: "Chaqueta Hombre Blazer Marino",
        categoria: "chaquetas",
        descripcion: "Blazer elegante en algodón stretch, ideal para eventos casuales.",
        precio: 259.90,
        precioAnterior: 349.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/377400-1000-1248/2074836_1.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      },
      {
        id: 8,
        nombre: "Abrigo Hombre Parka Azul Oscuro",
        categoria: "abrigos",
        descripcion: "Parka impermeable con capucha ajustable y forro térmico interior.",
        precio: 299.90,
        precioAnterior: 399.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/372155-1000-1248/2076047_1.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
      },
      {
        id: 9,
        nombre: "Jean Hombre Slim Fit Dark Blue",
        categoria: "jeans",
        descripcion: "Jean slim de tono oscuro con detalles de desgaste y tela elástica.",
        precio: 199.90,
        precioAnterior: 249.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/372372-1000-1248/2080917_1.jpg",
        tallas: ["30", "32", "34", "36"],
        destacado: false
      },
      {
        id: 10,
        nombre: "Camisa Hombre Casual Blanca",
        categoria: "camisas",
        descripcion: "Camisa de algodón Premium para ocasiones semi formales y casuales.",
        precio: 129.90,
        precioAnterior: 159.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/371957-1000-1248/2080141_1.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      },
      {
        id: 11,
        nombre: "Pantalón Hombre Jogger Verde Oliva",
        categoria: "pantalones",
        descripcion: "Jogger en algodón liviano con cintura elástica y ajuste moderno.",
        precio: 139.90,
        precioAnterior: 189.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/372117-1000-1248/2076786_1.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
      },
      {
        id: 12,
        nombre: "Abrigo Hombre Overcoat Negro",
        categoria: "abrigos",
        descripcion: "Abrigo clásico de lana con diseño recto y botones cruzados.",
        precio: 349.90,
        precioAnterior: 499.90,
        imagen: "https://topitop.vteximg.com.br/arquivos/ids/372608-1000-1248/2076773_1.jpg",
        tallas: ["S", "M", "L", "XL"],
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

