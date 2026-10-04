import { NextResponse } from "next/server";

// Stub handler: the real implementation creates a Stripe Checkout Session
// and redirects the buyer there, then emails a license key on the
// checkout.session.completed webhook, per the build brief's
// "Payments and licensing" section. Not wired yet: no Stripe account is
// connected in this environment.
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Checkout is not connected yet. Add Stripe keys and implement Checkout Session creation here.",
    },
    { status: 501 }
  );
}
