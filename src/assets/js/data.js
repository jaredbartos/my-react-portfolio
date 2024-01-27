// Import images for projects
import techBlogScreenshot from '../images/screenshots/tech_blog_screenshot.png';
import jateScreenshot from '../images/screenshots/jate_screenshot.png';
import noteTakerScreenshot from '../images/screenshots/note_taker_screenshot.png';
import gameDexScreenshot from '../images/screenshots/gamedex_screenshot.png';
import weatherDashboardScreenshot from '../images/screenshots/weather_dashboard_screenshot.jpg';
import codeQuizScreenshot from '../images/screenshots/code_quiz_screenshot.jpg';

// Array to use for nav links
export const links = [
  { title: 'About Me', path: '/' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Contact', path: '/contact' },
  { title: 'Resume', path: '/resume' }
];

// Array to use for rendering projects on portfolio page
export const projects = [
  {
    title: 'The Tech Blog',
    image: techBlogScreenshot,
    deployedLink: 'https://whispering-headland-36327-fcf93ff6f15e.herokuapp.com/',
    githubLink: 'https://github.com/jaredbartos/tech-blog'
  },
  {
    title: 'J.A.T.E. Text Editor',
    image: jateScreenshot,
    deployedLink: 'https://text-editor-jaredbartos.onrender.com/',
    githubLink: 'https://github.com/jaredbartos/text-editor'
  },
  {
    title: 'Note Taker',
    image: noteTakerScreenshot,
    deployedLink: 'https://note-taker-jaredbartos.onrender.com/',
    githubLink: 'https://github.com/jaredbartos/note-taker'
  },
  {
    title: 'GameDex',
    image: gameDexScreenshot,
    deployedLink: 'https://gamedex-project.onrender.com/',
    githubLink: 'https://github.com/jaredbartos/gamedex'
  },
  {
    title: 'Weather Dashboard',
    image: weatherDashboardScreenshot,
    deployedLink: 'https://jaredbartos.github.io/weather-dashboard',
    githubLink: 'https://github.com/jaredbartos/weather-dashboard'
  },
  {
    title: 'Code Quiz',
    image: codeQuizScreenshot,
    deployedLink: 'https://jaredbartos.github.io/code-quiz',
    githubLink: 'https://github.com/jaredbartos/code-quiz'
  },
];

// Array of skills for resume page
export const skills = [
  {
    id: 1,
    name: 'HTML',
    category: 'Languages and Concepts'
  },
  {
    id: 2,
    name: 'CSS',
    category: 'Languages and Concepts'
  },
  {
    id: 3,
    name: 'JavaScript ES6+',
    category: 'Languages and Concepts'
  },
  {
    id: 4,
    name: 'jQuery',
    category: 'JavaScript Tools'
  },
  {
    id: 5,
    name: 'React.js',
    category: 'JavaScript Tools'
  },
  {
    id: 6,
    name: 'Node.js',
    category: 'JavaScript Tools'
  },
  {
    id: 7,
    name: 'MySQL',
    category: 'Languages and Concepts'
  },
  {
    id: 8,
    name: 'Sequelize.js',
    category: 'JavaScript Tools'
  },
  {
    id: 9,
    name: 'NoSQL',
    category: 'Languages and Concepts'
  },
  {
    id: 10,
    name: 'MongoDB',
    category: 'Languages and Concepts'
  },
  {
    id: 11,
    name: 'Progressive Web Applications (PWAs)',
    category: 'Languages and Concepts'
  },
  {
    id: 12,
    name: 'SQL',
    category: 'Languages and Concepts'
  },
  {
    id: 13,
    name: 'Express.js',
    category: 'JavaScript Tools'
  },
  {
    id: 14,
    name: 'Mongoose.js',
    category: 'JavaScript Tools'
  },
  {
    id: 15,
    name: 'APIs',
    category: 'Languages and Concepts'
  },
  {
    id: 16,
    name: 'Handlebars.js',
    category: 'JavaScript Tools'
  }
];