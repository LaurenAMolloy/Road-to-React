import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../../components/Nav'


export default function MainLayout() {
  return (
    <>
    <div className="layout-container">
     <Nav />
     <main>
        <Outlet />
     </main>
    </div>
    </>
  )
}

