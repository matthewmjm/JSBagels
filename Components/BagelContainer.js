import * as Delete from './Delete.js'
import * as Bagel from './Bagel.js'

// function renderBagel(bananas, id){
function renderBagels(name, id){
    const bagelsContainer = document.querySelector('#bagelsUl')
    // const bagelContent = document.createElement('li')
    // bagelContent.textContent = bananas
    // bagelsContainer.appendChild(bagelContent)
    const newBagel = Bagel.renderBagel(name, bagelsContainer)
    Delete.createDeleteButton(newBagel, id)
}

export {renderBagels}

      // function renderBagel(bananas, id){
      //   const bagelsContainer = document.querySelector('#bagelsUl')
      //////   const bagelContent = document.createElement('li')
      //////   bagelContent.textContent = bananas
      //////   bagelsContainer.appendChild(bagelContent)
      //   createDeleteButton(bagelContent, id)
      // }