// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license) {
  return `![${license}](https://img.shields.io/badge/License-${license}-blue)`
}
 return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license}](https://opensource.org/license/${license})`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
This Project is Licensed Under There ${renderLicenseLink(license)} License.

For more information on this license, please visit the link above.
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}


## How to Contribute

${data.contributing}

## Tests

${data.test}

## Contact

Contact me at ${data.email}
My GitHub [GitHub Profile](https://github.com/${data.github})

`;
}

export default generateMarkdown;
