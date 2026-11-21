import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm"; // Вынесем форму в отдельный компонент
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Запись на приём — Ветеринарная клиника «Белый кот»",
  description: "Запишитесь на приём к ветеринару в клинику «Белый кот» онлайн.",
};

export default function BookingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Хедер */}
      <SiteHeader />

      {/* Сам контент записи */}
      <section className="w-full bg-[#F2F0E9] py-16 px-6 lg:py-24 flex-grow flex justify-center">
        <div className="max-w-[600px] w-full flex flex-col items-center text-center gap-8">
          
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
              Забота начинается<br />
              с одного звонка.
            </h1>
            <p className="text-[15px] text-[#5A5A5A] max-w-md">
              Оставьте свои контакты, и наш администратор свяжется с вами в течение 15 минут, чтобы подобрать удобное время и ответить на вопросы.
            </p>
          </div>

          {/* Форма записи */}
          <BookingForm />

        </div>
      </section>
      
      {/* Подвал */}
      <Footer />
    </main>
  );
}