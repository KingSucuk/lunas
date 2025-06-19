import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import sgMail from '@sendgrid/mail';
import { database } from '../db';




export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');
  if (!sessionId) return NextResponse.json({ error: 'Missing session' }, { status: 400 });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2025-05-28.basil',
  });

  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (!session.customer_details?.email) return NextResponse.json({ error: 'No email' }, { status: 400 });

  const id = sessionId;
  // Simulate AI generation
  const images = Array.from({ length: 10 }).map((_, i) => `https://placekitten.com/512/512?image=${i}`);
  database[id] = { email: session.customer_details.email, images };

  // Send email (mock)
  try {
    await sgMail.send({
      to: session.customer_details.email,
      from: 'noreply@example.com',
      subject: 'Your AI Pet Portraits are ready',
      text: `View your images at ${process.env.NEXT_PUBLIC_BASE_URL}/results/${id}`,
    });
  } catch (err) {
    console.error(err);
  }

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/results/${id}`);
}

