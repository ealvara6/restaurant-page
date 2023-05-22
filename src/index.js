import './assets/styles/style.scss';
import './assets/styles/reset.scss';
import homePage from './components/homepage/homepage';
import navbar from './components/navbar/navbar';

const component = () => {
  const element = document.createElement('div');
  element.id = 'content';
  element.appendChild(navbar());
  element.appendChild(homePage());

  return element;
};

document.body.appendChild(component());
