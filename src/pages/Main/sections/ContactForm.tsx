import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import backgroundImage from "../../../shared/assets/images/contact-bg.jpg";
import LoadingSpinner from "../../../shared/ui/Spinner";

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const telegramBotId = "8161497894:AAGpNYMDHDqF3sHiPaWf_c-WEk8SO967ddk";
    const chatIds = [466029829, 6838980794]; // comma-separated list of chat IDs
    const message = `Name: ${formData.name}\nNumber: ${formData.number}\nEmail: ${formData.email}\nMessage: ${formData.message}\nLanguage: ${i18n.language}`;

    try {
      const requests = chatIds.map((chatId) =>
        fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }),
      );

      await Promise.all(requests);
      setFormData({ name: "", number: "", email: "", message: "" });
      alert(t("contact.successMessage"));
    } catch (error) {
      console.error(error);
      alert(t("contact.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center py-12 px-4 lg:px-20 bg-gray-100"
    >
      {/* Image and Design Section */}
      <div
        className="hidden md:block w-full h-[500px] md:w-1/2"
        data-aos="flip-right"
        data-aos-duration="2000"
      >
        <div
          className="bg-cover bg-bottom rounded-md shadow-lg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            height: "100%",
          }}
        >
          {/* Add overlay design or gradient if needed */}
          <div className="h-full bg-gradient-to-r from-gray-900 to-transparent opacity-80"></div>
        </div>
      </div>

      {/* Form Section */}
      <div
        className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <h2 className="text-3xl font-semibold text-gray-800">
          {t("contact.title")}
        </h2>
        <p className="mt-2 text-gray-600">{t("contact.subtitle")}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact.namePlaceholder")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder={t("contact.numberPlaceholder")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.emailPlaceholder")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-md transition duration-300 ease-in-out ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : t("contact.submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
