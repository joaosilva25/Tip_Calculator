let valor=document.querySelector(".bar_value")
let dinheiro=document.querySelector(".dinheiro")
let porcentagem=document.querySelector(".porc")
 
function calc() {
    let enter=dinheiro.value;
    let enter2=porcentagem.value;

    let res=parseFloat(enter);
    let res2=parseFloat(enter2);

    let resultado=res*(res2/100)


    let saida=document.querySelector(".tip")
    saida.innerHTML=`<p>R$${resultado}</p>`

    let valorfinal= enter-resultado
    let final=document.querySelector(".total")
    final.innerHTML=`<p>R$${valorfinal}</p>`
}
