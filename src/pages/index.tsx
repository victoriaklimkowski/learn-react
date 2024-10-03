import Profile from "./qcomps/profile_mistake";
import MyComp from "./qcomps/firstcomp";
import Bio from "./qcomps/bios";
import Gallery from "./qcomps/gallery_props";
import PackingList from "./qcomps/props_item";

export default function Home() {
  return (
    <>
      <Bio />
      <MyComp />
      <Profile />
      <Gallery />
      <PackingList />
    </>
  )
}
