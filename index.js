import inquirer from "inquirer";
import chalk from "chalk";

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
        movimentarAlbert();
        break;
      case 2:
        calcularComAlbert();
        break;
      case 3:
        conversarComAlbert();
        break;
      case 4:
        console.log(chalk.bgBlue.white("Obrigado por conversar comigo🤖"));
        process.exit();
      default:
        console.log("Tarefa invalida");
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

qualTarefaRealizar();
