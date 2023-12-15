const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: function (value) {
      if (value === "") {
        return console.log("Input cannot be empty");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project. (Required)",
    validate: function (value) {
      if (value === "") {
        return console.log("Input cannot be empty");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "images",
    message: "Enter image URLs for your project (leave blank if none): ",
  },
  {
    type: "input",
    name: "installation",
    message: "How can you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "How do you use this application? Provide examples and screenshots if possible.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPL v3", "Apache License 2.0", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: `If applicable, provide guidelines on how to contribute to the project.`,
  },
  {
    type: "input",
    name: "tests",
    message: `How do you run tests on your project?`,
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username (Required)",
    validate: function (value) {
      if (value === "") {
        return console.log("Input cannot be empty");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Enter your email address (Required)",
    validate: function (value) {
      if (value === "") {
        return console.log("Input cannot be empty");
      } else {
        return true;
      }
    },
  },
];

// Define function to write data to file
function writeToFile(fileName, data) {
  // Write data to file synchronously
  fs.writeFileSync(fileName, data);
}

// initialize function
function init() {
  // prompt user for responses
  inquirer.prompt(questions).then((responses) => {
    // generate markdown from responses
    const markdown = generateMarkdown(responses);
    // write markdown to README.md file
    writeToFile("README.md", markdownContent);
    // log success message
    console.log("README.md has been successfully generated!");
  });
}

init();
