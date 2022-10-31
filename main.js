var form=document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit',addItem );
//delete elemenet
itemList.addEventListener('click', removeItem)

//filter
let filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e){
e.preventDefault();
 var newItem= document.getElementById('item').value ;
 var newItemdes= document.getElementById('description').value ;
// var newItem= e.target.append.value ;
// create new li element
var li = document.createElement('li');
li.className='list-group-item'
// qdd text node with input value
li.appendChild(document.createTextNode(newItem) )
li.appendChild(document.createTextNode(' ' + newItemdes) )

// create delete button element
var delbtn = document.createElement('button')
delbtn.className='btn btn-danger btn-sm float-right delete'
delbtn.appendChild(document.createTextNode('X'))
// add button to li
li.appendChild(delbtn);

//create span
let span = document.createElement('span');
 span.appendChild( document.createTextNode(' '))
li.appendChild(span)
//create edit button
let editbtn = document.createElement('button');
editbtn.appendChild(document.createTextNode('EDIT'))
editbtn.className='btn btn-danger btn-sm float-right delete'
li.append(editbtn);

//append li to list
itemList.appendChild(li)
e.target.appendi.value=''
e.target.appenddes.value=''
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


// filter items
function filterItems(e){
  //converts lower case4

  var text= e.target.value.toLowerCase();
  console.log(text);
  var items= itemList.getElementsByTagName('li')

  Array.from(items).forEach((item)=>{
      var itemName = item.childNodes[0].textContent+ item.childNodes[1].textContent  ;
      if(itemName.toLowerCase().indexOf(text)!=-1){
          item.style.display='block';
      }else{
          item.style.display='none';
      }
  })
  }


