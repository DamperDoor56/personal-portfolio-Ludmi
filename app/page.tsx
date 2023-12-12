import { Navbar } from '@/components/Navbar'
import { Presentation } from '@/pages/Presentation'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Presentation />
    </main>
  )
}
