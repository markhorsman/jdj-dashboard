import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <h1>Star Wars People</h1>
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>birth year</th>
                        <th>homeworld</th>
                        <th>created</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.swapiPeople.results.map((p, index) => (
                        <tr key={index}>
                            <td>{p.name}</td>
                            <td>{p.birth_year}</td>
                            <td>{p.homeworld}</td>
                            <td>{p.created}</td>
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
      swapiPeople {
        results {
          name
          height
          mass
          hair_color
          skin_color
          eye_color
          birth_year
          gender
          homeworld
          created
          edited
          url
        }
      }
    }
`
