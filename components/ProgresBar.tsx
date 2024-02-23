'use client'

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

export default function ProgressBarProvider({ children } : { children: React.ReactNode } ) {
  return (
    <>
      <ProgressBar height="5px" options={{ showSpinner: false}} shallowRouting />
      { children }
    </>
  )
}