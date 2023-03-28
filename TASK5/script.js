const resultNode = document.querySelector('.j-result')
function processInput() {
let inputElement = document.getElementById('input-number');
let inputValue = (inputElement.value);
let inputElement2 = document.getElementById('input-number-2');
let inputValue2 = (inputElement2.value);
  if (inputValue > 0 && inputValue < 11 && inputValue2 > 0 && inputValue2 < 11){
      fetch('https://picsum.photos/v2/list?page=' + inputValue + '&limit=' + inputValue2)
      .then((Response) => {
          const result = Response.json();
          return result;
      })
      .then((data) =>{
          console.log(data)
          let cards = '';
          data.forEach(item=>{
              const cardBlock = `
              <div class = "card">
              <img src ="${item.download_url}" class="card-image"/>
              <p>${item.author}</p>
              </div>
              `;
              cards = cards + cardBlock;
          })
       localStorage.setItem('lastCardsURL', cards);
        resultNode.innerHTML = cards;
      })
      .catch(error => {
        console.log(error);
      });
      
  }else if((inputValue < 1 || inputValue > 10) && inputValue2 > 0 && inputValue2 < 11){
    const cardBlock = `
    <div class="card">
    Номер страницы вне диапазона от 1 до 10
    </div>
`;
resultNode.innerHTML = cardBlock
  }else if(inputValue > 0 && inputValue < 11 && (inputValue2 < 1 || inputValue2 > 10)){
    const cardBlock = `
    <div class="card">
    Лимит вне диапазона от 1 до 10
    </div>
`;
resultNode.innerHTML = cardBlock
  }else{
      const cardBlock = `
      <div class="card">
      Номер страницы и лимит вне диапазона от 1 до 10
      </div>
`;
resultNode.innerHTML = cardBlock;}



}
let button = document.getElementById('button-process-input');
button.addEventListener('click', processInput);

const lastCardsURL = localStorage.getItem('lastCardsURL');
if (lastCardsURL) {
  const cardBlock = lastCardsURL;
  resultNode.innerHTML = cardBlock;
}