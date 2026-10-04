import { NextResponse } from "next/server";

// Stub handler: the real implementation issues a time-limited trial build
// and emails a download link, per the brief's "Trial" decision (30 days,
// full-featured, time-limited download that asks for a license key
// afterward). Not wired yet.
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Trial downloads aren't connected yet. Wire this route to your build/delivery pipeline.",
    },
    { status: 501 }
  );
}
