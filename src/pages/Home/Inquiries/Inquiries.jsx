// import  { useState } from 'react';
// import './Inquiries.css';

// const Inquiries = () => {
//     const [formType, setFormType] = useState('contact');

//     const handleFormSwitch = (type) => {
//         setFormType(type);
//     };

//     return (
//         <div className="inquiries-container">
//             <h2>Reach Out to Us for any Inquiries or Assistance</h2>
//             <div className="button-container">
//                 <button
//                     className={`btn ${formType === 'contact' ? 'active' : ''}`}
//                     onClick={() => handleFormSwitch('contact')}
//                 >
//                     <i className="fas fa-phone-alt"></i> Reach Out To Us
//                 </button>
//                 <button
//                     className={`btn ${formType === 'career' ? 'active' : ''}`}
//                     onClick={() => handleFormSwitch('career')}
//                 >
//                     <i className="fas fa-briefcase"></i> Career @Checkmate
//                 </button>
//             </div>
//             <div className="form-container">
//                 <form>
//                     <div className="input-group left">
//                         <label>Full Name *</label>
//                         <input type="text" placeholder="john david" required />
//                     </div>
//                     <div className="input-group right">
//                         <label>{formType === 'contact' ? 'Your Email *' : 'Your Address *'}</label>
//                         <input
//                             type={formType === 'contact' ? 'email' : 'text'}
//                             placeholder={formType === 'contact' ? 'example@yourmail.com' : 'Enter your address'}
//                             required
//                         />
//                     </div>
//                     <div className="input-group left">
//                         <label>Mobile No. *</label>
//                         <input type="text" placeholder="+91 xxxxxxxxxx" required />
//                     </div>
//                     <div className="input-group right">
//                         <label>Subject *</label>
//                         <input type="text" placeholder="how can we help you" required />
//                     </div>
//                     <div className="input-group full">
//                         <label>Message *</label>
//                         <textarea placeholder="hello there,i would like to talk about how to..." required></textarea>
//                     </div>
//                     <button type="submit" className="submit-btn">Send Message</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Inquiries;



import { useState } from 'react';
import './Inquiries.css';

const Inquiries = () => {
    const [formType, setFormType] = useState('contact');
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFormSwitch = (type) => {
        setFormType(type);
        if (type === 'contact') {
            setUploadedFile(null); // Reset uploaded file when switching to contact form
        }
    };

    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
    };

    const handleFileDelete = () => {
        setUploadedFile(null);
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

                    {formType === 'contact' && (
                        <div className="input-group right">
                            <label>Subject *</label>
                            <input type="text" placeholder="how can we help you" required />
                        </div>
                    )}

                    {formType === 'career' && (
                        <div className="input-group right">
                            <label>Upload Document *</label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileUpload}
                                required={!uploadedFile} // Require file if none is uploaded
                            />
                            {uploadedFile && (
                                <div className="file-preview">
                                    <p>{uploadedFile.name}</p>
                                    <button type="button" className="delete-btn" onClick={handleFileDelete}>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="input-group full">
                        <label>Message *</label>
                        <textarea placeholder="hello there, i would like to talk about how to..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        {formType === 'contact' ? 'Send Message' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Inquiries;
