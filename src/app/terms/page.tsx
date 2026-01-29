
export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F7] py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
                <h1 className="font-heading text-3xl text-[#1F2933] font-bold text-center">
                    Terms and Conditions
                </h1>
                <p className="mt-4 text-center font-body text-[#6B7280]">
                    Last updated: January 29, 2026
                </p>

                <section className="mt-10 space-y-6">
                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        1. Introduction
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        Welcome to MealMate! By using our website and services, you agree to these terms and conditions. Please read them carefully.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        2. User Accounts
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        Users must register an account to place orders or provide services. You are responsible for maintaining the confidentiality of your account information and password.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        3. User Roles
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        MealMate has three roles: Customer, Provider, and Admin. Users must select the appropriate role upon registration. Admins manage the platform and can take necessary actions to ensure compliance.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        4. Orders and Payments
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        Customers place orders via the website. Currently, payments are Cash on Delivery (COD). Providers are responsible for fulfilling orders in a timely manner.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        5. Content and Reviews
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        Users may leave reviews on meals. All content should be respectful and appropriate. MealMate reserves the right to remove any offensive or inappropriate content.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        6. Privacy
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        We respect your privacy. Please review our Privacy Policy to understand how your information is collected, used, and protected.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        7. Termination
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        MealMate reserves the right to suspend or terminate user accounts for violations of these terms or any unlawful activities.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        8. Changes to Terms
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        We may update these Terms and Conditions from time to time. Updated terms will be posted on this page with the date of revision.
                    </p>

                    <h2 className="font-heading text-xl text-[#1F2933] font-semibold">
                        9. Contact
                    </h2>
                    <p className="font-body text-[#6B7280]">
                        If you have any questions about these Terms, please contact us at <a href="mailto:support@mealmate.com" className="text-[#D97757] underline">support@mealmate.com</a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
