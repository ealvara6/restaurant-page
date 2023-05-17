import tacosImg from '../../assets/images/tacos.jpg';
import './menu.scss';

const item = () => {
  const element = document.createElement('div');
  element.className = 'card';
  element.id = 'tacos';

  const itemName = document.createElement('div');
  itemName.className = 'item-name';
  itemName.innerHTML = 'tacos';
  element.appendChild(itemName);

  const itemDesc = document.createElement('div');
  itemDesc.className = 'item-description';
  itemDesc.innerHTML = 'this is a test description';
  element.appendChild(itemDesc);

  const itemPrice = document.createElement('div');
  itemPrice.className = 'item-price';
  itemPrice.innerHTML = '$0.99';
  element.appendChild(itemPrice);

  const itemImg = new Image();
  itemImg.src = tacosImg;
  itemImg.className = 'item-img';
  element.appendChild(itemImg);
  console.log(element);

  return element;
};

export default item;
