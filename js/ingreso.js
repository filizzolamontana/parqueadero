document.addEventListener('DOMContentLoaded', () => {
    // Configurar botón salir
    document.querySelectorAll('.HTML-logout').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('¿Desea cerrar sesión?')) {
                window.location.href = 'login.html';
            }
        });
    });
});

document.getElementById('form-ingreso-vehiculo').addEventListener('submit', function(e) {
    e.preventDefault();

    const placa = document.getElementById('ingreso-placa').value.toUpperCase();
    const tipo = document.getElementById('ingreso-tipo').value;

    // Formatear hora local actual
    const ahora = new Date();
    let horas = ahora.getHours();
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12 || 12;
    const horaIngreso = `${String(horas).padStart(2, '0')}:${minutos} ${ampm}`;

    const nuevoVehiculo = { placa, tipo, hora: horaIngreso };

    let listaVehiculos = JSON.parse(localStorage.getItem('vehiculosParqueadero')) || [];
    listaVehiculos.push(nuevoVehiculo);
    localStorage.setItem('vehiculosParqueadero', JSON.stringify(listaVehiculos));

    alert(`Vehículo ${placa} ingresado.`);
    window.location.href = 'index.html';
});