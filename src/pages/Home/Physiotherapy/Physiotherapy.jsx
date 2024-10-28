import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "./Physiotherapy.css"
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
