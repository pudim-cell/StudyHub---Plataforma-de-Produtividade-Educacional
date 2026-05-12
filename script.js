const pages = document.querySelectorAll('.page');
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    pages.forEach(page => page.classList.remove('active-page'));

    document.getElementById(btn.dataset.page)
      .classList.add('active-page');
  });
});

const defaultMaterials = [
  {
    title: 'Resumo HTML',
    subject: 'Programação Web',
    type: 'Resumo',
    tags: ['html', 'frontend'],
    favorite: true
  },
  {
    title: 'Exercícios SQL',
    subject: 'Banco de Dados',
    type: 'Exercício',
    tags: ['sql', 'mysql'],
    favorite: false
  },
  {
    title: 'Prova Antiga Matemática',
    subject: 'Matemática',
    type: 'Prova Antiga',
    tags: ['cálculo'],
    favorite: true
  }
];

const defaultTasks = [
  {
    title: 'Projeto Final Web',
    description: 'Finalizar frontend',
    subject: 'Programação Web',
    date: '2026-05-20',
    priority: 'Alta',
    status: 'Em progresso'
  },
  {
    title: 'Lista SQL',
    description: 'Resolver exercícios',
    subject: 'Banco de Dados',
    date: '2026-05-18',
    priority: 'Média',
    status: 'Não iniciado'
  }
];

let materials = JSON.parse(localStorage.getItem('materials')) || defaultMaterials;
let tasks = JSON.parse(localStorage.getItem('tasks')) || defaultTasks;
});
