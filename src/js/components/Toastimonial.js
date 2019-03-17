import '../../scss/components/toastimonial.scss';

class Toastimonials {
  constructor(props) {
    if(props.componentName != undefined) {
      this.componentName = props.componentName;
    }
    if(props.params != undefined) {
      this.params = props.params;
    }
  }
  // close() {
  //   // close toastimonials
  //   document.getElementsByClassName(`${this.componentName}__close--container`)[0].remove();
  // }
  startToasts(props) {
    let toasts = [[{"name": "Nelda Sanchez","text": "Purchased just mintes ago."}],[{"name": "King Patton","text": "Purchased just mintes ago."}],[{"name": "Pacheco Pollard","text": "Purchased just mintes ago."}],[{"name": "Madeline Cross","text": "Purchased just mintes ago."}],[{"name": "Nadine Case","text": "Purchased just mintes ago."}],[{"name": "Bertie Moss","text": "Purchased just mintes ago."}],[{"name": "Young Weaver","text": "Purchased just mintes ago."}],[{"name": "Cara Hinton","text": "Purchased just mintes ago."}],[{"name": "Washington Bartlett","text": "Purchased just mintes ago."}],[{"name": "Wood Shardy","text": "Purchased just mintes ago."}],[{"name": "Queen Riggs","text": "Purchased just mintes ago."}],[{"name": "Bonner Daniels","text": "Purchased just mintes ago."}],[{"name": "Jami Sweet","text": "Purchased just mintes ago."}],[{"name": "Barrera Prince","text": "Purchased just mintes ago."}],[{"name": "Juarez Meadows","text": "Purchased just mintes ago."}],[{"name": "Gena Rich","text": "Purchased just mintes ago."}],[{"name": "Lilia Hammond","text": "Purchased just mintes ago."}],[{"name": "Strong Salinas","text": "Purchased just mintes ago."}],[{"name": "Hall Dickson","text": "Purchased just mintes ago."}],[{"name": "Deirdre Estes","text": "Purchased just mintes ago."}],[{"name": "Morales Washington","text": "Purchased just mintes ago."}],[{"name": "Sonja Carney","text": "Purchased just mintes ago."}],[{"name": "Aguilar Sears","text": "Purchased just mintes ago."}],[{"name": "Meredith Blackwell","text": "Purchased just mintes ago."}],[{"name": "Dina Sargent","text": "Purchased just mintes ago."}],[{"name": "Roxanne Lewis","text": "Purchased just mintes ago."}],[{"name": "Hurst Fry","text": "Purchased just mintes ago."}],[{"name": "Lambert Bell","text": "Purchased just mintes ago."}],[{"name": "Alina Steele","text": "Purchased 1 mintes ago."}],[{"name": "Marilyn Lin","text": "Purchased 2 mintes ago."}],[{"name": "Broderick Daniels","text": "Purchased 3 mintes ago."}],[{"name": "Cadence Boyle","text": "Purchased 4 mintes ago."}],[{"name": "Hector Bartlett","text": "Purchased 5 mintes ago."}],[{"name": "Jon Henderson","text": "Purchased 6 mintes ago."}],[{"name": "Noe Holmes","text": "Purchased 7 mintes ago."}],[{"name": "Talon Griffith","text": "Purchased 8 mintes ago."}],[{"name": "Samir Ponce","text": "Purchased 9 mintes ago."}],[{"name": "Jameson Summers","text": "Purchased 10 mintes ago."}],[{"name": "Kristin Ball","text": "Purchased 11 mintes ago."}],[{"name": "Saniya Bautista","text": "Purchased 12 mintes ago."}],[{"name": "Dalia Hogan","text": "Purchased 13 mintes ago."}],[{"name": "Warren Zuniga","text": "Purchased 14 mintes ago."}],[{"name": "Ingrid Fletcher","text": "Purchased 15 mintes ago."}],[{"name": "Kelton Mitchell","text": "Purchased 16 mintes ago."}],[{"name": "Angelina Vaughn","text": "Purchased 17 mintes ago."}],[{"name": "Ibrahim Valentine","text": "Purchased 18 mintes ago."}],[{"name": "Makhi Wiley","text": "Purchased 19 mintes ago."}],[{"name": "Bradley Glass","text": "Purchased 20 mintes ago."}],[{"name": "Dante Mckenzie","text": "Purchased 21 mintes ago."}],[{"name": "Jair Miller","text": "Purchased 22 mintes ago."}],[{"name": "Tabitha Cantu","text": "Purchased 23 mintes ago."}],[{"name": "Kinley Perkins","text": "Purchased 24 mintes ago."}],[{"name": "Arabella Patel","text": "Purchased 25 mintes ago."}],[{"name": "Macey Middleton","text": "Purchased 26 mintes ago."}],[{"name": "Rodney Jarvis","text": "Purchased 27 mintes ago."}],[{"name": "Camron Christian","text": "Purchased 28 mintes ago."}],[{"name": "Taniyah Novak","text": "Purchased 29 mintes ago."}],[{"name": "Brenton Frost","text": "Purchased 30 mintes ago."}],[{"name": "Jade Rice","text": "Purchased 31 mintes ago."}],[{"name": "Brenda Gaines","text": "Purchased 32 mintes ago."}],[{"name": "Monserrat Knapp","text": "Purchased 33 mintes ago."}],[{"name": "Walker Pierce","text": "Purchased 34 mintes ago."}],[{"name": "Elaine Nixon","text": "Purchased 35 mintes ago."}],[{"name": "Dillon Poole","text": "Purchased 36 mintes ago."}]];

    // start loop sequence
    const toastimonial = (function loop(props) {

      // convert to miliseconds
      let minSec = props.min * 1000;
      let maxSec = props.max * 1000;

      // get random number between min and max values
      let rand = Math.floor(Math.random() * (maxSec - minSec + 1)) + minSec;

      console.log('Next toast will show in '+ rand + ' milliseconds');

      let timeoutLoop = setTimeout(function() {

        // call getToats then
        let call = getToasts();
        call.init();

        // recursively call loop
        loop(props);

      }, rand);

    });

    const getToasts = () => {

      // initial vars
      const data = {
        "container" :     document.querySelector('.toastimonials--container'),
        "toastClose":     document.querySelectorAll('.toast_close'),
        "toastItem" :      Math.floor(Math.random() * toasts.length) + 1,
        "toastTotal":     toasts.length
      }

      return {
        toastData: () => {
          // NEED POLYFILL FOR PROMISE
          return new Promise((res, rej) => {
            return res({
              "toastName"     :   toasts[data.toastItem - 1][0].name,
              "toastText"     :   toasts[data.toastItem - 1][0].text,
              "toastItem"     :   data.toastItem,
              "toastRemaining":   toasts.length--
            }).catch(rej);
          });
        },

        // get user defined maxToasts
        // limit number shown
        removeOverflow: () => {
          if(data.container.childNodes.length > (props.maxToasts)) {
            // remove event listener
            // data.container.childNodes[0].removeEventListener('click', clickEvent);
            // then remove element
            data.container.removeChild(data.container.childNodes[0]);
          }
        },

        // close toast, stop loop
        closeToast: (e) => {
          if(data.container.childNodes.length > 0) {
            data.container.removeChild(e.target.parentElement)
          }

          // dont bother user, stop toasts
          clearTimeout(timeoutLoop)
          console.log('stop toasts after closing 1. dont bother.')
        },

        // clear all toasts, stop loop
        clearToasts: () => {
          if(data.container.childNodes.length > 0) {
            for(i=0; i<data.container.childNodes.length; i++) {
              // data.container.childNodes[i].removeEventListener('click', clickEvent);
              data.container.removeChild(data.container.childNodes[i]);
            }

            // stop loop
            clearTimeout(timeoutLoop)
          }
        },

        // send to order form
        sendToOrder: () => {
          if(data.container.childNodes.length > 0) {
            document.getElementById('first_name').focus();
          }

          // stop loop
          clearTimeout(timeoutLoop)
        },

        init: () => {

          let el;

          // fetch data
          return getToasts().toastData().then(res => {

            // clear loop if minimum reached
            if(res.toastRemaining === 1) {
              // clear loop, then insert last item
              clearTimeout(timeoutLoop)
            }

            // build html
            data.container.insertAdjacentHTML('beforeend',
            '<div class="toastimonial--container_'+ res.toastRemaining +'">'+
              '<div class="toastimonial__map--container">'+
                '<div class="toastimonial__map--wrapper">'+
                  '<img src="http://joomly.net/frontend/web/images/googlemap/map.png" alt="map">'+
                '</div>'+
              '</div>'+
              '<div class="toastimonial__avatar--container">'+
                '<div class="toastimonial__avatar--wrapper">'+
                  '<img src="https://avatars0.githubusercontent.com/u/18443374?s=460&v=4" alt="me">'+
                '</div>'+
              '</div>'+
              '<div class="toastimonial__info--container">'+
                '<div>'+
                  '<p><strong><u>'+ res.toastName +'</u></strong>: dolor sit amet consectetur, <em>adipisicing elit</em>.nte, earum! Iusto unde ab incidunt!</p>'+
                  '<p>'+ res.toastText +'</p>'+
                  '<p><a href="#!" class="toastimonial__link">Order Now</a></p>'+
                '</div>'+
              '</div>'+
              '<div class="toastimonial__close--container"></div>'+
            '</div>');

            // add toast event listener,
            // regrettably using a global here
            // clickEvent = document.querySelector('.toastimonial--container_'+res.toastRemaining).addEventListener('click', (e) => {
            //   if(e.target.classList.contains('toastimonial__close--container')) {
            //     // close toasts
            //     getToasts().closeToast(e);
            //   } else if(e.target.classList.contains('toastimonial__link')) {
            //     // link clicked, send user to form
            //     getToasts().sendToOrder();
            //     // stop toasts
            //     getToasts().clearToasts(e);
            //   }
            // })


          }).then((res) => {
            // remove excess toasts
            getToasts().removeOverflow();
          });
        }
      }
    };

    // call.init().toastClose[1].addEventListener('click', function() {
    //   console.log('cloces me', call.init().toastClose[0])
    // });

    // instantiate toastimonials
    toastimonial(props);
  }
  init() {
    // check if user provided params
    if(this.params != undefined) {
      let props = this.params
      this.startToasts(props);
    } else {
      // set default properties
      let props = {
        "min"       :    1,     // minimun seconds between html toasts
        "max"       :    9,     // maximum seconds between html toasts
        "maxToasts" :    3,     // maximum seconds between html toasts
      }
      this.startToasts(props);
    }
  }
}

export default Toastimonials;