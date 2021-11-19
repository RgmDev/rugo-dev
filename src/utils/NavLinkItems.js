import { FaBookDead } from 'react-icons/fa';
import { GiBonsaiTree, GiBubblingFlask, GiCeremonialMask  } from 'react-icons/gi';
import { GoMailRead } from 'react-icons/go';

export const NavLinkItems = [
    {text: 'Notebook', url: '/notebook', icon: <FaBookDead />, delay: 3000},
    {text: 'Portfolio', url: '/portfolio', icon: <GiBubblingFlask />, delay: 3300},
    {text: 'About Me', url: '/about-me', icon: <GiBonsaiTree />, delay: 3600},
    {text: 'Contact', url: '/contact', icon: <GoMailRead />, delay: 3900},
  ];