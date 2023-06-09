import homepageImage from '../../assets/images/homepage.jpg';
import './homepage.scss';
import buttonComponent from '../button/button';
import activePage from '../../activepage';

const homePage = () => {
  const element = document.createElement('div');
  element.id = 'home';
  element.className = 'page';

  const image = new Image();
  image.src = homepageImage;
  image.id = 'homepage-photo';
  element.appendChild(image);

  const content = document.createElement('div');
  content.id = 'homepage-content';
  content.innerHTML = `
    <div id='homepage-header'>Best food in houston!</div>
    <div id='homepage-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, mollitia? Omnis aliquid earum officiis impedit! Quisquam ullam illum cum eius commodi aliquid odit, corporis ipsum blanditiis exercitationem doloremque molestiae sit quia id placeat nemo, mollitia rem amet quam voluptate possimus cupiditate. Soluta cum quasi eius optio similique natus eligendi quo!</div>
  `;
  const btn = buttonComponent('Order Now!');
  btn.addEventListener('click', () => {
    activePage('Menu');
  });
  content.appendChild(btn);
  element.appendChild(content);

  return element;
};

export default homePage;
