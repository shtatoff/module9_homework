const resultNode = document.querySelector('.j-result')
function processInput() {
    let inputElement = document.getElementById('input-number');
    let inputValue = (inputElement.value);

    if (inputValue > 0 && inputValue < 11) {
        function useRequest(callback){
        let reqUrl = "https://picsum.photos/v2/list?limit="+inputValue;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', reqUrl, true);
        
        xhr.onload = function(){ 
            if (xhr.status != 200){
            console.log(xhr.status)
        }else{
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
                }
            }
            }

            xhr.onerror = function(){
                console.log(xhr.status)
            };
            
            xhr.send();
        }
        function displayResult(apiData) {
            let cards = '';
            apiData.forEach(item=>{
                const cardBlock = `
                <div class = "card">
                <img src ="${item.download_url}" class="card-image"/>
                <p>${item.author}</p>
                </div>
                `;
                cards = cards + cardBlock;
            })
            resultNode.innerHTML = cards;
        }
        useRequest(displayResult);
    } else {
      alert('Введите число от 1 до 10');
    }
    
    inputElement.value = '';
  }

  let button = document.getElementById('button-process-input');

  button.addEventListener('click', processInput);