import './style.scss';
import './reset.scss';
// import homePage from './components/homepage/homepage';
import navbar from './navbar/navbar';
// import menuPage from './components/menu/menu';
import contactPage from './components/contact/contact';

const component = () => {
  const element = document.getElementById('content');
  element.appendChild(navbar());
  element.appendChild(contactPage());

  return element;
};

// document.body.style.backgroundSize = 'contain';
// document.body.style.backgroundImage = `url('${background}')`;
document.body.appendChild(component());
