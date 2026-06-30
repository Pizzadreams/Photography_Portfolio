import Hero from "../components/Hero";
import FeaturedGallery from "../components/FeaturedGallery";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <div className="-mt-14">
        <Hero />
      </div>
    
      <FeaturedGallery />
      <ContactForm />
    </>
  );
}

export default Home;