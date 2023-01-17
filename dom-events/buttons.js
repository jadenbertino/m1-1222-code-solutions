function handleClick(e) {
  console.log('button clicked')
  console.log(e)
  console.log(e.target)
}

const clickBtn = document.querySelector('.click-button')
clickBtn.addEventListener('click', handleClick)

function handleMouseover(e) {
  console.log('button hovered')
  console.log(e)
  console.log(e.target)
}

const hoverBtn = document.querySelector('.hover-button')
hoverBtn.addEventListener('mouseover', handleMouseover)

function handleDoubleClick(e) {
  console.log('button double-clicked')
  console.log(e)
  console.log(e.target)
}

const doubleClickBtn = document.querySelector('.double-click-button')
doubleClickBtn.addEventListener('dblclick', handleDoubleClick)