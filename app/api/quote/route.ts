import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const company = String(body.company ?? "").trim();
    const email = String(body.email ?? "").trim();
    const requirements = String(body.requirements ?? "").trim();

    if (!company || !email || !requirements) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const emailResult = await resend.emails.send({
      from: "KP Global Shipping <website@kpglobalshipping.com>",
      to: ["agent@kp-smt.com"],
      replyTo: email,
      subject: `Website Quote Request - ${company}`,
      text: `
New Quote Request from KP Global Shipping Website

Company Name:
${company}

Email Address:
${email}

Vessel Requirements:
${requirements}

---

Submitted through KP Global Shipping website
      `.trim(),
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);

      return NextResponse.json(
        { error: "Unable to send your request. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your quote request has been sent successfully.",
    });
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}