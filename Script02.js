// Exercício 2 ------------------------

let quantidadeIngresso = 12;

let batatinhasPromo = 0;

let nome = "Helena";

for (let i = 1; i <= quantidadeIngresso; i++) {
    // Para, cada i igual a 1 e i for menor/igual que a quantidade de ingresso, adicione/incremente +1 no i  
    if ( i % 3 === 0){
        // i é maior que 1 e divisível por 3
        // === - Faz 3 verificações - preferível o === quando for fazer verificações no JS
        batatinhasPromo++;
    }
} 
    if (batatinhasPromo === 1) {
        console.log ("Olá, " + (nome)  + "! Você ganhou " +  (batatinhasPromo) + " batata grátis! Bom apetite e divertimento. Volte sempre 🍟")
   }
        
       else { 
           console.log ("Olá, " + (nome)  + "! Você ganhou " +  (batatinhasPromo) + " batatas grátis! Bom apetite e divertimento. Volte sempre 🍟")
        }