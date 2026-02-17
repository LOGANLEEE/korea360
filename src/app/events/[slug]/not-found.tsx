import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function EventNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <Container className="py-24 text-center">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Event not found
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          The event you’re looking for doesn’t exist or has been removed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-xl">
            <Link href="/events">View all events</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
