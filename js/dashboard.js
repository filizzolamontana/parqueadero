document.addEventListener('DOMContentLoaded', () => {
    actualizarTablaYContadores();


    document.querySelectorAll('.HTML-logout').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('¿Desea cerrar sesión?')) {
                window.location.href = 'login.html';
            }
        });
    });
});

function actualizarTablaYContadores() {
    const tbody = document.getElementById('tabla-vehiculos');
    let listaVehiculos = JSON.parse(localStorage.getItem('vehiculosParqueadero'));


    if (!listaVehiculos) {
        listaVehiculos = [
            { placa: "KST456", tipo: "Automóvil", hora: "02:15 PM" },
            { placa: "MXZ123", tipo: "Motocicleta", hora: "03:10 PM" },
            { placa: "RWO789", tipo: "Camioneta", hora: "04:05 PM" }
        ];
        localStorage.setItem('vehiculosParqueadero', JSON.stringify(listaVehiculos));
    }

    tbody.innerHTML = '';

    listaVehiculos.forEach((vehiculo, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${vehiculo.placa}</td>
            <td>${vehiculo.tipo}</td>
            <td>${vehiculo.hora}</td>
            <td class="status-on-site">En sitio</td>
            <td><button class="btn-action-out" onclick="darSalida(${index})">Dar Salida</button></td>
        `;
        tbody.appendChild(fila);
    });

    let ocupadas = listaVehiculos.length;
    document.getElementById('celdas-ocupadas').innerText = ocupadas;
    document.getElementById('celdas-disponibles').innerText = 40 - ocupadas;
}

window.darSalida = function(index) {
    let listaVehiculos = JSON.parse(localStorage.getItem('vehiculosParqueadero')) || [];
    const placa = listaVehiculos[index].placa;

    if (confirm(`¿Confirmar salida del vehículo con placa ${placa}?`)) {
        listaVehiculos.splice(index, 1);
        localStorage.setItem('vehiculosParqueadero', JSON.stringify(listaVehiculos));
        actualizarTablaYContadores();
    }
};