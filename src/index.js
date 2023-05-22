import './style.scss';
import './reset.scss';
import homePage from './components/homepage/homepage';
import navbar from './navbar/navbar';

const component = () => {
  const element = document.getElementById('content');
  element.appendChild(navbar());
  element.appendChild(homePage());

  return element;
};

document.body.appendChild(component());
