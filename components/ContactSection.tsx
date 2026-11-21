import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacts" className="w-full bg-[#F2F0E9] py-16 px-6 lg:py-24 flex justify-center">
      <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="relative w-full h-[450px] lg:h-[600px] rounded-[32px] overflow-hidden bg-[#D1D4C5] order-2 lg:order-1">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2e9e536a1e18ef27343fac05a1f31a10585946875ce947bbb4167c0160893c20&amp;source=constructor" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            title="Карта проезда"
          ></iframe>

        </div>

        <div className="flex flex-col gap-10 order-1 lg:order-2">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium tracking-widest text-[#7A7A7A] uppercase">
              Контакты и проезд
            </span>
            <h2 className="text-5xl lg:text-[64px] leading-[1.05] font-bold text-[#1A1A1A] tracking-tight">
              Приходите в клинику.<br />
              Ждём вас и ваших питомцев.
            </h2>
            <p className="text-xl lg:text-2xl font-bold text-[#1A1A1A] mt-2">
              Электросталь, улица Мира, 27/1
            </p>
            <p className="text-sm text-[#7A7A7A]">
              Россия, Московская область
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#1A1A1A]">Как добраться</h3>
              <p className="text-sm text-[#7A7A7A] leading-relaxed max-w-[360px]">
                Постройте маршрут до клиники в навигаторе: пешком, на автомобиле или общественным транспортом.
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-lg font-bold text-[#1A1A1A]">Часы работы</h3>
              <p className="text-sm text-[#5A5A5A]">
                Работаем каждый день с 10:00 до 21:00
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-medium tracking-widest text-[#7A7A7A] uppercase">
              Мы в соцсетях
            </span>
            <div className="flex items-center gap-5 mt-1">
              <a href="https://vk.com/whitevetcat" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#75C043] transition-colors" aria-label="ВКонтакте">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974H.791c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.372 2.708z" />
                </svg>
              </a>
              <a href="https://wa.me/89257222580" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#75C043] transition-colors" aria-label="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;