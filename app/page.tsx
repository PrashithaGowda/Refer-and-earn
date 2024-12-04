import { ReferralCard } from "@/components/ui/referral-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <ReferralCard referralCode="ABCDG123" referralAmount={250} />
    </main>
  );
}