// import React, { useState } from "react";
// import "./ContactUsForm.css";

// import contactus_call_icon from "../.././../assets/icons/contactus_call_icon.svg";
// import contactus_carrer_icon from "../../../assets/icons/contactus_carrer_icon.svg";
// import contactus_upload_document_icon from "../../../assets/icons/contactus_upload_document_icon.svg";
// import contactus_delete_icon from "../../../assets/icons/contactus_delete_icon.svg";

// const ContactUsForm = () => {
//   const [formType, setFormType] = useState("contact");
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const handleFormSwitch = (type) => {
//     setFormType(type);
//     if (type === "contact") {
//       setUploadedFile(null);
//     }
//   };

//   const handleFileUpload = (e) => {
//     setUploadedFile(e.target.files[0]);
//   };

//   const handleFileDelete = () => {
//     setUploadedFile(null);
//   };

//   const fileInputRef = React.createRef();

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };
//   return (
//     <>
//       <div className="contactus_page_main_container">
//         <div className="contactus_page_title_main_container">
//           <div className="contactus_title">
//             <p>Reach Out to Us for any Inquiries or Assistance</p>
//           </div>
//           <div className="contactus_selected_section">
//             <div
//               className={`contactus_callus_selected_section ${
//                 formType === "contact" ? "active" : ""
//               }`}
//               onClick={() => handleFormSwitch("contact")}
//             >
//               <div className="contactus_callus_icon">
//                 <img src={contactus_call_icon} alt="ContactUs_Calling_Icon" />
//               </div>
//               <p>Reach Out to Us</p>
//             </div>
//             <div
//               className={`contactus_carrer_selected_section ${
//                 formType === "carrer" ? "active" : ""
//               }`}
//               onClick={() => handleFormSwitch("carrer")}
//             >
//               <div className="contactus_carrer_icon">
//                 <img src={contactus_carrer_icon} alt="ContactUs_Carrer_Icon" />
//               </div>
//               <p>Career @Checkmate</p>
//             </div>
//           </div>
//         </div>
//         {/*   */}
//         <div className="contactus_form_main_container">
//           <div className="contactus_form">
//             <div className="contactus_form_part_1">
//               <div className="contactus_form_part_1_left">
//                 <label>Full Name *</label>
//                 <input type="text" placeholder="John David" required />
//               </div>
//               <div className="contactus_form_part_1_right">
//                 <label>
//                   {formType === "contact" ? "Your Email *" : "Your Address *"}
//                 </label>
//                 <input
//                   type={formType === "contact" ? "email" : "text"}
//                   placeholder={
//                     formType === "contact"
//                       ? "example@yourmail.com"
//                       : "Enter your address"
//                   }
//                   required
//                 />
//               </div>
//             </div>
//             <div className="contactus_form_part_2">
//               <div className="contactus_form_part_2_left">
//                 <label>Mobile No. *</label>
//                 <input type="number" placeholder="+91 xxxxxxxxxx" required />
//               </div>

//               {formType === "contact" && (
//                 <div className="contactus_form_part_2_right">
//                   <label>Subject *</label>
//                   <input
//                     type="text"
//                     placeholder="how can we help you"
//                     required
//                   />
//                 </div>
//               )}
//               {formType === "carrer" && (
//                 <div className="contactus_form_part_2_right_document">
//                   <label>Upload CV *</label>
//                   <div className="upload_icon_container">
//                     <img
//                       src={contactus_upload_document_icon}
//                       alt="Upload Icon"
//                       className="upload_icon"
//                       onClick={triggerFileInput}
//                     />
//                     {!uploadedFile && <p></p>}

//                     <input
//                       type="file"
//                       ref={fileInputRef}
//                       style={{ display: "none" }}
//                       accept=".pdf,.doc,.docx,.jpg,.svg"
//                       onChange={handleFileUpload}
//                       required={!uploadedFile}
//                     />
//                     {uploadedFile && (
//                       <div className="file-preview">
//                         <p>{uploadedFile.name}</p>

//                         <img
//                           src={contactus_delete_icon}
//                           alt="Delete_Icon"
//                           className="delete_btn"
//                           onClick={handleFileDelete}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="contactus_form_part_3">
//               <label>Message *</label>
//               <input
//                 type="text"
//                 placeholder="hello there, i would like to talk about how to..."
//                 required
//               />
//             </div>
//             <div className="contactus_form_button">
//               <p>Send Message</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUsForm;


import React, { useState } from "react";
import "./ContactUsForm.css";

import contactus_call_icon from "../../../assets/icons/contactus_call_icon.svg";
import contactus_carrer_icon from "../../../assets/icons/contactus_carrer_icon.svg";
import contactus_upload_document_icon from "../../../assets/icons/contactus_upload_document_icon.svg";
import contactus_delete_icon from "../../../assets/icons/contactus_delete_icon.svg";

const ContactUsForm = () => {
  const [formType, setFormType] = useState("contact");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    emailOrAddress: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleFormSwitch = (type) => {
    setFormType(type);
    setUploadedFile(null); // Clear uploaded file
    setFormData({
      name: "",
      emailOrAddress: "",
      mobile: "",
      subject: "",
      message: "",
    }); // Clear form fields
  };

  const handleFileUpload = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleFileDelete = () => {
    setUploadedFile(null);
  };

  const fileInputRef = React.createRef();

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear form after submission
    setFormData({
      name: "",
      emailOrAddress: "",
      mobile: "",
      subject: "",
      message: "",
    });
    setUploadedFile(null);
  };

  return (
    <>
      <div className="contactus_page_main_container">
        <div className="contactus_page_title_main_container">
          <div className="contactus_title">
            <p>Reach Out to Us for any Inquiries or Assistance</p>
          </div>
          <div className="contactus_selected_section">
            <div
              className={`contactus_callus_selected_section ${
                formType === "contact" ? "active" : ""
              }`}
              onClick={() => handleFormSwitch("contact")}
            >
              <div className="contactus_callus_icon">
                <img src={contactus_call_icon} alt="ContactUs_Calling_Icon" />
              </div>
              <p>Reach Out to Us</p>
            </div>
            <div
              className={`contactus_carrer_selected_section ${
                formType === "carrer" ? "active" : ""
              }`}
              onClick={() => handleFormSwitch("carrer")}
            >
              <div className="contactus_carrer_icon">
                <img src={contactus_carrer_icon} alt="ContactUs_Carrer_Icon" />
              </div>
              <p>Career @Checkmate</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contactus_form_main_container">
          <form className="contactus_form" onSubmit={handleSubmit}>
            <div className="contactus_form_part_1">
              <div className="contactus_form_part_1_left">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John David"
                  required
                />
              </div>
              <div className="contactus_form_part_1_right">
                <label>
                  {formType === "contact" ? "Your Email *" : "Your Address *"}
                </label>
                <input
                  type={formType === "contact" ? "email" : "text"}
                  name="emailOrAddress"
                  value={formData.emailOrAddress}
                  onChange={handleInputChange}
                  placeholder={
                    formType === "contact"
                      ? "example@yourmail.com"
                      : "Enter your address"
                  }
                  required
                  pattern={formType === "contact" ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" : null}
                />
              </div>
            </div>

            <div className="contactus_form_part_2">
              <div className="contactus_form_part_2_left">
                <label>Mobile No. *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  placeholder="+91 xxxxxxxxxx"
                  required
                />
              </div>

              {formType === "contact" && (
                <div className="contactus_form_part_2_right">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you"
                    required
                  />
                </div>
              )}
              {formType === "carrer" && (
                <div className="contactus_form_part_2_right_document">
                  <label>Upload CV *</label>
                  <div className="upload_icon_container">
                    <img
                      src={contactus_upload_document_icon}
                      alt="Upload Icon"
                      className="upload_icon"
                      onClick={triggerFileInput}
                    />
                    {!uploadedFile && <p></p>}

                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      accept=".pdf,.doc,.docx,.jpg,.svg"
                      onChange={handleFileUpload}
                      required={!uploadedFile}
                    />
                    {uploadedFile && (
                      <div className="file-preview">
                        <p>{uploadedFile.name}</p>
                        <img
                          src={contactus_delete_icon}
                          alt="Delete_Icon"
                          className="delete_btn"
                          onClick={handleFileDelete}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="contactus_form_part_3">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Hello there, I would like to talk about how to..."
                required
              />
            </div>
            <div className="contactus_form_button">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
