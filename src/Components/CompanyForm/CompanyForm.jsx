import React, { useState } from "react";
import "./CompanyForm.css";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    employees: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.companyName)
      newErrors.companyName = "Kompaniya nomi majburiy";
    if (!formData.email) newErrors.email = "Email majburiy";
    if (!formData.phone) newErrors.phone = "Telefon raqami majburiy";
    if (!formData.country) newErrors.country = "Davlat majburiy";
    if (!formData.city) newErrors.city = "Shahar majburiy";
    if (!formData.address) newErrors.address = "Yashash joyi majburiy";
    if (!formData.employees) newErrors.employees = "Hodimlar soni majburiy";
    if (!formData.description) newErrors.description = "Izoh majburiy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("companyData", JSON.stringify(formData));
      alert("Ma'lumotlar Localstorage ga muvaffaqiyatli saqlandi marhamat ko'rishingiz mumkim  ");
      setFormData({
        companyName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        employees: "",
        description: "",
      });
    }
  };

  return (
    <form className="company-form" onSubmit={handleSubmit}>
      <h1>Kompaniya ma'lumotlari</h1>
      <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>

      <div className="form-group">
        <label htmlFor="upload" className="upload-label">
          Yuklash
        </label>
        <input type="file" id="upload" className="upload-input" />
      </div>

      <div className="form-group">
        <label htmlFor="companyName">Kompaniya nomi *</label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="Kompaniya nomi"
        />
        {errors.companyName && <p className="error">{errors.companyName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefon raqami *</label>
        <div className="phone-input">
          <select id="country-code">
            <option value="UZ">UZ +998</option>
          </select>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label>Linklar</label>
        <div className="social-links">
          <button type="button" className="social-button">
            <i className="fab fa-telegram"></i>
          </button>
          <button type="button" className="social-button">
            <i className="fab fa-instagram"></i>
          </button>
          <button type="button" className="social-button">
            <i className="fab fa-facebook"></i>
          </button>
          <button type="button" className="social-button">
            <i className="fab fa-linkedin"></i>
          </button>
          <button type="button" className="social-button">
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="country">Davlat *</label>
        <select
          id="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="">Davlat</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Russia">Russia</option>
          <option value="England">England</option>
        </select>
        {errors.country && <p className="error">{errors.country}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="city">Shahar *</label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="Shahar"
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="address">Yashash joyi *</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Joy"
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="employees">Hodimlar soni *</label>
        <select
          id="employees"
          value={formData.employees}
          onChange={handleInputChange}
        >
          <option value="">Hodimlar soni</option>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        {errors.employees && <p className="error">{errors.employees}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Izoh *</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Kompaniya haqida izoh qoldiring"
        ></textarea>
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      <div className="form-actions">
        <button type="button" className="form-button back-button">
          Ortga
        </button>
        <button type="submit" className="form-button next-button">
          Keyingisi
        </button>
      </div>
    </form>
  );
};

export default CompanyForm;