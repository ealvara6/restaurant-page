import './menu.scss';

class Item {
  constructor(name, desc, price, img) {
    this.name = name,
    this.desc = desc,
    this.price = price,
    this.img = img
  }

  // get name() { return this.name; }

  // set name(value) { this.name = value; }

  // get desc() { return this.desc; }

  // set desc(value) { this.desc = value; }

  // get price() { return this.price; }

  // set price(value) { this.price = value; }
}

const itemComponent = (item) => {
  const element = document.createElement('div');
  element.className = 'card';
  element.id = item.name;

  const itemName = document.createElement('div');
  itemName.className = 'item-name';
  itemName.innerHTML = item.name;
  element.appendChild(itemName);

  const itemDesc = document.createElement('div');
  itemDesc.className = 'item-description';
  itemDesc.innerHTML = item.desc;
  element.appendChild(itemDesc);

  const itemPrice = document.createElement('div');
  itemPrice.className = 'item-price';
  itemPrice.innerHTML = item.price;
  element.appendChild(itemPrice);

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
