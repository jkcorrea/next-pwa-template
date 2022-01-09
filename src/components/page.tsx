import Head from 'next/head'
import Appbar from 'src/components/appbar'
import BottomNav from 'src/components/bottom-nav'
import { useMeQuery } from '../generated/graphql'
import gql from 'graphql-tag'

const ME_QUERY = gql`
  query me($userId: uuid!) {
    profile(where: { userId: { _eq: $userId } }) {
      alias
    }
  }
`

interface Props {
  title?: string
  children: React.ReactNode
}

const Page = ({ title, children }: Props) => {
  const { data } = useMeQuery({
    userId: '8f336876-14bc-4193-bc4d-4b9e00f68857',
  })
  return (
    <>
      {title ? (
        <Head>
          <title>Rice Bowl | {title}</title>
        </Head>
      ) : null}

      <Appbar />

      <main
        /**
         * Padding top = `appbar` height
         * Padding bottom = `bottom-nav` height
         */
        className='max-w-screen-md pt-20 pb-16 mx-auto px-safe sm:pb-0'
      >
        <div className='p-6'>{children}</div>
      </main>

      <BottomNav />
    </>
  )
}

export default Page
