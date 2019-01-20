import React, { Component } from "react";
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"
import UserLinks from "../UserLinks";
import "./ToolbarActions.scss";

class Toolbar extends Component {
  render() {
    const { config } = this.props;
    const content = { message: "", login: true }

    if (isLoggedIn()) {
        content.message = `Hello, ${getUser().name}`
    } else {
      content.message = "You are not logged in"
    }

    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
            <span>{content.message} </span>

            {isLoggedIn() ? (
                <a
                    href="/"
                    onClick={event => {
                        event.preventDefault()
                        logout(() => navigate(`app/login`))
                    }}
                >
                    Logout
                </a>
            ) : null}

            <UserLinks config={config} />
        </div>
      </div>
    );
  }
}

export default Toolbar;
