import React, { Component } from 'react'

class CheckIn extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container center" id="checkin">
                    <h1>To do</h1>
                    <ul>
                        <li>
                            Displays Currently Checked in store
                            <p>- checkin or out button</p>
                            <p>- view # of people checked in</p>
                        </li>

                        <li>Displays previously checked in stores(password protected) </li>
                    </ul>
                </div>

            </React.Fragment>
        );
    }
}

export default CheckIn;