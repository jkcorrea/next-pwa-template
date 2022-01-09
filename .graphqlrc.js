require('dotenv').config({ path: __dirname + '/.env' })

const documents = ['src/**/*.{graphql,ts,tsx}']
const generatedTypes = 'src/generated/graphql.ts'
const generatedSchema = './graphql.schema.json'

module.exports = {
  overwrite: true,
  endpoint: null,
  schema: [
    {
      [process.env.HASURA_API_URL]: {
        headers: {
          'x-hasura-access-key': `${process.env.HASURA_ADMIN_SECRET}`,
        },
      },
    },
  ],
  documents,
  extensions: {
    languageService: {
      cacheSchemaFileForLookup: true,
    },
    endpoints: {
      default: {
        url: `${process.env.HASURA_API_URL}`,
        headers: {
          'x-hasura-access-key': `${process.env.HASURA_ADMIN_SECRET}`,
        },
      },
    },
    codegen: {
      generates: {
        [generatedTypes]: {
          plugins: [
            // TODO: add auth headers here
            // { add: { content: "import { endpointUrl, fetchParams } from './config.'" },
            'typescript',
            'typescript-operations',
            'typescript-react-query',
          ],
          config: {
            skipTypename: false,
            withHooks: true,
            withHOC: false,
            withComponents: false,
            fetcher: {
              endpoint: `${process.env.HASURA_API_URL}`,
            },
          },
        },
        [generatedSchema]: {
          plugins: ['introspection'],
        },
      },
    },
  },
}
