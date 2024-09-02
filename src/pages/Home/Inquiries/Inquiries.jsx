import  { useState } from 'react';
import './Inquiries.css';

const Inquiries = () => {
    const [formType, setFormType] = useState('contact');

    const handleFormSwitch = (type) => {
        setFormType(type);
    };

    return (
        <div className="inquiries-container">
            <h2>Reach Out to Us for any Inquiries or Assistance</h2>
            <div className="button-container">
                <button
                    className={`btn ${formType === 'contact' ? 'active' : ''}`}
                    onClick={() => handleFormSwitch('contact')}
                >
                    <i className="fas fa-phone-alt"></i> Reach Out To Us
                </button>
                <button
                    className={`btn ${formType === 'career' ? 'active' : ''}`}
                    onClick={() => handleFormSwitch('career')}
                >
                    <i className="fas fa-briefcase"></i> Career @Checkmate
                </button>
            </div>
            <div className="form-container">
                <form>
                    <div className="input-group left">
                        <label>Full Name *</label>
                        <input type="text" placeholder="john david" required />
                    </div>
                    <div className="input-group right">
                        <label>{formType === 'contact' ? 'Your Email *' : 'Your Address *'}</label>
                        <input
                            type={formType === 'contact' ? 'email' : 'text'}
                            placeholder={formType === 'contact' ? 'example@yourmail.com' : 'Enter your address'}
                            required
                        />
                    </div>
                    <div className="input-group left">
                        <label>Mobile No. *</label>
                        <input type="text" placeholder="+91 xxxxxxxxxx" required />
                    </div>
                    <div className="input-group right">
                        <label>Subject *</label>
                        <input type="text" placeholder="how can we help you" required />
                    </div>
                    <div className="input-group full">
                        <label>Message *</label>
                        <textarea placeholder="hello there,i would like to talk about how to..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Inquiries;
