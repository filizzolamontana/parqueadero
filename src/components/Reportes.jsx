
import React, { useState } from "react";

function Reportes({ cambiarPagina }) {

    // Estado para controlar el historial de servicios
    const [reportes] = useState([
        {
            horaSalida: "05:14 PM",
            placa: "ABC123",
            tipo: "Automóvil",
            metodoPago: "Efectivo",
            total: "$8.000"
        },
        {
            horaSalida: "05:30 PM",
            placa: "XYZ789",
            tipo: "Motocicleta",
            metodoPago: "Digital",
            total: "$4.500"
        }
    ]);

    // Función para cerrar sesión
    const cerrarSesion = () => {
        cambiarPagina("login");
    };

    // Imprimir el cierre de caja
    const imprimirCierre = () => {
        window.print();
    };

    return (
        <>
            {/* Barra de navegación */}
            <nav className="navbar">

                <div className="nav-container">

                    <div className="logo">
                        <span className="logo-text">P</span>
                    </div>

                    <div className="nav-menu">

                        <button
                            type="button"
                            className="nav-link"
                            onClick={() => cambiarPagina("panel")}
                        >
                            <span className="material-icons-round">
                                dashboard
                            </span>

                            <span>Panel de Control</span>
                        </button>

                        <button
                            type="button"
                            className="nav-link"
                            onClick={() => cambiarPagina("ingreso")}
                        >
                            <span className="material-icons-round">
                                minor_crash
                            </span>

                            <span>Ingresar Vehículo</span>
                        </button>

                        <button
                            type="button"
                            className="nav-link"
                            onClick={() => cambiarPagina("pagos")}
                        >
                            <span className="material-icons-round">
                                payments
                            </span>

                            <span>Control de Pagos</span>
                        </button>

                        <button
                            type="button"
                            className="nav-link active"
                            onClick={() => cambiarPagina("reportes")}
                        >
                            <span className="material-icons-round">
                                analytics
                            </span>

                            <span>Reportes Diarios</span>
                        </button>

                    </div>

                    {/* Acción de cerrar sesión */}
                    <div className="nav-actions">

                        <button
                            type="button"
                            className="btn-salir HTML-logout"
                            onClick={cerrarSesion}
                        >
                            <span className="material-icons-round">
                                logout
                            </span>

                            <span>Salir</span>
                        </button>

                    </div>

                </div>

            </nav>

            {/* Contenido principal */}
            <div className="main-wrapper">

                {/* Encabezado */}
                <header className="welcome-header">

                    <h1>Reportes Diarios</h1>

                    <p className="text-muted">
                        Cierre de caja y estadísticas de operación del día
                    </p>

                </header>

                {/* Tarjetas de estadísticas */}
                <section className="analytics-container">

                    {/* Total recaudado */}
                    <div className="stat-card">

                        <span className="material-icons-round icon-orange">
                            monetization_on
                        </span>

                        <div className="stat-info">

                            <h3>Total Recaudado</h3>

                            <h2>
                                $185.000
                            </h2>

                            <p className="sub-text">
                                Caja general activa
                            </p>

                        </div>

                    </div>

                    {/* Pagos en efectivo */}
                    <div className="stat-card">

                        <span className="material-icons-round icon-blue">
                            local_atm
                        </span>

                        <div className="stat-info">

                            <h3>Pagos en Efectivo</h3>

                            <h2>
                                $125.000
                            </h2>

                            <p className="sub-text">
                                Dinero físico en caja
                            </p>

                        </div>

                    </div>

                    {/* Pagos digitales */}
                    <div className="stat-card">

                        <span className="material-icons-round icon-green">
                            qr_code_2
                        </span>

                        <div className="stat-info">

                            <h3>Pagos Digitales</h3>

                            <h2>
                                $60.000
                            </h2>

                            <p className="sub-text">
                                Nequi, Daviplata y Tarjetas
                            </p>

                        </div>

                    </div>

                </section>

                {/* Historial de servicios */}
                <section className="table-section">

                    <div className="table-header-title">

                        <h2>
                            Historial de Servicios Liquidados
                        </h2>

                    </div>

                    <div className="table-responsive">

                        <table>

                            <thead>

                                <tr>
                                    <th>Hora Salida</th>
                                    <th>Placa</th>
                                    <th>Tipo</th>
                                    <th>Método Pago</th>
                                    <th>Total Pagado</th>
                                </tr>

                            </thead>

                            <tbody>

                                {/* Generación de filas mediante React */}
                                {reportes.map((reporte, index) => (

                                    <tr key={index}>

                                        <td>
                                            {reporte.horaSalida}
                                        </td>

                                        <td>
                                            {reporte.placa}
                                        </td>

                                        <td>
                                            {reporte.tipo}
                                        </td>

                                        <td>
                                            {reporte.metodoPago}
                                        </td>

                                        <td
                                            style={{
                                                fontWeight: 600,
                                                color: "#10b981"
                                            }}
                                        >
                                            {reporte.total}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* Botón de impresión */}
                    <div
                        className="logout-footer"
                        style={{
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >

                        <button
                            type="button"
                            id="btn-imprimir-cierre"
                            className="btn-submit"
                            onClick={imprimirCierre}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}
                        >

                            <span
                                className="material-icons-round"
                                style={{
                                    fontSize: "1.1rem"
                                }}
                            >
                                print
                            </span>

                            Imprimir Cierre de Caja

                        </button>

                    </div>

                </section>

            </div>
        </>
    );
}

export default Reportes;


