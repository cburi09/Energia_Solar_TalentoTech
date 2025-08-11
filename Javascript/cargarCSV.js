export async function cargarCSV(){
    if(arguments.length == 0){
        const respuesta = await fetch("./recursos/02_modern-renewable-energy-consumption.csv");

        const texto = respuesta.text();
        const lineas = (await texto).trim().split("\n");
        const encabezados = lineas[0].split(",");
        let datos = lineas.slice(1039, 1095);
        //datos = datos[55].split(",");
        /*el array datos contiene el historico de energías renovables desde el año 1966 hasta 2021
        Los indices de los datos son los siguientes:
        [pais, codigo (del pais), año, TWh de Biomass, TWh de Solar, TWh de Eólica, TWh de Hidrica]
        */
        //console.log(datos[55])
        return datos;
    }
    else{
        if(arguments[0] == "completo"){
            const respuesta = await fetch("./recursos/02_modern-renewable-energy-consumption.csv");

            const texto = respuesta.text();
            const lineas = (await texto).trim().split("\n");
            const encabezados = lineas[0].split(",");
            let datos = lineas.slice(1);
            /*si se llama cargarCSV con el argumnento "completo"
            se mandan todos los datos del archivo. Si no se pasan argumentos a
            la función, se pasan solo los datos de Colombia*/
            return datos; 
        }
    }
}

export async function encabezadosCSV(){
    const respuesta = await fetch("./recursos/02_modern-renewable-energy-consumption.csv");

    const texto = respuesta.text();
    const lineas = (await texto).trim().split("\n");
    const encabezados = lineas[0].split(",");

    return encabezados;
}
