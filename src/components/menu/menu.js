import { Item, itemComponent } from '../item/item';
import './menu.scss';
import tacosImg from '../../assets/images/tacos.jpg';
import enchiladasImg from '../../assets/images/enchiladas.jpg';

const itemArray = [
  {
    name: 'tacos',
    desc: 'these are tacos',
    price: '$0.99',
    img: tacosImg,
  },
  {
    name: 'enchiladas',
    desc: 'this are enchiladas',
    price: '$29.99',
    img: enchiladasImg,
  },
];

const menuPage = () => {
  const element = document.createElement('div');
  element.id = 'menu';
  element.className = 'page';

  const menuTitle = document.createElement('div');
  menuTitle.id = 'menu-title';
  menuTitle.innerHTML = 'MENU';
  element.appendChild(menuTitle);

  const menuItems = document.createElement('div');
  menuItems.id = 'menu-items';
  itemArray.forEach((item) => {
    const menuItem = new Item(item.name, item.desc, item.price, item.img);
    menuItems.appendChild(itemComponent(menuItem));
  });
  element.appendChild(menuItems);

  return element;
};

export default menuPage;
