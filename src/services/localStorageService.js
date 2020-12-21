const setMode = (mode) => {
    localStorage.setItem("mode", mode);
}

const getMode = () => {
   const mode = localStorage.getItem("mode");
   return mode;
}


export const LocalStorageService = {
    setMode,
    getMode
   
}