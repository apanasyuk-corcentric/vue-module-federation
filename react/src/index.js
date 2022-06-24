import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


export default function mount(el, data) {
    ReactDOM.render(<App {...data}/>, el);
}

// if (process.env.NODE_ENV !== "production") {
//     mount(document.getElementById('root'), { text : "btn text"});
// }
