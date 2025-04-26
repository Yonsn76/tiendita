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

// Función para calcular totales
function calcularTotales() {
    let subtotal = 0;
    
    productosEjemplo.forEach(producto => {
        subtotal += producto.precio * producto.cantidad;
    });
    
    const costoEnvio = 5.99; // En una aplicación real esto podría variar
    const total = subtotal + costoEnvio;
    
    return {
        subtotal: subtotal.toFixed(2),
        costoEnvio: costoEnvio.toFixed(2),
        total: total.toFixed(2)
    };
}

// Función para llenar la boleta con información
function generarBoleta() {
    // Datos de fecha y número de pedido
    document.getElementById('fecha-actual').textContent = obtenerFechaActual();
    document.getElementById('numero-pedido').textContent = generarNumeroPedido();
    
    // Datos del cliente
    const email = document.getElementById('email').value || 'cliente@ejemplo.com';
    const telefono = document.getElementById('telefono').value || '999999999';
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
    
    productosEjemplo.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>$${(producto.precio * producto.cantidad).toFixed(2)}</td>
        `;
        resumenProductos.appendChild(fila);
    });
    
    // Totales
    const totales = calcularTotales();
    document.getElementById('subtotal').textContent = `$${totales.subtotal}`;
    document.getElementById('costo-envio').textContent = `$${totales.costoEnvio}`;
    document.getElementById('total-pedido').textContent = `$${totales.total}`;
    
    // También actualizar el total en el carrito para consistencia
    document.getElementById('total-carrito').textContent = totales.total;
}

// Función para imprimir/descargar la boleta
function imprimirBoleta() {
    window.print();
}

// Manejo de métodos de entrega
document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente cargar productos en el carrito
    mostrarProductosCarrito();

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

    // Función para mostrar productos en el carrito
    function mostrarProductosCarrito() {
        const carritoContainer = document.querySelector('.carrito-items-container');
        if (!carritoContainer) return;
        
        carritoContainer.innerHTML = '';
        
        productosEjemplo.forEach(producto => {
            const itemHTML = `
                <div class="carrito-item">
                    <div class="carrito-item-img">
                        <img src="placeholder.jpg" alt="${producto.nombre}">
                    </div>
                    <div class="carrito-item-info">
                        <h3>${producto.nombre}</h3>
                        <p>$${producto.precio.toFixed(2)}</p>
                    </div>
                    <div class="carrito-item-cantidad">
                        <button class="btn-cantidad" data-id="${producto.id}" data-action="restar">-</button>
                        <input type="number" value="${producto.cantidad}" min="1" max="10" data-id="${producto.id}">
                        <button class="btn-cantidad" data-id="${producto.id}" data-action="sumar">+</button>
                    </div>
                    <div class="carrito-item-subtotal">
                        $${(producto.precio * producto.cantidad).toFixed(2)}
                    </div>
                    <button class="btn-eliminar" data-id="${producto.id}">×</button>
                </div>
            `;
            carritoContainer.innerHTML += itemHTML;
        });
        
        // Actualizar total del carrito
        const totales = calcularTotales();
        document.getElementById('total-carrito').textContent = totales.total;
        
        // Agregar event listeners a los botones de cantidad
        document.querySelectorAll('.btn-cantidad').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const accion = this.getAttribute('data-action');
                
                const producto = productosEjemplo.find(p => p.id === id);
                if (producto) {
                    if (accion === 'sumar' && producto.cantidad < 10) {
                        producto.cantidad++;
                    } else if (accion === 'restar' && producto.cantidad > 1) {
                        producto.cantidad--;
                    }
                    mostrarProductosCarrito();
                }
            });
        });
        
        // Agregar event listeners a los inputs de cantidad
        document.querySelectorAll('.carrito-item-cantidad input').forEach(input => {
            input.addEventListener('change', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const nuevaCantidad = parseInt(this.value);
                
                if (nuevaCantidad >= 1 && nuevaCantidad <= 10) {
                    const producto = productosEjemplo.find(p => p.id === id);
                    if (producto) {
                        producto.cantidad = nuevaCantidad;
                        mostrarProductosCarrito();
                    }
                }
            });
        });
        
        // Agregar event listeners a los botones de eliminar
        document.querySelectorAll('.btn-eliminar').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const index = productosEjemplo.findIndex(p => p.id === id);
                if (index !== -1) {
                    productosEjemplo.splice(index, 1);
                    mostrarProductosCarrito();
                }
            });
        });
    }

    // Navegación entre pasos
    // Navegación hacia adelante
    document.getElementById('siguiente-envio')?.addEventListener('click', () => showStep(2));
    document.getElementById('siguiente-pago')?.addEventListener('click', () => showStep(3));
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
    });

    // Navegación hacia atrás
    document.getElementById('volver-carrito')?.addEventListener('click', () => showStep(1));
    document.getElementById('volver-envio')?.addEventListener('click', () => showStep(2));
    
    // Botones de la boleta
    document.getElementById('volver-tienda')?.addEventListener('click', () => {
        // En una aplicación real redirigiría a la página principal
        showStep(1);
    });
    
    document.getElementById('descargar-boleta')?.addEventListener('click', imprimirBoleta);
    
    // Botón para vaciar carrito
    document.getElementById('vaciar-carrito')?.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres vaciar tu carrito?')) {
            productosEjemplo.length = 0; // Vaciar array
            mostrarProductosCarrito();
        }
    });

    // Inicialización
    showStep(1);
});