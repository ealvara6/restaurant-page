import icon from './taco.png';
import './navbar.scss';
import activePage from '../activepage';

// const activeTab = (li, tabList) => {
//   tabList.childNodes.forEach((item) => {
//     item.classList.remove('active');
//   });
//   li.classList.add('active');
//   activePage(li.textContent);
// };

const createTabs = (tabList, tabData) => {
  tabData.forEach((item) => {
    const li = document.createElement('div');
    li.id = item;
    if (item === 'Home') {
      li.classList.add('active');
    }
    const text = document.createElement('div');
    text.innerHTML = item;
    li.appendChild(text);
    li.classList.add('tab');
    li.addEventListener('click', () => activePage(li.textContent));
    tabList.appendChild(li);
  });
};

const navbar = () => {
  const element = document.createElement('div');
  element.id = 'navbar';

  const myIcon = new Image();
  myIcon.src = icon;
  myIcon.id = 'restaurant-icon';
  myIcon.addEventListener('click', () => activePage('Home'));
  element.appendChild(myIcon);

  const restaurantName = document.createElement('div');
  restaurantName.id = 'my-restaurant';
  restaurantName.innerHTML = 'La Taqueria';
  element.appendChild(restaurantName);

  const tabData = ['Home', 'Menu', 'Contact'];
  const tabList = document.createElement('div');
  tabList.id = 'tab-list';
  createTabs(tabList, tabData);
  element.appendChild(tabList);

  return element;
};

export default navbar;
