import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'papayawhip', color: 'tomato'}}>
                {buttonText}
            </button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));