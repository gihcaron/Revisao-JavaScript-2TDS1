
let metaLivro = 10;

let livrosLidos = ["Astrid Parker Never Fails", "A Hora da Estrela", "Senhora", "Revolução dos Bichos", "A Biblioteca da Meia Noite", "7 Maridos de Evelyn Hugo", "Diário de Um Banana", "Rainha Vermelha"]


console.log("Confira só os seus livros lidos 🤯: ")
for (let i = 0; i < livrosLidos.length; i++) {           console.log(` 📘 | ${livrosLidos[i]}`);
   
} 

if (livrosLidos.length >= metaLivro) {
    console.log( "Parabéns! Você atingiu sua meta de leitura! 🤩🤗")

} else {
            console.log ( `Você está progredindo! Faltam ${metaLivro - livrosLidos.length} livros para atingir sua meta.`);
        } 
