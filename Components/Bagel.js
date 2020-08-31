function renderBagel(name, bagelsContainer){
    const bagelContent = document.createElement('li')
    bagelContent.textContent = name
    return bagelsContainer.appendChild(bagelContent)
}

export {renderBagel}


      // function renderBagel(name, id){
      //////   const bagelsContainer = document.querySelector('#bagelsUl')
      //   const bagelContent = document.createElement('li')
      //   bagelContent.textContent = name
      //   bagelsContainer.appendChild(bagelContent)
      ////// createDeleteButton(bagelContent, id)
      // }