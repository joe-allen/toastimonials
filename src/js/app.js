import Toastimonial from './components/Toastimonial';

class App {
  constructor(components) {
    this.toastimonial = components.toastimonial;
  }
  init() {

    let props = {};

    if(this.toastimonial[0]) {

      // TODO: find way to make componentName dynamic
      props.componentName = 'toastimonial';

      if(this.toastimonial[1] != undefined) {
        props.params = this.toastimonial[1];
      }

      let toastimonial = new Toastimonial(props);
      toastimonial.init();
    }
  }
}

export default App;