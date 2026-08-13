import HashRedirect from "@/app/components/HashRedirect";

export const metadata = {
  title: "Timeline",
  description:
    "Timeline of Thani Nayagam Adigal — now part of the Contributions page.",
};

export default function TimelinePage() {
  return (
    <HashRedirect
      href="/en/contributions/#timeline"
      label="Continue to Contributions · Timeline"
    />
  );
}
