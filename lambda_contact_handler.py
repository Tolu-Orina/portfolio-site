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
    AWS Lambda function to handle API Gateway requests
    """
    try:
        print(f"Received event: {json.dumps(event)}")
        
        # Handle API Gateway event
        if 'body' in event:
            # Parse the request body from API Gateway
            body = json.loads(event['body'])
        else:
            # Direct Lambda invocation
            body = event
        
        # Extract form data
        name = body.get('name')
        email = body.get('email')
        subject = body.get('subject')
        message = body.get('message')
        
        # Validate required fields
        if not all([name, email, subject, message]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS'
                },
                'body': json.dumps({
                    'error': 'All fields are required',
                    'received': {name, email, subject, message}
                })
            }
        
        # Send email
        success = send_contact_email(name, email, subject, message)
        
        if success:
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS'
                },
                'body': json.dumps({
                    'message': 'Email sent successfully',
                    'timestamp': datetime.now().isoformat()
                })
            }
        else:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS'
                },
                'body': json.dumps({
                    'error': 'Failed to send email'
                })
            }
            
    except Exception as e:
        print(f"❌ Error processing request: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({
                'error': 'Internal server error',
                'details': str(e)
            })
        }

# Test function for local development
def test_lambda():
    """
    Test the Lambda function locally
    """
    test_event = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Project Inquiry",
        "message": "Hi Tolulope,\n\nI'm interested in discussing a potential project with you. I have a web application that needs some improvements and I think your expertise would be perfect for this.\n\nCould we schedule a call to discuss the details?\n\nBest regards,\nJohn",
        "timestamp": "2024-01-15T10:30:00Z",
        "source": "Portfolio Contact Form"
    }
    
    result = lambda_handler(test_event, None)
    print(f"Lambda result: {json.dumps(result, indent=2)}")

# Setup instructions:
"""
1. AWS SES Setup:
   - Go to AWS SES Console
   - Verify your sender email (SENDER_EMAIL)
   - If in sandbox mode, also verify recipient email (RECIPIENT_EMAIL)
   - Request production access if needed

2. Lambda Function Setup:
   - Create a new Lambda function
   - Runtime: Python 3.9+
   - Copy this code to the function
   - Set environment variables:
     SENDER_EMAIL=noreply@yourdomain.com
     RECIPIENT_EMAIL=your-email@example.com

3. API Gateway Setup:
   - Create a new REST API
   - Create a POST /contact resource
   - Integrate with your Lambda function
   - Enable CORS if needed
   - Deploy to a stage (e.g., 'prod')
   - Copy the invoke URL

4. Environment Variables for Next.js:
   Add to your .env.local file:
   API_GATEWAY_URL=https://your-api-gateway-url.amazonaws.com/prod/contact
   API_GATEWAY_KEY=your-api-key (if using API key authentication)

5. Lambda Permissions:
   Ensure Lambda has SES permissions:
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "ses:SendEmail",
           "ses:SendRawEmail"
         ],
         "Resource": "*"
       }
     ]
   }
"""

if __name__ == "__main__":
    # Run test
    test_lambda()
