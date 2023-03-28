function validarFormulario() {
    var tasa = document.getElementById("Tasa").value;
    var periodo = document.getElementById("Periodo").value;
    var cantidad = document.getElementById("Cantidad").value;
    var monto = document.getElementById("Monto").value;
    var inicio = document.getElementById("Inicio").value;

    if (tasa == "" || periodo == "selecciona" || cantidad == "" || monto == "" || inicio == "") {
        alert("Por favor llene todos los campos o asegurese de solo ingresar números en los campos");
        return false;
    }
    else {
        Calculus();
    }
}

function Calculus() {
    var Tasa = .20;
    Tasa = document.getElementsByName("Tasa")[0].value;
    Tasa = Tasa / 100;
    //alert("Tasa = " + Tasa);
    var TasaForPeriod = 0;
    var Periodo = 52;//Dia, Sem, Qui, Mes, Tri, An
    var PeriodoLetter = "Sem";
    PeriodoLetter = document.getElementsByName("Periodo")[0].value;
    //alert("Periodo = " + PeriodoLetter);
    var tiempo = 11;
    tiempo = document.getElementsByName("Cantidad")[0].value;
    //alert("Tiempo = " + tiempo);
    var Monto = 500;//Defined by the user
    Monto = document.getElementsByName("Monto")[0].value;
    //alert("Monto = " + Monto);
    var Inicial = 5000;//What we have to start
    Inicial = document.getElementsByName("Inicio")[0].value;
    //alert("Inicial = " + Inicial);
    var MontoIngresado = 0;
    var MontoGenerado;
    var Ganancia = MontoIngresado - MontoGenerado;
    var PorGanancia = ((MontoIngresado - Ganancia) / MontoIngresado) * 100;
    //Calculo de tasa por periodo seleccionado
    switch (PeriodoLetter) {
        case "Dia": TasaForPeriod = (Tasa / 360) * 1; break;
        case "Sem": TasaForPeriod = (Tasa / 360) * 7; break;
        case "Qui": TasaForPeriod = (Tasa / 360) * 15; break;
        case "Men": TasaForPeriod = (Tasa / 360) * 30; break;
        case "Tri": TasaForPeriod = (Tasa / 360) * 90; break;
        case "An": TasaForPeriod = (Tasa / 360) * 360; break;
        //case default: break;  
    }
    //alert("Tasa por periodo = " + TasaForPeriod);
    //Definir las variables a usar
    //TasaForPeriod; Tiempo = Iterar; Inicial; Monto;
    //Result Ultimos 4
    var Calculo = 0;
    Calculo = Inicial;
    Calculo = Calculo * 1;
    MontoIngresado = MontoIngresado * 1;
    MontoIngresado = MontoIngresado + Calculo;
    for (var i = 0; i < tiempo; i++) {
        Calculo = (Calculo * 1) + (Monto * 1);
        MontoIngresado = (MontoIngresado * 1) + (Monto * 1);
        Calculo = (Calculo * 1) + (Calculo * TasaForPeriod);
        //alert("Monto Ingresado: " + MontoIngresado);
        //alert("Monto Generado: " + Calculo);
    }
    console.log(MontoIngresado);
    MontoGenerado = Calculo;
    console.log(MontoGenerado);
    Ganancia = (MontoGenerado * 1) - (MontoIngresado * 1);
    console.log(Ganancia);
    PorGanancia = (((Ganancia * 1) - (MontoIngresado * 1) / MontoIngresado) * 100);
    console.log(PorGanancia);
    document.getElementById("Inversion").innerHTML = MontoIngresado.toFixed(2);
    document.getElementById("Saldo").innerHTML = MontoGenerado.toFixed(2);
    document.getElementById("Ganancias").innerHTML = Ganancia.toFixed(2);
}
var boton = document.getElementById("unBoton");
boton.addEventListener("click", validarFormulario);
  
