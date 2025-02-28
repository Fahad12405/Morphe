'use client'

const localStorageHandler = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key) => JSON.parse(localStorage.getItem(key)) || null,
    remove: (key) => localStorage.removeItem(key)
};

export default localStorageHandler;