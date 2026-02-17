import Link from "next/link";

import {
  ONGOING_EVENTS,
  UPCOMING_EVENTS,
} from "@/content/events";
import { Container } from "@/components/shared/Container";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <FadeInSection className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Events
            </h1>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Ongoing and upcoming events at KOREA 360 UAE. Join workshops,
              meet-ups, and cultural experiences.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="rounded-xl">
            <Link href="/#visit">Plan your visit</Link>
          </Button>
        </FadeInSection>

        <FadeInSection className="mt-12">
        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList variant="line" className="h-11 rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="ongoing"
              className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Ongoing
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Upcoming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="mt-8 focus-visible:outline-none">
            {ONGOING_EVENTS.length === 0 ? (
              <p className="text-base text-muted-foreground md:text-lg">
                No ongoing events at the moment. Check back soon or browse
                upcoming events.
              </p>
            ) : (
              <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ONGOING_EVENTS.map((event) => (
                  <ProductCard
                    key={event.slug}
                    title={event.title}
                    description={event.shortDescription}
                    href={`/events/${event.slug}`}
                    ctaLabel="View details"
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="mt-8 focus-visible:outline-none">
            {UPCOMING_EVENTS.length === 0 ? (
              <p className="text-base text-muted-foreground md:text-lg">
                No upcoming events scheduled. Follow us for announcements.
              </p>
            ) : (
              <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {UPCOMING_EVENTS.map((event) => (
                  <ProductCard
                    key={event.slug}
                    title={event.title}
                    description={event.shortDescription}
                    href={`/events/${event.slug}`}
                    ctaLabel="View details"
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
        </FadeInSection>
      </main>
    </div>
  );
}
