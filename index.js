const form = document.querySelector('#userForm')
const charArray = []; 
    const renderListItem = function(label, value) {
        const item = document.createElement('li');
        const button = document.createElement('button');
        button.addEventListener('click', removeItem);
        button.textContent= 'Delete';
        button.style.width = '50px'
        button.style.height = '25px';
       // button.style. = 'center'
        item.textContent = `${label}: ${value}`;
        item.appendChild(button);
        
        return item;
     }


const renderList = function(userName) {
    const list = document.createElement('ul');
    list.appendChild(renderListItem('Character', userName));
    return list;
}


const removeItem = function(ev) {
    ev.preventDefault();
    del = ev.target;
    del.parentNode.remove();
    charArray.splice(charArray.indexOf(charArray));
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target;
  const userName = f.userName.value;
  const users = document.querySelector('#users')
  users.appendChild(renderList(userName));

  charArray.push(userName);
  f.reset();
  f.userName.focus();
}

form.addEventListener('submit', handleSubmit)


//create div 
//append the list to the div 