// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badgeGenerator = (licenseArr) => {

    const badgeArr = licenseArr.map((license) => {
        if (license === 'MIT') {
            return `![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)`
        } else if (license === 'Apache') {
            return `![Apache License](https://img.shields.io/badge/license-Apache-blue.svg)`
        } else if (license === 'GPL') {
            return `![GPL License](https://img.shields.io/badge/license-GPL-blue.svg)`
        } else if (license === 'BSD') {
            return `![BSD License](https://img.shields.io/badge/license-BSD-blue.svg)`
        } else if (license === 'None') {
            return ``
        }
    });
    return badgeArr.join('');
};

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// function renderLicenseLink(license) {
// }

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

    const { title, description, installation, usage, licenses, contributing, tests, github, email } = data;

return `

# ${title}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${licenses.join(', ')}
${badgeGenerator(licenses)}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, please contact me at ${email} or visit my GitHub page at ${github}().

`;

}

module.exports = generateMarkdown;
