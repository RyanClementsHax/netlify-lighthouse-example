# netlify-lighthouse-example

- [netlify-lighthouse-example](#netlify-lighthouse-example)
  - [Setup](#setup)
  - [Developing](#developing)
    - [Debugging in VSCode](#debugging-in-vscode)
  - [Testing](#testing)
  - [I18n](#i18n)

## Setup

1. (Recommended) Use VSCode and install the recommended extensions
2. Run `yarn install` to install all of the dependencies

## Developing

Run `yarn dev` to start a dev server

Run `yarn format` to format the code

- If you have the recommended extensions set up to format on save, then you won't need to manually run this

### Debugging in VSCode

Run the `Debug next` launch configuration to debug the next server

Run the `Debug chrome` launch configuration to debug the website in chrome ([MUST close all other chrome tabs first!!](https://stackoverflow.com/a/55505708))

- Make sure you have the `Debugger for Chrome` extension installed

Run the `Debug next and chrome` launch configuration to launch both ([MUST close all other chrome tabs first!!](https://stackoverflow.com/a/55505708))

## Testing

Run `yarn test` to run the jest tests

Run `yarn lint` to run linting

Run `yarn type-check` to run type checking

Run `yarn test-all` to run all of the above checks

## I18n

[Recommended chrome extension](https://chrome.google.com/webstore/detail/locale-switcher/kngfjpghaokedippaapkfihdlmmlafcc?hl=en-US)
