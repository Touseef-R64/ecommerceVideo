import Navbar from "@/components/pageComponents/general/navbar";
import FaqsSections from "@/components/pageComponents/homePage/faqsSections";
import FeaturedSection from "@/components/pageComponents/homePage/featuredSection";
import Footer from "@/components/pageComponents/homePage/footer";
import Header from "@/components/pageComponents/homePage/header";
import ProductsSection from "@/components/pageComponents/homePage/productsSection";
import ReviewsSection from "@/components/pageComponents/homePage/reviewsSection";



export default function Home() {
  return (
    <main className="w-full min-h-[100vh] h-full ">
      <Navbar />
      <Header />
      <FeaturedSection />
      <ProductsSection />
      <ReviewsSection />
      <FaqsSections/>
      <Footer />
    </main>
  );
}
