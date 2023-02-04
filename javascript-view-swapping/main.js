const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');
const hold = [$tabContainer, $tabs, $views];
// hold.forEach(e => console.log(e))

$tabContainer.addEventListener('click', e => {
  if (!e.target.matches('.tab')) {
    return;
  }

  $tabs.forEach(tab => {
    if (e.target === tab) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  const dataView = e.target.getAttribute('data-view');
  $views.forEach(view => {
    if (dataView === view.getAttribute('data-view'))
      view.classList.remove('hidden');
    else view.classList.add('hidden');
  });
});
