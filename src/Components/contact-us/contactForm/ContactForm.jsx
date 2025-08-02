import * as React from "react";
import { FormInput } from "./FormInput";
import ReCAPTCHA from "react-google-recaptcha";
import bg from "../../../assets/images/Bg20.png";

export function ContactForm() {
  const formInputs = [
    { label: "Email", placeholder: "Enter Your Email", type: "email" },
    { label: "Phone", placeholder: "Enter Phone", type: "tel" },
    { label: "Subject", placeholder: "Enter Subject" },
    { label: "Message", placeholder: "Type Your Message", type: "textarea" },
  ];

  const [recaptchaValue, setRecaptchaValue] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please verify the reCAPTCHA");
      return;
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-12 md:px-0 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col justify-center items-center px-4 md:px-9 py-7 bg-white rounded-[20px] w-full max-w-[1122px] shadow-sm mx-auto mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-full"
        >
          {/* Header */}
          <div className="text-center">
            <p className="text-[20px] font-normal text-[#01B8FF] mt-[100px] font-andika">
              Contact
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold leading-snug text-[#001A33] font-andika">
              Get <span className="text-slate-900">In Touch</span>
            </h2>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5 mt-6 w-full">
            {formInputs.map((input, index) => (
              <FormInput key={index} {...input} />
            ))}
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center mt-9">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleRecaptchaChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex justify-center items-center self-center px-6 md:px-40 py-4 mt-9 text-lg capitalize border border-sky-500 border-solid min-h-[60px] rounded-[30px] w-full md:w-[559px] h-[60px] mb-5"
          >
            <div className="flex items-center gap-2 text-[#01B8FF]">
              <span>Get in Touch</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/43db59f21c958a0cb6f84d536a7b69daa3033a05fb15fe7b7b1e999d8d8e5d2b?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
                alt="Arrow"
                className="object-contain w-[15px] aspect-square"
              />
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
