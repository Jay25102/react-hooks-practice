import React, { useState } from "react";

const useFlip = function(initialState = false) {
    const [state, setState] = useState(initialState); 
    const toggleState = function() {
        // setState(oldState => !oldState);
        setState(function(oldState) {
            return !oldState;
        });
    }

    return [state, toggleState];
}

export default useFlip;