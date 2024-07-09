import React, { useState, useEffect } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useFlip = function(initialState = false) {
    const [state, setState] = useState(initialState); 
    const toggleState = function() {
        setState(function(oldState) {
            return !oldState;
        });
    }

    return [state, toggleState];
}

const useAxios = function(url) {
    const [responses, setResponses] = useState([]);
    
    const addResponseData = async function(additionalURL = "") {
        const response = await axios.get(`${url}${additionalURL}`);
        setResponses(responses => [...responses, {...response.data, id: uuid()}]);
    };

    return [responses, addResponseData];
}

export default useFlip;
export {useFlip, useAxios};