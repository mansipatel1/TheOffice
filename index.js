const form = document.querySelector('#userForm')

    const renderListItem = function(label, value) {
        const item = document.createElement('li');
        item.textContent = `${label}: ${value}`;
        return item;
     }


const renderList = function(userName) {
    const list = document.createElement('ul');
    list.appendChild(renderListItem('Name', userName));
    return list;
}



const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target;
  const userName = f.userName.value;
  const users = document.querySelector('#users')
  users.appendChild(renderList(userName));


  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)


//create div 
//append the list to the div 