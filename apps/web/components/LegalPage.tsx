import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

import { LOGO } from "@calcom/lib/constants";

export const LEGAL_LAST_UPDATED = "October 19, 2026";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-default text-default min-h-screen">
      <Head>
        <title>{`${title} | Cresteo Cal`}</title>
      </Head>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/">
          <img src={LOGO} alt="Cresteo" className="h-8 w-auto" />
        </Link>
        <h1 className="text-emphasis mt-12 text-4xl font-semibold">{title}</h1>
        <p className="text-subtle mt-2 text-sm">Last updated: {LEGAL_LAST_UPDATED}</p>
        <div className="[&_h2]:text-emphasis mt-8 space-y-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-6 [&_li]:list-disc [&_a]:underline">
          {children}
        </div>
        <div className="mt-16 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="underline">
            Home
          </Link>
          <Link href="/privacy" className="underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="underline">
            Terms of service
          </Link>
        </div>
      </div>
    </div>
  );
}
