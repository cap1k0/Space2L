import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/" className="mb-8 inline-block text-sm text-neutral-500 hover:text-neutral-800">
          ← Back to Bruca
        </Link>

        <h1 className="mb-2 text-3xl font-medium">Terms of service</h1>
        <p className="mb-10 text-sm text-neutral-500">Last updated: </p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-700">
          <p>
            Welcome to Bruca. These terms of service (&quot;terms&quot;) govern your
            access to and use of Bruca&apos;s website, applications, and
            AI-powered text-editing services (together, the &quot;service&quot;),
            operated by [Bruca legal entity name] (&quot;Bruca&quot;, &quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;). By creating an account or otherwise using
            the service, you agree to these terms.
          </p>

          <Section title="1. Eligibility">
            <p>
              You must be at least 18 years old, or the age of majority in
              your jurisdiction, and able to form a binding contract to use
              the service. If you use the service on behalf of an
              organization, you represent that you have authority to bind
              that organization to these terms.
            </p>
          </Section>

          <Section title="2. The service">
            <p className="mb-3">
              Bruca provides an AI agent that suggests edits to text
              submitted by users, including scholarly and research writing,
              along with related account and workspace tools. The service is
              currently offered as a <strong className="font-medium">beta</strong>:
              features, availability, output quality, and pricing may change
              at any time, and the service may be interrupted or discontinued
              without notice.
            </p>
            <p>
              Bruca is not a substitute for professional editorial, legal,
              medical, or academic advice. You are solely responsible for
              reviewing and deciding whether to accept any suggested edit
              before publication or submission.
            </p>
          </Section>

          <Section title="3. Accounts">
            <ul className="list-disc space-y-1 pl-5">
              <li>You must provide accurate registration information and keep it up to date.</li>
              <li>You are responsible for all activity under your account and for keeping your credentials secure.</li>
              <li>Notify us promptly at [contact email] if you suspect unauthorized use of your account.</li>
              <li>We may suspend or terminate accounts that violate these terms.</li>
            </ul>
          </Section>

          <Section title="4. Subscriptions and billing">
            <p>
              If you purchase a paid plan, you authorize us to charge the
              applicable fees to your chosen payment method on a recurring
              basis until you cancel. Fees are non-refundable except where
              required by law or stated otherwise at checkout. We will
              provide reasonable advance notice before any price change
              takes effect for existing subscribers.
            </p>
          </Section>

          <Section title="5. Your content">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="font-medium">Ownership.</strong> You
                retain all rights to the text, documents, and other
                materials you submit to the service (&quot;your content&quot;).
              </li>
              <li>
                <strong className="font-medium">License to us.</strong> You
                grant Bruca a limited, worldwide, non-exclusive license to
                process, store, and transmit your content solely to
                provide, maintain, and improve the service to you.
              </li>
              <li>
                <strong className="font-medium">Model training.</strong>{" "}
                [Choose one before publishing: &quot;We do not use your
                content to train models without your explicit opt-in.&quot; or
                &quot;We may use de-identified content to improve our models
                unless you opt out in account settings.&quot;]
              </li>
              <li>
                You represent that you have the necessary rights to submit
                your content and that doing so does not infringe any third
                party&apos;s rights.
              </li>
            </ul>
          </Section>

          <Section title="6. Acceptable use">
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Use the service for any unlawful purpose or to violate academic integrity policies you are subject to</li>
              <li>Submit content that infringes intellectual property or privacy rights of others</li>
              <li>Attempt to reverse-engineer, extract, scrape, or replicate the underlying models or infrastructure</li>
              <li>Use automated means to access the service beyond documented API usage</li>
              <li>Interfere with, overload, or disrupt the service or its security features</li>
            </ul>
          </Section>

          <Section title="7. Intellectual property">
            <p>
              The Bruca name, logo, software, models, and all related
              technology are the property of [Bruca legal entity name] or
              its licensors. These terms do not grant you any rights to our
              trademarks or proprietary technology beyond what is necessary
              to use the service as intended.
            </p>
          </Section>

          <Section title="8. Disclaimers">
            <p>
              The service is provided &quot;as is&quot; and &quot;as
              available,&quot; without warranties of any kind, express or
              implied, including warranties of merchantability, fitness for
              a particular purpose, and non-infringement. AI-generated
              suggestions may be inaccurate or inappropriate for your use
              case; you are responsible for independent verification.
            </p>
          </Section>

          <Section title="9. Limitation of liability">
            <p>
              To the maximum extent permitted by law, Bruca and its
              officers, employees, and affiliates will not be liable for any
              indirect, incidental, special, consequential, or punitive
              damages, or any loss of data, revenue, or goodwill, arising
              from your use of the service. Our total liability for any
              claim relating to the service will not exceed the amount you
              paid us in the twelve months preceding the claim.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify and hold Bruca harmless from claims,
              damages, and expenses arising from your content, your use of
              the service, or your violation of these terms.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              You may stop using the service and close your account at any
              time. We may suspend or terminate your access if you violate
              these terms, or discontinue the service (or any feature of
              it) at our discretion, with notice where reasonably possible.
            </p>
          </Section>

          <Section title="12. Changes to these terms">
            <p>
              We may update these terms from time to time. For material
              changes, we will provide notice (such as email or an
              in-product notice) before the changes take effect. Continued
              use of the service after that constitutes acceptance.
            </p>
          </Section>

          <Section title="13. Governing law and disputes">
            <p>
              These terms are governed by the laws of [jurisdiction],
              without regard to conflict-of-law principles. Any disputes
              will be resolved in the courts of [jurisdiction], unless
              otherwise required by applicable law.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>Questions about these terms can be sent to [contact email].</p>
          </Section>

          <p className="border-t border-neutral-200 pt-6 text-xs text-neutral-400">
           Harwey! general template 
            
          </p>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-2 text-base font-medium text-neutral-900">{title}</h2>
      {children}
    </section>
  );
}
