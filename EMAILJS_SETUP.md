# EmailJS Setup for Refresh Newsletter

This guide will help you set up EmailJS to send automatic thank you emails when users subscribe to your newsletter.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service (e.g., "Refresh Newsletter")
6. Save the service and note the **Service ID**

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your thank you email template
4. Make sure to include these template variables:
   - `{{to_email}}` - The subscriber's email address
   - `{{to_name}}` - The subscriber's name (extracted from email)
   - `{{message}}` - The thank you message
5. Save the template and note the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code

1. Open the file `src/lib/emailjs-templates.ts`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```typescript
   export const NEWSLETTER_TEMPLATE = {
     serviceId: 'YOUR_EMAILJS_SERVICE_ID', // Replace with your Service ID
     templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your Template ID
     publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your Public Key
   };
   ```

## Testing

1. Run your application
2. Navigate to the newsletter subscription form
3. Enter an email address and click "Subscribe"
4. Check that:
   - The success toast appears
   - The thank you email is sent to the provided email address

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify your EmailJS credentials are correct
3. Make sure your email service is properly configured
4. Check your EmailJS dashboard for any failed email attempts

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)