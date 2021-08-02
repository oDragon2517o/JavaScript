var articleDiv = document.querySelector("div.article");
 
// получаем последний дочерний элемент
var node = articleDiv.lastChild;
console.log(node.nodeName);
// обращаемся к предыдующему узлу, пока он определен
while((node=node.previousSibling)!==null){
 
    console.log(node.nodeName);
}