import React  from "react";

function Question({id1, id2 , name , isChecked ,onChangeQuestions}){

    return(
        <div class="checkbox-container yes-no-questions-checkbox">
             <input type="checkbox" id={id1} name={name} checked={isChecked === true} onChange={(e) => onChangeQuestions(e , true)}/>
             <label className="yesQ" htmlFor={id1}>כן</label>
             <input type="checkbox"  id={id2} name={name} checked={isChecked === false} onChange={(e) => onChangeQuestions(e , false)}/>
             <label className="noQ" htmlFor={id2}>לא</label>
             
             {/*nfkfjffk*/}
         </div>
    )
}

export default Question;