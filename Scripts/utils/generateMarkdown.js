function generateMarkdown(data) {
  const imageSection = data.images
    ? `## Images\n${data.images
        .split(",")
        .map((url) => `![Image](${url.trim()})`)
        .join("\n")}\n`
    : "";

  return `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${imageSection}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License Badge](https://img.shields.io/badge/License-${data.license}-brightgreen)

This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
