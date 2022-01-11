const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function apagaPadrao(event){
    event.preventDefault();
}
HREF_LINK.addEventListener('click', apagaPadrao);
INPUT_CHECKBOX.addEventListener('click', apagaPadrao);

// function a (event){
//     if(event.key != a){
//         event.preventDefault();
//     }
// }
// INPUT_TEXT.addEventListener('keypress', a)

document.addEventListener ('keypress', (event) => {
    const keyName = event.key;
    if(keyName!=='a'){
        event.preventDefault();
    }
  });