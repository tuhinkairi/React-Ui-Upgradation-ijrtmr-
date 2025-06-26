import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {
      name: form.name ? '' : 'Name is required',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Valid email is required',
      phone: /^[0-9]{10}$/.test(form.phone) ? '' : 'Valid 10-digit phone number is required',
      message: form.message ? '' : 'Message is required',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulated submission
      alert('Message sent successfully!');
      console.log('Form submitted:', form);
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white rounded-xl p-6 shadow">
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 placeholder-gray-500 rounded"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 placeholder-gray-500 rounded"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone *"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 placeholder-gray-500 rounded"
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-100 placeholder-gray-500 rounded"
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="primaryBtn"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
