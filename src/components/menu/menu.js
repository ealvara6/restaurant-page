import { Item, itemComponent } from '../item/item';
import './menu.scss';
import tacosImg from '../../assets/images/tacos.jpg';

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
  const itemImg = new Image();
  itemImg.src = tacosImg;
  const tacos = new Item('tacos', 'these are tacos', '$0.99', tacosImg);
  menuItems.appendChild(itemComponent(tacos));
  element.appendChild(menuItems);

  return element;
};

export default menuPage;
