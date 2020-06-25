fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(bagels => renderBagels(bagels))
 

const bagelList = document.getElementById('bagel-list')  


function renderBagels(bagels){
  console.log(bagels)
  bagels.map(bagel => renderBagel(bagel.type, bagel.id))
}

const bagelForm = document.querySelector('#bagel-form')

bagelForm.addEventListener('submit', (event)=> {
  event.preventDefault()
  handleForm(bagelForm)
})

function handleForm(bagelForm){
  const newBagelFormData = new FormData(bagelForm)
  const newBagel = newBagelFormData.get('bagel')
  renderBagel(newBagel)
  persistBagel(newBagel)
}

function renderBagel(bagel, id){
  const li = document.createElement('li')
  li.innerText = bagel
  li.id = id
  createDeleteButton(li)
  bagelList.append(li)
}

function createDeleteButton(li){
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'X'
  li.appendChild(deleteButton)
  deleteButton.addEventListener('click', (event) => deleteBagel(event))
}

function deleteBagel(event){
  event.stopPropagation()
  deleteBagelFromBackEnd(event.target.parentNode.id)
  event.target.parentNode.remove()
}

function deleteBagelFromBackEnd(id){
  fetch(`http://bagel-api-fis.herokuapp.com/bagels/${id}`, {
    method:'DELETE'
  })
}

function persistBagel(bagel){
  fetch('http://bagel-api-fis.herokuapp.com/bagels', {
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json '
    },
    body: JSON.stringify({type: bagel})
  })
}