import App from './js/app';
import './scss/main.scss'

if(typeof(lf_components) !== "undefined") {
  let app = new App(lf_components);
  app.init()
}