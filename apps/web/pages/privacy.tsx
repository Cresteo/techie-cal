import { SUPPORT_MAIL_ADDRESS, WEBAPP_URL } from "@calcom/lib/constants";

import LegalPage from "@components/LegalPage";
import PageWrapper from "@components/PageWrapper";

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how Cresteo (&quot;Cresteo&quot;, &quot;we&quot;, &quot;us&quot;)
        collects, uses, stores and shares information when you use Cresteo Cal, the scheduling application
        available at <a href={WEBAPP_URL}>{WEBAPP_URL}</a> (the &quot;Service&quot;). Cresteo Cal is based
        on the open-source Cal.com scheduling software and is operated by Cresteo.
      </p>

      <h2>1. Who uses the Service</h2>
      <ul>
        <li>
          <strong>Members:</strong> Cresteo team members who sign in to Cresteo Cal with their company Google
          account and publish their availability.
        </li>
        <li>
          <strong>Bookers:</strong> clients, candidates and partners who book a meeting with a member. Bookers
          do not need an account.
        </li>
      </ul>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Account information:</strong> name, email address and profile picture from the member&apos;s
          Google account, used to create and identify their Cresteo Cal account.
        </li>
        <li>
          <strong>Calendar information:</strong> when a member connects a Google Calendar, we access the list
          of their calendars, the busy/free times of their events and the events created by Cresteo Cal.
        </li>
        <li>
          <strong>Booking information:</strong> the name, email address, time zone, selected time and any
          notes or answers a booker enters when booking a meeting.
        </li>
        <li>
          <strong>Technical information:</strong> IP address, browser type and basic usage logs that our
          hosting provider records to operate and secure the Service.
        </li>
      </ul>

      <h2>3. Google user data</h2>
      <p>Cresteo Cal requests the following Google permissions:</p>
      <ul>
        <li>
          <strong>Sign in with Google</strong> (<code>openid</code>, <code>email</code>,{" "}
          <code>profile</code>): to let members sign in and to show their name and picture in the app.
        </li>
        <li>
          <strong>View your calendars</strong> (<code>calendar.readonly</code>): to read the start and end
          times of existing events so that we only offer booking slots when the member is free.
        </li>
        <li>
          <strong>View and edit events on your calendars</strong> (<code>calendar.events</code>): to create,
          update and delete the events for meetings booked, rescheduled or cancelled through Cresteo Cal.
        </li>
      </ul>
      <p>
        We use Google user data only to provide these scheduling features to the member who connected the
        calendar. We do not read the content of events that were not created by Cresteo Cal beyond the
        information needed to calculate availability, and we do not use Google user data for advertising, to
        train artificial intelligence or machine learning models, or for any purpose unrelated to scheduling.
      </p>
      <p>
        We do not sell Google user data and we do not transfer it to third parties, except to the
        infrastructure providers listed in section 5 that host the Service on our behalf, when required by
        law, or with the member&apos;s explicit consent.
      </p>
      <p>
        Cresteo Cal&apos;s use and transfer of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2>4. How we use information</h2>
      <ul>
        <li>To show a member&apos;s availability and let bookers schedule meetings.</li>
        <li>To create calendar events and send confirmation, reminder, reschedule and cancellation emails.</li>
        <li>To keep the Service secure, prevent abuse and fix problems.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>5. Storage and service providers</h2>
      <p>
        The Service is hosted on Vercel and stores its data in a managed database operated by our
        infrastructure providers. Emails are sent through our email provider. These providers process data
        only on our instructions and only to run the Service. Data is transmitted over encrypted (HTTPS)
        connections, and the OAuth tokens that give access to connected calendars are stored in our database
        with access restricted to the Service.
      </p>

      <h2>6. Retention and deletion</h2>
      <p>
        We keep account, calendar connection and booking data while the member&apos;s account is active.
        A member can disconnect a Google Calendar at any time from the Installed apps settings in Cresteo Cal,
        which deletes the stored tokens, or revoke access from their{" "}
        <a href="https://myaccount.google.com/permissions">Google Account permissions</a>. To delete an
        account and its data, or to request deletion of booking data, email us at{" "}
        <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>. We delete it within 30 days,
        except where we must keep it to comply with the law.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, export or delete your personal
        information, and to object to or restrict its processing. To exercise these rights, contact us at{" "}
        <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Cresteo Cal uses only the cookies needed to keep members signed in and to secure the Service. It does
        not use advertising cookies.
      </p>

      <h2>9. Children</h2>
      <p>The Service is not directed to children under 16 and we do not knowingly collect their data.</p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will post the new version on this page and update the
        &quot;Last updated&quot; date above.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any questions about this policy or your data, contact Cresteo at{" "}
        <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`}>{SUPPORT_MAIL_ADDRESS}</a>.
      </p>
    </LegalPage>
  );
}

PrivacyPage.PageWrapper = PageWrapper;

export default PrivacyPage;
