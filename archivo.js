$(document).ready(function(){
    let valor = '';
    let operacion = '';
    let resultado = 0;

  
    $('.numero').click(function(){
        valor += $(this).text();
        $('#pantalla').val(valor);
    });


    $('.operador').click(function(){
        let operador = $(this).text();

        if(operador === '=') {
           
            resultado = eval(valor);
            $('#pantalla').val(resultado);
            valor = resultado; 
        } else {
    
            valor += operador;
            $('#pantalla').val(valor);
        }
    });
});
