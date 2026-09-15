import './style.css';

(function(){
  var deck = document.getElementById('deck');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var navEl = document.querySelector('nav.dots');

  slides.forEach(function(s, i){
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ir a la diapositiva ' + (i+1));
    b.addEventListener('click', function(){
      s.scrollIntoView({behavior:'smooth', block:'start'});
    });
    navEl.appendChild(b);
  });
  var dots = Array.prototype.slice.call(navEl.children);

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        var idx = slides.indexOf(entry.target);
        dots.forEach(function(d,i){ d.classList.toggle('active', i===idx); });
      }
    });
  }, {root:deck, threshold:0.5});
  slides.forEach(function(s){ io.observe(s); });

  deck.addEventListener('keydown', function(e){
    var current = slides.findIndex(function(s){
      var r = s.getBoundingClientRect();
      return r.top > -10 && r.top < 10;
    });
    if(current === -1) current = 0;
    if(e.key === 'ArrowDown' || e.key === 'PageDown'){
      e.preventDefault();
      var next = slides[Math.min(current+1, slides.length-1)];
      next.scrollIntoView({behavior:'smooth'});
    } else if(e.key === 'ArrowUp' || e.key === 'PageUp'){
      e.preventDefault();
      var prev = slides[Math.max(current-1, 0)];
      prev.scrollIntoView({behavior:'smooth'});
    }
  });
  deck.tabIndex = 0;
  deck.focus();
})();
