import { NextResponse } from "next/server";

// Stub handler: validates and logs the demo request.
// TODO before launch: wire to an email provider (Resend, Postmark, or SES)
// to deliver the request to the team and send the auto-reply, per the
// build brief's "Form handling" and "Email" rows.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  console.log("[contact] demo request received", {
    name: body.name,
    email: body.email,
    company: body.company ?? "",
    library: body.library ?? "",
    dataSize: body.dataSize ?? "",
  });

  return NextResponse.json({ ok: true });
}
