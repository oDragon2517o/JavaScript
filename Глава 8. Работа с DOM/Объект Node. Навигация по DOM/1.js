var articleDiv = document.querySelector("div.article");
 
// получаем первый дочерний элемент
var node = articleDiv.firstChild;
console.log(node.nodeName);
// обращаемся к следующему узлу, пока он определен
while((node=node.nextSibling)!==null){
 
    console.log(node.nodeName);
}