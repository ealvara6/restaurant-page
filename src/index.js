import './style.scss';
import './reset.scss';
import homePage from './homepage/homepage';
import navbar from './navbar/navbar';
// import background from './assets/images/background.jpg';

const component = () => {
  const element = document.getElementById('content');
  element.appendChild(navbar());
  element.appendChild(homePage());

  return element;
};

// document.body.style.backgroundSize = 'contain';
// document.body.style.backgroundImage = `url('${background}')`;
document.body.appendChild(component());
