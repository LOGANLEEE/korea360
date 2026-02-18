/**
 * Inline JSON-LD script for SEO and AI-SEO (structured data).
 * Renders one or more schema.org objects.
 */
export function JsonLd({
  data,
}: {
  data: object | object[];
}) {
  const json =
    Array.isArray(data) && data.length === 1
      ? data[0]
      : Array.isArray(data)
        ? data
        : data;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
