import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare standard payload for API Gateway
    const payload = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      source: 'Portfolio Contact Form'
    };

    // Send to API Gateway endpoint
    const apiGatewayUrl = process.env.API_GATEWAY_URL || 'https://kzfi6s1fbf.execute-api.us-east-1.amazonaws.com/prod/get-in-touch';
    
    const response = await fetch(apiGatewayUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_GATEWAY_KEY || '' // If you have API key authentication
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    } else {
      console.error('API Gateway error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
