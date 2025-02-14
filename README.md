# React + TypeScript + Vite
## How to run
- In the root of the repository are the automations and SubitoTest folders.
- The former contains scripts to automate the whole process of installing dependencies, building the project, creating the docker images and starting the relevant container; while the latter contains the project.
- From within the automations folder, run the bash command:
```bash
    sh _build.sh
```
- This script will run all automations and start the container at port 9090

## Technology Stack
- React + TypeScript
- Vite as build tool
- Eslint for static code analysis
- Jest for unit test
- Cypress for e2e test
- SonarCloud for clean code analysis
- Docker
