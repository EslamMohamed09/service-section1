document.addEventListener("DOMContentLoaded", function() {
   const themeToggler = document.getElementById('theme-toggler');

   themeToggler.addEventListener('click', function() {
       this.classList.toggle('fa-sun');

       if (this.classList.contains('fa-sun')) {
           document.body.classList.add('active');
       } else {
           document.body.classList.remove('active');
       }
   });
});
