import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (err) {
            console.log(err);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
