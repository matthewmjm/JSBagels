import * as BagelContainer from './Components/BagelContainer.js'

document.addEventListener('DOMContentLoaded', ()=>{


    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(result => handleData(result))
  
  
      function handleData(bagels){
          console.log(bagels)
        bagels.map(bagel => {
          BagelContainer.renderBagels(bagel.type, bagel.id)
        })
      }
  

  
      // function renderBagel(bananas, id){
      //   const bagelsContainer = document.querySelector('#bagelsUl')
      //   const bagelContent = document.createElement('li')
      //   bagelContent.textContent = bananas
      //   bagelsContainer.appendChild(bagelContent)
      //   createDeleteButton(bagelContent, id)
      // }
  
  
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
  
  
      const bagelsForm = document.querySelector('#bagels-form')
  
      bagelsForm.addEventListener('submit', ()=>{
        event.preventDefault()
        getUserBagel(bagelsForm)
      })
  
      function getUserBagel(bagelsForm){
        const newFormData = new FormData(bagelsForm)
        const formBagel = newFormData.get('bagel')
        renderBagel(formBagel)
        sendUserBagel(formBagel)
      }
  
  
      function sendUserBagel(type){
        fetch('http://bagel-api-fis.herokuapp.com/bagels', {
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({type})
        })
      }
  
  })