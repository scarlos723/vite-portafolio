export const App = () => {
  const gcBase = "https://calendar.google.com/calendar/r/eventedit";
  const title = encodeURIComponent("Charlamos — Portafolio Carlos Sánchez");
  const details = encodeURIComponent(
    `Hola — me gustaría agendar una charla corta para conocernos, revisar oportunidades o colaborar. Puedes proponer fecha y hora en el editor de Google Calendar.`,
  );

  const gcLink = `${gcBase}?text=${title}&details=${details}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Carlos Sánchez
              </h1>
              <p className="text-slate-400 mt-1">
                Ingeniero en Electrónica • DevOps & Frontend
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-mono text-sm text-green-400 bg-slate-900/60 px-3 py-2 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.08)]">
                $ whoami: carloss
              </p>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2 space-y-6">
            <article className="bg-slate-800/60 rounded-xl p-6 shadow-lg ring-1 ring-slate-700">
              <h2 className="text-2xl font-semibold">Perfil</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Soy ingeniero en Electrónica y Telecomunicaciones (énfasis en
                Telemática) con experiencia híbrida entre frontend, backend e
                infraestructura en la nube. Me gusta resolver problemas reales
                construyendo soluciones sencillas y repetibles: desde prototipos
                rápidos en React hasta arquitecturas automatizadas en AWS.
              </p>
              <div className="mt-4 p-4 bg-black/40 rounded font-mono text-green-300 text-sm">
                <div className="flex justify-between">
                  <span>$ stack</span>
                  <span>python · js · terraform · aws</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>$ style</span>
                  <span>chill · pragmático · undergrous</span>
                </div>
              </div>
            </article>

            <article className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-white/5 to-white/3 p-5 rounded-xl shadow-lg hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)] transition">
                <h3 className="font-semibold">Experiencia</h3>
                <ul className="mt-3 space-y-3 text-slate-300">
                  <li>
                    <strong>DevOps Engineer — BPO2B</strong>
                    <div className="text-sm text-slate-400">
                      2022 — presente
                    </div>
                    <div className="mt-1 text-sm">
                      Diseño infra en AWS, Terraform, CI/CD, Security Hub y
                      monitoreo.
                    </div>
                  </li>
                  <li>
                    <strong>Desarrollador / Ingeniero Frontend — BPO2B</strong>
                    <div className="text-sm text-slate-400">2021 — 2022</div>
                    <div className="mt-1 text-sm">React / Odoo / Python</div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/3 p-5 rounded-xl shadow-lg hover:shadow-[0_8px_40px_rgba(34,197,94,0.08)] transition">
                <h3 className="font-semibold">Proyectos</h3>
                <ul className="mt-3 text-slate-300 space-y-2 text-sm">
                  <li>
                    <strong>RETRI</strong> — Dashboard para alquiler de
                    maquinaria. Migración Next → Vite.
                  </li>
                  <li>
                    <strong>Entrega rápida</strong> — Sitio en React en &lt;3
                    días para cliente UK.
                  </li>
                  <li>
                    <strong>Infra automatizada</strong> — Entornos AWS con
                    Terraform, backups y alertas.
                  </li>
                </ul>
              </div>
            </article>

            <article className="bg-slate-800/60 rounded-xl p-6 shadow-lg ring-1 ring-slate-700">
              <h3 className="text-xl font-semibold">
                Formación & Certificaciones
              </h3>
              <div className="mt-3 text-slate-300 space-y-2 text-sm">
                <div>
                  <strong>Ingeniero — Universidad del Cauca</strong> (2016–2022)
                </div>
                <div>
                  <strong>Máster — UNIR</strong> (2025 — en curso)
                </div>
                <div className="mt-2">
                  Platzi: JavaScript, React, Terraform · MITx · HarvardX ·
                  Blockchain Academy.
                </div>
              </div>
            </article>
          </section>

          <aside className="space-y-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-700/60 to-slate-800/60 ring-1 ring-slate-700 shadow-lg">
              <h4 className="font-semibold">Habilidades</h4>
              <ul className="mt-3 text-sm text-slate-300 space-y-2">
                <li>Python · JavaScript · TypeScript · Solidity</li>
                <li>React · Next.js · Vite · three.js</li>
                <li>AWS · Terraform · Docker · Kubernetes</li>
                <li>CI/CD (GitHub Actions) · Seguridad · Monitoreo</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-black/40 to-black/30 font-mono text-green-300 text-sm shadow-[inset_0_0_40px_rgba(34,197,94,0.03)]">
              <div className="text-xs text-slate-400">Terminal</div>
              <div className="mt-2">$ experiencia: devops, frontend, infra</div>
              <div className="mt-1">
                $ disponibilidad: open to chat / collab
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 ring-1 ring-slate-700">
              <h4 className="font-semibold">Idiomas</h4>
              <p className="mt-2 text-slate-300 text-sm">
                Español (nativo) · Inglés (B1)
              </p>
            </div>
          </aside>
        </main>

        <footer className="mt-10">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_10px_60px_rgba(99,102,241,0.06)]">
            <div>
              <h4 className="text-lg font-semibold">¿Charlamos?</h4>
              <p className="text-slate-300 mt-1">
                Agenda una cita en mi calendario de Google. Elige la hora en el
                editor y nos vemos virtualmente.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={gcLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 transform transition rounded-full px-5 py-3 text-sm font-semibold shadow-lg"
              >
                📅 Agendar en Google
              </a>
              <a
                href="mailto:carloss@example.com?subject=Charla%20%C2%BFColaboramos%3F&body=Hola%20Carlos%2C%0A%0AMe%20gustar%C3%ADa%20agendar%20una%20charla..."
                className="inline-flex items-center gap-2 border border-slate-700 px-4 py-3 rounded-full text-sm text-slate-200 hover:bg-slate-700/40"
              >
                ✉️ Enviar correo
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-slate-500 text-sm">
            Hecho con 🛹 · tono chill y práctico.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
