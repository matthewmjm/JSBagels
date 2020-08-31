function createDeleteButton(bagelContent, id){
const deleteButton = document.createElement('button')
deleteButton.innerText = 'delete'
bagelContent.appendChild(deleteButton)
deleteButton.addEventListener('click', event => deleteBagel(id))
}

function deleteBagel(id){
event.target.parentNode.remove()
fetch(`http://bagel-api-fis.herokuapp.com/bagels/${id}`, {method:'DELETE'})
}

export { createDeleteButton, deleteBagel }


      // function createDeleteButton(bagelContent, id){
      //   const deleteButton = document.createElement('button')
      //   deleteButton.innerText = 'delete'
      //   bagelContent.appendChild(deleteButton)
      //   deleteButton.addEventListener('click', event => deleteBagel(id))
      // }
  
      // function deleteBagel(id){
      //   event.target.parentNode.remove()
      //   fetch(`http://bagel-api-fis.herokuapp.com/bagels/${id}`, {method:'DELETE'})
      // }