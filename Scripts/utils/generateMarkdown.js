function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Table of content: 
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
    ${data.instalation}

    ## Usage
    ${data.usage}

    ## License
    ![License Badge](https://img.shields.io/badge/License-${data.license}-brightgreen)

    This project is licensed under the ${data.license} license.

    ## Contributing 
    ${data.contribution}

    ## Test 
    ${data.tests}

    ## Questions 
    If you have any questions, feel free to contact me:
    - GitHub: [${data.github}](https://github.com/${data.github})
    - Email: ${data.email}
    `;
}

module.exports = generateMarkdown;
