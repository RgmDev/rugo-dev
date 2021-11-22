import { HEROKU_GET_STARTED_MD } from "./heroku/getStarted";
import { REACT_GET_STARTED_MD } from "./react/getStarted";
import { MARKDOWN_TEMPLATE_MD } from "./markdown/template";
import { GIT_WORKFLOW_MD } from "./git/workflow";
import { GIT_FIRST_STEPS_MD } from "./git/firstSteps";
import { GIT_BRANCH_COMMANDS_MD } from "./git/branchCommands";
import { GITHUB_DEPLOY_REACT_S3_MD } from './github/deployReactAppOnAws';

import { SiHeroku, SiReact, SiGit, SiGithub } from 'react-icons/si';
import { GoMarkdown } from 'react-icons/go';


let git = [
    {content: GIT_WORKFLOW_MD, title: 'Workflow'},
    {content: GIT_FIRST_STEPS_MD, title: 'First steps'},
    {content: GIT_BRANCH_COMMANDS_MD, title: 'Branch commands'},
];

let github = [
    {content: GITHUB_DEPLOY_REACT_S3_MD, title: 'Deploy a React app on S3 bucket'},
];

let heroku = [
    {content: HEROKU_GET_STARTED_MD, title: 'Get started'},
];

let react = [
    {content: REACT_GET_STARTED_MD, title: 'Get started'},
];

let markdown = [
    {content: MARKDOWN_TEMPLATE_MD, title: 'Markdown template'},
];

export let notes = [ 
    {notes: git, text: 'Git', icon: <SiGit />, value: 'git'},
    {notes: github, text: 'Github', icon: <SiGithub />, value: 'github'},
    {notes: heroku, text: 'Heroku', icon: <SiHeroku />, value: 'heroku'},
    {notes: react, text: 'React', icon: <SiReact />, value: 'react'},
    {notes: markdown, text: 'Markdown', icon: <GoMarkdown />, value: 'react'},
];