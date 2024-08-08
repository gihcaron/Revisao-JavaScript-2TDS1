
// Atividade 3 ----------------------

let idadeMinima = 7;

let idadeMaxima = 100;

let idadeFund1 = 10;

let idadeFund2 = 11;

let idadeMédio =  15;

let idadeAluno = 6;

if(idadeAluno >= idadeMinima && idadeAluno < idadeFund2) {
   console.log ("Matrícula realizada na Turma Kids com sucesso!🎸✨")
}

else if (idadeAluno >= idadeMinima && idadeAluno < idadeMédio) {
   console.log ("Matrícula realizada na Turma Juvenil com sucesso! Bons estudos! 🥁🌟")


} else if (idadeAluno >= idadeMinima && idadeAluno <= idadeMaxima  ) {
    console.log("Matrícula realizada na Turma Adulto com sucesso! Bons estudos! 🎹🎧 ")

}else {
   console.log("Desculpe, o aluno não se encontra em nenhuma categoria disponível!😐")}