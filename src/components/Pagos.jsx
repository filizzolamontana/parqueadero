
import React, { useState } from "react";

function Pagos({ cambiarPagina }) {

    // Estados del formulario de pagos
    const [placa, setPlaca] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [total, setTotal] = useState("");
    const [metodoPago, setMetodoPago] = useState("");

    // Procesar el pago
    const manejarPago = (e) => {
        e.preventDefault();

        alert("Pago procesado correctamente");

        // Limpiar formulario
        setPlaca("");
        setTiempo("");
        setTotal("");
        setMetodoPago("");
    };

    // Regresar al panel principal
    const cancelar = () => {
        cambiarPagina("panel");
    };

    // Cerrar sesión
    const cerrarSesion = () => {
        cambiarPagina("login");
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
                            className="nav-link active"
                            onClick={() => cambiarPagina("pagos")}
                        >
                            <span className="material-icons-round">
                                payments
                            </span>
                            <span>Control de Pagos</span>
                        </button>

                        <button
                            type="button"
                            className="nav-link"
                            onClick={() => cambiarPagina("reportes")}
                        >
                            <span className="material-icons-round">
                                analytics
                            </span>
                            <span>Reportes Diarios</span>
                        </button>

                    </div>

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

                    <h1>Control de Pagos</h1>

                    <p className="text-muted">
                        Liquidación y facturación de salida de vehículos
                    </p>

                </header>

                {/* Tarjeta de liquidación */}
                <section className="form-card-container">

                    <div className="form-header">

                        <h2>
                            Liquidar Tiempo de Estacionamiento
                        </h2>

                        <p
                            className="sub-text"
                            style={{
                                color: "var(--text-muted)",
                                fontSize: "0.9rem",
                                marginBottom: "20px"
                            }}
                        >
                            Ingrese la placa para calcular el valor
                            total a pagar.
                        </p>

                    </div>

                    {/* Formulario */}
                    <form
                        id="form-control-pagos"
                        className="styled-form"
                        onSubmit={manejarPago}
                    >

                        {/* Placa */}
                        <div className="form-group">

                            <label htmlFor="pago-placa">
                                Placa del Vehículo
                            </label>

                            <input
                                type="text"
                                id="pago-placa"
                                placeholder="Ej: KST456"
                                maxLength="6"
                                value={placa}
                                onChange={(e) =>
                                    setPlaca(e.target.value)
                                }
                                required
                            />

                        </div>

                        {/* Tiempo transcurrido */}
                        <div className="form-group">

                            <label htmlFor="pago-tiempo">
                                Tiempo Transcurrido
                                (Horas / Minutos)
                            </label>

                            <input
                                type="text"
                                id="pago-tiempo"
                                placeholder="Se calculará automáticamente"
                                value={tiempo}
                                onChange={(e) =>
                                    setTiempo(e.target.value)
                                }
                                readOnly
                                style={{
                                    backgroundColor: "#f8fafc",
                                    cursor: "not-allowed"
                                }}
                            />

                        </div>

                        {/* Total */}
                        <div className="form-group">

                            <label htmlFor="pago-total">
                                Total a Pagar ($)
                            </label>

                            <input
                                type="text"
                                id="pago-total"
                                placeholder="Valor a cobrar"
                                value={total}
                                onChange={(e) =>
                                    setTotal(e.target.value)
                                }
                                readOnly
                                style={{
                                    backgroundColor: "#f8fafc",
                                    fontWeight: 700,
                                    color: "var(--primary-blue)",
                                    cursor: "not-allowed"
                                }}
                            />

                        </div>

                        {/* Método de pago */}
                        <div className="form-group">

                            <label htmlFor="pago-metodo">
                                Método de Pago
                            </label>

                            <select
                                id="pago-metodo"
                                value={metodoPago}
                                onChange={(e) =>
                                    setMetodoPago(e.target.value)
                                }
                                required
                            >

                                <option value="" disabled>
                                    Seleccione método
                                </option>

                                <option value="Efectivo">
                                    Efectivo
                                </option>

                                <option value="Tarjeta">
                                    Tarjeta de Crédito / Débito
                                </option>

                                <option value="Digital">
                                    Transferencia Digital
                                    (Nequi/Daviplata)
                                </option>

                            </select>

                        </div>

                        {/* Botones */}
                        <div className="form-buttons">

                            <button
                                type="submit"
                                className="btn-submit"
                            >
                                Procesar Pago y Salida
                            </button>

                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={cancelar}
                            >
                                Cancelar
                            </button>

                        </div>

                    </form>

                </section>

            </div>
        </>
    );
}

export default Pagos;



