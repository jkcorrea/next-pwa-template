import type _React from 'react'
import type _gql from 'graphql-tag'

declare global {
  // We reduce the number of imports that a user has to do by making them
  // globals via `Webpack.ProvidePlugin`
  const React: typeof _React
  const gql: typeof _gql
}
