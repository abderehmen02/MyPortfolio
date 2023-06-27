import { Description } from '@/components/description'
import { HomeHeading } from '@/components/heading'
import { Hero } from '@/components/hero'
import { TechsSection } from '@/components/techs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between ">
<HomeHeading/>      
<Hero/>
<Description/>
<TechsSection/>
    </main>
  )
}
