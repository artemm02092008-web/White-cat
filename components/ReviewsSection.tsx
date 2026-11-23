import { Quote } from "lucide-react";
import type { ClinicContent } from "@/lib/clinic";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Rating } from "@/components/ui/Star";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";

type ReviewsContent = ClinicContent["reviews"];

export default function ReviewsSection({ data }: { data: ReviewsContent }) {
  return (
    <section id="reviews" className="relative bg-canvas py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Отзывы</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">{data.heading}</SectionHeading>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-5 rounded-2xl border border-line bg-mist/60 px-6 py-4">
              <span className="text-[34px] font-semibold leading-none text-ink">
                {data.rating.value}
              </span>
              <div className="flex flex-col gap-1.5">
                <Rating value={5} />
                <span className="text-[12px] text-ink-soft">{data.rating.label}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
          {data.items.map((review, index) => (
            <Reveal key={review.author} delay={index * 0.08} as="article" className="h-full">
              <figure className="flex h-full flex-col rounded-[26px] border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(20,24,26,0.25)]">
                <div className="flex items-center justify-between">
                  <Rating value={review.rating} />
                  <Quote
                    className="h-6 w-6 text-line-strong"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <blockquote className="mt-6 flex-1 text-[15px] leading-[1.65] text-ink-soft">
                  {review.text}
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-[13px] font-semibold text-accent-deep">
                    {review.author
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[13.5px] font-semibold text-ink">
                      {review.author}
                    </span>
                    <span className="text-[11.5px] text-ink-muted">{review.date}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-[12.5px] text-ink-muted">{data.footer}</p>
        </Reveal>
      </Container>
    </section>
  );
}
