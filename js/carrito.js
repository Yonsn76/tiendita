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
        actualizarPasosCheckout(stepNumber);
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
    
    let subtotalCarrito = 0;
    let envio = 5.99;
    
    carrito.forEach(producto => {
        const subtotalProducto = producto.precio * producto.cantidad;
        subtotalCarrito += subtotalProducto;
        
        const itemHTML = `
            <div class="carrito-card">
                <div class="card-img">
                    <img src="${producto.imagen || 'placeholder.jpg'}" alt="${producto.nombre}">
                </div>
                <div class="card-title">${producto.nombre}</div>
                ${producto.talla ? `<div class="card-subtitle">Talla: ${producto.talla}</div>` : ''}
                <hr class="card-divider">
                <div class="card-footer">
                    <div>
                        <button class="btn-cantidad" data-id="${producto.id}" data-talla="${producto.talla || ''}" data-action="restar">-</button>
                        <input type="number" class="cantidad-input" value="${producto.cantidad}" min="1" max="10" data-id="${producto.id}" data-talla="${producto.talla || ''}">
                        <button class="btn-cantidad" data-id="${producto.id}" data-talla="${producto.talla || ''}" data-action="sumar">+</button>
                    </div>
                    <div class="card-price"><span>S/</span> ${subtotalProducto.toFixed(2)}</div>
                    <button class="btn-eliminar" data-id="${producto.id}" data-talla="${producto.talla || ''}" title="Eliminar">🗑️</button>
                </div>
            </div>
        `;
        carritoContainer.innerHTML += itemHTML;
    });
    
    // Calcular IGV y total
    const igv = subtotalCarrito * 0.18;
    const total = subtotalCarrito + igv;
    
    // Actualizar resumen
    document.getElementById('subtotal-carrito').textContent = subtotalCarrito.toFixed(2);
    document.getElementById('igv-carrito').textContent = igv.toFixed(2);
    document.getElementById('total-carrito').textContent = subtotalCarrito > 0 ? total.toFixed(2) : '0.00';
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
        document.getElementById('direccion-envio').innerHTML = `
            ${direccion}, ${ciudad}, CP: ${codPostal}
            <br>
            <span style="color:#888; font-size:0.95em;">
                Entrega en 1 a 7 días hábiles. Si no llega en ese plazo, se le devolverá su dinero.
            </span>
        `;
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
            const emailYape = document.getElementById('yape-email')?.value || email;
            detallePago = `Correo: ${emailYape}`;
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

// Manejo de métodos de pago con el nuevo diseño
const btnTarjeta = document.getElementById('btn-tarjeta');
const btnYape = document.getElementById('btn-yape');
const btnPaypal = document.getElementById('btn-paypal');

const tarjetaContainer = document.getElementById('tarjeta-container');
const yapeContainer = document.getElementById('yape-container');
const paypalContainer = document.getElementById('paypal-container');
const separatorText = document.getElementById('separator-text');

// Función para cambiar entre métodos de pago
function cambiarMetodoPago(metodo) {
    // Quitar la clase active de todos los botones
    btnTarjeta.classList.remove('active');
    btnYape.classList.remove('active');
    btnPaypal.classList.remove('active');
    
    // Ocultar todos los contenedores
    tarjetaContainer.style.display = 'none';
    paypalContainer.style.display = 'none';
    document.getElementById('yape-contenedor').style.display = 'none';

    if (metodo === 'tarjeta') {
        btnTarjeta.classList.add('active');
        tarjetaContainer.style.display = 'flex';
        separatorText.textContent = 'pagar con tarjeta de crédito';
        document.querySelector('input[name="metodo-pago"][value="tarjeta"]').checked = true;
    } else if (metodo === 'yape') {
        btnYape.classList.add('active');
        document.getElementById('yape-contenedor').style.display = 'flex';
        document.getElementById('yape-paso-1').style.display = 'block';
        document.getElementById('yape-paso-2').style.display = 'none';
        separatorText.textContent = 'pagar con Yape';
        document.querySelector('input[name="metodo-pago"][value="yape"]').checked = true;
    } else if (metodo === 'paypal') {
        btnPaypal.classList.add('active');
        paypalContainer.style.display = 'block';
        separatorText.textContent = 'pagar con PayPal';
        document.querySelector('input[name="metodo-pago"][value="paypal"]').checked = true;
    }
}

// Asignar eventos a los botones de método de pago
if (btnTarjeta) {
    btnTarjeta.addEventListener('click', () => cambiarMetodoPago('tarjeta'));
}

if (btnYape) {
    btnYape.addEventListener('click', () => cambiarMetodoPago('yape'));
}

if (btnPaypal) {
    btnPaypal.addEventListener('click', () => cambiarMetodoPago('paypal'));
}

// Inicializar el método de pago por defecto
document.addEventListener('DOMContentLoaded', function() {
    // Si el paso de pago está visible, inicializar la interfaz de método de pago
    if (document.getElementById('paso-pago') && !document.getElementById('paso-pago').classList.contains('hidden')) {
        cambiarMetodoPago('tarjeta');
    }
});

// Actualizar cuando se muestra el paso de pago
const siguientePagoBtn = document.getElementById('siguiente-pago');
if (siguientePagoBtn) {
    siguientePagoBtn.addEventListener('click', function() {
        // Inicializar el método de pago cuando se muestra el paso
        setTimeout(() => {
            cambiarMetodoPago('tarjeta');
        }, 100);
    });
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
    const logoTipoTarjeta = document.getElementById('logo-tipo-tarjeta');
    const fechaVencimiento = document.getElementById('fecha-vencimiento');
    
    if (numeroTarjeta) {
        numeroTarjeta.addEventListener('input', function() {
            // Formatear número con espacios cada 4 dígitos
            this.value = formatearNumeroTarjeta(this.value);
            
            // Detectar y mostrar el tipo de tarjeta
            const tipo = detectarTipoTarjeta(this.value);
            if (tipo) {
                tipoTarjeta.textContent = "Tarjeta detectada: " + tipo;
                if (logosTarjetas[tipo]) {
                    logoTipoTarjeta.src = logosTarjetas[tipo];
                    logoTipoTarjeta.style.display = 'block';
                    logoTipoTarjeta.alt = tipo;
                } else {
                    logoTipoTarjeta.style.display = 'none';
                }
            } else {
                tipoTarjeta.textContent = "";
                logoTipoTarjeta.style.display = 'none';
            }
        });
    }
    
    if (fechaVencimiento) {
        fechaVencimiento.addEventListener('input', function() {
            this.value = formatearFechaVencimiento(this.value);
        });
    }

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
                // Si no hay dirección seleccionada y no hay direcciones guardadas
                if (direcciones.length === 0) {
                    alert('Necesitas agregar al menos una dirección de envío');
                } else {
                    alert('Por favor selecciona o completa todos los campos de dirección');
                }
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
        } else if (metodoPago === 'paypal') {
            const emailPaypal = document.getElementById('email-paypal').value;
            if (!emailPaypal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailPaypal)) {
                alert('Por favor ingresa un correo válido de PayPal.');
                return;
            }
        }
        // Para Yape no se requiere validación adicional aquí, ya se validó antes el correo y términos.
        // Mostrar modal de carga para todos los métodos
        mostrarModalConfirmacion();
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

    // Variables para manejar direcciones
    let direcciones = [];
    const direccionesGrid = document.getElementById('direcciones-grid');
    const nuevaDireccionCard = document.getElementById('nueva-direccion-card');
    const nuevaDireccionForm = document.getElementById('nueva-direccion-form');
    const direccionSeleccionadaForm = document.getElementById('direccion-seleccionada-form');
    
    // Inicializar con array vacío (sin direcciones de ejemplo)
    direcciones = [];
    
    // Función para mostrar las tarjetas de direcciones
    function mostrarDirecciones() {
        direccionesGrid.innerHTML = '';
        
        if (direcciones.length === 0) {
            // Mostrar mensaje si no hay direcciones
            const mensajeVacio = document.createElement('div');
            mensajeVacio.className = 'direcciones-vacio';
            mensajeVacio.innerHTML = `
                <p>No tienes direcciones guardadas.</p>
                <p>Agrega una dirección para continuar.</p>
            `;
            direccionesGrid.appendChild(mensajeVacio);
            
            // Si no hay direcciones, asegurarse de vaciar los campos
            document.getElementById('direccion').value = '';
            document.getElementById('ciudad').value = '';
            document.getElementById('codigo-postal').value = '';
            
        } else {
            // Mostrar las direcciones existentes
            direcciones.forEach(dir => {
                const dirCard = document.createElement('div');
                dirCard.className = 'address-card-container';
                dirCard.dataset.id = dir.id;
                
                dirCard.innerHTML = `
                    <div class="canvas">
                        <div class="tracker"></div>
                        <div class="check-icon"></div>
                        <div id="card">
                            <div class="card-content">
                                <div class="card-glare"></div>
                                <div class="cyber-lines">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                                <div class="address-label">${dir.etiqueta}</div>
                                <div class="address-details">
                                    ${dir.direccion}<br>
                                    ${dir.ciudad}, ${dir.codigoPostal}
                                </div>
                                <div class="corner-elements">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                direccionesGrid.appendChild(dirCard);
                
                // Evento para seleccionar dirección
                dirCard.querySelector('.tracker').addEventListener('click', function() {
                    // Eliminar selección previa
                    document.querySelectorAll('.address-card-container').forEach(card => {
                        card.classList.remove('selected');
                    });
                    
                    // Marcar como seleccionada
                    dirCard.classList.add('selected');
                    
                    // Llenar el formulario con los datos de la dirección seleccionada
                    document.getElementById('direccion').value = dir.direccion;
                    document.getElementById('ciudad').value = dir.ciudad;
                    document.getElementById('codigo-postal').value = dir.codigoPostal;
                });
            });
            
            // Si hay direcciones, seleccionar la primera por defecto
            if (direcciones.length > 0) {
                const primeraCard = direccionesGrid.querySelector('.address-card-container');
                if (primeraCard) {
                    primeraCard.classList.add('selected');
                    const dirId = parseInt(primeraCard.dataset.id);
                    const dir = direcciones.find(d => d.id === dirId);
                    
                    document.getElementById('direccion').value = dir.direccion;
                    document.getElementById('ciudad').value = dir.ciudad;
                    document.getElementById('codigo-postal').value = dir.codigoPostal;
                }
            }
        }
    }
    
    // Mostrar el formulario para agregar dirección
    if (nuevaDireccionCard) {
        nuevaDireccionCard.addEventListener('click', function() {
            document.getElementById('nueva-direccion-form').classList.add('visible');
            document.getElementById('overlay').classList.add('visible');
        });
    }
    
    // Cancelar agregar dirección
    document.getElementById('cancelar-direccion')?.addEventListener('click', function() {
        document.getElementById('nueva-direccion-form').classList.remove('visible');
        document.getElementById('overlay').classList.remove('visible');
        
        // Limpiar el formulario
        document.getElementById('etiqueta-direccion').value = '';
        document.getElementById('direccion-nueva').value = '';
        document.getElementById('ciudad-nueva').value = '';
        document.getElementById('codigo-postal-nuevo').value = '';
        document.getElementById('referencias').value = '';
    });
    
    // También cerrar el modal al hacer clic en el overlay
    document.getElementById('overlay')?.addEventListener('click', function() {
        document.getElementById('nueva-direccion-form').classList.remove('visible');
        document.getElementById('overlay').classList.remove('visible');
    });
    
    // Modificar el código para guardar dirección
    document.getElementById('guardar-direccion')?.addEventListener('click', function() {
        const etiqueta = document.getElementById('etiqueta-direccion').value;
        const direccion = document.getElementById('direccion-nueva').value;
        const ciudad = document.getElementById('ciudad-nueva').value;
        const codigoPostal = document.getElementById('codigo-postal-nuevo').value;
        const referencias = document.getElementById('referencias').value;
        
        if (!etiqueta || !direccion || !ciudad || !codigoPostal) {
            alert('Por favor completa los campos obligatorios');
            return;
        }
        
        // Generar ID único (en una app real sería asignado por el backend)
        const newId = direcciones.length > 0 ? Math.max(...direcciones.map(d => d.id)) + 1 : 1;
        
        // Agregar nueva dirección
        direcciones.push({
            id: newId,
            etiqueta,
            direccion,
            ciudad,
            codigoPostal,
            referencias
        });
        
        // Actualizar vista
        mostrarDirecciones();
        
        // Ocultar formulario y overlay
        document.getElementById('nueva-direccion-form').classList.remove('visible');
        document.getElementById('overlay').classList.remove('visible');
        
        // Limpiar el formulario
        document.getElementById('etiqueta-direccion').value = '';
        document.getElementById('direccion-nueva').value = '';
        document.getElementById('ciudad-nueva').value = '';
        document.getElementById('codigo-postal-nuevo').value = '';
        document.getElementById('referencias').value = '';
    });
    
    // Inicializar la vista de direcciones
    if (direccionesGrid) {
        mostrarDirecciones();
    }

    // Inicialización
    showStep(1);
});

// Diccionario de logos por tipo de tarjeta
const logosTarjetas = {
    "Visa": "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    "Mastercard": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    "American Express": "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg",
    "Discover": "https://upload.wikimedia.org/wikipedia/commons/5/53/Discover_Card_logo.svg",
    "Diners Club": "https://upload.wikimedia.org/wikipedia/commons/0/04/Diners_Club_Logo3.svg",
    "JCB": "https://upload.wikimedia.org/wikipedia/commons/1/16/JCB_logo.svg"
};

// Cambia el número según el paso actual (1, 2, 3 o 4)
function actualizarPasosCheckout(pasoActual) {
    document.querySelectorAll('.paso-indicador').forEach((el, idx) => {
        el.classList.remove('activo', 'completado');
        if (idx + 1 < pasoActual) {
            el.classList.add('completado');
        } else if (idx + 1 === pasoActual) {
            el.classList.add('activo');
        }
    });
}

function mostrarModalConfirmacion() {
    const modal = document.getElementById('modal-confirmacion');
    const carga = document.getElementById('modal-contenido-carga');
    const exito = document.getElementById('modal-contenido-exito');
    const confeti = document.getElementById('confeti');
    modal.classList.add('activo');
    carga.classList.add('activo');
    exito.classList.remove('activo');
    confeti.innerHTML = '';

    // Después de 2 segundos, mostrar éxito
    setTimeout(() => {
        carga.classList.remove('activo');
        exito.classList.add('activo');
        lanzarConfeti();
    }, 5000);
}

// Botón para ir a la boleta
document.getElementById('btn-ir-boleta')?.addEventListener('click', () => {
    document.getElementById('modal-confirmacion').classList.remove('activo');
    // Generar boleta y mostrar paso de confirmación
    generarBoleta();
    showStep(4);
    // Vaciar el carrito después de completar la compra
    guardarCarrito([]);
});

// Confeti animado
function lanzarConfeti() {
    const confeti = document.getElementById('confeti');
    confeti.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = Math.random() * 100 + '%';
        div.style.top = Math.random() * 40 + 'px';
        div.style.width = '8px';
        div.style.height = '16px';
        div.style.background = `hsl(${Math.random()*360},80%,60%)`;
        div.style.opacity = 0.8;
        div.style.borderRadius = '3px';
        div.style.transform = `rotate(${Math.random()*360}deg)`;
        div.style.animation = `confeti-fall 1.2s ${Math.random()}s ease-out forwards`;
        confeti.appendChild(div);
    }
}

// Animación de caída de confeti
const style = document.createElement('style');
style.innerHTML = `
@keyframes confeti-fall {
    to {
        transform: translateY(80px) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

// Mostrar/ocultar la nota de delivery en la sección de envío
function actualizarNotaDelivery() {
    const deliveryRadio = document.getElementById('delivery');
    const nota = document.getElementById('nota-delivery');
    if (deliveryRadio && nota) {
        nota.style.display = deliveryRadio.checked ? 'block' : 'none';
    }
}

// Al cargar la página y al cambiar el método de entrega
document.addEventListener('DOMContentLoaded', actualizarNotaDelivery);
document.querySelectorAll('input[name="metodo-entrega"]').forEach(radio => {
    radio.addEventListener('change', actualizarNotaDelivery);
});

// Función para actualizar el monto de Yape con el total del carrito
function actualizarMontoYape() {
    // Obtén el valor del total del carrito
    var total = document.getElementById('total-carrito').textContent;
    // Asigna ese valor al monto de Yape
    document.getElementById('yape-monto').textContent = total;
}

// Llama a esta función cuando el usuario pase al paso de pago
// Por ejemplo, si tienes un botón para ir al pago:
document.getElementById('siguiente-pago').addEventListener('click', function() {
    actualizarMontoYape();
    mostrarFechaLimitePagoYape();
});

function mostrarFechaLimitePagoYape() {
    // Si el input de fecha existe y tiene valor, úsalo, si no, suma 4 días
    let fechaLimite;
    const inputFecha = document.getElementById('input-fecha-limite');
    if (inputFecha && inputFecha.value) {
        fechaLimite = new Date(inputFecha.value + "T23:59:59");
    } else {
        fechaLimite = new Date();
        fechaLimite.setDate(fechaLimite.getDate() + 4);
    }
    const fechaFormateada = fechaLimite.toLocaleDateString('es-PE', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
    const horaFormateada = fechaLimite.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('yape-fecha-limite').innerHTML =
        `Paga antes del <b>${fechaFormateada}</b> - <b>${horaFormateada}</b>`;
}

// Si el input de fecha cambia, actualiza la fecha máxima
const inputFecha = document.getElementById('input-fecha-limite');
if (inputFecha) {
    inputFecha.addEventListener('change', mostrarFechaLimitePagoYape);
}

document.getElementById('btn-pagar-paypal')?.addEventListener('click', function() {
    const emailPaypal = document.getElementById('email-paypal').value;
    const btnPaypal = this;
    if (!emailPaypal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailPaypal)) {
        alert('Por favor ingresa un correo válido de PayPal.');
        return;
    }
    // Abre la ventana de PayPal
    const paypalWindow = window.open(
        'https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&pageState=login&token=EC-14306603AP296960B',
        '_blank'
    );
    // Cambia el estilo y texto del botón inmediatamente
    btnPaypal.classList.add('paid');
    btnPaypal.innerHTML = '<span class="check">✔</span><span class="text">Pago Exitoso</span>';
    btnPaypal.disabled = true;
    // Simula el pago exitoso cuando la ventana se cierra
    const timer = setInterval(function() {
        if (paypalWindow.closed) {
            clearInterval(timer);
            // Aquí puedes marcar el pago como realizado y avanzar al siguiente paso
            setTimeout(() => {
                mostrarModalConfirmacion();
            }, 1200);
        }
    }, 1000);
});

// Mostrar paso 1 de Yape al seleccionar el método
document.getElementById('btn-yape').addEventListener('click', function() {
    document.getElementById('yape-paso-1').style.display = 'block';
    document.getElementById('yape-paso-2').style.display = 'none';
    // Actualiza monto y fecha
    const monto = document.getElementById('total-carrito').textContent;
    document.getElementById('yape-monto-paso1').textContent = monto;
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() + 4);
    const fechaStr = fechaLimite.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const horaStr = fechaLimite.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('yape-expira-paso1').innerHTML = `Tu transacción expirará el <b>${fechaStr}</b> a las <b>${horaStr}</b>`;
});

// Validación en tiempo real
const yapeEmail = document.getElementById('yape-email');
const yapeTerminos = document.getElementById('yape-terminos');
const yapeBtn = document.getElementById('yape-generar-qr');
const yapeError = document.getElementById('yape-email-error');

function validarYapePaso1() {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(yapeEmail.value.trim());
    const terminosOk = yapeTerminos.checked;
    if (!emailValido && yapeEmail.value.trim() !== '') {
        yapeError.style.display = 'block';
    } else {
        yapeError.style.display = 'none';
    }
    yapeBtn.disabled = !(emailValido && terminosOk);
    yapeBtn.style.opacity = yapeBtn.disabled ? '0.7' : '1';
    yapeBtn.style.cursor = yapeBtn.disabled ? 'not-allowed' : 'pointer';
}
yapeEmail.addEventListener('input', validarYapePaso1);
yapeTerminos.addEventListener('change', validarYapePaso1);

// Al hacer clic en "Generar código QR"
yapeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (yapeBtn.disabled) return;
    // Mostrar paso 2 y ocultar paso 1
    document.getElementById('yape-paso-1').style.display = 'none';
    document.getElementById('yape-paso-2').style.display = 'block';

    // Mostrar datos en el paso 2
    const email = yapeEmail.value.trim();
    const monto = document.getElementById('total-carrito').textContent;
    document.getElementById('yape-monto-paso2').textContent = monto;
    document.getElementById('yape-email-mostrado').textContent = email;

    // Fecha de expiración (4 días después)
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() + 4);
    const fechaStr = fechaLimite.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const horaStr = fechaLimite.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('yape-expira-paso2').innerHTML = `Tu transacción expirará el <b>${fechaStr}</b> a las <b>${horaStr}</b>`;

    // Animación de carga y éxito
    document.getElementById('yape-estado-pago').textContent = "Esperando confirmación de pago...";
    document.getElementById('yape-loader').style.display = "block";
    document.getElementById('yape-exito').style.display = "none";

    setTimeout(function() {
        document.getElementById('yape-estado-pago').textContent = "¡Pago exitoso!";
        document.getElementById('yape-loader').style.display = "none";
        document.getElementById('yape-exito').style.display = "block";
    }, 5000); // 5 segundos
});