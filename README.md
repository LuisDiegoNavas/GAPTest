# GAPTest
Automation Test with Webdriver.IO and ES6

Preinstall:
Node: https://nodejs.org/en/
Chrome: 81
VS Code: https://code.visualstudio.com/
    Install the next extensions:
    EsLint
    Cucumber (Gherkin) Full Support
    VSCode Icons Team

Setup project:
1. Download the repository
2. run npm install
2. Add a .env file in the root
3. Added the user and password in the .env file

Run the project:

Go Terminal and execute
Run all the features
    npm run tests:login --  --spec "./test/specs/features/*.feature"
Run only the feature selected
    npm run tests:login --  --spec "./test/specs/features/Login.feature"
Run only test cases with tag on test plan
    npm run tests:login --  --spec "./test/specs/features/Login.feature"  --cucumberOpts.tagExpression "@Test"
