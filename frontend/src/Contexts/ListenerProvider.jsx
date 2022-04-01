import React, { createContext, useState, useEffect } from 'react';

export const ListenerContext = createContext();

export const ListenerProvider = ({ children }) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)

    return (
        <ListenerContext.Provider value={{ width, setWidth, open, setOpen }}>
            {children}
        </ListenerContext.Provider>
    )
}