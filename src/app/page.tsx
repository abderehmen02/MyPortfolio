import { CertaficateSection } from '@/components/certaficates'
import { ContactForm } from '@/components/contacts'
import { Description } from '@/components/description'
import { ExperienceSection } from '@/components/experience'
import { HomeHeading } from '@/components/heading'
import { Hero } from '@/components/hero'
import { PersonalProjects } from '@/components/personalProjects'
import { TechsSection } from '@/components/techs'
import { TestomonialSection } from '@/components/testomonialSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between ">
<HomeHeading/>      
<Hero/>
<Description/>
<ExperienceSection/>
<PersonalProjects/>
<CertaficateSection/>
<TestomonialSection/>
<TechsSection/>
<ContactForm/>
    </main>
  )
}
