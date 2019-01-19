import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <h1>Artikelen</h1>

                <p>Aantal: {data.swapiStock.items.length}</p>

                <table>
                    <thead>
                    <tr>
                        <th>Artikelnummer</th>
                        <th>Omschrijving</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.swapiStock.items.map((s, index) => (
                        <tr key={s.alternative_id}>
                            <td>{s.item_number}</td>
                            <td>{s.description}</td>
                            <td>{s.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query {
      swapiStock {
        items {
          alternative_id
          description
          item_number
          status
        }
      }
  }
`
