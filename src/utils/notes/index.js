import { HEROKU_GET_STARTED_MD } from "./heroku/getStarted";
import { REACT_GET_STARTED_MD } from "./react/getStarted";
import { MARKDOWN_TEMPLATE_MD } from "./markdown/template";

import { SiHeroku, SiReact } from 'react-icons/si';
import { GoMarkdown } from 'react-icons/go';


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
    {notes: heroku, text: 'Heroku', icon: <SiHeroku />, value: 'heroku'},
    {notes: react, text: 'React', icon: <SiReact />, value: 'react'},
    {notes: markdown, text: 'Markdown', icon: <GoMarkdown />, value: 'react'},
];