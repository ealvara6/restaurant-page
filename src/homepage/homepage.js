import navbar from '../navbar/navbar';

const homePage = () => {
  const element = document.createElement('div');
  element.id = 'homepage';
  element.appendChild(navbar());

  return element;
};

export default homePage;
