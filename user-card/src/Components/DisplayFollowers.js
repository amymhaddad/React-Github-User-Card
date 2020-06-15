import React from 'react';

class DisplayFollowers extends React.Component {

    render() {
        return (

            <div>
                {this.props.follower}
            </div>
        )
    }
}

export default DisplayFollowers;