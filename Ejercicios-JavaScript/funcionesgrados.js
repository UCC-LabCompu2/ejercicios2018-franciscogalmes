/**
 * Created by Alumno on 17/05/2018.
 */

function conversiongradosradianes (nombre_unidad, valor_unidad) {
    var varradianes, vargrados;
    if(nombre_unidad =='grados')
        {
            vargrados=valor_unidad;
            varradianes=Math.PI/180*valor_unidad;
        }
    if(nombre_unidad=='radianes')
    {
        varradianes=valor_unidad;
        vargrados=180/Math.PI*valor_unidad;
    }
    document.getElementsByTagName("input ")[0].value=varradianes;
    document.getElementsByTagName("input")[1].value=vargrados;
}
