import React from "react";

class DisplayUser extends React.Component {
    handleFollowersClick = (event) => {
        event.preventDefault();
        this.props.handleFollowers();
    };

    render() {
        return (
            <div className="user-container">
                <div className="user-field">
                    <p
                        style={{
                            display: !this.props.username ? "none" : "block"
                        }}
                    >
                        {" "}
                        Name: {this.props.username}
                    </p>
                </div>

                <div className="user-field">
                    <p style={{ display: !this.props.bio ? "none" : "block" }}>
                        {" "}
                        Bio: {this.props.bio}
                    </p>
                </div>

                <div className="user-field">
                    <p
                        style={{
                            display: !this.props.location ? "none" : "block"
                        }}
                    >
                        {" "}
                        Location: {this.props.location}
                    </p>
                </div>

                <div
                    className="user-field"
                    onClick={this.handleFollowersClick}
                    style={{
                        display:
                            this.props.followersStatus === true
                                ? "none"
                                : "block"
                    }}
                >
                    <p
                        style={{
                            display: !this.props.followers ? "none" : "block"
                        }}
                    >
                        {" "}
                        Followers:{" "}
                        <a href="/followers">{this.props.followers}</a>
                    </p>
                </div>
            </div>
        );
    }
}
export default DisplayUser;
