import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ServicesCarousel } from "@/components/services-carousel"
import { FinancingSection } from "@/components/financing-section"
import { WorkSpot } from "@/components/work-spot"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <main className="bg-[#ece8e3]">
      <StructuredData />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServicesCarousel
        
        images={[
          "/img/c-1.webp",
          "/img/c-2.webp",
          "/img/c-3.webp",
          "/img/c-4.webp",
        ]}
       />
       <FinancingSection />
       <WorkSpot />
       <Footer />
    </main>
  )
}
