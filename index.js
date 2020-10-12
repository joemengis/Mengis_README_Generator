const fs = require("fs");
const inquirer = require("inquirer");

console.log(
  "To create a ReadMe, jsut answer the questions as best as you can."
);

const questions = [
  {
    type: "input",
    name: "user",
    message: "Enter your full name: ",
  },
  {
    type: "input",
    name: "userEmail",
    message: "Enter your email address: ",
  },
  {
    type: "input",
    name: "projectTitle",
    message: "Enter the project title: ",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter a project description: ",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ",
  },
  {
    type: "input",
    name: "usage",
    message: "What will this project be used for? Provide instructions and examples for use. Include screenshots as needed. ",
  },
  {
    type: 'input',
    name: 'authors',
    message: 'Who contributed to this project? List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.  If you followed tutorials, include links to those here as well. ',
  },
  {
    type: "input",
    name: "screenshot",
    message:
      "(Optional) Please provide the file path to a screenshot of your project. Press Enter to skip if you do not have one. Can be added later.",
  },
  {
    type: "list",
    name: "license",
    message: "Enter the license type: ",
    choices: ["Apache", "MIT", "GPL", "BSD", "None"],
  },
  {
    type: "number",
    name: "year",
    message: "What year would you like to use for this license? ",
    when: function (answers) {
      return answers.license !== "None";
    },
  },
  {
    type: "input",
    name: "Contributing",
    message:
      "What does the user need to know about contributing to this application: ",
  },
  {
    type: "confirm",
    name: "tests",
    message: "Does this project have a test script? ",
  },
  {
    type: "input",
    name: "githubUserName",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "gitHubEmail",
    message: "Enter your Github email here: ",
  },
  {
    type: "input",
    name: "gitHubProfilePicture",
    message: "Enter the URL for your Github profile picture here: ",
  },
  {
    type: "input",
    name: "badgeLabel",
    message: "Time to create a badge! What do you want your badge label to be?",
  },
  {
    type: "input",
    name: "badgeMessage",
    message: "What do you want your badge message to be?",
  },
  {
    type: "input",
    name: "badgeColor",
    message: "What do you want your badge color to be?",
    default: "blue",
  },
  {
    type: "list",
    name: "badgeStyle",
    message: "What style do you want your badge to be?",
    choices: ["plastic", "flat", "flat-square", "for-the-badge", "social"],
  },
  {
    type: "confirm",
    name: "confirmBadgeLogo",
    message: "Do you want your badge to have a logo?",
  },
  {
    type: "input",
    name: "badgeLogo",
    message:
      "Please type in your badge logo name. Use simpleicons.org as a reference.",
    default: "GitHub",
    when: function (answers) {
      return answers.confirmBadgeLogo === true;
    },
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.license === "Apache") {
      answers.license = `Apache Copyright ${answers.year} ${answers.user}

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
            
                http://www.apache.org/licenses/LICENSE-2.0
            
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`;
    }
    if (answers.license === "MIT") {
      answers.license = `MIT License Copyright (c) ${answers.year} ${answers.user}
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`;
    }
    if (answers.license === "GPL") {
      answers.license = `GPL License Copyright (c) ${answers.year} ${answers.user}

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.
        
        This program comes with ABSOLUTELY NO WARRANTY; for details type ``show w'.
        This is free software, and you are welcome to redistribute it
        under certain conditions; type ``show c' for details.`;
    }
    if (answers.license === "BSD") {
      answers.license = `BSD License Copyright (c) ${answers.year} ${answers.user}
  
        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

        1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    }
    if (answers.license === "None") {
      answers.license = "";
    }

    let tableOfContentsTests = "";
    if (answers.testConfirm === true) {
      answers.testConfirm =
        `## Tests \n\n` +
        `To run tests: \n 
            \`\`\` 
            npm test 
            \`\`\` \n\n`;
      tableOfContentsTests = ` * [Tests](#tests)\n\n`;
    } else {
      answers.testConfirm = "";
    }

    const badgeURL = `https://img.shields.io/badge/${encodeURIComponent(
      answers.badgeLabel
    )}-${encodeURIComponent(answers.badgeMessage)}-${
      answers.badgeColor
    }?style=${answers.badgeStyle}&logo=${encodeURIComponent(
      answers.badgeLogo
    )}`;
    
    const buildReadMe =
      `# ${answers.projectTitle}\n\n` +
      `## Description\n\n` +
      `${answers.projectDescription}\n\n` +
      `## Table of Contents\n\n` +
      ` * [Installation](#installation)\n\n` +
      ` * [Usage](#usage)\n\n` +
      ` * [Screenshots](#screenshots)\n\n` +
      `${tableOfContentsTests}` +
      ` * [Authors](#Authors)\n\n` +
      ` * [License](#license)\n\n` +
      ` * [Badges](#badges)\n\n` +
      `## Installation\n\n` +
      `${answers.installation}\n\n` +
      `## Usage\n\n` +
      `${answers.usage} \n\n` +
      `## Screenshots\n\n` +
      `![image](${answers.screenshot})\n\n` +
      `${answers.testConfirm}` +
      `## Authors\n\n` +
      `${answers.authors}\n\n` +
      `## License\n\n` +
      `${answers.license}\n\n` +
      `## Badges\n\n` +
      `![badgeLogo](${badgeURL})\n\n` +
      `## Questions\n\n` +
      `If you have any questions about the repo, open an issue or contact me directly at ${answers.userEmail}. You can find more of my work at [${answers.githubUserName}](https://github.com/${answers.githubUserName}/)`;

    fs.writeFile("NEW_README.md", buildReadMe, function (error) {
      return console.log("Error in write file is: ", error);
    });

    console.log(answers);
  });
}

init();
