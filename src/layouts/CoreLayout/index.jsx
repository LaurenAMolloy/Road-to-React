import React from 'react'
import { Outlet } from 'react-router'
import CoreDashBoard from '../../components/CoreDashBoard'


export default function CoreLayout() {
  return (
    <>
    <div className="core-layout">
        <CoreDashBoard />
        <Outlet />
    </div>
    </>
  )
}