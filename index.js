const form = document.querySelector('#userForm')



function renderListItem(label, value) {
  const item = document.createElement('li')

  const term = document.createElement('dt')
  term.textContent = label

  const description = document.createElement('dd')

  try {
    description.appendChild(value)
  } catch(e) {
    description.textContent += value
  }

  item.appendChild(term)
  item.appendChild(description)
  return item
}

function renderList(data) {
  const list = document.createElement('dl')
  const labels = Object.keys(data)
  labels.forEach(label => {
    const item = renderListItem(label, data[label])
    list.appendChild(item)
  })
  return list
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const user = {
    Character:+':'+ f.userName.value,
  }

  const users = document.querySelector('#users')
  users.appendChild(renderList(user))

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)