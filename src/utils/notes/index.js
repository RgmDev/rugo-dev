import { HEROKU_GET_STARTED_MD } from "./heroku/getStarted";
import { REACT_GET_STARTED_MD } from "./react/getStarted";
import { MARKDOWN_TEMPLATE_MD } from "./markdown/template";
import { GIT_BRANCH_COMMANDS_MD } from "./git/branchCommands";

import { SiHeroku, SiReact, SiAmazonaws, SiGit } from 'react-icons/si';
import { GoMarkdown } from 'react-icons/go';

let aws = [
    {content: MARKDOWN_TEMPLATE_MD, title: 'Delete from aws'}
];

let git = [
    {content: GIT_BRANCH_COMMANDS_MD, title: 'Branch commands'}
];

let heroku = [
    {content: HEROKU_GET_STARTED_MD, title: 'Get started'},
];

let react = [
    {content: REACT_GET_STARTED_MD, title: 'Get started'}
];

let markdown = [
    {content: MARKDOWN_TEMPLATE_MD, title: 'Markdown template'}
];

export let notes = [ 
    {notes: aws, text: 'Amazon Web Services', icon: <SiAmazonaws />, value: 'aws'},
    {notes: git, text: 'Git', icon: <SiGit />, value: 'git'},
    {notes: heroku, text: 'Heroku', icon: <SiHeroku />, value: 'heroku'},
    {notes: react, text: 'React', icon: <SiReact />, value: 'react'},
    {notes: markdown, text: 'Markdown', icon: <GoMarkdown />, value: 'react'},
];