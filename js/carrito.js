// Variables globales
let currentStep = 1;
const steps = ['paso-carrito', 'paso-envio', 'paso-pago', 'paso-confirmacion'];

// Datos de ejemplo para productos (en una aplicación real, estos vendrían de una base de datos)
const productosEjemplo = [
    { id: 1, nombre: "Camiseta Básica", precio: 19.99, cantidad: 2, imagen: "camiseta.jpg" },
    { id: 2, nombre: "Pantalón Vaquero", precio: 39.99, cantidad: 1, imagen: "pantalon.jpg" }
];

// Función para actualizar los indicadores de paso
function updateStepIndicators() {
    document.querySelectorAll('.pasos-indicador .paso').forEach((paso, index) => {
        if (index + 1 < currentStep) {
            paso.classList.add('completado');
            paso.classList.remove('activo');
        } else if (index + 1 === currentStep) {
            paso.classList.add('activo');
            paso.classList.remove('completado');
        } else {
            paso.classList.remove('activo', 'completado');
        }
    });
}

// Función para mostrar un paso específico
function showStep(stepNumber) {
    steps.forEach(stepId => {
        const stepElement = document.getElementById(stepId);
        if (stepElement) {
            stepElement.classList.add('hidden');
        }
    });

    const currentStepElement = document.getElementById(steps[stepNumber - 1]);
    if (currentStepElement) {
        currentStepElement.classList.remove('hidden');
        currentStep = stepNumber;
        updateStepIndicators();
    }
}

// Función para detectar tipo de tarjeta
function detectarTipoTarjeta(numero) {
    // Limpiar cualquier espacio o guión
    const numeroLimpio = numero.replace(/\s+/g, '').replace(/-/g, '');
    
    // Visa: comienza con 4
    if (numeroLimpio.match(/^4/)) {
        return "Visa";
    }
    // Mastercard: comienza con 51-55 o con 2221-2720
    else if (numeroLimpio.match(/^5[1-5]/) || numeroLimpio.match(/^(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)/)) {
        return "Mastercard";
    }
    // American Express: comienza con 34 o 37
    else if (numeroLimpio.match(/^3[47]/)) {
        return "American Express";
    }
    // Discover: comienza con 6011, 644-649 o 65
    else if (numeroLimpio.match(/^(6011|64[4-9]|65)/)) {
        return "Discover";
    }
    // Diners Club: comienza con 300-305, 36 o 38-39
    else if (numeroLimpio.match(/^(30[0-5]|36|3[8-9])/)) {
        return "Diners Club";
    }
    // JCB: comienza con 35
    else if (numeroLimpio.match(/^35/)) {
        return "JCB";
    }
    return "";
}

// Función para formatear número de tarjeta con espacios cada 4 dígitos
function formatearNumeroTarjeta(numero) {
    const numeroLimpio = numero.replace(/\s+/g, '').replace(/-/g, '');
    const grupos = [];
    
    for (let i = 0; i < numeroLimpio.length; i += 4) {
        grupos.push(numeroLimpio.slice(i, i + 4));
    }
    
    return grupos.join(' ');
}

// Función para formatear fecha de vencimiento con formato MM/AA
function formatearFechaVencimiento(texto) {
    const textoLimpio = texto.replace(/\D/g, ''); // Solo dejamos números
    
    if (textoLimpio.length <= 2) {
        return textoLimpio;
    } else {
        return textoLimpio.slice(0, 2) + '/' + textoLimpio.slice(2, 4);
    }
}

// Función para generar un número de pedido aleatorio
function generarNumeroPedido() {
    return 'PED-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Función para generar la fecha actual formateada
function obtenerFechaActual() {
    const fecha = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

// Función para obtener el carrito desde localStorage
function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    } catch (e) {
        console.error("Error al obtener el carrito:", e);
        return [];
    }
}

// Función para guardar el carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

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

// Función para mostrar productos en el carrito
function mostrarProductosCarrito() {
    const carritoContainer = document.querySelector('.carrito-items-container');
    if (!carritoContainer) return;
    
    const carrito = obtenerCarrito();
    carritoContainer.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
        document.getElementById('siguiente-envio').disabled = true;
        
        // Actualizar el total en 0
        document.getElementById('total-carrito').textContent = '0.00';
        return;
    }
    
    let totalCarrito = 0;
    
    carrito.forEach(producto => {
        const subtotalProducto = producto.precio * producto.cantidad;
        totalCarrito += subtotalProducto;
        
        const itemHTML = `
            <div class="carrito-item">
                <div class="carrito-item-img">
                    <img src="${producto.imagen || 'placeholder.jpg'}" alt="${producto.nombre}">
                </div>
                <div class="carrito-item-info">
                    <h3>${producto.nombre}</h3>
                    <p>S/ ${producto.precio.toFixed(2)}</p>
                    ${producto.talla ? `<p class="item-talla">Talla: ${producto.talla}</p>` : ''}
                </div>
                <div class="carrito-item-cantidad">
                    <button class="btn-cantidad" data-id="${producto.id}" data-talla="${producto.talla || ''}" data-action="restar">-</button>
                    <input type="number" value="${producto.cantidad}" min="1" max="10" data-id="${producto.id}" data-talla="${producto.talla || ''}">
                    <button class="btn-cantidad" data-id="${producto.id}" data-talla="${producto.talla || ''}" data-action="sumar">+</button>
                </div>
                <div class="carrito-item-subtotal">
                    S/ ${subtotalProducto.toFixed(2)}
                </div>
                <button class="btn-eliminar" data-id="${producto.id}" data-talla="${producto.talla || ''}">×</button>
            </div>
        `;
        carritoContainer.innerHTML += itemHTML;
    });
    
    // Actualizar total del carrito
    document.getElementById('total-carrito').textContent = totalCarrito.toFixed(2);
    document.getElementById('siguiente-envio').disabled = false;
    
    // Agregar event listeners a los botones de cantidad
    document.querySelectorAll('.btn-cantidad').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const talla = this.getAttribute('data-talla') || null;
            const accion = this.getAttribute('data-action');
            
            const carrito = obtenerCarrito();
            const productoIndex = carrito.findIndex(p => 
                p.id === id && 
                (talla === null || p.talla === talla)
            );
            
            if (productoIndex !== -1) {
                if (accion === 'sumar' && carrito[productoIndex].cantidad < 10) {
                    carrito[productoIndex].cantidad++;
                } else if (accion === 'restar' && carrito[productoIndex].cantidad > 1) {
                    carrito[productoIndex].cantidad--;
                }
                guardarCarrito(carrito);
                mostrarProductosCarrito();
            }
        });
    });
    
    // Agregar event listeners a los inputs de cantidad
    document.querySelectorAll('.carrito-item-cantidad input').forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const talla = this.getAttribute('data-talla') || null;
            const nuevaCantidad = parseInt(this.value);
            
            if (nuevaCantidad >= 1 && nuevaCantidad <= 10) {
                const carrito = obtenerCarrito();
                const productoIndex = carrito.findIndex(p => 
                    p.id === id && 
                    (talla === null || p.talla === talla)
                );
                
                if (productoIndex !== -1) {
                    carrito[productoIndex].cantidad = nuevaCantidad;
                    guardarCarrito(carrito);
                    mostrarProductosCarrito();
                }
            }
        });
    });
    
    // Agregar event listeners a los botones de eliminar
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const talla = this.getAttribute('data-talla') || null;
            
            const carrito = obtenerCarrito();
            const nuevosItems = carrito.filter(p => 
                !(p.id === id && (talla === null || p.talla === talla))
            );
            
            guardarCarrito(nuevosItems);
            mostrarProductosCarrito();
        });
    });
}

// Función para llenar la boleta con información
function generarBoleta() {
    // Datos de fecha y número de pedido
    document.getElementById('fecha-actual').textContent = obtenerFechaActual();
    document.getElementById('numero-pedido').textContent = generarNumeroPedido();
    
    // Datos del cliente
    const nombreCliente = document.getElementById('nombre-cliente').value || 'Cliente';
    const dniCliente = document.getElementById('dni-cliente').value || '-';
    const email = document.getElementById('email').value || 'cliente@ejemplo.com';
    const telefono = document.getElementById('telefono').value || '999999999';
    
    document.getElementById('cliente-nombre').textContent = nombreCliente;
    document.getElementById('cliente-dni').textContent = dniCliente;
    document.getElementById('cliente-email').textContent = email;
    document.getElementById('cliente-telefono').textContent = telefono;
    
    // Método de envío
    const metodoEnvio = document.querySelector('input[name="metodo-entrega"]:checked').value;
    document.getElementById('metodo-envio').textContent = metodoEnvio === 'delivery' ? 'Delivery a Domicilio' : 'Recojo en Tienda';
    
    if (metodoEnvio === 'delivery') {
        const direccion = document.getElementById('direccion').value;
        const ciudad = document.getElementById('ciudad').value;
        const codPostal = document.getElementById('codigo-postal').value;
        document.getElementById('direccion-envio').textContent = `${direccion}, ${ciudad}, CP: ${codPostal}`;
    } else {
        const tienda = document.getElementById('tienda').value;
        let nombreTienda = '';
        switch(tienda) {
            case 'tienda1': nombreTienda = 'Tienda Central'; break;
            case 'tienda2': nombreTienda = 'Tienda Norte'; break;
            case 'tienda3': nombreTienda = 'Tienda Sur'; break;
            default: nombreTienda = 'Tienda seleccionada';
        }
        document.getElementById('direccion-envio').textContent = `Recojo en: ${nombreTienda}`;
    }
    
    // Método de pago
    const metodoPago = document.querySelector('input[name="metodo-pago"]:checked').value;
    let textoMetodoPago = '';
    let detallePago = '';
    
    switch(metodoPago) {
        case 'tarjeta':
            const numeroTarjeta = document.getElementById('numero-tarjeta').value;
            const tipoTarjeta = detectarTipoTarjeta(numeroTarjeta);
            const ultimosDigitos = numeroTarjeta.replace(/\s+/g, '').slice(-4);
            textoMetodoPago = `Tarjeta ${tipoTarjeta}`;
            detallePago = `Terminada en ${ultimosDigitos}`;
            break;
        case 'yape':
            textoMetodoPago = 'Yape';
            detallePago = `Teléfono: ${document.getElementById('telefono-yape').value}`;
            break;
        case 'paypal':
            textoMetodoPago = 'PayPal';
            detallePago = document.getElementById('email-paypal').value || email;
            break;
    }
    
    document.getElementById('metodo-pago-resumen').textContent = textoMetodoPago;
    document.getElementById('detalle-pago').textContent = detallePago;
    
    // Productos
    const resumenProductos = document.getElementById('resumen-productos');
    resumenProductos.innerHTML = '';
    
    const carrito = obtenerCarrito();
    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre} ${producto.talla ? `(Talla: ${producto.talla})` : ''}</td>
            <td>${producto.cantidad}</td>
            <td>S/ ${producto.precio.toFixed(2)}</td>
            <td>S/ ${subtotal.toFixed(2)}</td>
        `;
        resumenProductos.appendChild(fila);
    });
    
    // Totales
    const totales = calcularTotales();
    document.getElementById('subtotal').textContent = `S/ ${totales.subtotal}`;
    document.getElementById('costo-envio').textContent = `S/ ${totales.costoEnvio}`;
    document.getElementById('total-pedido').textContent = `S/ ${totales.total}`;
}

// Función para imprimir/descargar la boleta
function imprimirBoleta() {
    window.print();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    if (confirm('¿Estás seguro de que quieres vaciar tu carrito?')) {
        guardarCarrito([]);
        mostrarProductosCarrito();
    }
}

// Función para volver a la tienda
function volverTienda() {
    window.location.href = '/sections/catalogo.html';
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar mostrando productos en el carrito
    mostrarProductosCarrito();

    // Configurar el botón Ver Carrito para redirigir al carrito desde cualquier página
    const verCarritoLink = document.getElementById('ver-carrito-link');
    if (verCarritoLink) {
        verCarritoLink.addEventListener('click', () => {
            window.location.href = '/sections/carrito.html';
        });
    }

    // Manejo de métodos de entrega
    const deliveryRadio = document.getElementById('delivery');
    const recojoRadio = document.getElementById('recojo');
    const formDelivery = document.getElementById('formulario-delivery');
    const formRecojo = document.getElementById('formulario-recojo');

    if (deliveryRadio && recojoRadio) {
        deliveryRadio.addEventListener('change', function() {
            if (this.checked) {
                formDelivery.classList.remove('hidden');
                formRecojo.classList.add('hidden');
            }
        });

        recojoRadio.addEventListener('change', function() {
            if (this.checked) {
                formRecojo.classList.remove('hidden');
                formDelivery.classList.add('hidden');
            }
        });
    }

    // Manejo de tarjeta de crédito
    const numeroTarjeta = document.getElementById('numero-tarjeta');
    const tipoTarjeta = document.getElementById('tipo-tarjeta');
    const fechaVencimiento = document.getElementById('fecha-vencimiento');
    
    if (numeroTarjeta) {
        numeroTarjeta.addEventListener('input', function() {
            // Formatear número con espacios cada 4 dígitos
            this.value = formatearNumeroTarjeta(this.value);
            
            // Detectar y mostrar el tipo de tarjeta
            const tipo = detectarTipoTarjeta(this.value);
            if (tipo) {
                tipoTarjeta.textContent = "Tarjeta detectada: " + tipo;
            } else {
                tipoTarjeta.textContent = "";
            }
        });
    }
    
    if (fechaVencimiento) {
        fechaVencimiento.addEventListener('input', function() {
            this.value = formatearFechaVencimiento(this.value);
        });
    }

    // Manejo de métodos de pago
    const metodoPagoRadios = document.querySelectorAll('input[name="metodo-pago"]');
    const formulariosPago = {
        tarjeta: document.getElementById('formulario-tarjeta'),
        yape: document.getElementById('formulario-yape'),
        paypal: document.getElementById('formulario-paypal')
    };

    metodoPagoRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            Object.values(formulariosPago).forEach(form => {
                if (form) form.classList.add('hidden');
            });
            const selectedForm = formulariosPago[this.value];
            if (selectedForm) {
                selectedForm.classList.remove('hidden');
            }
        });
    });

    // Navegación entre pasos
    // Navegación hacia adelante
    document.getElementById('siguiente-envio')?.addEventListener('click', () => showStep(2));
    document.getElementById('siguiente-pago')?.addEventListener('click', () => {
        // Validación básica de formulario de envío
        const nombreCliente = document.getElementById('nombre-cliente').value;
        const dniCliente = document.getElementById('dni-cliente').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const metodoEntrega = document.querySelector('input[name="metodo-entrega"]:checked').value;
        
        if (!nombreCliente || !dniCliente || !email || !telefono) {
            alert('Por favor completa toda tu información de contacto');
            return;
        }
        
        // Verificar que el DNI tenga 8 dígitos (formato peruano)
        if (!/^\d{8}$/.test(dniCliente)) {
            alert('Por favor ingresa un DNI válido de 8 dígitos');
            return;
        }
        
        if (metodoEntrega === 'delivery') {
            const direccion = document.getElementById('direccion').value;
            const ciudad = document.getElementById('ciudad').value;
            const codigoPostal = document.getElementById('codigo-postal').value;
            
            if (!direccion || !ciudad || !codigoPostal) {
                alert('Por favor completa todos los campos de dirección');
                return;
            }
        } else if (metodoEntrega === 'recojo') {
            const tienda = document.getElementById('tienda').value;
            if (!tienda) {
                alert('Por favor selecciona una tienda');
                return;
            }
        }
        
        showStep(3);
    });
    
    document.getElementById('confirmar-pedido')?.addEventListener('click', () => {
        // Validación básica según el método de pago seleccionado
        const metodoPago = document.querySelector('input[name="metodo-pago"]:checked').value;
        
        if (metodoPago === 'tarjeta') {
            const numeroTarjeta = document.getElementById('numero-tarjeta').value;
            const fechaVencimiento = document.getElementById('fecha-vencimiento').value;
            const cvv = document.getElementById('cvv').value;
            const nombreTarjeta = document.getElementById('nombre-tarjeta').value;
            
            if (!numeroTarjeta || !fechaVencimiento || !cvv || !nombreTarjeta) {
                alert('Por favor completa todos los campos de la tarjeta');
                return;
            }
            
            if (!detectarTipoTarjeta(numeroTarjeta)) {
                alert('Número de tarjeta inválido');
                return;
            }
        } else if (metodoPago === 'yape') {
            const telefonoYape = document.getElementById('telefono-yape').value;
            if (!telefonoYape) {
                alert('Por favor ingresa tu número de teléfono Yape');
                return;
            }
        }
        
        // Generar boleta y mostrar paso de confirmación
        generarBoleta();
        showStep(4);
        
        // Vaciar el carrito después de completar la compra
        guardarCarrito([]);
    });

    // Navegación hacia atrás
    document.getElementById('volver-carrito')?.addEventListener('click', () => showStep(1));
    document.getElementById('volver-envio')?.addEventListener('click', () => showStep(2));
    
    // Botones de la boleta
    document.getElementById('volver-tienda')?.addEventListener('click', volverTienda);
    document.getElementById('descargar-boleta')?.addEventListener('click', imprimirBoleta);
    
    // Botón para vaciar carrito
    document.getElementById('vaciar-carrito')?.addEventListener('click', vaciarCarrito);

    // Agregar el evento para el botón "Seguir Comprando"
    document.getElementById('seguir-comprando')?.addEventListener('click', function() {
        window.location.href = '/sections/catalogo.html';
    });

    // Inicialización
    showStep(1);
});