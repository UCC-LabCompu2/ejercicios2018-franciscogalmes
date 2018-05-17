/**
 * Created by Agus on 6/5/2017.
 */

/**
 * conversion de unidades metro,pulgada,pie y yarda
 * @method conversordeunidades
 * @param valor_unidad
 * @param nombre_unidad
 * @return vacio
 */

function evaluarValor(valor, id_elemento){
    if(isNaN(valor))
    {
        alert("El valor no es numerico");
        document.getElementById(id_elemento).value="";
        valor=valor.replace(",",".");
    }
}

function mostrarocultar(opcion) {
    if (opcion=='mostrarDiv')
    {
        document.getElementsByName("unDiv")[0].style.display='block';
    }
    if (opcion=='ocultarDiv')
    {
        document.getElementsByName("unDiv")[0].style.display='none';
    }
}


function conversordeunidades(nombre_unidad, valor_unidad){
    var metro, pie, pulgada, yarda;
    valor_unidad=valor_unidad.replace(",",".");
    if(nombre_unidad =='metro')
        {
            metro=valor_unidad;
            pie=valor_unidad*3.28084;
            yarda=valor_unidad*1.09361;
            pulgada=valor_unidad*39.3701;

        }
        if(nombre_unidad=='pie')
        {
            pie=valor_unidad;
            metro=valor_unidad/3.28084;
            yarda=metro*1.09361;
            pulgada=metro*39.37;

        }
        if(nombre_unidad=='pulgada')
        {
            pulgada=valor_unidad;
            metro=valor_unidad/39.37;
            yarda=metro*1.09361;
            pie=metro*3.2804;
        }
        if(nombre_unidad=='yarda')
        {
            yarda=valor_unidad;
            metro=valor_unidad/1.09361;
            pie=metro*3.28084;
            pulgada=metro*39.3701;
        }
    if(isNaN(valor_unidad)){
        alert("El valor ingresado "+ nombre_unidad + " es invalido");
        metro="";
        pie="";
        pulgada="";
        yarda="";
    }
        document.getElementById(pulgada).value=pulgada;
        document.getElementById(yarda).value=yarda;
        document.getElementById(pie).value=pie;
        document.getElementById(metro).value=metro;
    }




