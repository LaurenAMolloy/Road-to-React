import React from 'react'
import { Outlet } from 'react-router'


export default function CoreLayout() {
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