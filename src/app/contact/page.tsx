import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <h1>Contact Us</h1>
      <p className="mb-8 max-w-3xl">
        For submissions, inquiries, or general remarks, please contact
        Persistence of Vision Publishing.
      </p>
      <ContactForm />
    </div>
  );
}
