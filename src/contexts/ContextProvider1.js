import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = { // 右上角的icon 上方导航栏默认点击事件
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => { //children 子页面
    const [activeMenu, setActiveMenu] = useState(true);//侧边栏是否显示
    const [isClicked, setIsClicked] = useState(initialState); //上方导航栏点击事件
    const [screenSize, setScreenSize] = useState(undefined) // undefined 不清楚是什么类型的屏幕手机?还是电脑web

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false)
      };
    
      const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false)
      };

    const handleClick = (clicked) =>{ //?????? 点击拿object进行点击? 点击走页面
        setIsClicked({...initialState,[clicked]:true}) //...是 扩展运算符(…)用于取出参数对象中的所有可遍历属性
    }

    
    
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize, 
            setScreenSize,
            setCurrentColor, 
            setCurrentMode, 
            setMode, 
            setColor,
            themeSettings, 
            setThemeSettings
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);