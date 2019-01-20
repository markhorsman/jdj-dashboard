import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Helmet from "react-helmet";
import Layout from "../layout";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";

class Stock_repair extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title="Overzicht reparatie artikelen">
                <div className="index-container">
                    <Helmet>
                        <title>Overzicht reparatie artikelen</title>
                    </Helmet>

                    <div className="about-container md-grid mobile-fix">
                        <Card className="md-grid md-cell--8">
                            <div className="about-wrapper">
                                <CardText>
                                    <StaticQuery
                                        query={graphql`
                                    query {
                                        jdjStockRepair {
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
                                                <p>Aantal: {data.jdjStockRepair.items.length}</p>

                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <th>Artikelnummer</th>
                                                        <th>Omschrijving</th>
                                                        <th>Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {data.jdjStockRepair.items.map(s => (
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

export default Stock_repair;