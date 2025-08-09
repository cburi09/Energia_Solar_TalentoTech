import { cargarCSV } from "./cargarCSV.js";

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


async function drawChart() {

    let CSV = await cargarCSV();
    
    let datos = await CSV[55].split(","); //Se consiguen los datos del año 2021, que están en la última posición del arreglo.
    let hidrica = parseFloat(datos[6]);
    let eolica = parseFloat(datos[5]);
    let solar = parseFloat(datos[4]);
    let otros  = parseFloat(datos[3]);

    let data = google.visualization.arrayToDataTable([
        ['Tipo de Energía', 'Producción de Energía en TWh'],
        ['Eolica', eolica],
        ['Solar', solar],
        ['Geotermica, Biomasa y otros', otros]
    ]);

    let options = {
        title: 'Producción de Energías Renovables en Colombia (año 2021) medida en TWh',
        is3D: true,
        responsive: true,
        chartArea:{left:'5%',top:'5%',width:'90%',height:'90%'},
        backgroundColor: "transparent",
        pieSliceText: "value",
    };

    let chart = new google.visualization.PieChart(document.getElementById('grafico_torta'));

    chart.draw(data, options);
}

//Se vuelve a llamar la función que renderiza la gráfica en caso de que la pantalla cambie de tamaño.
window.onresize = RedibujarGrafica;
function RedibujarGrafica() {
    google.charts.setOnLoadCallback(drawChart);
};