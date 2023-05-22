import './style.scss';
import './reset.scss';
import homePage from './components/homepage/homepage';
import navbar from './navbar/navbar';
import menuPage from './components/menu/menu';
import contactPage from './components/contact/contact';

const element = document.getElementById('content');

const component = () => {
  element.appendChild(navbar());
  element.appendChild(homePage());

  return element;
};

const activePage = (tab) => {
  const page = document.querySelector('#content > :nth-child(2)');
  console.log(page);
  element.removeChild(page);
  switch (tab) {
    case 'Home':
      element.appendChild(homePage());
      break;
    case 'Menu':
      element.appendChild(menuPage());
      break;
    case 'Contact':
      element.appendChild(contactPage());
      break;
    default:
      console.log('no page found');
  }
};

document.body.appendChild(component());

export default activePage;
