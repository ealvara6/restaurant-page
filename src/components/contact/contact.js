import '../../style.scss';
import './contact.scss';
import contactImg from '../../assets/images/contact-photo.jpg';

const contactCard = () => {
  const card = document.createElement('div');
  card.id = 'contact-card';

  const img = new Image();
  img.src = contactImg;
  img.id = 'contact-img';
  card.appendChild(img);

  const contactContent = document.createElement('div');
  contactContent.id = 'contact-content';
  contactContent.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cum ratione! Pariatur repellat quaerat amet ipsam error odit quod et, sapiente delectus excepturi fuga totam voluptas perspiciatis obcaecati sunt eveniet harum modi quo voluptatum provident dignissimos magni facilis maxime? Sed ratione voluptatem aspernatur modi, cum, amet nobis at quam, deserunt eos facere. Nulla, quasi vitae? Dolore dolores quisquam amet reiciendis quo optio aut fugiat eius vitae delectus, impedit voluptas quis ea iusto quasi. Aliquam ut optio nostrum maxime officia voluptates nulla, eveniet, neque pariatur perspiciatis nisi. Ullam dicta, ex ipsam odit quia voluptates reprehenderit doloremque laudantium temporibus quod itaque voluptate.';
  card.appendChild(contactContent);

  const contactEmail = document.createElement('div');
  contactEmail.innerHTML = '<span class=\'header\'>Email:</span> fake-email@gmail.com';
  card.appendChild(contactEmail);

  const contactPhone = document.createElement('div');
  contactPhone.innerHTML = '<span class=\'header\'>Phone:</span> 888-888-8888';
  card.appendChild(contactPhone);

  return card;
};

const contactPage = () => {
  const element = document.createElement('div');
  element.className = 'page';
  element.id = 'contact';
  element.appendChild(contactCard());

  return element;
};

export default contactPage;
