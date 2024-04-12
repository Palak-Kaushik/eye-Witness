import React from "react"
import './reportcrime.css'

function ReportCrime() {

    return (
        <body>
            <div className="crime-reporting">
                <div className="header">
                    <br />
                    <br />
                    <div className="title">
                        Report Crime
                    </div>
                </div>
                <div className="form-container">
                    <br />
                    <br />
                    <div className="input-container">
                        <div className="label">
                            Location
                        </div>
                        <input
                            placeholder="Enter location"
                            type="text"
                        />
                    </div>
                    <br />
                    <div className="input-container">
                        <div className="label">
                            Time stamp
                        </div>
                        <input
                            placeholder="Enter time stamp"
                            type="text"
                        />
                    </div>
                    <br />
                    <div className="input-container">
                        <div className="label">
                            Label Crime
                        </div>
                        <input
                            placeholder="Enter label"
                            type="text"
                        />
                    </div>
                    <br />
                    <div className="input-container">
                        <div className="label">
                            Comments
                        </div>
                        <textarea placeholder="Enter comments" />
                    </div>
                    <div className="button-container">
                        <button className="post-btn">
                            Post
                        </button>
                    </div>
                </div>
                <br />
                <div className="footer">
                    <div className="join-discussion">
                        <button className="join-discussion-btn">
                            Chat room
                        </button>
                    </div>
                    <div className="see-crime-detail">
                        <button className="see-crime-detail-btn">
                            Crime detail
                        </button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default ReportCrime