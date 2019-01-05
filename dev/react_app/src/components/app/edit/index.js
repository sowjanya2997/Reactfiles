import React from "react";


class Edit extends React.Component {
    render() {
        return (
            <form>
                Name:<input type="text" />
                Alias:<input type="text" />
                Team:<input type="text" />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Edit