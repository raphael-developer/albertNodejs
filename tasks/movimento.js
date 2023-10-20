import inquirer from "inquirer";
import chalk from "chalk";

export const ativarMovimento = async () => {
  const movimentar = async () => {
    try {
      const answers = await promptMovimentar();

      const { teclas } = answers;

      const movements = {
        w: moverParaCima,
        s: moverParaBaixo,
        a: moverParaEsquerda,
        d: moverParaDireita,
      };

      if (movements.hasOwnProperty(teclas)) {
        movements[teclas]();
      } else {
        console.log("Tecla inválida. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const promptMovimentar = () => {
    return inquirer.prompt([
      {
        type: "list",
        name: "teclas",
        message: "Qual tecla deseja apertar?",
        choices: [
          {
            value: "w", // Codigo para a tecla W
            name: chalk.rgb(152, 3, 252)("⬆️ Cima"),
          },
          {
            value: "s", // Codigo para a tecla S
            name: chalk.rgb(3, 206, 252)("⬇️ Baixo"),
          },
          {
            value: "a", // Codigo para a tecla A
            name: chalk.rgb(107, 252, 3)("⬅️ Esquerda"),
          },
          {
            value: "d", // Codigo para a tecla D
            name: chalk.rgb(252, 3, 111)("➡️ Direita"),
          },
        ],
        validate: input => {
          if (
            input === "w" ||
            input === "s" ||
            input === "a" ||
            input === "d"
          ) {
            return true;
          } else {
            return "Tecla inválida. Tente novamente.";
          }
        },
      },
    ]);
  };

  function moverParaCima() {
    console.log("Albert se moveu para cima!");
  }

  function moverParaBaixo() {
    console.log("Albert se moveu para baixo!");
  }

  function moverParaEsquerda() {
    console.log("Albert se moveu para esquerda!");
  }

  function moverParaDireita() {
    console.log("Albert se moveu para direita!");
  }

  movimentar();
};
