import Link from "next/link";

import { SUPPORT_MAIL_ADDRESS, WEBAPP_URL } from "@calcom/lib/constants";

import LegalPage from "@components/LegalPage";
import PageWrapper from "@components/PageWrapper";

function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of Cresteo Cal, the scheduling application
        available at <a href={WEBAPP_URL}>{WEBAPP_URL}</a> (the &quot;Service&quot;), operated by Cresteo
        (&quot;Cresteo&quot;, &quot;we&quot;, &quot;us&quot;). By using the Service you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        Cresteo Cal lets Cresteo team members publish their availability and lets other people book meetings
        with them. It is based on the open-source Cal.com software. Accounts are available only to Cresteo
        team members; anyone can book a meeting through a member&apos;s booking page.
      </p>

      <h2>2. Accounts</h2>
      <p>
        Members sign in with their company Google account and are responsible for the activity on their
        account. You must not share your account or try to access accounts, calendars or data that are not
        yours.
      </p>

      <h2>3. Connected calendars</h2>
      <p>
        When you connect a Google Calendar, you authorize Cresteo Cal to read your availability and to create,
        update and delete the events of meetings booked through the Service, as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>. You can disconnect a calendar at any time.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Service for spam, fraud, harassment or any unlawful purpose;</li>
        <li>book meetings with false information or in bulk to block someone&apos;s availability;</li>
        <li>interfere with, overload or attempt to break the security of the Service;</li>
        <li>copy, scrape or resell the Service or the data in it.</li>
      </ul>

      <h2>5. Your content</h2>
      <p>
        You keep ownership of the information you enter in the Service. You give Cresteo the permission needed
        to store and process it only to operate the Service.
      </p>

      <h2>6. Availability</h2>
      <p>
        We work to keep the Service available and accurate, but it is provided &quot;as is&quot; and &quot;as
        available&quot;. We do not guarantee that it will be uninterrupted or error-free, and we may change or
        discontinue features at any time.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Cresteo is not liable for indirect, incidental or consequential
        damages, or for missed or double-booked meetings, arising from the use of the Service.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or close accounts that break these Terms. Members can stop using the Service and ask us
        to delete their account at any time.
      </p>

      <h2>9. Changes to these Terms</h2>
      <p>
        We may update these Terms. We will post the new version on this page and update the &quot;Last
        updated&quot; date above. Continuing to use the Service means you accept the updated Terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions about these Terms, contact Cresteo at{" "}
        <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>.
      </p>
    </LegalPage>
  );
}

TermsPage.PageWrapper = PageWrapper;

export default TermsPage;
