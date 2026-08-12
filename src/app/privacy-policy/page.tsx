import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Cloudbox99",
  description: "Privacy Policy for Cloudbox99. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-base/7 text-muted">
            <p>
              At Cloudbox99, your privacy is important to us. This Privacy Policy outlines how we collect, use,
              and protect your personal information when you interact with our website, services, and
              products. By using our website or services, you agree to the practices described in this policy.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Your name, email address, phone number, billing address, shipping address, and payment details when you make a purchase or sign up for our services.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses, browser type, device information, pages visited, and interaction data.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> To improve your experience, we use cookies and similar technologies to collect data about your preferences and site usage.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Provide and Improve Services:</strong> Process orders, manage accounts, and deliver products or services.</li>
                <li><strong>Personalize User Experience:</strong> Customize content and recommendations based on your preferences.</li>
                <li><strong>Communicate:</strong> Send updates, promotional offers, and customer service responses.</li>
                <li><strong>Analytics:</strong> Analyze website traffic and usage trends to improve functionality and services.</li>
                <li><strong>Compliance:</strong> Ensure adherence to legal obligations and prevent fraud.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Sharing Your Information</h2>
              <p className="mb-4">We do not sell your personal information to third parties. However, we may share your data in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With third-party vendors who assist in delivering our services, such as payment processors and shipping companies.</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal processes.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, update, or delete your personal information by contacting us at <a className="text-white underline hover:no-underline">cs@cloudbox99.com</a></li>
                <li>Opt out of marketing communications by following the unsubscribe link in our emails.</li>
                <li>Restrict or object to the processing of your data under applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
              <p>
                We implement robust security measures to protect your data from unauthorized access,
                alteration, disclosure, or destruction. While we strive to safeguard your information, no method
                of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                Cookies help us improve your browsing experience. You can manage cookie preferences
                through your browser settings. Note that disabling cookies may affect the functionality of our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. Cloudbox99 is not responsible for the
                privacy practices or content of these external sites. We encourage you to review their privacy
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page, and
                the &ldquo;Effective Date&rdquo; will be updated. Continued use of our services indicates your acceptance of
                any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please contact
                Us: cloudbox99
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
