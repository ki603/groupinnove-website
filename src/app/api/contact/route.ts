import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    // --- EMAIL SENDING LOGIC ---
    // In a real-world application, you would use a library like Nodemailer
    // or an email service provider (e.g., SendGrid, Resend) here.
    //
    // Example with Nodemailer (pseudo-code):
    //
    // import nodemailer from 'nodemailer';
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({
    //   from: email,
    //   to: 'contact@groupinnove.pro',
    //   subject: `Nouveau message de ${name}: ${subject}`,
    //   text: message,
    // });
    //
    // For this prototype, we'll just simulate a successful submission.
    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    // --- END OF EMAIL SENDING LOGIC ---

    // Simulate a delay to mimic network latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: 'Votre message a été envoyé avec succès !' });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: "Une erreur est survenue lors de l'envoi du message." }, { status: 500 });
  }
}