import { Item, itemComponent } from '../item/item';
import './menu.scss';
import tacosImg from '../../assets/images/tacos.jpg';
import enchiladasImg from '../../assets/images/enchiladas.jpg';
import tortaImg from '../../assets/images/torta.jpg';
import burritoImg from '../../assets/images/burrito.jpg';

const itemArray = [
  {
    name: 'TAQUITOS',
    desc: '5 tasteful taquitos in corn tortillas with your choice of meat with grilled onion, grilled fresh jalapeño, and charro beans.',
    price: '9.99',
    img: tacosImg,
  },
  {
    name: 'ENCHILADAS',
    desc: 'Three red or green enchiladas, cheese, chicken, or beef. Served with rice and refried beans.',
    price: '14.99',
    img: enchiladasImg,
  },
  {
    name: 'TORTA',
    desc: 'Your choice of meat served on a Mexican Bun, topped with lettuce, tomato, and sour cream.',
    price: '12.99',
    img: tortaImg,
  },
  {
    name: 'BURRITO',
    desc: 'A large flour tortilla filled with your choice of meat, lettuce, tomato, and refried beans.',
    price: '8.99',
    img: burritoImg,
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
