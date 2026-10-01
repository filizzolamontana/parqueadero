
import React, { useState } from "react";

function Login({ cambiarPagina }) {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const manejarEnvio = (event) => {
        event.preventDefault();

        if (usuario.trim() === "" || password.trim() === "") {
            return;
        }

        // Ir al panel principal de React
        cambiarPagina("panel");
    };

    return (
        <div className="login-container">

            <div className="login-left">
                <img
                    src="/img/login-banner.png"
                    alt="Ilustración Parqueadero"
                    className="login-image"
                />
            </div>

            <div className="login-right">

                <div className="login-content">

                    <div className="login-header">

                        <div className="logo-wrapper">
                            <img
                                src="/img/logo.png"
                                alt="Logo Parqueadero"
                                className="system-logo"
                            />
                        </div>

                        <h1>
                            SISTEMA DE GESTIÓN
                            <br />
                            DE PARQUEADERO
                        </h1>

                        <div className="blue-line"></div>

                        <p className="subtitle">
                            Inicia sesión para continuar
                        </p>

                    </div>

                    <form
                        className="login-form"
                        onSubmit={manejarEnvio}
                    >

                        <div className="input-group">

                            <label htmlFor="usuario">
                                Usuario
                            </label>

                            <div className="input-wrapper">

                                <span className="material-icons-outlined input-icon">
                                    person
                                </span>

                                <input
                                    type="text"
                                    id="usuario"
                                    placeholder="Ingresa tu usuario"
                                    value={usuario}
                                    onChange={(event) =>
                                        setUsuario(event.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>

                        <div className="input-group">

                            <label htmlFor="password">
                                Contraseña
                            </label>

                            <div className="input-wrapper">

                                <span className="material-icons-outlined input-icon">
                                    lock
                                </span>

                                <input
                                    type={
                                        mostrarPassword
                                            ? "text"
                                            : "password"
                                    }
                                    id="password"
                                    placeholder="Ingresa tu contraseña"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                />

                                <span
                                    className="material-icons-outlined toggle-password"
                                    onClick={() =>
                                        setMostrarPassword(!mostrarPassword)
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    {mostrarPassword
                                        ? "visibility_off"
                                        : "visibility"}
                                </span>

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="btn-ingresar"
                        >
                            <span className="material-icons-outlined">
                                arrow_forward
                            </span>

                            INGRESAR
                        </button>

                        <a
                            href="#"
                            className="forgot-password"
                            onClick={(event) =>
                                event.preventDefault()
                            }
                        >
                            <span className="material-icons-outlined lock-small">
                                lock
                            </span>

                            ¿Olvidaste tu contraseña?
                        </a>

                    </form>

                    <div className="security-notice">

                        <span className="material-icons-outlined shield-icon">
                            verified_user
                        </span>

                        <div className="security-text">

                            <p className="security-title">
                                Tu seguridad es nuestra prioridad
                            </p>

                            <p className="security-desc">
                                Acceso restringido solo para personal autorizado.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;


