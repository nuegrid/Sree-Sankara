"use client";

import { useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/Typography";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
};

type TouchedState = Partial<Record<keyof FormState, boolean>>;

const CITY_OPTIONS = [
  "Kerala",
  "Karnataka",
  "Tamil Nadu",
  "Maharashtra",
  "Delhi NCR",
  "Other",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
}

export default function VolunteerForm() {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    city: "",
  });
  const [touched, setTouched] = useState<TouchedState>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!values.fullName.trim()) e.fullName = "Full Name is required.";
    if (!values.phone.trim()) e.phone = "Phone Number is required.";
    else if (!isValidPhone(values.phone)) e.phone = "Enter a valid phone number.";
    if (!values.email.trim()) e.email = "Email Id is required.";
    else if (!isValidEmail(values.email)) e.email = "Enter a valid email address.";
    if (!values.city) e.city = "City / Location is required.";
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
    if (Object.keys(errors).length > 0) return;
    setSuccess(true);
  };

  const inputClass = (key: keyof FormState) =>
    cn(
      "h-12 w-full rounded-2xl border border-stone-200 bg-white px-5 text-sm text-gray-950 placeholder:text-stone-400 focus:border-[#FF3D0B]/40 focus:outline-none focus:ring-2 focus:ring-[#FF3D0B]/20",
      showError(key) && "border-[#FF3D0B]"
    );

  if (success) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white px-6 py-10">
        <Typography as="h2" variant="headline3" className="text-gray-950">
          Thank you for applying to volunteer.
        </Typography>
        <Typography as="p" variant="bodyText2" className="mt-3 text-neutral-600">
          We have received your application and will be in touch soon.
        </Typography>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="volunteer-fullname" className="sr-only">
            Full Name
          </label>
          <input
            id="volunteer-fullname"
            name="fullName"
            value={values.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
            placeholder="Full Name"
            className={inputClass("fullName")}
            autoComplete="name"
          />
          {showError("fullName") ? (
            <Typography as="p" variant="bodyText2" className="text-[#FF3D0B]">
              {errors.fullName}
            </Typography>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="volunteer-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="volunteer-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
            placeholder="Phone Number"
            className={inputClass("phone")}
            autoComplete="tel"
          />
          {showError("phone") ? (
            <Typography as="p" variant="bodyText2" className="text-[#FF3D0B]">
              {errors.phone}
            </Typography>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="volunteer-email" className="sr-only">
            Email Id
          </label>
          <input
            id="volunteer-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, email: true }))}
            placeholder="Email Id"
            className={inputClass("email")}
            autoComplete="email"
          />
          {showError("email") ? (
            <Typography as="p" variant="bodyText2" className="text-[#FF3D0B]">
              {errors.email}
            </Typography>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="volunteer-city" className="sr-only">
            City / Location
          </label>
          <div className="relative">
            <select
              id="volunteer-city"
              name="city"
              value={values.city}
              onChange={(e) => setField("city", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, city: true }))}
              className={cn(
                inputClass("city"),
                "appearance-none pr-11",
                !values.city && "text-stone-400"
              )}
            >
              <option value="" disabled>
                City/ Location
              </option>
              {CITY_OPTIONS.map((city) => (
                <option key={city} value={city} className="text-gray-950">
                  {city}
                </option>
              ))}
            </select>
            <FiChevronDown
              className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-stone-400"
              aria-hidden
            />
          </div>
          {showError("city") ? (
            <Typography as="p" variant="bodyText2" className="text-[#FF3D0B]">
              {errors.city}
            </Typography>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-1 h-12 w-full rounded-2xl bg-[#FE3E02] text-white transition-colors hover:bg-[#e63702]"
        >
          <Typography as="span" variant="buttonSmall" className="text-white">
            Submit Application
          </Typography>
        </button>
      </div>
    </form>
  );
}
