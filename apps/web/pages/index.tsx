import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";

import { getServerSession } from "@calcom/features/auth/lib/getServerSession";
import { LOGO, SUPPORT_MAIL_ADDRESS } from "@calcom/lib/constants";

import PageWrapper from "@components/PageWrapper";

// Public landing page for signed-out visitors. Google OAuth verification requires a home page
// that explains the app without logging in.
function HomePage() {
  return (
    <div className="bg-default text-default min-h-screen">
      <Head>
        <title>Cresteo Cal | Scheduling for the Cresteo team</title>
        <meta
          name="description"
          content="Cresteo Cal lets people book meetings with the Cresteo team based on real calendar availability."
        />
      </Head>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <img src={LOGO} alt="Cresteo" className="h-8 w-auto" />
        <h1 className="text-emphasis mt-12 text-4xl font-semibold">Cresteo Cal</h1>
        <p className="mt-4 text-lg">
          Cresteo Cal is the scheduling tool of Cresteo. It lets clients, candidates and partners book
          meetings with the Cresteo team at times that actually work, without back-and-forth emails.
        </p>

        <h2 className="text-emphasis mt-12 text-2xl font-semibold">How it works</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Cresteo team members sign in with their company Google account.</li>
          <li>
            Each member can connect one or more Google Calendars. Cresteo Cal reads busy times from those
            calendars so it only offers slots when the person is free.
          </li>
          <li>
            When someone books a meeting, Cresteo Cal creates the event in the connected calendar and sends
            the invitation to all attendees.
          </li>
          <li>Booked meetings can be rescheduled or cancelled from the links in the confirmation email.</li>
        </ul>

        <h2 className="text-emphasis mt-12 text-2xl font-semibold">Your data</h2>
        <p className="mt-4">
          Cresteo Cal only uses calendar data to check availability and to manage the meetings booked through
          it. We do not sell calendar data or use it for advertising. Read the full{" "}
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>{" "}
          for details.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/auth/login"
            className="bg-inverted text-inverted rounded-md px-5 py-2.5 text-sm font-medium">
            Sign in
          </Link>
          <Link href="/privacy" className="text-sm underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-sm underline">
            Terms of service
          </Link>
          <a href={`mailto:${SUPPORT_MAIL_ADDRESS}`} className="text-sm underline">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = await getServerSession({ req, res });

  if (session?.user?.id) {
    return { redirect: { permanent: false, destination: "/event-types" } };
  }

  return { props: {} };
}

HomePage.PageWrapper = PageWrapper;

export default HomePage;
