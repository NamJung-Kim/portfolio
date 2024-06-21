'use strict';

const category = document.querySelector('.categories');
const project = document.querySelectorAll('.project');
const projects = document.querySelector('.projects');

category.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;
  if (filter === null) {
    return;
  }
  handleActiveSelection(e.target);
  filterProjects(filter);

    projects.classList.add('ani-out');
  setTimeout(() => {
    projects.classList.remove('ani-out');
  }, 250)
});


function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  project.forEach(item => {
    if (filter === 'All' || filter === item.dataset.type) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}