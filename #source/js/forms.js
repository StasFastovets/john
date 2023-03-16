//счетчик символов textarea
let textareaElem = document.querySelector('.TADishes');
let maxLenght = textareaElem.getAttribute('maxlength');
let textareaSpan = document.querySelector('.textarea__counter span');
textareaSpan.innerHTML = maxLenght;

textareaElem.addEventListener('keyup', txtSetCounter);
textareaElem.addEventListener('keydown', txtSetCounterRepeat);

function txtSetCounter(){
   let counterResult = maxLenght - textareaElem.value.length;
   textareaSpan.innerHTML = counterResult;
}

function txtSetCounterRepeat(event){
   if(event.repeat){
      txtSetCounter();
   }
}


//значение поля radio
let radioHome = document.form.radioHome;
radioHome[0].checked = 'true'

let radioYN = document.form.radioYN;
radioYN[0].checked = 'true'

//значение поля phone
let inputPhone = document.form.inputPhone;
inputPhone.value = '+38'


// Убрать/добавить placeholder при focus/blur 
let name = document.querySelector('.inputName');
let placeholderName = name.placeholder;
name.addEventListener('focus', focusPlaceholderName);
name.addEventListener('blur', blurPlaceholderName);
function focusPlaceholderName(event){
   name.placeholder = '';
}
function blurPlaceholderName(event){
   name.placeholder = placeholderName;
}


// Проверяем поля и если есть ошибки отменяем отправку

// let inputName = mainForm.inputName;
// let spanName = document.querySelector('.spanName')
// mainForm.addEventListener('submit', validation);

// function validation(event){
//    if(!inputName.value){
//       spanName.innerHTML = 'Поле Имя не заполнено!!!';
//       event.preventDefault();
//    }else{
//       spanName.innerHTML = '';
//    }
// }

let inputName = mainForm.inputName;
inputPhone = mainForm.inputPhone;
let inputEmail = mainForm.inputEmail;
let inputDate = mainForm.inputDate;

mainForm.addEventListener('submit', validation);

function validation(event){
   if(!inputName.value){
      inputName.style.border = "2px solid #FF0000";
      event.preventDefault();
   } 
   if(!inputPhone.value){
      inputPhone.style.border = "2px solid #FF0000";
      event.preventDefault();
   } 
   if(!inputEmail.value){
      inputEmail.style.border = "2px solid #FF0000";
      event.preventDefault();
   } 
   if(!inputDate.value){
      inputDate.style.border = "2px solid #FF0000";
      event.preventDefault();
   } 
}



