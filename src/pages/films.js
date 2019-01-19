import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <h1>Star Wars Films</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Release date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.swapiFilms.results.map((f, index) => (
                        <tr key={index}>
                            <td>{f.title}</td>
                            <td>{f.director}</td>
                            <td>{f.producer}</td>
                            <td>{f.release_date}</td>
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
      swapiFilms {
        results {
          title
          episode_id
          opening_crawl
          director
          producer
          release_date
          created
          edited
          url
        }
      }
    }
`
