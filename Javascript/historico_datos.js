import { cargarCSV, encabezadosCSV } from "./cargarCSV.js";

async function poblar_tabla_colombia() {
    let datos = await cargarCSV();
    let encabezados = await encabezadosCSV();
    const tbody = document.querySelector("#tabla_historico tbody")

    datos.forEach(fila => {
        const columnas = fila.split(",");

        if(columnas.length == encabezados.length){
            const fila = document.createElement("tr");
            columnas.forEach(dato => {
                const celda = document.createElement("td");
                celda.textContent = dato.trim();
                fila.appendChild(celda);
            });
            tbody.appendChild(fila);
        }
    });
}

poblar_tabla_colombia()