import boto3
import json
import os
from datetime import datetime

# AWS SES Configuration
ses = boto3.client('ses', region_name='us-east-1')  # Change to your region

# Configuration
SENDER_EMAIL = 'noreply@yourdomain.com'  # Replace with your verified SES email
RECIPIENT_EMAIL = 'your-email@example.com'  # Replace with your email

def create_html_email(name, email, subject, message):
    """
    Create a beautifully formatted HTML email
    """
    html_body = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Contact</title>
        <style>
            body {{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }}
            .container {{
                max-width: 600px;
                margin: 20px auto;
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }}
            .header {{
                background: linear-gradient(135deg, #ff6b35, #f7931e);
                color: white;
                padding: 30px;
                text-align: center;
            }}
            .header h1 {{
                margin: 0;
                font-size: 28px;
                font-weight: 600;
            }}
            .header p {{
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
            }}
            .content {{
                padding: 30px;
            }}
            .field {{
                margin-bottom: 20px;
            }}
            .label {{
                font-weight: 600;
                color: #555;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
            }}
            .value {{
                background: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #ff6b35;
                font-size: 16px;
                line-height: 1.5;
            }}
            .footer {{
                background: #f8f9fa;
                padding: 20px 30px;
                text-align: center;
                border-top: 1px solid #e9ecef;
            }}
            .footer p {{
                margin: 5px 0;
                font-size: 12px;
                color: #6c757d;
            }}
            .icon {{
                display: inline-block;
                margin-right: 8px;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 New Portfolio Contact</h1>
                <p>You have received a new message from your portfolio website</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label"><span class="icon">👤</span>Name</div>
                    <div class="value">{name}</div>
                </div>
                <div class="field">
                    <div class="label"><span class="icon">📧</span>Email</div>
                    <div class="value">{email}</div>
                </div>
                <div class="field">
                    <div class="label"><span class="icon">📝</span>Subject</div>
                    <div class="value">{subject}</div>
                </div>
                <div class="field">
                    <div class="label"><span class="icon">💬</span>Message</div>
                    <div class="value">{message.replace(chr(10), '<br>')}</div>
                </div>
            </div>
            <div class="footer">
                <p><span class="icon">📅</span>Sent on: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}</p>
                <p><span class="icon">🌐</span>Source: Portfolio Contact Form</p>
            </div>
        </div>
    </body>
    </html>
    """
    return html_body

def create_text_email(name, email, subject, message):
    """
    Create a plain text version of the email
    """
    text_body = f"""
New Portfolio Contact Form Submission
=====================================

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

Sent on: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
Source: Portfolio Contact Form
    """
    return text_body

def send_contact_email(name, email, subject, message):
    """
    Send contact form email using AWS SES
    """
    try:
        # Create email content
        html_body = create_html_email(name, email, subject, message)
        text_body = create_text_email(name, email, subject, message)
        
        # Send email using SES
        response = ses.send_email(
            Source=SENDER_EMAIL,
            Destination={
                'ToAddresses': [RECIPIENT_EMAIL]
            },
            Message={
                'Subject': {
                    'Data': f'Portfolio Contact: {subject}',
                    'Charset': 'UTF-8'
                },
                'Body': {
                    'Html': {
                        'Data': html_body,
                        'Charset': 'UTF-8'
                    },
                    'Text': {
                        'Data': text_body,
                        'Charset': 'UTF-8'
                    }
                }
            }
        )
        
        print(f"✅ Email sent successfully: {response['MessageId']}")
        return True
        
    except Exception as e:
        print(f"❌ Error sending email: {str(e)}")
        return False

def lambda_handler(event, context):
    """
    AWS Lambda function to handle contact form submissions
    """
    try:
        # Parse the request body
        body = json.loads(event['body'])
        name = body.get('name')
        email = body.get('email')
        subject = body.get('subject')
        message = body.get('message')
        
        # Validate required fields
        if not all([name, email, subject, message]):
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'All fields are required'})
            }
        
        # Send email
        success = send_contact_email(name, email, subject, message)
        
        if success:
            return {
                'statusCode': 200,
                'body': json.dumps({'message': 'Email sent successfully'})
            }
        else:
            return {
                'statusCode': 500,
                'body': json.dumps({'error': 'Failed to send email'})
            }
            
    except Exception as e:
        print(f"❌ Error processing request: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }

# Test function
def test_email():
    """
    Test the email functionality
    """
    test_data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Project Inquiry",
        "message": "Hi Tolulope,\n\nI'm interested in discussing a potential project with you. I have a web application that needs some improvements and I think your expertise would be perfect for this.\n\nCould we schedule a call to discuss the details?\n\nBest regards,\nJohn"
    }
    
    success = send_contact_email(
        test_data["name"],
        test_data["email"],
        test_data["subject"],
        test_data["message"]
    )
    
    if success:
        print("🎉 Test email sent successfully!")
    else:
        print("💥 Test email failed!")

# Setup instructions:
"""
1. AWS SES Setup:
   - Go to AWS SES Console
   - Verify your sender email (SENDER_EMAIL)
   - If in sandbox mode, also verify recipient email (RECIPIENT_EMAIL)
   - Request production access if needed

2. Update Configuration:
   - Replace SENDER_EMAIL with your verified SES email
   - Replace RECIPIENT_EMAIL with your email address
   - Update region if needed

3. Environment Variables for Next.js:
   Add these to your .env.local file:
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   SENDER_EMAIL=noreply@yourdomain.com
   RECIPIENT_EMAIL=your-email@example.com

4. Install AWS SDK in Next.js:
   npm install aws-sdk

5. Deploy Options:
   - Option A: Use as Lambda function (recommended)
   - Option B: Direct SES integration in Next.js API route
"""

if __name__ == "__main__":
    # Run test
    test_email()
