import { createFileRoute } from "@tanstack/react-router";
import { Invitation } from "@/components/wedding/invitation";

type InviteSearch = {
  to?: string;
};

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): InviteSearch => {
    const raw = search.to ?? search.nama;
    if (typeof raw === "string" && raw.trim()) return { to: raw };
    return {};
  },
  component: Home,
});

function Home() {
  const { to } = Route.useSearch();
  return <Invitation guestName={to} />;
}
