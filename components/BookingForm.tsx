"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const fieldClass =
  "w-full rounded-2xl border border-line bg-mist/50 px-5 py-4 text-[14px] text-ink outline-none transition-all placeholder:text-ink-muted focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex w-full flex-col items-center gap-4 rounded-[24px] border border-line bg-white p-10 text-center shadow-[0_24px_50px_-30px_rgba(20,24,26,0.25)]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-accent-strong">
          <Check className="h-7 w-7" strokeWidth={2.4} aria-hidden="true" />
        </span>
        <h3 className="text-[19px] font-semibold text-ink">Заявка отправлена</h3>
        <p className="max-w-[360px] text-[14px] leading-[1.6] text-ink-soft">
          Спасибо! Администратор свяжется с вами в течение 15 минут, чтобы подобрать
          удобное время.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3.5 rounded-[24px] border border-line bg-white p-7 shadow-[0_24px_50px_-30px_rgba(20,24,26,0.25)] lg:p-8"
    >
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input type="text" name="name" placeholder="Ваше имя" required className={fieldClass} />
        <input type="tel" name="phone" placeholder="Телефон" required className={fieldClass} />
      </div>

      <label className="flex flex-col gap-2 text-left">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
          Желаемая дата приёма
        </span>
        <input
          type="date"
          name="date"
          min={today || undefined}
          required
          className={fieldClass}
        />
      </label>

      <textarea
        name="comment"
        rows={3}
        placeholder="Комментарий: что беспокоит питомца?"
        className={`${fieldClass} resize-none`}
      />

      <label className="flex cursor-pointer items-start gap-3 text-left">
        <input
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong accent-accent"
        />
        <span className="text-[11.5px] leading-[1.55] text-ink-muted">
          Я согласен на обработку персональных данных и принимаю{" "}
          <a href="#" className="text-ink underline underline-offset-2 hover:text-accent-strong">
            политику конфиденциальности
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={!consent}
        className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(117,192,67,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 disabled:cursor-not-allowed disabled:bg-line-strong disabled:shadow-none disabled:translate-y-0"
      >
        Записаться на приём
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-enabled:opacity-100" aria-hidden="true" />
      </button>

      <p className="mt-1 text-center text-[11px] text-ink-muted">
        Обязательные поля: имя, телефон, дата приёма и согласие на обработку данных.
      </p>
    </form>
  );
}
