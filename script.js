// Exercice :

// const changeColor = () => {
//   let number1 = Math.floor(Math.random() * 250);
//   let number2 = Math.floor(Math.random() * 250);
//   let number3 = Math.floor(Math.random() * 250);

//   let colorRGB = `rgb(${number1}, ${number2}, ${number3})`;

//   document.body.style.backgroundColor = colorRGB;
//   let containerHTML = `
//     <div>
//       <p>${colorRGB}</p>
//     </div>
//   `;
//   document.body.innerHTML = containerHTML;

//   setTimeout(changeColor, 1000);
// };

// changeColor();

// *************************************************************************************************/

// Correction

const getColor = () => {
  const r = Math.floor(Math.random() * 250);
  const g = Math.floor(Math.random() * 250);
  const b = Math.floor(Math.random() * 250);

  const color = `rgb(${r},${g},${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
};

setInterval(getColor, 1000);
