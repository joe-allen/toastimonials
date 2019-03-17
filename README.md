# Toastimonials

Built w/ HTML, SCSS (compiled using PostCSS & Browserlist), Javasctipt (ES6 compiled using Babel).

## TO USE:

1. Clone repo
2. Add element:

```html
<div class="toastimonials--container"></div>
```

3. Set object properties:

```javascript
// set toastimonial parameters
var toastimonialParams = {
  "min"       :    3,     // minimun seconds between html toasts
  "max"       :    12,    // maximum seconds between html toasts
  "maxToasts" :    3,     // maximum seconds between html toasts
}
```

4. Set component to true (w/o including `toastimonialParams` default parameters will be used):

```javascript
var lf_components = {
  toastimonial: [true, toastimonialParams]    // type: array
}
```


Include script:

```html
<script src="main.js"></script>
```

5. run `npm install`, then `parcel src/index.html [--no-cache]`

## TO DO:
- [ ] Create documentation
- [ ] Create pricing stucture
- [ ] Build admin platform for users

## QUESTIONS:

## GENERAL