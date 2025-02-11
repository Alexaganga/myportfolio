import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // Environment variable validation
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      return NextResponse.json({ error: "Missing EmailJS API credentials!" }, { status: 500 });
    }

    // Prepare EmailJS API payload
    const payload = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
      },
    };

    console.log("Sending EmailJS Payload:", payload);

    // Send email using EmailJS API
    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseData = await emailResponse.json();
    console.log("EmailJS API Response:", responseData);

    if (!emailResponse.ok) {
      throw new Error(
        `EmailJS Error: ${responseData.status || "Unknown status"} - ${responseData.text || "Unknown error"}`
      );
    }

    console.log("Email sent successfully!");
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: unknown) {
    // Use 'unknown' instead of 'any' for better type safety
    if (error instanceof Error) {
      console.error("Email API Error:", error.message);
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
          details: error.message || "Unknown error",
        },
        { status: 500 }
      );
    } else {
      console.error("Unexpected error type:", error);
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
          details: "An unexpected error occurred.",
        },
        { status: 500 }
      );
    }
  }
}