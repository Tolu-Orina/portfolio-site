import boto3
import json
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib

# AWS SNS Configuration
sns = boto3.client('sns', region_name='us-east-1')  # Change to your region
ses = boto3.client('ses', region_name='us-east-1')  # Change to your region

# Configuration
SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:YOUR_ACCOUNT_ID:portfolio-contact-topic'  # Replace with your SNS topic ARN
YOUR_EMAIL = 'your-email@example.com'  # Replace with your email
SENDER_EMAIL = 'noreply@yourdomain.com'  # Replace with your verified SES email

def send_email_via_ses(name, email, subject, message):
    """
    Send email using AWS SES
    """
    try:
        # Create the email content
        html_body = f"""
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        </body>
        </html>
        """
        
        # Send email using SES
        response = ses.send_email(
            Source=SENDER_EMAIL,
            Destination={
                'ToAddresses': [YOUR_EMAIL]
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
                    }
                }
            }
        )
        
        print(f"Email sent successfully: {response['MessageId']}")
        return True
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return False

def lambda_handler(event, context):
    """
    AWS Lambda function to handle SNS messages
    """
    try:
        # Parse SNS message
        for record in event['Records']:
            sns_message = json.loads(record['Sns']['Message'])
            
            # Extract form data
            name = sns_message.get('name')
            email = sns_message.get('email')
            subject = sns_message.get('subject')
            message = sns_message.get('message')
            
            # Send email
            success = send_email_via_ses(name, email, subject, message)
            
            if success:
                print(f"Successfully processed contact form from {name} ({email})")
            else:
                print(f"Failed to process contact form from {name} ({email})")
                
    except Exception as e:
        print(f"Error processing SNS message: {str(e)}")
        raise e

# Alternative: Direct SNS subscription handler (if not using Lambda)
def handle_sns_message(message):
    """
    Handle SNS message directly (for testing or alternative setup)
    """
    try:
        # Parse the message
        data = json.loads(message)
        
        # Extract form data
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message_text = data.get('message')
        
        # Send email
        success = send_email_via_ses(name, email, subject, message_text)
        
        if success:
            print(f"Successfully sent email for contact from {name}")
        else:
            print(f"Failed to send email for contact from {name}")
            
    except Exception as e:
        print(f"Error handling SNS message: {str(e)}")

# Setup instructions:
"""
1. Create an SNS Topic in AWS Console:
   - Go to SNS service
   - Create a new topic named 'portfolio-contact-topic'
   - Copy the Topic ARN and update SNS_TOPIC_ARN above

2. Subscribe your email to the SNS topic:
   - In the SNS topic, click 'Create subscription'
   - Protocol: Email
   - Endpoint: your-email@example.com
   - Confirm subscription via email

3. Set up AWS SES (if using email):
   - Verify your sender email in SES
   - Update SENDER_EMAIL above
   - If in sandbox mode, also verify recipient email

4. Update the Next.js API route with actual SNS integration:
   - Install AWS SDK: npm install aws-sdk
   - Uncomment the SNS code in route.ts
   - Add SNS_TOPIC_ARN to environment variables

5. Deploy the Lambda function (optional):
   - Package this code as a Lambda function
   - Set SNS topic as trigger
   - This will automatically send emails when forms are submitted
"""

if __name__ == "__main__":
    # Test the email function
    test_data = {
        "name": "Test User",
        "email": "test@example.com",
        "subject": "Test Message",
        "message": "This is a test message from the portfolio contact form."
    }
    
    handle_sns_message(json.dumps(test_data))
