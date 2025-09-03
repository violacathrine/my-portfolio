import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://cathrineolsson.com'], // Add your actual domain
  credentials: true
}));
app.use(express.json());

// Send email function using Resend
const sendEmail = async (name, email, message) => {
  return await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>', // Resend's verified sender for testing
    to: [process.env.RECIPIENT_EMAIL],
    subject: `Portfolio Contact: Message from ${name}`,
    html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #e7b7ad, #b7c8b6); padding: 30px; border-radius: 15px; margin-bottom: 20px;">
          <h2 style="color: white; margin: 0; text-align: center;">New Portfolio Contact</h2>
        </div>
        
        <div style="background: #f4ede5; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 10px; border-left: 4px solid #e7b7ad;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 15px; background: #e7d5bd; border-radius: 10px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      </div>
    `,
  });
};

// Email route
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Contact form submission received:', req.body);
    console.log('🔑 Resend API Key configured:', !!process.env.RESEND_API_KEY);
    
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    console.log('📨 Sending email via Resend...');

    // Send email using Resend
    const result = await sendEmail(name, email, message);
    console.log('✅ Email sent successfully:', result.data);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend server is running!'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});