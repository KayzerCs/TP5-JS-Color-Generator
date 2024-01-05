const changeColor = () => {
  let number1 = Math.floor(Math.random() * 250);
  let number2 = Math.floor(Math.random() * 250);
  let number3 = Math.floor(Math.random() * 250);

  let colorRGB = `rgb(${number1}, ${number2}, ${number3})`;

  document.body.style.backgroundColor = colorRGB;
  let containerHTML = `
    <div> 
      <p>${colorRGB}</p>
    </div>
  `;
  document.body.innerHTML = containerHTML;

  setTimeout(changeColor, 1000);
};

changeColor();
