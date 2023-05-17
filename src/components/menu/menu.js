import item from '../item/item';
import './menu.scss';

const menuPage = () => {
  const element = document.createElement('div');
  element.id = 'menu-page';
  element.className = 'page';

  const menuTitle = document.createElement('div');
  menuTitle.id = 'menu-title';
  menuTitle.innerHTML = 'MENU';
  element.appendChild(menuTitle);

  const menuItems = document.createElement('div');
  menuItems.id = 'menu-items';
  menuItems.appendChild(item());
  element.appendChild(menuItems);

  return element;
};

export default menuPage;
