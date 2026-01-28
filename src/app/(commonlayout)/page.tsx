import Navbar from "@/components/layout/Navbar";
import Categories from "@/components/modules/home/Categories";
import FeaturedMeals from "@/components/modules/home/FeaturedMeals";
import Footer from "@/components/modules/home/Footer";
import Hero from "@/components/modules/home/Hero";
import HowItWorks from "@/components/modules/home/HowItWorks";
import ProviderCTA from "@/components/modules/home/ProviderCTA";

const CommonLayout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <FeaturedMeals />
            <HowItWorks />
            <ProviderCTA />
            <Footer />
        </div>
    );
};

export default CommonLayout;