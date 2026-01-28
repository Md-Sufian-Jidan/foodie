import { Navbar } from "@/components/layout/Navbar";
import Categories from "@/components/modules/home/Categories";
import FeaturedMeals from "@/components/modules/home/FeaturedMeals";
import Hero from "@/components/modules/home/Hero";

const CommonLayout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <FeaturedMeals />
        </div>
    );
};

export default CommonLayout;