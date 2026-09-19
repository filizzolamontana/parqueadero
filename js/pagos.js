document.addEventListener('DOMContentLoaded', () => {
    // Configuración estándar del botón salir
    document.querySelectorAll('.HTML-logout').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('¿Desea cerrar sesión en el sistema?')) {
                window.location.href = 'login.html';
            }
        });
    });

    const inputPlaca = document.getElementById('pago-placa');
    const inputTiempo = document.getElementById('pago-tiempo');
    const inputTotal = document.getElementById('pago-total');

    // Simulación de cálculo automático cuando el operador termina de digitar la placa
    inputPlaca.addEventListener('input', function() {
        const placaIngresada = this.value.toUpperCase();

        if (placaIngresada.length === 6) {
            // Buscamos si la placa existe en el almacenamiento del navegador
            let listaVehiculos = JSON.parse(localStorage.getItem('vehiculosParqueadero')) || [];
            let vehiculoEncontrado = listaVehiculos.find(v => v.placa === placaIngresada);

            if (vehiculoEncontrado) {
                // Simulamos un cálculo aleatorio o fijo basado en que sí está en el sitio
                inputTiempo.value = "2 Horas y 15 Minutos";
                inputTotal.value = "$ 9.000";
            } else {
                // Si la placa no está registrada en el panel
                inputTiempo.value = "Vehículo no registrado en sitio";
                inputTotal.value = "$ 0";
            }
        } else {
            // Limpiar si borra caracteres
            inputTiempo.value = "";
            inputTotal.value = "";
        }
    });
});

// Procesar transacción completa
document.getElementById('form-control-pagos').addEventListener('submit', function(e) {
    e.preventDefault();

    const placa = document.getElementById('pago-placa').value.toUpperCase();
    const metodo = document.getElementById('pago-metodo').value;
    const total = document.getElementById('pago-total').value;

    if (total === "$ 0" || total === "") {
        alert("Error: No se puede procesar el pago de un vehículo que no se encuentra en el parqueadero.");
        return;
    }

    // Confirmación del cobro
    alert(`¡TRANSACCIÓN EXITOSA!\n\nPlaca: ${placa}\nRecaudo: ${total}\nMétodo: ${metodo}\n\nAbriendo barrera de salida...`);

    // Remover el vehículo de la lista del parqueadero de forma lógica
    let listaVehiculos = JSON.parse(localStorage.getItem('vehiculosParqueadero')) || [];
    let nuevaLista = listaVehiculos.filter(v => v.placa !== placa);
    localStorage.setItem('vehiculosParqueadero', JSON.stringify(nuevaLista));

    // Resetear formulario y regresar al Panel de Control principal
    this.reset();
    window.location.href = 'index.html';
});