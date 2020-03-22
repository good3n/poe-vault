// import Link from "next/link";
import fetch from 'isomorphic-unfetch'
import GlobalStyle from '../assets/styles/global'
import { App } from '../components/App'

const Index = props => {
  const stashes = props.users.stashes
  return (
    <>
      <GlobalStyle />
      <App data={stashes} />
    </>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('http://api.pathofexile.com/public-stash-tabs')
  const data = await res.json()

  return {
    // shows: data.map(entry => entry.show)
    // users: data.stashes.users.map(user => user[0])
    users: data,
  }
}

export default Index
