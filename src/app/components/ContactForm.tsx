"use client";

import {useState, FormEvent} from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xbljanpg", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({name: "", email: "", message: ""});
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({...formData, [e.target.id]: e.target.value});
    const form = e.target.form;
    if (form) setIsValid(form.checkValidity());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl ">
      <div>
        <label htmlFor="name" className="block text-base font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-3 py-2 border rounded-md text-gray-900"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-base font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className="w-full px-3 py-2 border rounded-md text-gray-900"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-base font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-3 py-2 border rounded-md text-gray-900"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={!isValid || status === "submitting"}
        className="w-full py-2 px-4 rounded-md hover:opacity-80 disabled:opacity-50 text-xl font-medium"
        style={{
          backgroundColor: "var(--h1-color)",
          color: "var(--button-text-color)",
        }}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600">Message sent successfully.</p>
      )}
      {status === "error" && (
        <p className="text-red-600">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
