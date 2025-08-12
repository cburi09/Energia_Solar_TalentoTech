function calcular() {
    let irradiacion = parseFloat(document.getElementById('ciudad').value);
    let potencia = parseFloat(document.getElementById('potencia').value) / 1000; // W a kW
    let eficiencia = parseFloat(document.getElementById('eficiencia').value) / 100;
    let costo = parseFloat(document.getElementById('costo').value);

    if (isNaN(potencia) || isNaN(eficiencia) || isNaN(costo)) {
        document.getElementById('resultado').innerHTML = "⚠️ Por favor completa todos los campos.";
        return;
    }

    if (eficiencia > 100 || eficiencia <= 0){
        document.getElementById('resultado').innerHTML = "⚠️ La eficiencia no puede ser mayor a 100%, ni menor o igual a 0%";
        return;
    }

    let energiaAnual = irradiacion * potencia * eficiencia * 365; // kWh/año
    let ahorroAnual = energiaAnual * costo;

    document.getElementById('resultado').innerHTML = 
        `☀️ Energía generada al año: ${energiaAnual.toFixed(2)} kWh<br>` + 
        `💰 Ahorro estimado al año: $${ahorroAnual.toLocaleString('es-CO')}`;
}