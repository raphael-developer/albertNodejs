import inquirer from "inquirer";
import chalk from "chalk";

const iniciar = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "texto",
        message: "Olá qual o seu nome?",
      },
    ])
    .then(resposta => {
      const { texto } = resposta;
      console.log(analisarResposta(texto));
    });
};

const analisarResposta = (resposta) => {
  return resposta;
}

iniciar();
