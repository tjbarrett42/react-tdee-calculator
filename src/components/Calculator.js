import React from 'react';

const Calculator = props => {
    const inputValues = props.values;

    return (
            <div>
                Calculated result = {inputValues / 3};
            </div>
    );
    // Note: in HTML return, we are referring to the component's specific props from parent, not the actual name
}

export default Calculator;