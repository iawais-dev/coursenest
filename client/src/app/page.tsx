import { Cta_section, Features_section, Footer, Hero_section, Navbar, Stats_section, Testimonials_section } from "@/components/landing";
import ToggleTheme from "@/components/ui/ToggleTheme";
import Image from "next/image";
export default function Home() {
  return (

    <div className="relative bg-gradient-to-br from-[var(--bg-gradient-from)] via-[var(--bg-gradient-via)] to-[var(--bg-gradient-to)]">
      <ToggleTheme />
      <Navbar/>
      <Hero_section/>
      <Stats_section />
      <Features_section />
      <Testimonials_section />
      <Cta_section />
      <Footer />
    </div>
  );
}
