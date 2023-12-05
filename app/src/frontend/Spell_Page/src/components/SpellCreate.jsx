import "./spellCreate.css";
import { useState } from "react";
import CreatePage from "./CreatePage"

function SpellCreate({classSelected, handleAdd}){

    const [isCreate, setIsCreate] = useState(false);    

    /*when the child Create page make call back call, it will call the grandparent, so Spellbackground.jsx */

    return(
        <>
        <div>
            <div className="createButtonContainer">
                <button className="create" onClick={() => setIsCreate(true)}>
                        Spell Selection  
                </button>
            </div>
            <div className="createPageContainer">
                <CreatePage classSelected={classSelected} passedHandleAdd={handleAdd} trigger={isCreate} setTrigger={setIsCreate}>

                </CreatePage>
            </div>

        </div>

        </>
    );

}

export default SpellCreate