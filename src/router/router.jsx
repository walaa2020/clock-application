import React from 'react'
import { createHashRouter } from 'react-router-dom'
import { AlarmSystem, Countdown, DigitalClock } from '../pages'
import Layout from '../layout/Layout'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DigitalClock /> },
      { path: "countdown", element: <Countdown /> },
      { path: "alarm", element: <AlarmSystem /> },
    ],
  },
])

export default router