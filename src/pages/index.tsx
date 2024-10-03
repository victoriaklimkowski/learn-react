import MyComp from "./qcomps/firstcomp";
import Profile from "./qcomps/profile_mistake";
import Bio from "./qcomps/bios";
import PackingList from "./qcomps/props_item";
// import Bio from "./qcomps/bio";

export default function Home() {
  return (
    <>
      <Bio />
      <MyComp />
      <Profile />
      <PackingList />
    </>
  )
}
