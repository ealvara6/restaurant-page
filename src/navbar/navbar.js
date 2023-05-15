import icon from './hamburger.png';

const navbar = () => {
  const element = document.createElement('div');
  element.id = 'navbar';

  const myIcon = new Image();
  myIcon.src = icon;
  myIcon.id = 'restaurant-icon';
  element.appendChild(myIcon);

  const restaurantName = document.createElement('div');
  restaurantName.id = 'my-restaurant';
  restaurantName.innerHTML = 'My Restaurant';
  element.appendChild(restaurantName);

  const tabData = ['Home', 'Menu', 'Contact'];
  const tabList = document.createElement('ul');
  tabData.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    tabList.appendChild(li);
  });
  element.appendChild(tabList);

  return element;
};

export default navbar;
