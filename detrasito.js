window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var documentHeight = document.body.scrollHeight;
    var windowHeight = window.innerHeight;
    var progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
  });