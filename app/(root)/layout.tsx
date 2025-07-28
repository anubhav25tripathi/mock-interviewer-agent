import {ReactNode} from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      {children}
      inside root layout
    </div>
  )
}

export default RootLayout