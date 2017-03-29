//---- Función Init ----
function init(){
    initMap();
    createOptions();
    createVehiculos();
}
//---- Función del mapa ----
function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.43784391048617, lng: -70.65047959999998},
        zoom: 10
  });
}
//---- Dibujo de opciones ----
function createOptions(){
    var ciudades = get_regiones();
    var lista = $("select");
    for(var i in ciudades){
        var html= '<option value="' + ciudades[i].distance + '">' + ciudades[i].name +  '</option>'
         
        lista.append(html); 
    }
}
//---- Dibujo de opciones ----
function createVehiculos(){
    var lista = $(".carros");
    for(var i in vehiculos){
        var html= 
        '<li>' +
        '<input name="radio" type="radio">' +
        '<img src="' + vehiculos[i].srcImg + '" width="50px;" class="img-responsive" alt=""><p>' +        vehiculos[i].name + '<br><small>Máximo<small class="maximo">' + vehiculos[i].max + '</small> Pasajeros</small></p><span class="consumo">' + vehiculos[i].consumo + '</li>'
        
        lista.append(html); 
    }
    $("li").click(theclick);
} 
//-- Funcion para obtener el valor de origen:
function validateOrigen(){
    var origen = $(".origen").val();
    localStorage.setItem("origin", origen);
    if(origen != 0)
        return origen;
}
//-- Funcion para obtener el valor de destino:
function validateDestino(){
    var destino = $(".destino").val();
    localStorage.setItem("dest", destino);
    if(destino != 0)
        return destino;
}
//--Funcion para validar el boton:
function validToo(){
    if (validateOrigen()!=validateDestino()){
        onClickInicio();
    }
}
$(".submit").click(validToo);
//-------- Para hacer y el siguiente cuadro ------
function onClickInicio(){
    $("#info").show();
}
//------ Función para hacer click en las opciones ----
function theclick(){
    $(".total").remove();
    var consumo = $(this).find('.consumo').text();
    localStorage.setItem("consum", consumo);
    var personas = $(this).find('.maximo').text();
    localStorage.setItem("person", personas);
    calculo();
}
//---- Se obtinen datos guardados ---
$(".pasajeros").keyup(function(){
        this.value = (this.value + '').replace(/[^1-9]/g,"");
});
//------ Resultado Cálculo del costo total ----
function calculo(){
    var origen = localStorage.getItem("origin");
    var destino = localStorage.getItem("dest");
    var consumo = localStorage.getItem("consum");
    var costoTotal = (origen - destino)*consumo;
    $("li").append("<span class='total'>Precio Total: <small class='costoTotal'>"+ costoTotal + "</small></span>");
    var costoGeneral = $("li").find('.costoTotal').text();
    localStorage.setItem("general", costoGeneral);
}