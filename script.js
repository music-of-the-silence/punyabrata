var navigation = {
  // Variables
  $nav: document.querySelector('.nav'),
  $navTrigger: document.querySelector('.nav__trigger'),
  $navContent: document.querySelector('.nav__content'),
  $navList: document.querySelector('.nav__list'),
  transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
  
  init() {
      var self = this;

      // Handle the transitions
      self.$navTrigger.addEventListener('click', function() {
          if (!self.$navTrigger.classList.contains('is-active')) {
              // .nav--trigger active
              self.$navTrigger.classList.add('is-active');

              // .nav active
              if (!self.$nav.classList.contains('is-active')) {
                  self.$nav.classList.add('is-active');
                  self.$nav.addEventListener('transitionend', function(e) {
                      if (e.propertyName == 'width' && self.$navTrigger.classList.contains('is-active')) {
                          // .nav__content active
                          self.$navContent.classList.add('is-active');
                      }
                  });
              } else {
                  self.$navContent.classList.add('is-active');                    
              }

              // no-csstransitions fallback
              if (document.documentElement.classList.contains('no-csstransitions')) {
                  self.$navContent.classList.add('is-active');
              }
          } else {
              // .nav--trigger inactive
              self.$navTrigger.classList.remove('is-active');
              
              // .nav__content inactive
              if (self.$navContent.classList.contains('is-active')) {
                  self.$navContent.classList.remove('is-active');
                  self.$navContent.addEventListener('transitionend', function(e) {    
                      if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
                          // .nav inactive
                          self.$nav.classList.remove('is-active');                        
                      }
                  });                    
              } else {
                  self.$nav.classList.remove('is-active');                    
              }

              // no-csstransitions fallback
              if (document.documentElement.classList.contains('no-csstransitions')) {
                  self.$nav.classList.remove('is-active');
              }
          }
      });
  }
}

navigation.init();

// document.onmousemove = animatedCircles;

//         const colors = ['#cc0000', '#e60000', '#ff0000', '#ff1a1a', '#ff3333', '#ff4c4c', '#ff6666', '#ff8080'];

//         function animatedCircles(event) {
//             let circle = document.createElement('div');
//             circle.setAttribute('class', 'circle');
//             document.body.appendChild(circle);

//             circle.style.left = event.clientX + 'px';
//             circle.style.top = event.clientY + 'px';

//             let color = colors[Math.floor(Math.random() * colors.length)];
//             circle.style.borderColor = color;

//             circle.style.transition = 'all 0.5s linear 0s';

//             circle.style.left = circle.offsetLeft - 20 + 'px';
//             circle.style.top = circle.offsetTop - 20 + 'px';

//             circle.style.width = '50px';
//             circle.style.height = '50px';
//             circle.style.borderWidth = '5px';
//             circle.style.opacity = 0;
//         }