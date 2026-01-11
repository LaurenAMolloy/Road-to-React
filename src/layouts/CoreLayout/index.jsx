import React from 'react'
import { Outlet } from 'react-router'
import CoreDashBoard from '../../components/CoreDashBoard'


export default function CoreLayout() {
  return (
    <>
    <div className="flex flex-col items-center w-full">
        <CoreDashBoard />
        <Outlet />
    </div>
    </>
  )
}