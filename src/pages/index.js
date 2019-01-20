import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import loremIpsum from 'lorem-ipsum';
import config from "../../data/SiteConfig";

class Index extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title="Home">
                <div className="index-container">
                    <Helmet>
                        <title>{config.siteTitle}</title>
                        <link rel="canonical" href={`${config.siteUrl}`} />
                    </Helmet>

                    <div className="about-container md-grid mobile-fix">
                        <Card className="md-grid md-cell--8">
                            <div className="about-wrapper">
                                <CardText>
                                    <h1>Hi {isLoggedIn() ? getUser().name : "people"}</h1>
                                    <p>
                                        {isLoggedIn() ? (
                                            <>
                                                You are logged in, so check your{" "}
                                                <Link to="/app/profile">profile</Link>
                                            </>
                                        ) : (
                                            <>
                                                You should <Link to="/app/login">log in</Link> to see restricted
                                                content
                                            </>
                                        )}
                                    </p>
                                </CardText>
                            </div>
                        </Card>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;