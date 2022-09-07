import React from "react";

const InputRange = ({ value, setValue }) => {
    return(
        <>
            <input type="range" onChange={setValue} value={value} />
        </>
    );
}

export default InputRange;