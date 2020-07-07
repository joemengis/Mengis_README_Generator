function generateMarkdown(data) {
  return `
# ${data.name}

## Description
${data.description}

## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)

## Installation
\`\`\`bash
${data.installation}
\`\`\`

## Usage
${data.}

`;
}

module.exports = generateMarkdown;
