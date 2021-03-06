
export const GITHUB_DEPLOY_REACT_S3_MD = `
# Deploy a React app on S3 Bucket

## Create a React app
Link

## Create a S3 Bucket 
Link

## Create IAM user
Link

## Set Github Action
On the GitHub repository, click on the Actions tab -> Set up a workflow yorself
Edit the file .yml with your configuration and commit changes

    # This is a basic workflow to help you get started with Actions
    name: workFlowName
    
    # Controls when the workflow will run
    on:
      # Triggers the workflow on push or pull request events but only for the master branch
      push:
        branches: [ master ]
      pull_request:
        branches: [ master ]
    
      # Allows you to run this workflow manually from the Actions tab
      workflow_dispatch:
    
    # A workflow run is made up of one or more jobs that can run sequentially or in parallel
    jobs:
      # This workflow contains a single job called "build"
      build:
        # The type of runner that the job will run on
        runs-on: ubuntu-latest
    
        strategy:      
          matrix:        
            node-version: [14.15.0]
    
        # Steps represent a sequence of tasks that will be executed as part of the job
        steps:
          # Use the node version specified in the strategy    
          - name: Use Node.js $\{{ matrix.node-version }\}      
            uses: actions/setup-node@v1      
            with:        
              node-version: $\{{ matrix.node-version }\}
    
          # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
          - name: Git checkout
            uses: actions/checkout@v2
    
          # Install packages
          - name: Install packages
            run: |
              yarn install
    
          # Build an optimized production build
          - name: Production build      
            run: |        
              unset CI
              yarn build
    
          # Deploy to the S3 server
          - name: Deploy to S3
            uses: jakejarvis/s3-sync-action@master
            with:
              args: --acl public-read --delete
            env:
              AWS_S3_BUCKET: $\{{ secrets.AWS_PRODUCTION_BUCKET_NAME }\}
              AWS_ACCESS_KEY_ID: $\{{ secrets.AWS_ACCESS_KEY_ID }\}
              AWS_SECRET_ACCESS_KEY: $\{{ secrets.AWS_SECRET_ACCESS_KEY }\}
              AWS_REGION: $\{{ secrets.AWS_REGION }\}
              SOURCE_DIR: "build"

## Configure secrets
On the GitHub repository, click on the Settings tab -> Secrets

| Secret name  | Value  |
|---|---|
| AWS_PRODUCTION_BUCKET_NAME | Name of S3 bucket |
| AWS_ACCESS_KEY_ID | IAM user access key |
| AWS_SECRET_ACCESS_KEY | IAM user secret key |
| AWS_REGION | Region of S3 bucket |


`;

