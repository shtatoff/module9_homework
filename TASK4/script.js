const resultNode = document.querySelector('.j-result')
function processInput() {
let inputElement = document.getElementById('input-number');
let inputValue = (inputElement.value);
let inputElement2 = document.getElementById('input-number-2');
let inputValue2 = (inputElement2.value);
  if (inputValue > 99 && inputValue < 301 && inputValue2 > 99 && inputValue2 < 301){
      fetch('https://picsum.photos/' + inputValue + '/' + inputValue2)
      .then((Response) => {
          return Response;
      })
      .then((data) =>{
          console.log(data)
          let imageUrl = data.url;
          const cardBlock = `
          <div class="card">
            <img src="${imageUrl}" class="card-image"/>
          </div>
        `;
        resultNode.innerHTML = cardBlock;
      })
      .catch(error => {
        console.log(error);
      });
      
  }else{
      const cardBlock = `
      <div class="card">
      одно из чисел вне диапазона от 100 до 300
      </div>
`;
resultNode.innerHTML = cardBlock;}



}
let button = document.getElementById('button-process-input');

button.addEventListener('click', processInput);