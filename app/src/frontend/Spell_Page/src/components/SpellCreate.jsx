import "./spellCreate.css";
import { useState } from "react";
import CreatePage from "./CreatePage"

function SpellCreate(){

    const [isCreate, setIsCreate] = useState(false);    

    return(
        <>
        <div>
            <div className="createButtonContainer">
                <button className="create" onClick={() => setIsCreate(true)}>
                        Spell Selection  
                </button>
            </div>
            <div className="createPageContainer">
                <CreatePage trigger={isCreate} setTrigger={setIsCreate}>

                </CreatePage>
            </div>

        </div>

        </>
    );

}

export default SpellCreate