document.addEventListener("DOMContentLoaded", function(){
  const themeToggler = document.querySelector('#theme-toggler');

  themeToggler.addEventListener('click', () => {
    this.querySelector('svg').classList.toggle('fa-sun');
    this.querySelector('svg').classList.toggle('fa-moon');

    if (this.querySelector('svg').classList.contains('fa-sun')){
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

  });
});