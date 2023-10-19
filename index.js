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
    .then(answer => {
      console.log(answer);
    });
};

iniciar();
