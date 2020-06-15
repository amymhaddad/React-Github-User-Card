import React from "react";
import axios from "axios";
import DisplayUser from "./DisplayUser";

class UserList extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.username !== prevProps.username) {
            let userData = `https://api.github.com/users/${this.props.username}`;
            axios
                .get(userData)
                .then((response) => {
                    let data = response.data;
                    this.props.onGitHubUserSubmit(data);
                })
                .catch((error) => {
                    console.error("Server Error", error);
                });
        }
    }
    render() {
        return (
            <>
                <DisplayUser
                    key={this.props.userGitHubData.id}
                    username={this.props.userGitHubData.name}
                    location={this.props.userGitHubData.location}
                    followers={this.props.userGitHubData.followers_url}
                    followersStatus={this.props.followersStatus}
                    handleFollowers={this.props.handleFollowers}
                />
            </>
        );
    }
}
export default UserList;
