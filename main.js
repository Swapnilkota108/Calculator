const button = document.querySelectorAll('button');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

let inputValue = '';
// const cleatBtn = document.querySelector('.c');

for(items of button){
   items.addEventListener('click',function(e){
      let itemText = e.target.innerText;
      // inputValue = itemText;
      
      
      if(itemText === 'C' ){
         inputValue = '';
         input.value = inputValue;
      }
      else if(itemText == '='){
          input.value = eval(input.value);
      }
      else if(itemText == 'CE'){
         let arr = input.value;
         input.value = (arr.slice(0,-1));

      }
      else{
         localStorage.clear();
         inputValue += itemText;
      input.value = inputValue;
      }
   })
}