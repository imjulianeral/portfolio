import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";
import Markdown from "react-markdown";

export default function WorkSection() {
  return (
    <section id="work" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Experience
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              I like building things
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Over 7 years I&apos;ve gone from warehouse access control to
              real-time earthquake alerts for 2 million people and surgical
              software for Johnson &amp; Johnson. {DATA.work.length} roles,
              newest first.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.work.map((work) => (
            <TimelineItem
              key={work.title + work.dates}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                {work.image ? (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none flex items-center justify-center text-[9px] font-semibold leading-none tracking-tight">
                    {work.title.split(" ")[0]}
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {work.dates && (
                  <time className="text-xs text-muted-foreground">
                    {work.dates}
                  </time>
                )}
                {work.title && (
                  <h3 className="font-semibold leading-none">{work.title}</h3>
                )}
                {work.location && (
                  <p className="text-sm text-muted-foreground">
                    {work.location}
                  </p>
                )}
                {work.description && (
                  <div className="text-sm text-muted-foreground leading-relaxed wrap-break-word [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1 [&_p]:mb-2 [&_p]:last:mb-0 [&_strong]:text-foreground [&_strong]:font-medium">
                    <Markdown>{work.description}</Markdown>
                  </div>
                )}
                {work.links && work.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {work.links.map((link, idx) => (
                      <a
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
