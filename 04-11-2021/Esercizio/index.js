/**
 * Wraps the document.querySelector method
 */
 const q = (selector) => document.querySelector(selector);

 const render = (container, items) => {
   const elements = items.map((element) => 
     `<li>
       <h3>${element.name}</h3>
       <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
       <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
     </li>`
   );
   
   const content = elements.join('');
 
   container.innerHTML = content;
 }
 
 document.addEventListener('DOMContentLoaded', () => {
   const form = q('form');
   const input = q('form input');
   const list = q('ul');
   const nameAdded = q('#name');
   const phoneAdded = q('#phone');
   const emailAdded = q('#email');
   const myForm = q('#myForm');
   
   render(list, data);
 
   // VERSIONE ORIGINALE CON IL SUBMIT
   // form.addEventListener('submit', (event) => {
   //   event.preventDefault();
   //   const value = input.value.toLowerCase();
 
   //   const results = data.filter((element) => 
   //     element.name.toLowerCase().search(value) > -1);
 
   //   render(list, results);
   // });
 
   input.addEventListener('keyup', (event) => {
     const value = input.value.toLowerCase();
 
     const results = data.filter((element) => 
       element.name.toLowerCase().search(value) > -1 ||
       element.email.toLowerCase().search(value) > -1
     );
 
     render(list, results);
   });




 myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const results = Object.create({});
  results.name = nameAdded.value;
  results.email = emailAdded.value;
  results.phone = phoneAdded.value;

  data.push(results);

  render(list, data);
});

render(list, results);
}); 
