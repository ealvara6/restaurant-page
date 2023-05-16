import './button.scss';

const buttonComponent = (text) => {
  const button = document.createElement('button');
  button.innerHTML = `${text}`;

  return button;
};

export default buttonComponent;
