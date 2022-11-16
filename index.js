// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project? (required)',
            validate: titleEntry => {
                if (titleEntry) {
                    return true;
                } else {
                    console.log('A title is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description (required)',
            validate: descriptionEntry => {
                if (descriptionEntry) {
                    return true;
                } else {
                    console.log('A description is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which license(s) apply? (Check all that apply)',
            choices: ['MIT','Apache','GPL','BSD','None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributor information:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter project tests'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username? (required)',
            validate: githubEntry => {
                if (githubEntry) {
                    return true;
                } else {
                    console.log('A Github username is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address? (required)',
            validate: emailEntry => {
                if (emailEntry) {
                    return true;
                } else {
                    console.log('An email address is required');
                    return false;
                }
            }
        }
        
    ]);

};

// TODO: Create a function to write README file
function writeFile(fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', fileContent, err => {
            if (err) {
                console.log(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    userPrompt()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
    
};

// Function call to initialize app
init();
