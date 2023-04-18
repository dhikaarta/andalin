import styles from "@/styles/Login.module.css";
import Header from "@/components/header";
import { useState } from "react";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      jobTitle,
      companySize,
      city,
      salesperson,
      companyIndustryType,
    };
    console.log(data);

  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [city, setCity] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [companyIndustryType, setCompanyIndustryType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleCompanySizeChange = (e) => {
    setCompanySize(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSalespersonChange = (e) => {
    setSalesperson(e.target.value);
  };

  const handleCompanyIndustryTypeChange = (e) => {
    setCompanyIndustryType(e.target.value);
  };

  return (
    <div className={styles.login} style={{ backgroundColor: "#1d3354" }}>
      <Header />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className = {styles.header}>
        <h2>Ship with Andalin Now !</h2>
        <p>{"Let's Create Your Account Here"}</p>
        </div>
        <div className={styles.field}>
          <label>Full Name :</label>
          <input type="text" name="name" onChange={handleNameChange} />
        </div>

        <div className={styles.field}>
          <label>Email Address :</label>
          <input type="text" name="email" onChange={handleEmailChange} />
        </div>

        <div className={styles.field}>
          <label>Job Title :</label>
          <input type="text" name="name" onChange={handleJobTitleChange} />
        </div>
        <div className={styles.field}>
          <label>Company Size :</label>
          <input type="text" name="name" onChange={handleCompanySizeChange} />
        </div>

        <div className={styles.field}>
          <label>City :</label>
          <input type="text" name="name" onChange={handleCityChange} />
        </div>
        <div className={styles.field}>
          <label>Salesperson :</label>
          <input type="text" name="name" onChange={handleSalespersonChange} />
        </div>
        <div className={styles.field}>
          <label>Company Industry Type:</label>
          <input
            type="text"
            name="name"
            onChange={handleCompanyIndustryTypeChange}
          />
        </div>

        <footer>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </footer>
      </form>
    </div>
  );
}
