import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sandeshchougala205@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: 'Thanks for reaching out! Your message has been sent successfully. I will get back to you shortly.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section section-py">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} />
            06 // Connect
          </span>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an exciting project, an internship opportunity, or just want to talk tech — my inbox is always open.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-sub">
                Feel free to contact me via email or phone. I usually respond within 24 hours.
              </p>

              <div className="contact-channels">
                {/* Email */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <Mail size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span className="contact-channel-label">Email</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <a href="mailto:sandeshchougala205@gmail.com" className="contact-channel-value">
                        sandeshchougala205@gmail.com
                      </a>
                      <button 
                        type="button"
                        onClick={handleCopyEmail} 
                        className="copy-btn" 
                        title="Copy email to clipboard"
                        aria-label="Copy email"
                      >
                        {copied ? <Check size={16} style={{ color: '#34d399' }} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon" style={{ background: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.25)', color: '#22d3ee' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-channel-label">Phone</span>
                    <a href="tel:+916360428201" className="contact-channel-value">
                      +91 6360428201
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.25)', color: '#c084fc' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-channel-label">Location</span>
                    <span className="contact-channel-value" style={{ display: 'block' }}>
                      Belagavi, Karnataka, India
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.25)', color: '#34d399' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="contact-channel-label">Working Hours & Availability</span>
                    <span className="contact-channel-value" style={{ display: 'block' }}>
                      Available for Remote & Onsite Roles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="contact-form-panel">
            {statusMessage && (
              <div className={`form-feedback ${statusMessage.type}`}>
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="name" className="form-label">
                    Your Name <span style={{ color: '#ec4899' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="email" className="form-label">
                    Your Email <span style={{ color: '#ec4899' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Internship Inquiry / Web Development Project"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span style={{ color: '#ec4899' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.95rem' }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
