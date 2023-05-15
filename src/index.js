import './style.scss';
import './reset.scss';
import homePage from './homepage/homepage';
import navbar from './navbar/navbar';

const component = () => {
  const element = document.getElementById('content');
  element.appendChild(navbar());

  return element;
}
document.body.appendChild(component());
