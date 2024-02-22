alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//condição chute nao for igual ao n.s
while (chute != numeroSecreto) { //!= é não igual
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}
//operadores tenarios para evitar muito if e else
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso ai! voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas > 1) {
//    alert (`Isso ai! voce descobriu o número secreto $//{numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert (`Isso ai! voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);