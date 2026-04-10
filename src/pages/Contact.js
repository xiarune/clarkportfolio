// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundContacts from '../assets/images/background-contacts.jpg';

const Wrapper = styled.section.attrs({
  'aria-labelledby': 'contact-title',
})`
  background-image: url(${backgroundContacts});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(26, 20, 16, 0.65);
  z-index: 1;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  padding: 2.5rem;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  width: 100%;
  max-width: 550px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  text-align: center;
  font-size: 2.5rem;
  color: #f5e6c8;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  margin-bottom: 0.4rem;
  color: #c9a227;
`;

const Input = styled.input`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  background: rgba(245, 230, 200, 0.05);
  border: 1px solid ${(props) => (props.$error ? '#8b1a1a' : 'rgba(201, 162, 39, 0.4)')};
  border-radius: 8px;
  box-sizing: border-box;
  color: #f5e6c8;

  &::placeholder {
    color: rgba(245, 230, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #c9a227;
    box-shadow: 0 0 0 2px rgba(201, 162, 39, 0.3);
  }
`;

const TextArea = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  background: rgba(245, 230, 200, 0.05);
  border: 1px solid ${(props) => (props.$error ? '#8b1a1a' : 'rgba(201, 162, 39, 0.4)')};
  border-radius: 8px;
  resize: vertical;
  box-sizing: border-box;
  color: #f5e6c8;

  &::placeholder {
    color: rgba(245, 230, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #c9a227;
    box-shadow: 0 0 0 2px rgba(201, 162, 39, 0.3);
  }
`;

const ErrorMsg = styled.p`
  font-family: 'Inter', sans-serif;
  color: #c94a4a;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
`;

const SuccessMsg = styled.p`
  font-family: 'Playfair Display', serif;
  color: #c9a227;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1.5rem;
`;

const SubmitButton = styled.button`
  background-color: #8b1a1a;
  color: #f5e6c8;
  border: none;
  padding: 0.9rem;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #a52525;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 3px;
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value, context) => {
    const trimmed = value.trim();
    const isSubmit = context === 'submit';

    if (name === 'name') {
      if (isSubmit && !trimmed) return 'Name is required.';
      return '';
    }

    if (name === 'email') {
      if (isSubmit && !trimmed) return 'Email is required.';
      if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return '';
    }

    if (name === 'phone') {
      if (!trimmed) return '';
      const digitsOnly = trimmed.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 20) {
        return 'Please enter a valid phone number.';
      }
      return '';
    }

    if (name === 'message') {
      if (isSubmit && !trimmed) return 'Message is required.';
      return '';
    }

    return '';
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([fieldName, value]) => {
      const error = validateField(fieldName, value, 'submit');
      if (error) newErrors[fieldName] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value, 'blur');

    setErrors((prev) => ({ ...prev, [name]: error || '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <Overlay />
      <FormContainer>
        <Title id="contact-title">Contact Me</Title>

        <StyledForm onSubmit={handleSubmit} noValidate>
          <FieldGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={errors.name}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <ErrorMsg id="name-error" role="alert">
                {errors.name}
              </ErrorMsg>
            )}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={errors.email}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <ErrorMsg id="email-error" role="alert">
                {errors.email}
              </ErrorMsg>
            )}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={errors.phone}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              autoComplete="tel"
            />
            {errors.phone && (
              <ErrorMsg id="phone-error" role="alert">
                {errors.phone}
              </ErrorMsg>
            )}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              rows="6"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={errors.message}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <ErrorMsg id="message-error" role="alert">
                {errors.message}
              </ErrorMsg>
            )}
          </FieldGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </StyledForm>

        {submitted && (
          <SuccessMsg role="status" aria-live="polite">
            Your message was sent successfully!
          </SuccessMsg>
        )}
      </FormContainer>
    </Wrapper>
  );
}
