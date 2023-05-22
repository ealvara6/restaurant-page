import homePage from './components/homepage/homepage';
import menuPage from './components/menu/menu';
import contactPage from './components/contact/contact';

const activeTab = (tab) => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((item) => {
    item.classList.remove('active');
  });

  const element = document.getElementById(tab);
  element.classList.add('active');
};

const activePage = (tab) => {
  const element = document.getElementById('content');
  const page = document.querySelector('#content > :nth-child(2)');
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
  activeTab(tab);
};

export default activePage;
