import icon from './hamburger.png';
import './navbar.scss';

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
  const tabList = document.createElement('div');
  tabList.id = 'tab-list';
  tabData.forEach((item) => {
    const li = document.createElement('div');
    const text = document.createElement('div');
    text.innerHTML = item;
    li.className = 'tab';
    li.appendChild(text);
    tabList.appendChild(li);
  });
  element.appendChild(tabList);

  return element;
};

export default navbar;
