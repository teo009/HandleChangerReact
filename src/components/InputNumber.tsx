import React from "react";

const InputNumber = ({ value, setValue }) => {
    return(
        <>
            <input type="number" value={value} onChange={setValue} />
        </>
    );
}

export default InputNumber;