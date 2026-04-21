import React from "react";

type appState = {
    mode : string
}

export const initialState: appState = {
    mode: localStorage.getItem("mode")
    ? localStorage.getItem("mode")!
    : window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
}

type Action = { type: "Switch_Mode" };

export const reducer = (state : appState, action: Action) => {
    switch (action.type) {
        case "Switch_Mode":
            const newMode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("mode", newMode);
            return { ...state, mode: newMode };
        default:
            return state;
    } 
}
const defaultDispatch: React.Dispatch<Action> = () => initialState;

const Store = React.createContext<{
    state: appState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: defaultDispatch,
});

function StoreProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <Store.Provider value={{ state, dispatch }} >
            {children}
        </Store.Provider>
    );
}

export { Store, StoreProvider };