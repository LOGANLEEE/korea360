import Link from "next/link";
import { notFound } from "next/navigation";

import { EVENTS_BY_SLUG } from "@/content/events";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(EVENTS_BY_SLUG).map((slug) => ({ slug }));
}

function formatDate(s: string): string {
  const d = new Date(s);
  return d.toLocaleDateString("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = EVENTS_BY_SLUG[slug];

  if (!event) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="rounded-xl -ml-2">
            <Link href="/events">← Back to events</Link>
          </Button>
        </div>

        <article className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge
              variant={event.status === "ongoing" ? "default" : "secondary"}
              className="rounded-lg"
            >
              {event.status === "ongoing" ? "Ongoing" : "Upcoming"}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {event.title}
          </h1>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {formatDate(event.startDate)}
            {event.endDate && event.endDate !== event.startDate && (
              <> – {formatDate(event.endDate)}</>
            )}
          </p>

          <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
            {event.description}
          </p>

          <Card className="mt-10 rounded-2xl">
            <CardHeader>
              <h2 className="text-xl font-semibold md:text-2xl">
                Event details
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {event.location && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Location
                  </span>
                  <p className="mt-1 text-base">{event.location}</p>
                </div>
              )}
              {event.time && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Time
                  </span>
                  <p className="mt-1 text-base">{event.time}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/#visit">Plan your visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/events">View all events</Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
