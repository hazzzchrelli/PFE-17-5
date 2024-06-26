import React from 'react';
import { Link } from 'react-router-dom';
import './Connect.css';

const Connect = () => {
  return (
    <section className="flexCenter connect-container">
      <div className="connect-form-wrapper">
        <div className="connect-logo">
          <img src="./ACS.png" alt="ACS Logo" />
        </div>
        <form className="connect-form">
          <div className="connect-form-group">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" placeholder="Entrez votre email" required />
          </div>
          <div className="connect-form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" placeholder="Entrez votre mot de passe" required />
          </div>
          <button type="submit" className="connect-login-btn">Se Connecter</button>



          
        </form>
        



      </div>
    </section>
  );
}

export default Connect;
