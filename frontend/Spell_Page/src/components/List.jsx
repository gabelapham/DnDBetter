function Items(){
    /*when you have an array and you have to loop through and
    render it onto your web page, you need to set unique id's
    for each element */
    
    /*list of string which doesn't have id attribute */
    const colors = ["blue, purple, green"];
    const colorsList = colors.map((color, index) =>(
        <h3 key={index}>
            {color}
        </h3>
    ))




    /*list of object and manually set id's*/
    const items = [
        {id: 1, name:"blue"},
        {id: 2, name:"black"},
        {id: 3, name:"red"},
    ];

    /*loop through list and perform operation */
    const itemsList = items.map((item) => (
        <h3 key={item.id}>{item.id} some text {item.name}</h3>
    ));

    return(
        {itemsList}
    );
}