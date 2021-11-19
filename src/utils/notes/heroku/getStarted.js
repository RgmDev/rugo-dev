export const HEROKU_GET_STARTED_MD = `
# Get started commands

## Install and check version
    npm install -g heroku
    heroku --version

## Login
    heroku login // browser
    heroku login -i // user and password y un texto de parrafada


## Create heroku repository and push project
    heroku create
    heroku git:remote -a my-app-name
    git add .
    git commit -m "First Commit"
    git push heroku master

## Open app
    heroku open
`;