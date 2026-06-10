import ChatLayout from "../components/ChatLayout";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl">
        <header className="mb-6 rounded-3xl border border-border bg-surface/80 px-6 py-5 text-center shadow-sm shadow-black/20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">chat-ne</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Realtime chat</h1>
        </header>
        <ChatLayout />
      </div>
    </main>
  );
}
