// Import icon data
import { icon, icons } from './iconData'

// Array to use for nav links
export const links = [
  { title: 'About Me', path: '/', icon: icon(icons.faCircleInfo) },
  { title: 'Portfolio', path: '/portfolio', icon: icon(icons.faFolderOpen) },
  { title: 'Contact', path: '/contact', icon: icon(icons.faEnvelope) },
  { title: 'Resume', path: '/resume', icon: icon(icons.faFile) }
];