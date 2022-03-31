import React, { createContext, useState, useEffect } from 'react';

export const ListenerContext = createContext();

export const ListenerProvider = ({ children }) => {

    const [width, setWidth] = useState(window.innerWidth)

    return (
        <ListenerContext.Provider value={{ width, setWidth }}>
            {children}
        </ListenerContext.Provider>
    )
}