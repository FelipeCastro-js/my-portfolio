import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useRef, useState, type FormEvent } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const formRef = useRef<HTMLFormElement>(null);

  // EmailJS Configuration Keys
  const serviceId = "service_1h7zl2o";
  const templateId = "template_qky4m6i";
  const publicKey = "P2gthpoWuV-02fibB";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: "" });

    try {
      const form = formRef.current;
      const formData = new FormData(form);
      const nameVal = (formData.get("name") as string) || "";
      const emailVal = (formData.get("email") as string) || "";
      const messageVal = (formData.get("message") as string) || "";


      emailjs.init({ publicKey });


      const templateParams = {
        name: nameVal,
        from_name: nameVal,
        user_name: nameVal,
        email: emailVal,
        from_email: emailVal,
        user_email: emailVal,
        reply_to: emailVal,
        message: messageVal,
        to_name: "Felipe Castro",
      };

      // Send payload via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200 || response.text === "OK") {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "success",
        });

        setStatusMessage({
          type: "success",
          text: "Message sent successfully! Thank you for reaching out.",
        });

        form.reset();
      } else {
        throw new Error(`EmailJS status response: ${response.status} ${response.text}`);
      }
    } catch (error: any) {
      console.error("EmailJS Submission Error:", error);

      const errorText =
        error?.text ||
        error?.message ||
        (typeof error === "string" ? error : "Verification failed");

      toast({
        title: "Submission Error",
        description: `Could not send automatically. (${errorText})`,
        variant: "error",
      });

      setStatusMessage({
        type: "error",
        text: `Error processing EmailJS (${errorText}). If credentials need updating, you can send an email directly using the button below.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open to connecting!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:carloscastro1860@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    carloscastro1860@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+573202335725"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +57 (320) 3235725
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bogota D.C, Colombia
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/felipe-castro-907478182/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/FelipeCastro-js"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:carloscastro1860@gmail.com"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                  title="Direct Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs border border-border/60">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              {statusMessage.type && (
                <div
                  className={cn(
                    "p-4 rounded-lg flex items-start gap-3 text-sm font-medium",
                    statusMessage.type === "success"
                      ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                      : "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                  )}
                >
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p>{statusMessage.text}</p>
                    {statusMessage.type === "error" && (
                      <a
                        href="mailto:carloscastro1860@gmail.com?subject=Contact%20from%20Portfolio"
                        className="inline-block mt-2 px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 rounded-md text-xs font-semibold transition-colors"
                      >
                        Click to Send via Direct Email (mailto) ✉️
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
