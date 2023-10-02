import Leftsidebar from '@/components/shared/Leftsidebar'
import Topbar from '@/components/shared/Topbar'
import Leftsidebartwo from '@/components/shared/leftsidebar2'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <Topbar />
      <div className='flex '>
        <Leftsidebar />
        <Leftsidebartwo />
      </div>
    </main>
  )
}
