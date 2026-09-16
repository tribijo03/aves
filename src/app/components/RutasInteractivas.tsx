"use client";

import { useState } from "react";

type RutaId = "1927" | "1935" | "1938" | "todas";

type Punto = {
  id: string;
  x: number;
  y: number;
  ruta: Exclude<RutaId, "todas">;
  titulo: string;
  texto: string;
};

const RUTAS: Record<
  Exclude<RutaId, "todas">,
  { titulo: string; color: string; descripcion: string; avion: string; duracion: string }
> = {
  "1927": {
    titulo: "1927 · sin escalas",
    color: "#C9A227",
    descripcion:
      "Travesía directa sobre el Atlántico. Más de 30 horas en solitario, sin escalas, con constancia total hasta el planeo final.",
    avion: "Monoplano transatlántico · 200 km/h · 1 piloto",
    duracion: "+30 h de vuelo",
  },
  "1935": {
    titulo: "1935 · continentales",
    color: "#E8B4B4",
    descripcion:
      "Rutas continentales que unieron ciudades lejanas con salidas puntuales y vuelo estable. Así nació la confianza en volar.",
    avion: "Transporte continental · 370 km/h · ~25 pasajeros",
    duracion: "Salidas a la hora",
  },
  "1938": {
    titulo: "1938 · con escalas",
    color: "#E8B4B4",
    descripcion:
      "Escalas oceánicas sobre el mar. Hidroaviones que acuatizaban en puertos y una escala insular a mitad del océano.",
    avion: "Hidroavión transoceánico · 340 km/h · decenas de pasajeros",
    duracion: "Varias escalas",
  },
};

const PUNTOS: Punto[] = [
  {
    id: "origen-1927",
    x: 40,
    y: 210,
    ruta: "1927",
    titulo: "Punto de partida",
    texto: "Despegue de la hazaña atlántica de 1927. Un solo piloto, un solo motor.",
  },
  {
    id: "escala-insular",
    x: 380,
    y: 130,
    ruta: "1927",
    titulo: "Escala insular (referencia)",
    texto: "Punto de referencia sobrevolado en la ruta de 1927. No se aterrizó: fue vuelo directo.",
  },
  {
    id: "llegada-1927",
    x: 560,
    y: 90,
    ruta: "1927",
    titulo: "Llegada 1927",
    texto: "Aterrizaje tras más de 30 horas. La prueba de que se podía cruzar sin escalas.",
  },
  {
    id: "origen-1935",
    x: 40,
    y: 230,
    ruta: "1935",
    titulo: "Origen continental",
    texto: "Salidas descritas como puntuales entre ciudades en la época.",
  },
  {
    id: "llegada-1935",
    x: 560,
    y: 170,
    ruta: "1935",
    titulo: "Destino continental",
    texto: "Llegadas casi siempre a la hora prevista, con vuelo horizontal estable.",
  },
  {
    id: "origen-1938",
    x: 40,
    y: 250,
    ruta: "1938",
    titulo: "Puerto de salida",
    texto: "Despegue desde el agua. Los hidroaviones no necesitaban pistas largas.",
  },
  {
    id: "escala-1938",
    x: 300,
    y: 235,
    ruta: "1938",
    titulo: "Escala oceánica",
    texto: "Acuatizaje intermedio para repostar y descansar antes de seguir sobre el mar.",
  },
  {
    id: "llegada-1938",
    x: 560,
    y: 230,
    ruta: "1938",
    titulo: "Llegada 1938",
    texto: "Fin de la ruta con escalas. Cabina cómoda y vista abierta todo el trayecto.",
  },
];

const PATHS: Record<Exclude<RutaId, "todas">, string> = {
  "1927": "M40 210 Q 200 60 380 130 T 560 90",
  "1935": "M40 230 Q 220 190 400 200 T 560 170",
  "1938": "M40 250 Q 180 250 300 235 T 560 230",
};

function esVisible(p: Punto, activa: RutaId) {
  return activa === "todas" || p.ruta === activa;
}

function opacidadRuta(ruta: Exclude<RutaId, "todas">, activa: RutaId) {
  return activa === "todas" || activa === ruta ? 1 : 0.15;
}

export default function RutasInteractivas() {
  const [activa, setActiva] = useState<RutaId>("todas");
  const [seleccionado, setSeleccionado] = useState<Punto | null>(null);
  const [animando, setAnimando] = useState(true);

  const botones: { id: RutaId; label: string }[] = [
    { id: "todas", label: "Ver las 3" },
    { id: "1927", label: "1927 · sin escalas" },
    { id: "1935", label: "1935 · continentales" },
    { id: "1938", label: "1938 · con escalas" },
  ];

  const puntoActivo = seleccionado && esVisible(seleccionado, activa) ? seleccionado : null;
  const infoRuta = activa !== "todas" ? RUTAS[activa] : null;

  return (
    <figure className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B0A0A] to-[#8C1D1D] p-6 shadow-md sm:p-10">
      <style>{`
        @keyframes dashMove { to { stroke-dashoffset: -28; } }
        .ruta-anim { animation: dashMove 1.2s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .ruta-anim { animation: none; } }
      `}</style>

      {/* Controles */}
      <div className="mb-4 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrar rutas">
        {botones.map((b) => {
          const isActive = activa === b.id;
          return (
            <button
              key={b.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiva(b.id);
                setSeleccionado(null);
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition sm:text-sm ${
                isActive
                  ? "bg-[#C9A227] text-[#2B0A0A] shadow"
                  : "bg-white/10 text-red-100 hover:bg-white/20"
              }`}
            >
              {b.label}
            </button>
          );
        })}
        <button
          onClick={() => setAnimando((v) => !v)}
          aria-pressed={animando}
          className="ml-auto rounded-full px-3 py-1.5 text-xs font-semibold text-red-200 underline decoration-dotted underline-offset-4 hover:text-white"
        >
          {animando ? "Pausar vuelo ✈" : "Reanudar vuelo ✈"}
        </button>
      </div>

      <svg
        viewBox="0 0 600 280"
        role="img"
        aria-label="Esquema interactivo de tres rutas históricas: 1927, 1935 y 1938. Usa los botones para filtrar y pulsa los puntos para ver detalles."
        className="w-full"
      >
        {/* fondo punteado */}
        {Array.from({ length: 15 }).map((_, r) =>
          Array.from({ length: 15 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={12 + c * 40}
              cy={12 + r * 19}
              r="1.1"
              fill="rgba(255,255,255,0.12)"
            />
          ))
        )}

        {/* rutas */}
        {(Object.keys(PATHS) as Exclude<RutaId, "todas">[]).map((id) => (
          <path
            key={id}
            d={PATHS[id]}
            fill="none"
            stroke={RUTAS[id].color}
            strokeWidth={id === "1927" ? 2.5 : 2}
            strokeDasharray={id === "1927" ? "8 6" : "5 6"}
            opacity={opacidadRuta(id, activa)}
            className={animando ? "ruta-anim" : undefined}
            style={{ transition: "opacity .3s", cursor: "pointer" }}
            onClick={() => {
              setActiva(id);
              setSeleccionado(null);
            }}
          >
            <title>{RUTAS[id].titulo} — pulsa para aislar esta ruta</title>
          </path>
        ))}

        {/* avioncito animado sobre la ruta activa */}
        {animando && (activa !== "todas" ? [activa] : (["1927", "1935", "1938"] as const)).map((id) => (
          <circle key={`avion-${id}`} r="4" fill="#fff" opacity={opacidadRuta(id, activa)}>
            <animateMotion dur="6s" repeatCount="indefinite" path={PATHS[id]} />
          </circle>
        ))}

        {/* etiquetas fijas como en la foto */}
        <text x="40" y="190" fill="#fff" fontSize="13" fontWeight="bold" opacity={opacidadRuta("1927", activa)}>
          Punto de partida
        </text>
        <text x="470" y="72" fill="#C9A227" fontSize="13" fontWeight="bold" opacity={opacidadRuta("1927", activa)}>
          1927 · sin escalas
        </text>
        <text x="440" y="155" fill="#E8B4B4" fontSize="12" opacity={opacidadRuta("1935", activa)}>
          1935 · continentales
        </text>
        <text x="440" y="265" fill="#E8B4B4" fontSize="12" opacity={opacidadRuta("1938", activa)}>
          1938 · con escalas
        </text>
        <text x="330" y="118" fill="#fff" fontSize="12" opacity={opacidadRuta("1927", activa)}>
          escala insular
        </text>

        {/* puntos clicables */}
        {PUNTOS.filter((p) => esVisible(p, activa)).map((p) => {
          const isSel = puntoActivo?.id === p.id;
          const esBlanco = p.id === "escala-insular" || p.id === "escala-1938";
          return (
            <g
              key={p.id}
              onClick={() => setSeleccionado(isSel ? null : p)}
              style={{ cursor: "pointer" }}
              role="button"
              tabIndex={0}
              aria-label={`${p.titulo}: ${p.texto}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSeleccionado(isSel ? null : p);
                }
              }}
            >
              <title>{`${p.titulo} — ${p.texto}`}</title>
              {/* halo para facilitar el toque en móvil */}
              <circle cx={p.x} cy={p.y} r="14" fill="transparent" />
              <circle
                cx={p.x}
                cy={p.y}
                r={isSel ? 8 : 5.5}
                fill={esBlanco ? "#fff" : p.ruta === "1927" ? "#C9A227" : "#E8B4B4"}
                stroke={isSel ? "#fff" : "rgba(0,0,0,.25)"}
                strokeWidth={isSel ? 2.5 : 1}
                style={{ transition: "r .2s" }}
              />
            </g>
          );
        })}
      </svg>

      {/* panel de detalle */}
      <div aria-live="polite" className="mt-4 min-h-[86px]">
        {puntoActivo ? (
          <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
            <p className="text-sm font-bold text-white">
              {puntoActivo.titulo}{" "}
              <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold text-red-100">
                {RUTAS[puntoActivo.ruta].titulo}
              </span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-red-100">{puntoActivo.texto}</p>
            <button
              onClick={() => setSeleccionado(null)}
              className="mt-2 text-xs font-semibold text-amber-200 underline underline-offset-4 hover:text-white"
            >
              Cerrar detalle
            </button>
          </div>
        ) : infoRuta ? (
          <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
            <p className="text-sm font-bold" style={{ color: infoRuta.color }}>
              {infoRuta.titulo} · {infoRuta.duracion}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-red-100">{infoRuta.descripcion}</p>
            <p className="mt-1 text-xs italic text-red-200">{infoRuta.avion}</p>
            <p className="mt-2 text-xs text-red-200/80">Tip: pulsa cualquier punto del mapa para ver su historia.</p>
          </div>
        ) : (
          <p className="text-center text-xs tracking-wide text-red-200">
            Esquema ilustrativo: la travesía directa de 1927, las rutas continentales de 1935 y las escalas
            oceánicas de 1938. Pulsa una ruta o un punto para explorar.
          </p>
        )}
      </div>

      <figcaption className="mt-2 text-center text-xs tracking-wide text-red-200">
        Esquema ilustrativo: la travesía directa de 1927, las rutas continentales de 1935 y las escalas
        oceánicas de 1938.
      </figcaption>
    </figure>
  );
}
