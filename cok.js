function acaoBotao() {
   
    var  resultado, valor01, valor02, valor03;
    valor01 = prompt(" Digite seu primeiro número: ")
    valor02 = prompt(" Digite seu segundo valor:" )
    valor03 = 2

    resultado = (parseInt(valor01) + parseInt(valor02) + parseInt(valor03)) / 3
        alert ("Resultado: " + resultado) 
    
 
    {
        document.getElementById("paragrafo").innerText = resultado
}    
}
