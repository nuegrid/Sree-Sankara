"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/Typography";

type FormState = {
  fullName: string;
  email: string;
  message: string;
};

type TouchedState = Partial<Record<keyof FormState, boolean>>;

function isValidEmail(email: string) {
  // Simple email validation (enough for UI feedback; avoids heavy parsing).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<TouchedState>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!values.fullName.trim()) e.fullName = "Full Name is required.";
    if (!values.email.trim()) e.email = "Email Id is required.";
    else if (!isValidEmail(values.email)) e.email = "Enter a valid email address.";
    if (!values.message.trim()) e.message = "Message is required.";
    return e;
  }, [values]);

  const showError = (key: keyof FormState) => {
    if (success) return false;
    if (submitAttempted) return Boolean(errors[key]);
    return Boolean(touched[key] && errors[key]);
  };

  const setField = (key: keyof FormState, next: string) => {
    setValues((prev) => ({ ...prev, [key]: next }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) return;

    // Frontend-only success state (no backend/API endpoints).
    setSuccess(true);
  };

  return (
    <section className="w-full">
      {success ? (
        <div className="rounded-3xl border border-stone-200 bg-white px-6 py-10">
          <Typography as="h2" variant="headline3" className="text-gray-950">
            Thank you! We have received your message.
          </Typography>
          <Typography as="p" variant="bodyText2" className="mt-3 text-neutral-600">
            We will get back to you shortly.
          </Typography>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="w-full">
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-fullname" className="sr-only">
                Full Name
              </label>
              <input
                id="contact-fullname"
                name="fullName"
                value={values.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
                placeholder="Full Name"
                className={cn(
                  "h-12 w-full rounded-2xl border border-stone-200 bg-white px-5 text-sm text-gray-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D0B]/20 focus:border-[#FF3D0B]/40",
                  showError("fullName") && "border-[#FF3D0B]"
                )}
                required
              />
              {showError("fullName") ? (
                <Typography as="p" variant="bodyText2" className="text-[#FF3D0B]">
                  {errors.fullName}
                </Typography>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="sr-only">
                Email Id
              </label>
              <input
                id="contact-email"
                name="email"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                placeholder="Email Id"
                className={cn(
                  "h-12 w-full rounded-2xl border border-stone-200 bg-white px-5 text-sm text-gray-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D0B]/20 focus:border-[#FF3D0B]/40",
                  showError("email") && "border-[#FF3D0B]"
                )}
                required
              />
              {showError("email") ? (
                <Typography as="p" variant="bodyText2" className="text-[#FF3D0B]">
                  {errors.email}
                </Typography>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, message: true }))}
                placeholder="Message"
                rows={5}
                className={cn(
                  "w-full resize-none rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm text-gray-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D0B]/20 focus:border-[#FF3D0B]/40",
                  showError("message") && "border-[#FF3D0B]"
                )}
                required
              />
              {showError("message") ? (
                <Typography as="p" variant="bodyText2" className="text-[#FF3D0B]">
                  {errors.message}
                </Typography>
              ) : null}
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-full bg-[#FF3D0B] text-white transition-colors hover:bg-[#e8370a]"
            >
              <Typography as="span" variant="buttonSmall" className="text-white">
                Submit
              </Typography>
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

