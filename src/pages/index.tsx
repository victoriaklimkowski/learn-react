// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Gallery from './components/gallery'
// import Profile from './components/profile'
import MyComp  from './qcomps/firstcomp'
import TodoList from './qcomps/todos'
import Profile from './components/profile_props'
import Gallery from './qcomps/gallery_props'
import Square from './components/square'
import PackingList from './components/props_item'

export default function Home() {
  return (
    <>
      <PackingList />
      <Square />
      <Gallery />
      <Profile />
      <TodoList />
      <MyComp />
      {/* <Gallery /> */}
      {/* <Profile /> */}
    </>
  )
}
