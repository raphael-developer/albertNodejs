import inquirer from "inquirer";
import chalk from "chalk";
import { ativarCalculo } from "./tasks/calculo.js";
import { ativarConversa } from "./tasks/conversa.js";
import { ativarMovimento } from "./tasks/movimento.js";

const qualTarefaRealizar = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "tarefa",
        message: "Qual tarefa deseja realizar?",
        choices: [
          {
            name: "Movimentar Albert",
            value: 1,
          },
          {
            name: "Calcular com Albert",
            value: 2,
          },
          {
            name: "Conversar com Albert",
            value: 3,
          },
          {
            name: "Sair",
            value: 4,
          },
        ],
      },
    ]);

    const { tarefa } = answers;
    switch (tarefa) {
      case 1:
        await ativarMovimento();
        break;
      case 2:
        await ativarCalculo();
        break;
      case 3:
        await ativarConversa();
        break;
      case 4:
        console.log(chalk.bgBlue.white("Obrigado por conversar comigo🤖"));
        process.exit();
      default:
        console.log("Tarefa inválida");
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

qualTarefaRealizar();
