import React, { useState } from 'react'

// place this custom hook in the hooks directory
const useLocalStorage = (key, defaultValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key);

            if (value) {
                return JSON.parse(value);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }
    });

    const setValue = newValue => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
}

export default useLocalStorage