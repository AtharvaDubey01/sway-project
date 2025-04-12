// Email templates for EmailJS

/**
 * Template for the newsletter subscription thank you email
 * 
 * This template should be created in your EmailJS dashboard with the following variables:
 * - to_email: The subscriber's email address
 * - to_name: The subscriber's name (extracted from email)
 * - message: The thank you message
 */
export const NEWSLETTER_TEMPLATE = {
  // EmailJS credentials
  serviceId: 'service_vueob57',
  templateId: 'template_7orwrkg',
  publicKey: 'slA-yR3awFcWCvf8U',
};

/**
 * Instructions for setting up EmailJS:
 * 
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create an Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template with the following variables:
 *    - to_email: {{to_email}}
 *    - to_name: {{to_name}}
 *    - message: {{message}}
 * 4. Get your Service ID, Template ID, and Public Key
 * 5. Replace the placeholder values in this file
 */