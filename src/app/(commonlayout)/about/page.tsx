import AboutCallToAction from "@/components/modules/about/AboutCallToAction";
import AboutCustomerTrust from "@/components/modules/about/AboutCustomerTrust";
import AboutHero from "@/components/modules/about/AboutHero";
import AboutHowItWorks from "@/components/modules/about/AboutHowItWorks";
import AboutMeetVendors from "@/components/modules/about/AboutMeetVendors";
import AboutMissionVision from "@/components/modules/about/AboutMissionVision";
import AboutOurStory from "@/components/modules/about/AboutOurStory";
import AboutServiceCoverage from "@/components/modules/about/AboutServiceCoverage";
import AboutWhyMealMate from "@/components/modules/about/AboutWhyMealMate";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutOurStory />
            <AboutMissionVision />
            <AboutHowItWorks />
            <AboutMeetVendors />
            <AboutCustomerTrust />
            <AboutWhyMealMate />
            <AboutServiceCoverage />
            <AboutCallToAction />
        </main>
    );
};

