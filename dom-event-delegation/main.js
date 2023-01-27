const $taskList = document.querySelector('.task-list')

$taskList.addEventListener('click', e => {
  if (e.target.matches("button")) {
    const $taskListItem = e.target.closest('.task-list-item');
    console.log('parent:', $taskListItem) // want to display this after 
    $taskListItem.remove()
  }
  console.log('target:', e.target)
  console.log('  tagName:', e.target.tagName)
})