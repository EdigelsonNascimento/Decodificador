// Setar Elementos do HTMl //
let msgText = document.getElementById("caixamsg")
let result = document.getElementById("caixamsg2")
let oncod = document.getElementById("botao1")
let offcod = document.getElementById("botao2")
let oncopy = document.getElementById("copiar")
let onlimpar = document.getElementById("limpar")
// Função Criptografar //
 function cript() { 
    let textCript=msgText.value
    let retirarAcentos=textCript.normalize("NFD")
    let resultText=retirarAcentos.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat") 
      result.value=resultText
 }
 // Função Descriptografar //
 function descript() { 
   let textCript=result.value
   let descript=textCript.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u")
      result.value=descript
 } 
 // Função Descriptografar Direto //
 function descriptodireto() { 
    let textCript=msgText.value
    let retirarAcentos=textCript.normalize("NFD")
    let resultText=retirarAcentos.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u")
      result.value=resultText
 }
 // Função Cópia //
 function onCopy() { 
   textCopy=result
   textCopy.select()
   document.execCommand("copy")
      alert("Copiado :)") 
 }
 // Função Limpar //
   function onLimpar() { 
   textLimpo=result
   textLimpo.select()
   document.execCommand("delete")
   textLimpo=msgText
   textLimpo.select()
   document.execCommand("delete")
      alert("Caixa de texto Limpa :)")
 }
 // ONCLICk //
 oncod.onclick=cript
 offcod.onclick=descript
 offcod.onclick=descriptodireto
 oncopy.onclick=onCopy
 onlimpar.onclick=onLimpar