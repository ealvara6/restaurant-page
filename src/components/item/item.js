import './item.scss';

class Item {
  constructor(name, desc, price, img) {
    this.name = name,
    this.desc = desc,
    this.price = price,
    this.img = img
  }
}

const itemComponent = (item) => {
  const element = document.createElement('div');
  element.className = 'card';
  element.id = item.name;

  const itemNameContainer = document.createElement('div');
  itemNameContainer.className = 'item-name';
  const itemName = document.createElement('div');
  itemName.innerHTML = item.name;
  itemNameContainer.appendChild(itemName);
  element.appendChild(itemNameContainer);

  const itemDesc = document.createElement('div');
  itemDesc.className = 'item-description';
  itemDesc.innerHTML = `<div>${item.desc}</div>`;
  const itemPrice = document.createElement('div');
  itemPrice.className = 'item-price';
  itemPrice.innerHTML = `$${item.price}`;
  itemDesc.appendChild(itemPrice);
  element.appendChild(itemDesc);

  const itemImg = new Image();
  itemImg.src = item.img;
  itemImg.className = 'item-img';
  element.appendChild(itemImg);

  return element;
};

export default itemComponent;

export {
  Item,
  itemComponent,
};
