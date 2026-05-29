import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type FormStatus = 'idle' | 'success' | 'error';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message too short';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-pink-500" />
            <span className="text-sm uppercase tracking-wider text-pink-500 font-semibold">
              {t.contact.title}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">{t.contact.subtitle}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards (Email, Phone, Location) */}
          <div className="space-y-6">
            <ContactInfo icon={Mail} title={t.contact.email} content="crandriafara@gmail.com" href="mailto:crandriafara@gmail.com" />
            <ContactInfo icon={Phone} title={t.contact.phone} content="+261 38 12 70 170" href="tel:+261381270170" />
            <ContactInfo icon={MapPin} title={t.contact.location} content="Antananarivo, Madagascar" href="#" />
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField 
                  label={t.contact.form.name} 
                  name="name" 
                  value={formData.name} 
                  error={errors.name} 
                  onChange={handleChange} 
                  placeholder={t.contact.form.namePlaceholder} 
                />
                <InputField 
                  label={t.contact.form.email} 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  error={errors.email} 
                  onChange={handleChange} 
                  placeholder={t.contact.form.emailPlaceholder} 
                />
              </div>
              <InputField 
                label={t.contact.form.subject} 
                name="subject" 
                value={formData.subject} 
                error={errors.subject} 
                onChange={handleChange} 
                placeholder={t.contact.form.subjectPlaceholder} 
              />
              <div>
                <label className="block text-sm text-gray-400 mb-2">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white resize-none focus:border-blue-500 outline-none`}
                  placeholder={t.contact.form.messagePlaceholder}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.message}</p>}
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span>{t.contact.form.success}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t.contact.form.submit}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Composants utilitaires pour plus de clarté
function ContactInfo({ icon: Icon, title, content, href }: any) {
  return (
    <motion.a href={href} className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors group">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-1">{title}</div>
        <div className="text-white">{content}</div>
      </div>
    </motion.a>
  );
}

function InputField({ label, name, value, error, onChange, placeholder, type = "text" }: any) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-gray-900 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:border-blue-500 outline-none`}
      />
      {error && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {error}</p>}
    </div>
  );
}