import React from "react";
import axios from "axios";
import DisplayFollowers from "./DisplayFollowers";

class Followers extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.fetchFollowers !== prevProps.fetchFollowers) {
            let followers = `https://api.github.com/users/${this.props.user}/followers`;
            axios
                .get(followers)
                .then((response) => {
                    let data = response.data;
                    let names = data.map((person) => person.login);
                    this.props.onFollowersSubmit(names);
                })
                .catch((error) => {
                    console.error("Server Error", error);
                });
        }
    }

    render() {
        return (
            <>
                {this.props.followers.map((name) => (
                    <DisplayFollowers key={name} follower={name} />
                ))}
            </>
        );
    }
}
export default Followers;
