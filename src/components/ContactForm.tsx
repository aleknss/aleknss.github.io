import { useState, type FormEvent } from "react";
import { FaSpinner, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "";

export default function ContactForm() {
  const { language } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const t = {
    name: language === "es" ? "Nombre" : "Name",
    email: "Email",
    message: language === "es" ? "Mensaje" : "Message",
    send: language === "es" ? "Enviar" : "Send",
    sending: language === "es" ? "Enviando..." : "Sending...",
    successTitle: language === "es" ? "Mensaje enviado" : "Message sent",
    successText: language === "es" ? "Gracias por contactar. Te responderé pronto." : "Thanks for reaching out. I'll get back to you soon.",
    errorTitle: language === "es" ? "Error al enviar" : "Send error",
    errorText: language === "es" ? "No se pudo enviar. Intenta de nuevo o usa el email." : "Could not send. Try again or use email instead.",
    noKey: language === "es" ? "Formulario no configurado. Usa los enlaces de contacto." : "Form not configured. Use the contact links instead.",
    namePlaceholder: language === "es" ? "Tu nombre" : "Your name",
    messagePlaceholder: language === "es" ? "Tu mensaje..." : "Your message...",
  };

  if (!WEB3FORMS_KEY) {
    return (
      <div className="w-full max-w-md">
        <p className="text-white/70 text-sm">{t.noKey}</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="w-full max-w-md p-6 rounded bg-white/10 border border-accent/30">
        <div className="flex items-center gap-3 text-accent mb-2">
          <FaCheck size={24} />
          <span className="font-bold text-lg">{t.successTitle}</span>
        </div>
        <p className="text-white/80">{t.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3">
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-300 bg-red-900/30 p-3 rounded text-sm">
          <FaExclamationTriangle />
          <span>{t.errorText}</span>
        </div>
      )}
      <input
        type="text"
        name="name"
        required
        placeholder={t.namePlaceholder}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
      />
      <input
        type="email"
        name="email"
        required
        placeholder={t.email}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder={t.messagePlaceholder}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white font-medium px-6 py-2.5 rounded transition-colors disabled:opacity-50"
      >
        {status === "loading" ? (
          <><FaSpinner className="animate-spin" /> {t.sending}</>
        ) : (
          t.send
        )}
      </button>
    </form>
  );
}
