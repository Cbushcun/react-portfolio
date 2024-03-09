import ContactForm from "/src/components/ContactForm";
import Footer from "/src/components/Footer";

function ContactPage() {
  return (
    <section
      id="contact"
      className="min-h-content flex w-screen flex-col place-content-center items-center justify-between bg-stone-900 pt-20 text-stone-200"
    >
      <ContactForm />
      <Footer />
    </section>
  );
}

export default ContactPage;
