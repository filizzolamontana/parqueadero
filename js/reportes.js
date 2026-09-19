document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.HTML-logout').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('¿Desea cerrar sesión en el sistema?')) {
                window.location.href = 'login.html';
            }
        });
    });


    const btnImprimir = document.getElementById('btn-imprimir-cierre');
    if (btnImprimir) {
        btnImprimir.addEventListener('click', () => {
            const total = document.getElementById('reporte-total-recaudo').innerText;
            alert(`--- REPORTE DE CIERRE DE CAJA ---\n\nParqueadero San José\nTotal Recaudado: ${total}\n\nGenerando archivo de auditoría para el administrador...`);
        });
    }
});