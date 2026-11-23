import type { ClinicContent } from "@/lib/clinic";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";

type FaqContent = ClinicContent["faq"];

function FaqItem({
  item,
  defaultOpen = false,
}: {
  item: { question: string; answer: string };
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group border-b border-line [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
        <span className="text-[15.5px] font-medium text-ink transition-colors group-hover:text-accent-strong sm:text-[16.5px]">
          {item.question}
        </span>
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-accent group-hover:text-accent-strong group-open:border-accent group-open:bg-accent group-open:text-white">
          {/* Горизонтальная линия «плюса» */}
          <span className="absolute h-[1.6px] w-3.5 rounded-full bg-current" />
          {/* Вертикальная — исчезает при открытии */}
          <span className="absolute h-3.5 w-[1.6px] rounded-full bg-current transition-transform duration-300 group-open:scale-y-0" />
        </span>
      </summary>

      <div className="grid grid-cols-1 overflow-hidden transition-all duration-300">
        <p className="max-w-[720px] pb-7 pr-10 text-[14.5px] leading-[1.65] text-ink-soft">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

export default function FaqSection({ data }: { data: FaqContent }) {
  return (
    <section id="faq" className="relative bg-canvas py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Заголовок и телефон */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Вопросы и ответы</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">
                {data.headingLine1} {data.headingLine2}
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[320px] text-[15px] leading-[1.65] text-ink-soft">
                {data.lead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={data.phoneHref}
                className="mt-7 inline-flex items-center gap-2 text-[20px] font-semibold text-ink transition-colors hover:text-accent-strong"
              >
                {data.phone}
              </a>
            </Reveal>
          </div>

          {/* Аккордеон */}
          <Reveal delay={0.1}>
            <div className="border-t border-line">
              {data.mainItems.map((item, i) => (
                <FaqItem key={item.question} item={item} defaultOpen={i === 0} />
              ))}

              <details className="group border-b border-line [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[14.5px] font-semibold text-accent-strong">
                  Показать остальные вопросы
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent-strong transition-colors group-open:bg-accent group-open:text-white">
                    <span className="absolute h-[1.6px] w-3.5 rounded-full bg-current" />
                    <span className="absolute h-3.5 w-[1.6px] rounded-full bg-current transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <div className="pb-2">
                  {data.moreItems.map((item) => (
                    <FaqItem key={item.question} item={item} />
                  ))}
                </div>
              </details>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
