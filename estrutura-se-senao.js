
    
function acaoBotao() {
    var valor01, valor02, operacao, resultado
    valor01 = prompt ("primeiro valor:")
    operacao = prompt ("operação:")
    valor02 = prompt ("segundo valor:")

    if(operacao == "+") {
        resultado = parseInt( valor01 ) + parseInt( valor02 )
    }else if(operacao == "-"){
        resultado = parseInt( valor01 ) - parseInt( valor02 ) 
    }else if (operacao == "*"){
        resultado = parseInt( valor01 ) * parseInt( valor02 )
    }else if (operacao == "/" ){
        resultado = parseInt( valor01 ) / parseInt( valor02 )
    }
    
    document.getElementById("paragrafo").innerText = resultado
}    