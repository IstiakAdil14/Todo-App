import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponent() {

    const {handleThemeChange} = useContext(GlobalContext);
    return (
        <button onClick={ handleThemeChange }>Change Theme</button>
    );
}

export default ContextButtonComponent;