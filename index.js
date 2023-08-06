const fs = require('fs');
const inquirer = require('inquirer');
const generateSvg = require ('./lib/generateSVG')

const questions = [
  {
    type: "input",
    message: "Enter 3 characters for SVG Logo.",
    name: "logoCharacters",
  },
  {
    type: "input",
    message: "Choose text color (or hexadecimal).",
    name: "textColor",
  },
  {
    type: "list",
    message: "Choose shape: Circle, Triangle, Sqaure.",
    name: "shape",
    choices: ["Circle", "Triangle", "Sqaure"],
  },
  {
    type: "input",
    message: "Choose shape color (or enter hexadecimal).",
    name: "shapeColor",
  },
];

function init() {
  inquirer.prompt(questions).then(function (answers) {
    var svgAnswers = generateSvg(answers);
    fs.writeFileSync("generateLogo.svg", svgAnswers);
  });
}

// Function call to initialize app
init();
