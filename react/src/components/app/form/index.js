import React from "react";
import style2 from "../../styles/style2.css"

class Form extends React.Component{
    render() {
        return (
            <div>
            <form>
           <label>
                Name:
                <input type="text" name="name" />
           </label>
        
                <input type="submit" value="Submit" />
            </form>
            <div>The slow</div>
            </div>
            
        )
    }
}
export default Form;