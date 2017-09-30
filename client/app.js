const root = document.querySelector('#root');

const numbers = [
  { text: '0', value: 0 },
  { text: '1', value: 1 },
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
  { text: '5', value: 5 },
  { text: '6', value: 6 },
  { text: '7', value: 7 },
  { text: '8', value: 8 },
  { text: '9', value: 9 },
];

const operators = [
  { text: '+', value: '+' },
  { text: '-', value: '-' },
  { text: '=', value: '=' }
];

const render = (data) => {
  root.innerHTML = gui(data);
};

const click = (e) => {
  render({ screen: e.target.value });
};

const clickOperator = (e) => {
  if( e.target.value === 'equals' ){
    window.location = `/add?operands=${document.querySelector('#screen').value}`
  }
};

const screen = (value) => `
  <input id="screen" type="text" value="${value}" />
`;

const number = (text, value) => `
  <button class="btn" onClick="(${click})(event)" value="${value}">
    ${text}
  </button>
`;

const operator = (text, value) => `
  <button class="btn" onClick="(${clickOperator})(event)" value="${value}">
    ${text}
  </button>
`;

const gui = (data) => `
  <div class="wrapper" >
    ${
      screen(data.screen)
    }
    <div class="numbers">
      ${
        numbers.map(b => number(b.text, b.value)).join('')
      }
    </div>
    <div class="operators">
      ${
        operators.map(o => operator(o.text, o.value)).join('')
      }
    </div>
  </div>
`;

render({ screen: 0 });