"use client";

import React, { useEffect, useState } from "react";

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [today, setToday] = useState("");

  // Минимальную дату считаем уже в браузере (избегаем new Date() при пререндере)
  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex flex-col gap-4 mt-4 bg-white p-8 rounded-[24px] shadow-sm"
    >
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        required
        className="w-full bg-[#F8F8F8] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all placeholder:text-gray-400"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        required
        className="w-full bg-[#F8F8F8] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all placeholder:text-gray-400"
      />

      {/* Дата приёма */}
      <label className="flex flex-col gap-2 text-left">
        <span className="text-[11px] font-medium uppercase tracking-widest text-[#7A7A7A]">
          Желаемая дата приёма
        </span>
        <input
          type="date"
          name="date"
          min={today || undefined}
          required
          className="w-full bg-[#F8F8F8] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all"
        />
      </label>

      {/* Комментарий */}
      <textarea
        name="comment"
        rows={3}
        placeholder="Комментарий: что беспокоит питомца?"
        className="w-full bg-[#F8F8F8] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] outline-none focus:border-[#75C043] focus:ring-1 focus:ring-[#75C043] transition-all placeholder:text-gray-400 resize-none"
      />

      {/* Согласие на обработку персональных данных */}
      <label className="flex items-start gap-3 text-left cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-[#75C043] accent-[#75C043] focus:ring-[#75C043]"
        />
        <span className="text-[11px] leading-[1.5] text-[#7A7A7A]">
          Я согласен на обработку персональных данных и принимаю{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-[#75C043] transition-colors"
          >
            политику конфиденциальности
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={!consent}
        className="w-full bg-[#75C043] hover:bg-[#65a83a] disabled:cursor-not-allowed disabled:bg-[#C9E3B4] text-white text-sm font-semibold py-4 rounded-xl transition-all duration-200 mt-2 shadow-lg shadow-green-200/50"
      >
        Записаться на приём
      </button>

      {submitted ? (
        <p className="text-[11px] text-[#4A7C59] mt-1 text-center">
          Спасибо! Заявка отправлена — администратор свяжется с вами в течение 15 минут.
        </p>
      ) : (
        <p className="text-[10px] text-[#9A9A9A] mt-2 text-center">
          Обязательные поля: имя, телефон, дата приёма и согласие на обработку данных.
        </p>
      )}
    </form>
  );
};

export default BookingForm;
