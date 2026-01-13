// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import contactBg from '../assets/images/background-contacts.jpg';

const Wrapper = styled.section.attrs({
  'aria-labelledby': 'contact-title',
})`
  background-image: url(${contactBg});
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
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) => (props.$error ? '#ff4d4f' : '#ccc')};
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #66b2ff;
    box-shadow: 0 0 0 2px rgba(102, 178, 255, 0.4);
  }
`;

const TextArea = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) => (props.$error ? '#ff4d4f' : '#ccc')};
  border-radius: 6px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #66b2ff;
    box-shadow: 0 0 0 2px rgba(102, 178, 255, 0.4);
  }
`;

const ErrorMsg = styled.p`
  font-family: 'Inter', sans-serif;
  color: #ff4d4f;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
`;

const SuccessMsg = styled.p`
  font-family: 'Inter', sans-serif;
  color: #1c9c61;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #111;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
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





