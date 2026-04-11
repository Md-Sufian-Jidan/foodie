import AboutCallToAction from '@/components/modules/about/AboutCallToAction';
import ContactForm from '@/components/modules/contact/ContactForm';
import ContactHero from '@/components/modules/contact/ContactHero';
import ContactInfo from '@/components/modules/contact/ContactInfo';
import ContactMap from '@/components/modules/contact/ContactMap';
import Faq from '@/components/modules/home/Faq';

const ContactPage = () => {
    return (
        <main>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactMap />
            <Faq />
            <AboutCallToAction />
        </main>
    );
};

export default ContactPage;