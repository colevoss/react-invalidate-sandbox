import React, { Component } from 'react';
import logo from './logo.svg';
import { Validator } from 'react-invalidate';
import './App.css';

function required(val = '', message = 'Required') {
  return !!val.replace(/^\s+/, '') || Promise.reject(message);
}


const test = (val, message = 'you suck') => {
  return val === 'test' || Promise.reject(message);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Validator
          validators={[
            required,
            test,
          ]}
          >
          {({ validate, isValid, message }) => {
            return (
              <div style={{border: `1px solid ${isValid ? 'blue' : 'red'}`}}>
                <input type="text" onBlur={(e) => validate(e.target.value)} />
                {message &&
                  <div>{message}</div>
                }
              </div>
            );
          }}
        </Validator>
      </div>
    );
  }
}

export default App;
