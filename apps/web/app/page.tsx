import { api } from "~/trpc/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  let status = "unavailable";

  try {
    const response = await api.health.getHealth.query();
    status = response.status;
  } catch {
    // Allow the landing page to render even when the API is unavailable.
  }

  return (
    <main className="min-h-screen min-w-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl">Streamyst - Stream in Style</h1>
        <h2>Server Status: {status}</h2>
      </div>
    </main>
  );
}
