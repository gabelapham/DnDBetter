import "./SpellLog.css";

function SpellLog(prop){

    const output = [];
    for(let i = 0; i < prop; i++){
        output.push(<input className="spell" type="text" />);
    }

    return(
        <>
            <div className="spellContainer">            
                    {output}    
                    <input className="spell" type="text"/>  
                    <input className="spell" type="text"/>  
                    <input className="spell" type="text"/>  
                    <input className="spell" type="text"/>  
                    <input className="spell" type="text"/>  
                    <input className="spell" type="text"/>  
                    <input className="spell" type="text"/>  
            </div>
        
        </>
    )

}


export default SpellLog