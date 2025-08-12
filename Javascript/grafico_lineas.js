import { cargarCSV } from "./cargarCSV.js";

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


async function drawChart() {
    /*Arreglo con el historico de producción energética alternativa en Colombia
    Desde 1966 (Posición 0) hasta 2021 (posición 55)*/
    let CSV = await cargarCSV();

    let arreglo_datos = [['Año', 'GWh E. Solar', 'GWh E. Eólica']];

    //Se itera desde el año 2000 (posición 34) hasta el 2021 agregando los datos que se desea mostrar
    for(let i=34; i<=55; i++){
        let registro = CSV[i].split(",");
        let dato_a_imprimir = [registro[2], parseFloat(registro[4])*1000, parseFloat(registro[5])*1000];
        arreglo_datos.push(dato_a_imprimir);
    }

    var data = google.visualization.arrayToDataTable(arreglo_datos);

    var options = {
        title: 'Comparación entre la producción de Energía Eolica y Solar, desde 2000 hasta 2021',
        legend: {position: 'bottom'},
        chartArea:{left:'5%',top:'5%',width:'90%',height:'90%'},
        backgroundColor: "transparent",
        axisTitlesPosition: 'in',
        vAxis: {textPosition:'in'},
    };

    var chart = new google.visualization.LineChart(document.getElementById('grafico_lineas'));

    chart.draw(data, options);
}

//Se vuelve a llamar la función que renderiza la gráfica en caso de que la pantalla cambie de tamaño.

window.onresize = RedibujarGrafica;
function RedibujarGrafica() {
    google.charts.setOnLoadCallback(drawChart);
}