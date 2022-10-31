var form=document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit',addItem );
//delete elemenet
itemList.addEventListener('click', removeItem)


//add item
function addItem(e){
e.preventDefault();
 var newItem= document.getElementById('item').value ;
// var newItem= e.target.append.value ;
// create new li element
var li = document.createElement('li');
li.className='list-group-item'
// qdd text node with input value
li.appendChild(document.createTextNode(newItem) )
// create delete button element
var delbtn = document.createElement('button')
delbtn.className='btn btn-danger btn-sm float-right delete'
delbtn.appendChild(document.createTextNode('X'))
// add button to li
li.appendChild(delbtn);
//append li to list
itemList.appendChild(li)
e.target.append.value=''
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
if(confirm('Are you sure?')){
    var li=e.target.parentElement;
    itemList.removeChild(li);
}


  }
}

let listItems = document.getElementsByClassName('list-group-item');
//edit button



for (let i = 0; i < listItems.length; i++) {
    let editbtn = document.createElement('button');
    editbtn.appendChild(document.createTextNode('EDIT'))
    listItems[i].append(editbtn);
}