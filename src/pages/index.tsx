import List from './qcomps/artistsRemoveArr'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import BucketList from './qcomps/arrObj'

export default function Home() {
  return (
    <>
      <RequestTracker />
      <Scoreboard />
      <List />
      <BucketList />
    </>
  )
}
  