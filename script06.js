let armas = ["Canhão", "Gelo Agachando", "Laminas de Nanocarbono", "Lança Chamas", "Pistola", "Arma de fogo", "Carabina"];

let ataques = [];

ataques.push("Beta");
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[5]);
ataques.push(armas[0]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`Nome do robô: ${ataques[i]}`);
        } else {
            console.log (`Nome do Robô: ${ataques[i]}`);
        }
} 