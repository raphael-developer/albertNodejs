import inquirer from "inquirer";
import chalk from "chalk";

export const ativarCalculo = async () => {
  const operacao = async () => {
    try {
      const answers = await inquirer.prompt([
        {
          type: "input",
          name: "num1",
          message: "Qual o primeiro número?",
          validate: value => {
            const parsedNumber = parseFloat(value);
            return !isNaN(parsedNumber) || "Número inválido";
          },
        },
        {
          type: "input",
          name: "num2",
          message: "Qual o segundo número?",
          validate: value => {
            const parsedNumber = parseFloat(value);
            return !isNaN(parsedNumber) || "Número inválido";
          },
        },
        {
          type: "list",
          name: "operador",
          message: "Qual a operação?",
          choices: [
            {
              value: "+",
              name: chalk.green("Soma"),
            },
            {
              value: "-",
              name: chalk.red("Subtrair"),
            },
            {
              value: "*",
              name: chalk.blue("Multiplicar"),
            },
            {
              value: "/",
              name: chalk.yellow("Dividir"),
            },
          ],
        },
      ]);

      const { num1, num2, operador } = answers;
      const result = calculadora(parseFloat(num1), parseFloat(num2), operador);
      console.log("Resultado:", result);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  function calculadora(n1, n2, op) {
    switch (op) {
      case "+":
        return somar(n1, n2);
      case "-":
        return subtrair(n1, n2);
      case "*":
        return multiplicar(n1, n2);
      case "/":
        return dividir(n1, n2);
      default:
        return "Operação inválida";
    }
  }

  function somar(n1, n2) {
    return n1 + n2;
  }

  function subtrair(n1, n2) {
    return n1 - n2;
  }

  function multiplicar(n1, n2) {
    return n1 * n2;
  }

  function dividir(n1, n2) {
    return n1 / n2;
  }

  await operacao();
};
