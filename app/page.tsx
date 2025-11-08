import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import CursorFollower from '@/components/CursorFollower';
import FloatingElements from '@/components/FloatingElements';
import StatsCounter from '@/components/StatsCounter';
import FeaturedProducts from '@/components/FeaturedProducts';
import ParallaxSection from '@/components/ParallaxSection';
import PremiumServices from '@/components/PremiumServices';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import NewsletterSection from '@/components/NewsletterSection';

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <ScrollProgress />
      <CursorFollower />
      <FloatingElements />
      <Navbar />
      <Hero />
      <PremiumServices />
      <StatsCounter />
      <FeaturedProducts />
      <Menu />
      <About />
      <ParallaxSection />
      <InteractiveTimeline />
      <Gallery />
      <Testimonials />
      <NewsletterSection />
      <Contact />
      <Footer />
    </main>
  );
}
