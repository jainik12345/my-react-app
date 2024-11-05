import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "./Physiotherapy.css";
import { addDays, format } from "date-fns";

export default function Physiotherapy() {
  const [sections, setSections] = useState([
    {
      id: Date.now(),
      startDate: null,
      endDate: null,
      diagnosis: "",
      description: "",
      notes: {},
    },
  ]); // Ensure at least one section exists by default
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = (index) => {
    let formErrors = {};
    if (!sections[index].diagnosis.trim()) {
      formErrors.diagnosis = "Diagnosis is required";
    }
    if (!sections[index].description.trim()) {
      formErrors.description = "Description is required";
    }
    setErrors({ ...errors, [index]: formErrors });
    return Object.keys(formErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e, index) => {
    e.preventDefault();
    if (validateForm(index)) {
      console.log("Section Data:", sections[index]);

      // Reset the fields for the submitted section
      const updatedSections = [...sections];
      updatedSections[index] = {
        ...updatedSections[index],
        diagnosis: "",
        description: "",
        startDate: null,
        endDate: null,
        notes: {},
      };
      setSections(updatedSections);
    }
  };

  // Generate dates between start and end dates
  const generateDateRange = (start, end) => {
    const dates = [];
    if (start && end) {
      let currentDate = new Date(start);
      const endDate = new Date(end);
      while (currentDate <= endDate) {
        dates.push(format(currentDate, "dd/MM/yyyy"));
        currentDate = addDays(currentDate, 1);
      }
    }
    return dates;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Function to add a new section
  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Date.now(),
        startDate: null,
        endDate: null,
        diagnosis: "",
        description: "",
        notes: {},
      },
    ]);
  };

  // Function to delete a section
  const deleteSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  // Function to handle field changes
  const handleFieldChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  return (
    <div className="physiotherapy-main-container">
      <div className="physiotherapy-title">
        <h2>Physiotherapy Treatment</h2>
        <div className="physiotherapy-title-icon" onClick={addSection}>
          +
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {sections.map((section, index) => {
          const dateRange = generateDateRange(
            section.startDate,
            section.endDate
          );
          return (
            <form
              key={section.id}
              className="physiotherapy-card-section"
              onSubmit={(e) => handleSubmit(e, index)}
            >
              {/* LEFT */}
              <div className="physiotherapy-card-left">
                <div className="physiotherapy-card-left-title">
                  <label htmlFor={`diagnosis-${index}`}>Diagnosis :</label>
                  <input
                    type="text"
                    id={`diagnosis-${index}`}
                    value={section.diagnosis}
                    onChange={(e) =>
                      handleFieldChange(index, "diagnosis", e.target.value)
                    }
                    placeholder="Enter Diagnosis"
                  />
                </div>
                {errors[index]?.diagnosis && (
                  <span className="error">{errors[index].diagnosis}</span>
                )}
                <div className="physiotherapy-card-left-description">
                  <label htmlFor={`description-${index}`}>
                    Diagnosis Description :
                  </label>
                  <input
                    type="text"
                    id={`description-${index}`}
                    value={section.description}
                    onChange={(e) =>
                      handleFieldChange(index, "description", e.target.value)
                    }
                    placeholder="Enter Description"
                  />
                </div>
                {errors[index]?.description && (
                  <span className="error">{errors[index].description}</span>
                )}
              </div>
              {/* RIGHT */}
              <div className="physiotherapy-card-right">
                <div className="physiotherapy-card-right-date">
                  <div className="physiotherapy-card-right-start-date">
                    <label>
                      Start Date <span className="required">*</span>
                    </label>
                    <DatePicker
                      format="DD-MM-YYYY"
                      placeholder="Start Date"
                      className="date-picker"
                      value={section.startDate}
                      minDate={today}
                      onChange={(date) =>
                        handleFieldChange(index, "startDate", date)
                      }
                      style={{
                        width: "85%",
                        borderRadius: "8px",
                        borderColor: "#ccc",
                        height: "46px",
                      }}
                    />
                  </div>
                  <div className="physiotherapy-card-right-end-date">
                    <label>
                      End Date <span className="required">*</span>
                    </label>
                    <DatePicker
                      format="DD-MM-YYYY"
                      placeholder="End Date"
                      className="date-picker"
                      value={section.endDate}
                      onChange={(date) =>
                        handleFieldChange(index, "endDate", date)
                      }
                      minDate={section.startDate}
                      style={{
                        width: "85%",
                        borderRadius: "8px",
                        borderColor: "#ccc",
                        height: "46px",
                      }}
                    />
                  </div>
                </div>
                {dateRange.length > 0 && (
                  <div className="physiotherapy-card-right-notes-section">
                    <h3>Date Notes :</h3>
                    {dateRange.map((date, idx) => (
                      <div
                        key={idx}
                        className="physiotherapy-card-right-notes-entry"
                      >
                        <span>{date} :</span>
                        <input
                          type="text"
                          placeholder="Enter Note"
                          value={section.notes[date] || ""}
                          onChange={(e) =>
                            handleFieldChange(index, "notes", {
                              ...section.notes,
                              [date]: e.target.value,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* Submit Button */}
                <button className="physiotherapy-card-right-btn" type="submit">
                  Submit
                </button>
              </div>
              {/* Delete button */}
              {index > 0 && (
                <button
                  className="delete-section-btn"
                  onClick={() => deleteSection(section.id)}
                >
                  +
                </button>
              )}
            </form>
          );
        })}
        {/* <div
          style={{ position: "absolute" }}
          className="physiotherapy-card-section-add"
          onClick={addSection}
        >
          +
        </div> */}
      </div>
    </div>
  );
}

// so give me create SQL Query for API and that is get and Insert API Query and Updated and Delete also and that in I am Allready Create Table name is Physiotherapy and that in main id is PhysiotherapyId and that table in column is PhysiotherapyId, Diagnosis, Description , DiagnosisDate, DiagnosisNote, CreatedBy, CreatedDate, UpdatedBy,UPdatedDate, Deleteby, Deletedate like that table of column and that 6 is for database side

// and

// aama date wise table ma entry padvi joe jem ke date select kari chhe jem ke 29/10/2024 thii lai ne 32/10/2024 aatla date ma jetli note thaii chhe e bathi table ma padvii joe..

// e rite bathii query lakhjo..

// //API CALL :

// import React, { useState, useEffect } from "react";
// import DatePicker from "react-multi-date-picker";
// import "./Physiotherapy.css";
// import { addDays, format } from "date-fns";
// import { toast, Zoom } from "react-toastify";
// import callApi from "../../../ApiCall";
// import Constants from "../../../Constants";

// export default function Physiotherapy({ GuestMasterId }) {
//   const [sections, setSections] = useState([
//     {
//       id: Date.now(),
//       startDate: null,
//       endDate: null,
//       diagnosis: "",
//       description: "",
//       notes: {},
//     },
//   ]);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const [availableDates, setAvailableDates] = useState([]);
//   const [selectedCheckIn, setSelectedCheckIn] = useState(null);
//   const [selectedCheckOut, setSelectedCheckOut] = useState(null);

//   const [notes, setNotes] = useState([{ date: "", note: "" }]);

//   const handleAddNote = () => {
//     setNotes([...notes, { date: "", note: "" }]);
//   };

//   const handleDateChange = (index, date) => {
//     if (date) {
//       const updatedNotes = [...notes];
//       updatedNotes[index].date = date;
//       setNotes(updatedNotes);
//     } else {
//       console.warn(`Invalid date for note at index ${index}`);
//     }
//   };

//   const handleNoteChange = (index, event) => {
//     const updatedNotes = [...notes];
//     updatedNotes[index].note = event.target.value;
//     setNotes(updatedNotes);
//   };
//   const handleDeleteNote = (index) => {
//     const newNotes = notes.filter((_, i) => i !== index);
//     setNotes(newNotes);
//   };

//   // Fetch Physiotherapy Data
//   useEffect(() => {
//     const fetchPhysiotherapyData = async () => {
//       try {
//         const response = await callApi({
//           apiURL: Constants.API.getPhysiotherapyDataList,
//           requestBody: { GuestMasterId },
//         });

//         if (response?.success && response.data) {
//           const formattedSections = response.data.getPhysiotherapyDataList.map(
//             (item) => {
//               const details = JSON.parse(item.Details);
//               return {
//                 id: item.GuestMasterId,
//                 startDate: item.DiagnosisDate,
//                 endDate: item.DiagnosisDate,
//                 diagnosis: item.Diagnosis,
//                 description: item.Description,
//                 notes: details.reduce((acc, curr) => {
//                   acc[format(new Date(curr.DiagnosisDate), "dd/MM/yyyy")] =
//                     curr.DiagnosisNote;
//                   return acc;
//                 }, {}),
//               };
//             }
//           );

//           setSections(formattedSections);
//         } else {
//           const errorMessage =
//             response?.message || "Failed to fetch physiotherapy data.";
//           toast.error(errorMessage);
//         }
//       } catch (error) {
//         console.error("Error fetching physiotherapy data:", error);
//         const errorMessage =
//           error?.response?.data?.message || "Error fetching data.";
//         toast.error(errorMessage);
//       }
//     };

//     const fetchAvailableDates = async () => {
//       try {
//         const response = await callApi({
//           apiURL: Constants.API.selectedGuestBookingHistory,
//           requestBody: { guestMasterId: GuestMasterId },
//         });

//         if (response?.success) {
//           const dates = response.data.selectedGuestBookingHistory.map(
//             (booking) => ({
//               checkIn: booking.CheckInDate,
//               checkOut: booking.CheckOutDate,
//             })
//           );
//           setAvailableDates(dates);
//         } else {
//           console.error("Error fetching available dates:", response.error);
//         }
//       } catch (error) {
//         console.error("Error during API call:", error);
//       }
//     };

//     fetchPhysiotherapyData();
//     if (GuestMasterId) {
//       fetchAvailableDates();
//     }
//   }, [GuestMasterId]);

//   // New function for inserting/updating PhysiotherapyData
//   const savePhysiotherapyData = async (payload) => {
//     try {
//       const response = await callApi({
//         apiURL: Constants.API.physiotherapyData, // Assuming Constants.API.physiotherapyData holds the correct endpoint URL
//         requestBody: payload,
//       });

//       if (response?.success) {
//         toast.success("Data successfully saved.");
//       } else {
//         console.error("Error response from PhysiotherapyData API:", response);
//         toast.error("Failed to save data.");
//       }
//     } catch (error) {
//       console.error("Error during PhysiotherapyData API call:", error);
//       toast.error("Error saving data.");
//     }
//   };

//   // Validation Function :
//   const validateForm = (index) => {
//     let formErrors = {};
//     if (!sections[index].diagnosis.trim()) {
//       formErrors.diagnosis = "Diagnosis is required";
//     }
//     if (!sections[index].description.trim()) {
//       formErrors.description = "Description is required";
//     }
//     setErrors({ ...errors, [index]: formErrors });
//     return Object.keys(formErrors).length === 0;
//   };

//   // Handle Submit
//   const handleSubmit = async (e, index) => {
//     e.preventDefault();
//     if (validateForm(index)) {
//       const sectionData = sections[index];

//       const dateRange = generateDateRange(
//         sectionData.startDate,
//         sectionData.endDate
//       );

//       const payloads = [];

//       for (const date of dateRange) {
//         const [day, month, year] = date.split("/").map(Number);
//         const formattedDate = new Date(year, month - 1, day);

//         if (isNaN(formattedDate.getTime())) {
//           console.error(`Invalid date: ${date}`);
//           continue;
//         }

//         // Construct the DiagnosisNote by including all notes
//         const diagnosisNote = notes
//           .filter((note) => note.date)
//           .map((note) => `${note.date}: ${note.note}`)
//           .join(", ");

//         const payload = {
//           GuestMasterId: GuestMasterId,
//           Diagnosis: sectionData.diagnosis,
//           Description: sectionData.description,
//           DiagnosisDate: format(formattedDate, "yyyy-MM-dd"),
//           DiagnosisNote: diagnosisNote,
//         };

//         payloads.push(payload);
//       }

//       try {
//         setLoading(true);

//         for (const payload of payloads) {
//           await savePhysiotherapyData(payload); // Call the savePhysiotherapyData function
//         }
//       } catch (error) {
//         console.error("Error during API call:", error);
//       } finally {
//         setLoading(false);
//       }

//       const updatedSections = [...sections];
//       updatedSections[index] = {
//         ...updatedSections[index],
//         diagnosis: "",
//         description: "",
//         startDate: null,
//         endDate: null,
//         notes: {},
//       };
//       setSections(updatedSections);
//     }
//   };

//   const generateDateRange = (start, end) => {
//     const dates = [];
//     if (start && end) {
//       let currentDate = new Date(start);
//       const endDate = new Date(end);
//       while (currentDate <= endDate) {
//         dates.push(format(currentDate, "dd/MM/yyyy"));
//         currentDate = addDays(currentDate, 1);
//       }
//     }
//     return dates;
//   };

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const addSection = () => {
//     setSections([
//       ...sections,
//       {
//         id: Date.now(),
//         startDate: null,
//         endDate: null,
//         diagnosis: "",
//         description: "",
//         notes: {},
//       },
//     ]);
//   };

//   const deleteSection = (id) => {
//     setSections(sections.filter((section) => section.id !== id));
//   };

//   const handleFieldChange = (index, field, value) => {
//     const updatedSections = [...sections];
//     updatedSections[index][field] = value;
//     setSections(updatedSections);
//   };

//   return (
//     <div className="physiotherapy-main-container">
//       <div className="physiotherapy-in-out">
//         {/* Dropdown for Check-In and Check-Out Dates */}
//         <label>Select Date Range:</label>
//         <select
//           onChange={(e) => {
//             const [checkIn, checkOut] = e.target.value.split(" to ");
//             setSelectedCheckIn(checkIn);
//             setSelectedCheckOut(checkOut);
//           }}
//         >
//           <option value="">Select Date Range</option>
//           {availableDates.map((date, index) => (
//             <option key={index} value={`${date.checkIn} to ${date.checkOut}`}>
//               {`${format(new Date(date.checkIn), "dd-MM-yyyy")} to ${format(
//                 new Date(date.checkOut),
//                 "dd-MM-yyyy"
//               )}`}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="physiotherapy-title">
//         <h2>Physiotherapy Treatment</h2>

//         <div className="physiotherapy-title-icon" onClick={addSection}>
//           +
//         </div>
//       </div>
//       <div style={{ position: "relative" }}>
//         {sections.map((section, index) => {
//           const dateRange = generateDateRange(
//             section.startDate,
//             section.endDate
//           );

//           return (
//             <form
//               key={section.id}
//               className="physiotherapy-form"
//               onSubmit={(e) => handleSubmit(e, index)}
//             >
//               <div className="physiotherapy-date-range">
//                 <label>Select Date Range:</label>
//                 <DatePicker
//                   value={[
//                     selectedCheckIn ? new Date(selectedCheckIn) : null,
//                     selectedCheckOut ? new Date(selectedCheckOut) : null,
//                   ]}
//                   minDate={today}
//                   maxDate={
//                     selectedCheckOut
//                       ? new Date(selectedCheckOut)
//                       : addDays(today, 90)
//                   }
//                   numberOfMonths={1}
//                   onChange={(value) =>
//                     handleFieldChange(index, "startDate", value[0] || null)
//                   }
//                   style={{
//                     border: "1px solid #C5C5C5",
//                     borderRadius: "4px",
//                     height: "42px",
//                     paddingLeft: "10px",
//                     fontSize: "16px",
//                     width: "100%",
//                     maxWidth: "300px",
//                   }}
//                 />
//               </div>
//               <div className="physiotherapy-input">
//                 <label>Diagnosis:</label>
//                 <input
//                   type="text"
//                   value={section.diagnosis}
//                   onChange={(e) =>
//                     handleFieldChange(index, "diagnosis", e.target.value)
//                   }
//                   required
//                 />
//                 {errors[index]?.diagnosis && (
//                   <p className="error">{errors[index].diagnosis}</p>
//                 )}
//               </div>
//               <div className="physiotherapy-input">
//                 <label>Description:</label>
//                 <textarea
//                   value={section.description}
//                   onChange={(e) =>
//                     handleFieldChange(index, "description", e.target.value)
//                   }
//                   required
//                 />
//                 {errors[index]?.description && (
//                   <p className="error">{errors[index].description}</p>
//                 )}
//               </div>
//               <div className="physiotherapy-input">
//                 <label>Notes:</label>
//                 {notes.map((note, noteIndex) => (
//                   <div key={noteIndex} className="note-container">
//                     <DatePicker
//                       value={note.date}
//                       onChange={(date) =>
//                         handleDateChange(noteIndex, date ? format(date, "dd/MM/yyyy") : null)
//                       }
//                       style={{
//                         border: "1px solid #C5C5C5",
//                         borderRadius: "4px",
//                         height: "42px",
//                         paddingLeft: "10px",
//                         fontSize: "16px",
//                         width: "100%",
//                         maxWidth: "300px",
//                       }}
//                     />
//                     <input
//                       type="text"
//                       value={note.note}
//                       onChange={(e) => handleNoteChange(noteIndex, e)}
//                       placeholder="Note details"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleDeleteNote(noteIndex)}
//                       style={{ marginLeft: "10px" }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 ))}
//                 <button type="button" onClick={handleAddNote}>
//                   Add Note
//                 </button>
//               </div>
//               <div className="physiotherapy-form-buttons">
//                 <button type="submit" disabled={loading}>
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => deleteSection(section.id)}
//                   disabled={loading}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </form>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// and All data is see frontend side means k  get set data in frontend side use of this API "getPhysiotherapyDataList" and see all data like Diagnosis, Description, DiagnosisDate, DiagnosisNote so give me update yaa some change in my code..
