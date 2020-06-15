import React from "react";

class UserForm extends React.Component {
    state = {
        newUserName: ""
    };

    handleOnChange = (event) => {
        let newUser = event.target.value;
        this.setState({ newUserName: newUser });
    };

    handleUserSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.newUserName);
        this.setState({
            newUserName: ""
        });
    };

    render() {
        const { username } = this.state.newUserName;
        return (
            <form>
                <label>Enter a GitHub username: </label>
                <input
                    type="text"
                    value={username}
                    onChange={this.handleOnChange}
                    placeholder="add a username..."
                />
                <button onClick={this.handleUserSubmit}>Search</button>
            </form>
        );
    }
}

export default UserForm;
