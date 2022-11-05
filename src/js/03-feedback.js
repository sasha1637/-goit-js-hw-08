// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email
//  і message, у яких зберігай поточні значення полів форми. 
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй 
// ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
//  message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту
//  і використовуй бібліотеку lodash.throttle.
const formRef = document.querySelector('.feedback-form');
const formDataobjLocalStr=(JSON.parse(localStorage.getItem("feedback-form-state")))|| {email:"",message:""}

formRef.elements.email.value=formDataobjLocalStr.email;
formRef.elements.message.value=formDataobjLocalStr.message;



formRef.addEventListener('input',onFormInputSave);
function onFormInputSave(e){
    e.preventDefault();
    const {email, message }=e.currentTarget;
    formDataobjLocalStr.email=email.value
    formDataobjLocalStr.message=message.value
    localStorage.setItem("feedback-form-state",JSON.stringify(formDataobjLocalStr))
}