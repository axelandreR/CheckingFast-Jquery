'use strict'

window.addEventListener('load', function(){
    let formulario = document.querySelector('#form');
    let principal = document.getElementsByClassName("principal-caja");

    let resultado = document.querySelector('#resultados');
    resultado.style.display= "none";
    // Ocultar avisos de error
    let aviso_error = document.getElementsByClassName("avisoError");
    let aviso_error_Billetes = document.getElementsByClassName("avisoErrorBilletes");

    for(let i=0;i<aviso_error.length;i++){
        aviso_error[i].style.display= "none";          
    }
    for(let j=0;j<aviso_error_Billetes.length;j++){
        aviso_error_Billetes[j].style.display= "none";
    }

    let altura = screen.height;
    console.log(altura , typeof(altura));

    if(altura >= 823){
        principal.offsetHeight = "75vh";
    }
    // Suma de Monedas y Billetes

    function sumaElementos(array){
        let suma = 0;
        for(let i=0; i<array.length;i++){
            suma = suma + (Number(array[i].value));
        }
        return suma;
    }; 

    function validacionMonedas(elemento){
        for(let i=0;i<elemento.length;i++){
            let contenido = elemento[i].value;
            console.log(contenido);
            if(i == 0){
                if(Number(contenido) % 1 != 0){
                    aviso_error[i].style.display="block";
                    elemento[i].value = " ";
                    return true;
                }else{
                    aviso_error[i].style.display="none";
                }
            }else if(i ==1){
                if(Number(contenido) % 2 != 0){
                    aviso_error[i].style.display="block";
                    elemento[i].value = " ";
                    return true;
                }else{
                    aviso_error[i].style.display="none";
                }
            }else if(i == 2){
                if(Number(contenido) % 5 != 0){
                    aviso_error[i].style.display="block";
                    elemento[i].value = " ";
                    return true;
                }else{
                    aviso_error[i].style.display="none";
                }
            }else if(i == 3){
                if((Number(contenido)*10) % 5 != 0){
                    aviso_error[i].style.display="block";
                    elemento[i].value = " ";
                    return true;
                }else{
                    aviso_error[i].style.display="none";
                }
            }else if(i == 4){
                if((Number(contenido)*10) % 2 != 0){
                    aviso_error[i].style.display="block";
                    elemento[i].value = " ";
                    return true;
                }else{
                    aviso_error[i].style.display="none";
                }
            }else if(i == 5){
                if((Number(contenido)*10) % 1 != 0){
                    aviso_error[i].style.display="block";
                    elemento[i].value = " ";
                    return true;
                }else{
                    aviso_error[i].style.display="none";
                }
            }else{
                return false;
            }
        }
    }

    function validacionBilletes(elemento2){
        for(let i=0;i<elemento2.length;i++){
            let contenido = elemento2[i].value;
            console.log(contenido);
            if(i == 0){
                if(Number(contenido) % 10 != 0){
                    aviso_error_Billetes[i].style.display="block";
                    elemento2[i].value = " ";
                    return true;
                }else{
                    aviso_error_Billetes[i].style.display="none";
                }
            }else if(i == 1){
                if(Number(contenido) % 20 != 0){
                    aviso_error_Billetes[i].style.display="block";
                    elemento2[i].value = " ";
                    return true;
                }else{
                    aviso_error_Billetes[i].style.display="none";
                }
            }else if(i == 2){
                if(Number(contenido) % 50 != 0){
                    aviso_error_Billetes[i].style.display="block";
                    elemento2[i].value = " ";
                    return true;
                }else{
                    aviso_error_Billetes[i].style.display="none";
                }
            }else if(i == 3){
                if(Number(contenido) % 100 != 0){
                    aviso_error_Billetes[i].style.display="block";
                    elemento2[i].value = " ";
                    return true;
                }else{
                    aviso_error_Billetes[i].style.display="none";
                }
            }else{
                return false;
            }
        }
    }

    formulario.addEventListener('submit', function(){
        let fecha = new Date();
        let fecha_hoy = (fecha.getDate()+"/"+(fecha.getMonth() + 1)+"/"+(fecha.getFullYear()) );
        let monedas = document.getElementsByClassName('monedas');
        let evaluacion1 = validacionMonedas(monedas);
        let sumaMonedas = sumaElementos(monedas);

        let billetes = document.getElementsByClassName('billetes');
        let evaluacion2 = validacionBilletes(billetes);
        let sumaBilletes = sumaElementos(billetes);
        let total = sumaMonedas + sumaBilletes;

        resultado.style.display= "grid";
        
        let p_fecha = document.querySelector("#p_fecha span");
        let p_monedas = document.querySelector("#p_sumaMonedas span");
        let p_billetes = document.querySelector("#p_sumaBilletes span");
        let p_total = document.querySelector("#p_sumaTotal span");

        if(evaluacion1 == true || evaluacion2 == true){
            resultado.style.display = "none";
        }else{
            resultado.style.display = "grid";
            p_fecha.innerHTML = fecha_hoy;
            p_monedas.innerHTML = sumaMonedas;
            p_billetes.innerHTML = sumaBilletes;
            p_total.innerHTML = total;
        }        
    })
});