import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Helmet from "react-helmet";
import Layout from "../layout";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";

class Stock_rent extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title="Overzicht huur artikelen">
                <div className="index-container">
                    <Helmet>
                        <title>Overzicht huur artikelen</title>
                    </Helmet>

                    <div className="about-container md-grid mobile-fix">
                        <Card className="md-grid md-cell--8">
                            <div className="about-wrapper">
                                <CardText>
                                    <StaticQuery
                                        query={graphql`
                                    query {
                                        jdjStockRent {
                                            items {
                                                alternative_id
                                                description
                                                item_number
                                                status
                                            }
                                        }
                                    }
                                `}
                                        render={data => (
                                            <>
                                            <p>Aantal: {data.jdjStockRent.items.length}</p>

                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Artikelnummer</th>
                                                        <th>Omschrijving</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.jdjStockRent.items.map(s => (
                                                        <tr key={s.alternative_id}>
                                                            <td>{s.item_number}</td>
                                                            <td>{s.description}</td>
                                                            <td>{s.status}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            </>
                                        )}
                                    />

                                </CardText>
                            </div>
                        </Card>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Stock_rent;