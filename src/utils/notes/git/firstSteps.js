export const GIT_FIRST_STEPS_MD = `
# First steps

## Install and check version
    sudo apt-get install git
    git --version

## Set username and email
    git config --global user.name "Username"
    git config --global user.email "user@mail.com"

## Start repository and commit changes
    git init 
    git add .
    git commit -m "first commit"

## Add remote and push code
    git remote add origin url-repo
    git push origin branch-name
`;