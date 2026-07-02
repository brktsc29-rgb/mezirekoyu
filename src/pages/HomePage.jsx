import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import QuickLinks from '../components/QuickLinks';
import About from '../components/About';
import Announcements from '../components/Announcements';
import Events from '../components/Events';
import VillageIntro from '../components/VillageIntro';
import BoardMembers from '../components/BoardMembers';
import MembershipDonation from '../components/MembershipDonation';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Stats />
        </div>

        <QuickLinks />

        <About />

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-10">
              <Announcements />
              <Events />
            </div>
          </div>
        </section>

        <VillageIntro />

        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <BoardMembers />
              <MembershipDonation />
            </div>
          </div>
        </section>

        <Gallery />

        <section className="bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
