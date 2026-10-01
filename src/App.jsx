import React, { useState } from "react";
import api from "./services/api";

import Login from "./components/Login";
import PanelControl from "./components/PanelControl";
import IngresoVehiculo from "./components/IngresoVehiculo";
import Pagos from "./components/Pagos";
import Reportes from "./components/Reportes";

function App() {

    const [pagina, setPagina] = useState("login");

    React.useEffect(() => {

        api.get("/registros")
            .then((respuesta) => {
                console.log(
                    "Conexión con Spring Boot exitosa:",
                    respuesta.data
                );
            })
            .catch((error) => {
                console.error(
                    "Error conectando con Spring Boot:",
                    error
                );
            });

    }, []);

    switch (pagina) {

        case "panel":
            return (
                <PanelControl
                    cambiarPagina={setPagina}
                />
            );

        case "ingreso":
            return (
                <IngresoVehiculo
                    cambiarPagina={setPagina}
                />
            );

        case "pagos":
            return (
                <Pagos
                    cambiarPagina={setPagina}
                />
            );

        case "reportes":
            return (
                <Reportes
                    cambiarPagina={setPagina}
                />
            );

        default:
            return (
                <Login
                    cambiarPagina={setPagina}
                />
            );
    }
}

export default App;

