import React from "react";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";
import Followers from "./Components/Followers";

class App extends React.Component {
    state = {
        username: "",
        showFollowers: false,
        userGitHubData: {},
        userFollowers: []
    };

    componentDidMount = () => {
        const username = JSON.parse(localStorage.getItem("username"));
        if (username) {
            this.setState({ username });
        }
        const userFollowers = JSON.parse(localStorage.getItem("userFollowers"));
        if (userFollowers) {
            this.setState({ userFollowers });
        }

        const showFollowers = JSON.parse(localStorage.getItem("showFollowers"));
        if (showFollowers) {
            this.setState({ showFollowers });
        }
    };

    handleGetUserData = (userData) => {
        this.setState({ userGitHubData: userData });
        localStorage.setItem("userGitHubData", JSON.stringify(userData));
    };

    handleGetUserName = (githubUserName) => {
        this.setState({ username: githubUserName });
        localStorage.setItem("username", JSON.stringify(githubUserName));
    };

    handleSeeFollowers = () => {
        this.setState({ showFollowers: true });
        localStorage.setItem("showFollowers", JSON.stringify(true));
    };

    handleAddFollowers = (followers) => {
        this.setState({ userFollowers: followers });
        localStorage.setItem("userFollowers", JSON.stringify(followers));
    };

    render() {
        return (
            <>
                <UserForm onFormSubmit={this.handleGetUserName} />

                <UserList
                    username={this.state.username}
                    followersStatus={this.state.showFollowers}
                    handleFollowers={this.handleSeeFollowers}
                    onGitHubUserSubmit={this.handleGetUserData}
                    userGitHubData={this.state.userGitHubData}
                />

                <Followers
                    user={this.state.username}
                    fetchFollowers={this.state.showFollowers}
                    onFollowersSubmit={this.handleAddFollowers}
                    followers={this.state.userFollowers}
                />
            </>
        );
    }
}

export default App;
