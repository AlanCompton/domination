function addStrikeThrough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = "line-through";
}

addStrikeThrough();

function setImg(id,url){
    let img = document.querySelector(`#${id}`);
    img.src = url;
    img.style.height = '468px';
}

setImg('image-1','https://images.ctfassets.net/ihlmn42cjuv0/5ZiH8atL5GRwT5XpadOlKU/974a45d4b76ee446fe133c0cded97f20/hero-tokyo.jpg?fit=fill&w=1346&h=838&fm=jpg&q=93');
setImg('image-2','https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80');
setImg('image-3','https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');

function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}

removeArgument();
removeArgument();

function fontSize(size,id){
    let font = document.querySelector(id);
    font.style.fontSize = (size);
}

fontSize('100px','h1')

function addElementToList(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
}

let newImage = document.createElement('img');
newImage.src = "https://www.jal.co.jp/es/en/guide-to-japan/destinations/articles/tokyo/explore-the-best-food-of-tokyo/_jcr_content/root/responsivegrid/sectioncontainer/image_730113288.coreimg.jpeg/1661153254378.jpeg";
newImage.style.height = '400px';
newImage.style.margin = '20px';
addElementToList(newImage);

function modifyImageHeight(img){
    img.style.height = '30px';
}

modifyImageHeight(newImage);

function makeInvis(addElement){
    addElement.className = 'invisible';
}

makeInvis(newImage);

function liFunct(myStr){
    let listItem = document.createElement('li');
    listItem.innerText = myStr;
    return listItem;
}

let newLi = liFunct("New list item");
addElementToList(newLi);

// function createElement(text){
//     let newItemLi = document.createElement('li');
//     newItemLi.innerText = text;
//     return newItemLi
// }

// let newVar = createElement('Nondae?');
// addElementToList(newVar);

function newHeader(size,text){
    let headerSize = `h${size}`
    let header = document.createElement(headerSize);
    header.innerText = text;
    return header;
}

addElementToList(newHeader('3','Test'));