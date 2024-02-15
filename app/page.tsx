import { Navbar } from '@/components/Navbar'
import { About } from '@/pages/About'
import { Presentation } from '@/pages/Presentation'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Presentation />
      <About />
    </main>
  )
}
