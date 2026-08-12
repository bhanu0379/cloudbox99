import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy — Cloudbox99",
  description: "Cookie Policy for Cloudbox99. Learn how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-8 text-center">
            Cookie Policy
          </h1>
          
          <div className="space-y-8 text-base/7 text-muted">
            <p>This cookie policy explains how we use cookies on our website.</p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">What are cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device by a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be turned off. They are usually only set in response to actions made by you, such as logging in or filling out forms.</li>
                <li><strong>Analytics Cookies:</strong> These help us analyze how visitors interact with our website, including the number of visitors, the pages visited, and the time spent on the site. These cookies are optional and can be disabled.</li>
                <li><strong>Marketing Cookies:</strong> These cookies are used to track your browsing activity and provide personalized advertisements. These cookies are also optional and can be disabled.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Managing Cookies</h2>
              <p>
                You can control the use of cookies through the cookie settings on our website. You can accept or reject specific types of cookies by adjusting your preferences in the cookie settings modal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update this cookie policy from time to time. Any changes will be posted on this page, and we encourage you to check back periodically.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
