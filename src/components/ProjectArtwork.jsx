/**
 * Illustration générée pour les projets sans capture d'écran disponible.
 * Remplace proprement l'image manquante sans casser la mise en page,
 * et reste lisible dans les deux thèmes (base sombre + accent coloré).
 */
export default function ProjectArtwork({ title, accent = 'from-cyan-500/30 via-blue-500/25 to-indigo-500/30' }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-slate-950">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl"
      />

      <span className="relative max-w-[85%] text-center font-display text-2xl font-bold leading-tight text-white drop-shadow-sm sm:text-3xl">
        {title}
      </span>
      <span className="relative mt-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
        Projet
      </span>
    </div>
  )
}
