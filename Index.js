
//Projeto dedesenvolvimento do professor Felipe Aguiar.
//Segundo desafio de logica.
//Criar funcao que recebe numero de vitorias e derrotas de um jogador, retornando o saldo e seu rank.

// constante da expressao.
const frase = "O herói tem saldo de: "
const rank = "Parabéns você está no rank "


// se inserido valor que resultado  de vitorias resultem valor <= 0 a zero cond. if/else(vitorias , derrotas)
let resultado = saldo(1, 1)


 function saldo (vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}
// laco de repiticao, caso valor (+=) seja maior que (<=) cond. if
for (vitorias = resultado; resultado <= 110; resultado += 55)

//adicionar verificador caso o numero de vitorias seja menor ou igual ao numero de derrotas
if (resultado <= 0){
    
    console.log("Que Pena!!! Você ainda não possui um valor de vitótias acima ao de derrotas, NÃO DESSISTA, continue treinando até ter mais vitórias que derrotas."  )

}else{
        console.log("Muito Bem!!!")


    //estrutura de desicao de acordo com o numero de vitorias.
    if (resultado <= 10 ){
        console.log(frase + resultado + " Vitórias. " + rank + "FERRO. ")
    }else if (resultado <= 20){
        console.log(frase + resultado + " Vitórias. " + rank + "BRONZE. ")
    }else if (resultado <= 50){
        console.log(frase + resultado + " Vitórias. " + rank + "PRATA. ")
    }else if (resultado <= 80){
        console.log(frase + resultado + " Vitórias. " + rank + "OURO. ")
    }else if (resultado <= 90){
        console.log(frase + resultado + " Vitórias. " + rank + "DIAMANTE. ")
    }else if (resultado <= 100){ 
        console.log(frase + resultado + " Vitórias. " + rank + "LENDÁRIO. ")
    }else{
        console.log(frase + resultado + " Vitórias. " + rank + "IMORTAL. ")
    }
}
