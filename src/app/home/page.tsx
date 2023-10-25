'use client'
import Home from '../components/Home'
import ReduxProvider from '../redux/ReduxProvider'

export default function HomePage() {
  return (
    <ReduxProvider>
      <Home />
    </ReduxProvider>
  )
}
