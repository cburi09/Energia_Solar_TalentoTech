import { cargarCSV, encabezadosCSV } from "./cargarCSV.js";

async function poblar_tabla_colombia() {

    //Se sobrecarga la función, en caso de que se quiera mostrar solo unos datos o la totalidad de los mismos
    if(arguments.length == 0){
        let datos = await cargarCSV();
        let encabezados = await encabezadosCSV();
        const tbody = document.querySelector("#tabla_historico tbody")
        tbody.innerHTML="";

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
    else{
        if(arguments[0] == "completo"){
            let datos = await cargarCSV("completo");
            let encabezados = await encabezadosCSV();
            const tbody = document.querySelector("#tabla_historico tbody")
            tbody.innerHTML="";

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
    }
}

poblar_tabla_colombia()

//Se definen los eventos cuando se pulse clic en los botones del Historico

//para visualizar solo los datos de colombia
const boton_colombia = document.getElementById("boton_tabla").onclick = function() {poblar_tabla_colombia()};

//o todos los que contiene el archivo CSV.
const boton_tabla_completa = document.getElementById("boton_tabla_completa").onclick = function() {poblar_tabla_colombia('completo')};