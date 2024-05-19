import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.nom) errors.nom = " Veuiller saisir le nom";
    if (!formData.email) errors.email = " Veuiller saisir l Email";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Adresse email est invalide";
    if (!formData.objet) errors.objet = " Veuiller saisir l'objet";
    if (!formData.message) errors.message = " Veuiller saisir votre message";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic here
      console.log('Form submitted:', formData);
      alert('Form submitted successfully');
      setFormData({ nom: '', email: '', objet: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className='contactcontainer  ' >
      <h2 className='flexCenter'>Formulaire du contact</h2>
    <div className='flexCenter'>
    <div className="formcontact " >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          {errors.nom && <p className="error-message">{errors.nom}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label>Objet:</label>
          <input
            type="text"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
          />
          {errors.objet && <p className="error-message">{errors.objet}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>  
    </div>
    </section>
  );
};

export default ContactUs;
