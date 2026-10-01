import React from "react";

function PanelControl({ cambiarPagina }) {

    // NAVEGACIÓN
    const irAInicio = () => {
        cambiarPagina("panel");
    };

    const irAIngreso = () => {
        cambiarPagina("ingreso");
    };

    const irASalida = () => {
        alert("Módulo de Registrar salida pendiente de convertir.");
    };

    const irAConsultar = () => {
        alert("Módulo de Consultar vehículos pendiente de convertir.");
    };

    const irAPagos = () => {
        cambiarPagina("pagos");
    };

    const irAReportes = () => {
        cambiarPagina("reportes");
    };

    const cerrarSesion = () => {
        cambiarPagina("login");
    };

    return (
        <div className="dashboard-container">

            {/* ENCABEZADO PRINCIPAL */}
            <header className="main-header">

                <div className="header-left">

                    <div className="brand-wrapper">

                        <img
                            src="/img/logo.png"
                            alt="Logo"
                            className="header-logo"
                        />

                        <div className="header-title">
                            <h2>SISTEMA DE</h2>
                            <h1>PARQUEADERO</h1>
                        </div>

                    </div>

                    {/* MENÚ PRINCIPAL */}
                    <nav className="top-menu">

                        <button
                            type="button"
                            className="menu-item active"
                            onClick={irAInicio}
                        >
                            <span className="material-icons-outlined">
                                home
                            </span>
                            Inicio
                        </button>

                        <button
                            type="button"
                            className="menu-item"
                            onClick={irAIngreso}
                        >
                            <span className="material-icons-outlined">
                                minor_crash
                            </span>
                            Registrar ingreso
                        </button>

                        <button
                            type="button"
                            className="menu-item"
                            onClick={irASalida}
                        >
                            <span className="material-icons-outlined">
                                directions_car
                            </span>
                            Registrar salida
                        </button>

                        <button
                            type="button"
                            className="menu-item"
                            onClick={irAConsultar}
                        >
                            <span className="material-icons-outlined">
                                search
                            </span>
                            Consultar vehículos
                        </button>

                        <button
                            type="button"
                            className="menu-item"
                            onClick={irAPagos}
                        >
                            <span className="material-icons-outlined">
                                receipt_long
                            </span>
                            Generar factura
                        </button>

                        <button
                            type="button"
                            className="menu-item"
                            onClick={irAReportes}
                        >
                            <span className="material-icons-outlined">
                                bar_chart
                            </span>
                            Reportes
                        </button>

                    </nav>

                </div>

                {/* OPCIONES DEL USUARIO */}
                <div className="header-right">

                    <button
                        type="button"
                        className="notification-btn"
                    >
                        <span className="material-icons-outlined">
                            notifications
                        </span>

                        <span className="badge"></span>
                    </button>

                    <div className="user-profile">

                        <span className="material-icons-outlined user-avatar">
                            account_circle
                        </span>

                        <span className="user-name">
                            Administrador
                        </span>

                    </div>

                    <button
                        type="button"
                        className="logout-btn"
                        title="Cerrar sesión"
                        onClick={cerrarSesion}
                    >
                        <span className="material-icons-outlined">
                            logout
                        </span>

                        <span className="logout-text">
                            Cerrar sesión
                        </span>
                    </button>

                </div>

            </header>

            {/* CONTENIDO PRINCIPAL */}
            <main className="main-content">

                {/* BANNER */}
                <section className="welcome-banner">

                    <div className="welcome-text">

                        <h1>Bienvenido al</h1>

                        <h2>
                            Sistema de Parqueadero
                        </h2>

                        <p>
                            Desde aquí puedes gestionar el ingreso,
                            salida y consulta de vehículos de manera
                            eficiente.
                        </p>

                    </div>

                    <div className="welcome-image">

                        <img
                            src="/img/carro.png"
                            alt="Ilustración Control"
                        />

                    </div>

                </section>

                {/* TARJETAS */}
                <section className="cards-grid">

                    {/* REGISTRAR INGRESO */}
                    <div
                        className="card"
                        onClick={irAIngreso}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                irAIngreso();
                            }
                        }}
                    >

                        <div className="card-icon-wrapper blue">

                            <span className="material-icons-outlined">
                                minor_crash
                            </span>

                        </div>

                        <h3>Registrar ingreso</h3>

                        <p>
                            Registra el ingreso de un nuevo vehículo
                            al parqueadero.
                        </p>

                        <div className="card-arrow blue-text">

                            <span className="material-icons-outlined">
                                arrow_forward
                            </span>

                        </div>

                    </div>

                    {/* REGISTRAR SALIDA */}
                    <div
                        className="card"
                        onClick={irASalida}
                        role="button"
                        tabIndex={0}
                    >

                        <div className="card-icon-wrapper green">

                            <span className="material-icons-outlined">
                                directions_car
                            </span>

                        </div>

                        <h3>Registrar salida</h3>

                        <p>
                            Registra la salida de un vehículo y
                            calcula el valor a pagar.
                        </p>

                        <div className="card-arrow green-text">

                            <span className="material-icons-outlined">
                                arrow_forward
                            </span>

                        </div>

                    </div>

                    {/* CONSULTAR VEHÍCULOS */}
                    <div
                        className="card"
                        onClick={irAConsultar}
                        role="button"
                        tabIndex={0}
                    >

                        <div className="card-icon-wrapper orange">

                            <span className="material-icons-outlined">
                                search
                            </span>

                        </div>

                        <h3>Consultar vehículos</h3>

                        <p>
                            Consulta la información de los vehículos
                            que se encuentran en el parqueadero.
                        </p>

                        <div className="card-arrow orange-text">

                            <span className="material-icons-outlined">
                                arrow_forward
                            </span>

                        </div>

                    </div>

                    {/* GENERAR FACTURA */}
                    <div
                        className="card"
                        onClick={irAPagos}
                        role="button"
                        tabIndex={0}
                    >

                        <div className="card-icon-wrapper purple">

                            <span className="material-icons-outlined">
                                receipt_long
                            </span>

                        </div>

                        <h3>Generar factura</h3>

                        <p>
                            Genera la factura de pago para el vehículo
                            seleccionado.
                        </p>

                        <div className="card-arrow purple-text">

                            <span className="material-icons-outlined">
                                arrow_forward
                            </span>

                        </div>

                    </div>

                    {/* REPORTES */}
                    <div
                        className="card"
                        onClick={irAReportes}
                        role="button"
                        tabIndex={0}
                    >

                        <div className="card-icon-wrapper teal">

                            <span className="material-icons-outlined">
                                bar_chart
                            </span>

                        </div>

                        <h3>Reportes</h3>

                        <p>
                            Visualiza reportes de ingresos, salidas
                            y estadísticas generales.
                        </p>

                        <div className="card-arrow teal-text">

                            <span className="material-icons-outlined">
                                arrow_forward
                            </span>

                        </div>

                    </div>

                </section>

                {/* SEGURIDAD */}
                <footer className="bottom-security">

                    <span className="material-icons-outlined security-icon">
                        shield
                    </span>

                    <div className="security-info-text">

                        <h4>
                            Seguridad y control en cada acceso
                        </h4>

                        <p>
                            Nuestro sistema garantiza un manejo
                            eficiente y seguro de tu parqueadero.
                        </p>

                    </div>

                </footer>

            </main>

        </div>
    );
}

export default PanelControl;