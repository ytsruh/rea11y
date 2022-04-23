# Rea11y

The accessibility testing and project management application.

## Notes

- Installing Pa11y & Puppeteer to Azure Functions throws an error if the build is done locally, must be run remote. A deploy NPM script has been added as well as .vscode/settings.json being updated " azureFunctions.scmDoBuildDuringDeployment: true " variable.
- Possible issue regarding SvelteKit build. Errors were inconsistently being throw with certain version of Svelte & adapter-static. Was originally fixed by downgrading packages to @sveltejs/adapter-static "1.0.0-next.26" & @sveltejs/kit 1.0.0-next.240.

## Change History

### 0.1.1

- Added Login & Register functionality
- Added Account Update functionality
- Added Test functionality

### 0.1.0

- Built basic website
- Built serverless function to run quick accessibility test
