import Image from "next/image";
import RutasInteractivas from "./components/RutasInteractivas";

const MAX_VEL = 640;

const maquinas = [
  {
    puesto: "1",
    nombre: "Avión histórico de caza 1939 (divulgación)",
    frase: "Uno de los más veloces de esta selección",
    dato: "1939 · Histórico militar",
    velocidad: "~640 km/h aprox.",
    tipo: "Histórico militar",
    motor: "1 motor de pistón",
    abordo: "1 piloto",
    descripcion:
      "Presentado solo con fines educativos e históricos, sin venta ni instrucciones de uso. Destacó en su época por su velocidad aproximada y por unos mandos que se describían como precisos y exigentes.",
    imagen:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80&auto=format&fit=crop",
    alt: "Avión histórico de hélice volando entre nubes",
  },
  {
    puesto: "2",
    nombre: "Avión histórico de caza 1936 (divulgación)",
    frase: "Un clásico de la aviación de su época",
    dato: "1936 · Histórico militar",
    velocidad: "~600 km/h aprox.",
    tipo: "Histórico militar",
    motor: "1 motor de pistón",
    abordo: "1 piloto",
    descripcion:
      "Contemporáneo de los más veloces de la selección. De líneas angulosas y motor potente, se describía con subida rápida y vuelo exigente para su época.",
    imagen:
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80&auto=format&fit=crop",
    alt: "Avión de hélice histórico en pista al amanecer",
  },
  {
    puesto: "3",
    nombre: "Transporte continental 1935",
    frase: "Conocido por su puntualidad en su época",
    dato: "1935 · Transporte",
    velocidad: "~370 km/h aprox.",
    tipo: "Transporte",
    motor: "2 motores de pistón",
    abordo: "~25 pasajeros",
    descripcion:
      "Descrito en su época por su puntualidad. Cruzaba continentes con horarios que se procuraban cumplir, con un vuelo horizontal estable que lo hizo muy apreciado en el transporte de su época.",
    imagen:
      "https://images.unsplash.com/photo-1473862170180-84427c485aca?w=800&q=80&auto=format&fit=crop",
    alt: "Avión de transporte clásico rodando en aeropuerto",
  },
  {
    puesto: "4",
    nombre: "Cuatrimotor de gran alcance 1943",
    frase: "Destacó por su comodidad para su tiempo",
    dato: "1943 · Gran alcance",
    velocidad: "~525 km/h aprox.",
    tipo: "Transporte",
    motor: "4 motores de pistón",
    abordo: "Decenas de pasajeros",
    descripcion:
      "Viajaba con una comodidad sorprendente para su tiempo. Cabina amplia y acogedora, asientos cómodos en las rutas largas y un planeo sereno que hacía el trayecto calmado y agradable, con vista abierta desde cada ventanilla.",
    imagen:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=800&q=80&auto=format&fit=crop",
    alt: "Cuatrimotor antiguo surcando el cielo al atardecer",
  },
  {
    puesto: "5",
    nombre: "Trimotor corrugado 1930",
    frase: "Tres motores, cero prisa",
    dato: "1930 · Trimotor clásico",
    velocidad: "~265 km/h aprox.",
    tipo: "Transporte",
    motor: "3 motores de pistón",
    abordo: "~15 pasajeros",
    descripcion:
      "De fuselaje corrugado y tres motores. Se describía como eficiente para su época, con un vuelo tranquilo que se apreciaba en cabina.",
    imagen:
      "https://images.unsplash.com/photo-1521727857535-28d2047314ac?w=800&q=80&auto=format&fit=crop",
    alt: "Trimotor clásico de fuselaje metálico en vuelo",
  },
  {
    puesto: "6",
    nombre: "Hidroavión transoceánico 1938",
    frase: "Pensado para rutas sobre el océano",
    dato: "1938 · Hidroavión",
    velocidad: "~340 km/h aprox.",
    tipo: "Hidroavión",
    motor: "4 motores de pistón",
    abordo: "Decenas de pasajeros",
    descripcion:
      "Avión de tamaño modesto para su alcance. Trazaba su ruta sobre el mar con vista abierta desde la cabina y mantenía el rumbo entre escalas, con ajustes de trayecto propios de la navegación de la época.",
    imagen:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80&auto=format&fit=crop",
    alt: "Hidroavión histórico flotando sobre el mar",
  },
  {
    puesto: "7",
    nombre: "Trimotor pionero 1926",
    frase: "El que enseñó a volar a los primeros pasajeros",
    dato: "1926 · Pionero",
    velocidad: "~220 km/h aprox.",
    tipo: "Transporte",
    motor: "3 motores de pistón",
    abordo: "~10 pasajeros",
    descripcion:
      "Se desplazaba con fluidez para su época. No era de los más veloces, pero mantenía un recorrido suave y continuo que dio confianza a los primeros pasajeros en rutas establecidas.",
    imagen:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80&auto=format&fit=crop",
    alt: "Avión pionero de tres motores en tierra",
  },
  {
    puesto: "8",
    nombre: "Biplano escuela 1931",
    frase: "La lección de calma perfecta",
    dato: "1931 · Biplano escuela",
    velocidad: "~175 km/h aprox.",
    tipo: "Biplano",
    motor: "1 motor de pistón",
    abordo: "2 (escuela)",
    descripcion:
      "Biplano de instrucción que cuidaba cada movimiento. Esa dedicación al detalle hacía que su vuelo pausado pareciera una lección de calma perfecta antes de volar en serio.",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/DH_82A_Tiger_Moth_-_N81DH.jpg",
    alt: "Biplano escuela amarillo de doble ala en exhibición",
  },
  {
    puesto: "9",
    nombre: "Avioneta ligera 1938",
    frase: "Solo lo esencial a bordo",
    dato: "1938 · Ligero",
    velocidad: "~140 km/h aprox.",
    tipo: "Ligero",
    motor: "1 motor pequeño",
    abordo: "2 personas",
    descripcion:
      "Ligero y sencillo, volaba solo con su equipaje esencial: tela, tubos y un pequeño motor. Gracias a eso ofrecía un vuelo sereno, con despegues cortos y aterrizajes suaves junto al paisaje.",
    imagen:
      "https://images.unsplash.com/photo-1524592714635-d77511a4834d?w=800&q=80&auto=format&fit=crop",
    alt: "Avioneta ligera clásica vista de cerca",
  },
  {
    puesto: "10",
    nombre: "Monoplano transatlántico 1927",
    frase: "Más de 30 horas sobre el Atlántico",
    dato: "1927 · Hazaña atlántica",
    velocidad: "~200 km/h aprox.",
    tipo: "Récord",
    motor: "1 motor de pistón",
    abordo: "1 piloto",
    descripcion:
      "Cruzó el Atlántico con constancia admirable. Cuando por fin descendió tras más de 30 horas de travesía, lo hizo con un planeo suave, cerrando el viaje sin sobresaltos y con total serenidad.",
    imagen:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&q=80&auto=format&fit=crop",
    alt: "Monoplano histórico de larga distancia en hangar",
  },
];

const hitos = [
  {
    año: "1926",
    titulo: "Los primeros pasajeros",
    texto:
      "Aparecen los trimotores pioneros y volar deja de ser solo una hazaña: empieza a ser un viaje con recorrido suave y horarios que se cumplen.",
  },
  {
    año: "1927",
    titulo: "El Atlántico en solitario",
    texto:
      "Un monoplano cruza el océano sin escalas en más de 30 horas y demuestra que la constancia vale más que la velocidad.",
  },
  {
    año: "1930 – 1935",
    titulo: "La puntualidad se vuelve rutina",
    texto:
      "Los transportes continentales conectan ciudades lejanas con salidas a la hora y vuelos estables que ganan la confianza del público.",
  },
  {
    año: "1936 – 1939",
    titulo: "La era de los veloces",
    texto:
      "Algunos aviones históricos de hélice alcanzaban velocidades aproximadas de hasta ~640 km/h según fuentes históricas. Se presentan solo con fines divulgativos.",
  },
  {
    año: "1938 – 1943",
    titulo: "El cielo se hace ancho",
    texto:
      "Hidroaviones y cuatrimotores alargan las rutas sobre el mar con cabinas cómodas, vista abierta y trayectos calmados.",
  },
];

const preguntas = [
  {
    q: "¿Por qué volaban más bajo que los aviones de hoy?",
    a: "Sus motores eran de pistón y las cabinas no iban presurizadas, así que volaban a alturas donde se respira con normalidad. A cambio, el paisaje se veía de cerca y la ruta se disfrutaba por la ventana.",
  },
  {
    q: "¿Cuál se presenta como el más veloz de esta selección?",
    a: "El avión histórico de 1939, con una velocidad aproximada de ~640 km/h según referencias históricas. Dato orientativo con fines divulgativos, sin venta ni uso operativo.",
  },
  {
    q: "¿Por qué el transporte de 1935 se hizo tan conocido?",
    a: "Por su puntualidad descrita en la época y su vuelo estable. Gustó tanto que algunos ejemplares conservados siguen en exhibición o vuelo histórico casi 90 años después.",
  },
  {
    q: "¿Qué es un hidroavión y para qué servía?",
    a: "Un avión que despega y acuatiza en el agua. Servía para trazar rutas sobre el océano con escalas en puertos, cuando aún había pocas pistas largas en tierra.",
  },
  {
    q: "¿Cuánto duró el primer cruce del Atlántico en solitario?",
    a: "Más de 30 horas seguidas. El monoplano de 1927 lo logró con constancia y un planeo final suave, sin sobresaltos.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Volar sin prisa — 10 aviones antiguos que hicieron historia",
      description:
        "Ranking, historia 1926-1943, comparativa y curiosidades de la aviación clásica, con contenido original.",
      inLanguage: "es",
    },
    {
      "@type": "FAQPage",
      mainEntity: preguntas.map((p) => ({
        "@type": "Question",
        name: p.q,
        acceptedAnswer: { "@type": "Answer", text: p.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] text-stone-800 dark:bg-[#160808] dark:text-stone-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Portada */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#2B0A0A] via-[#8C1D1D] to-[#C4342B] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              La época dorada del vuelo
            </p>
            <span className="h-px w-10 bg-[#C9A227]" />
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Volar sin prisa, llegar con historia
          </h1>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#C9A227]" />
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-red-100 sm:text-lg">
            10 máquinas que nos enseñaron a volar: historia, rutas que se
            volvieron leyenda y vuelo sereno. Inspirados en esa época dorada
            del vuelo, presentamos vuelos actuales con enfoque en puntualidad
            y calma.
          </p>
          <dl className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-baseline gap-2">
              <dt className="text-red-200">Modelos</dt>
              <dd className="text-2xl font-extrabold text-white">10</dd>
            </div>
            <span className="hidden h-8 w-px bg-white/20 sm:block" />
            <div className="flex items-baseline gap-2">
              <dt className="text-red-200">Época</dt>
              <dd className="text-2xl font-extrabold text-white">1926 – 1943</dd>
            </div>
            <span className="hidden h-8 w-px bg-white/20 sm:block" />
            <div className="flex items-baseline gap-2">
              <dt className="text-red-200">Hasta aprox.</dt>
              <dd className="text-2xl font-extrabold text-white">~640 km/h</dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-14">
          <figure className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop"
              alt="Ala de avión clásico recortada contra un atardecer rojizo"
              width={1200}
              height={630}
              className="h-64 w-full object-cover sm:h-96"
              priority
              sizes="100vw"
            />
            <figcaption className="bg-[#2B0A0A] px-4 py-3 text-center text-xs tracking-wide text-red-200">
              Hélices, tela y metal: así se ganó el cielo antes de la era del
              reactor.
            </figcaption>
          </figure>
        </div>
      </header>

      {/* Navegación */}
      <nav className="sticky top-0 z-10 border-b border-stone-200 bg-[#FAF6F1]/95 backdrop-blur dark:border-white/10 dark:bg-[#160808]/95">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-6 py-3 text-sm font-semibold text-[#8C1D1D] dark:text-red-300">
          <a href="#historia-aviacion" className="hover:underline">
            Presentación
          </a>
          <a href="#ranking" className="hover:underline">
            Ranking
          </a>
          <a href="#historia" className="hover:underline">
            Historia
          </a>
          <a href="#rutas" className="hover:underline">
            Rutas
          </a>
          <a href="#comparativa" className="hover:underline">
            Comparativa
          </a>
          <a href="#dato" className="hover:underline">
            Dato curioso
          </a>
          <a href="#preguntas" className="hover:underline">
            Preguntas
          </a>
        </div>
      </nav>

      {/* Contenido */}
      <main className="mx-auto max-w-5xl px-6 py-14">
        {/* Presentación histórica - sin oferta comercial */}
        <section id="historia-aviacion" className="scroll-mt-20 overflow-hidden rounded-3xl border border-[#C9A227]/40 bg-white p-6 shadow-md sm:p-8 dark:border-white/10 dark:bg-[#241010]">
          <span id="promo-aerolinea" className="block h-0 scroll-mt-20" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C1D1D] dark:text-red-300">
            Historia de la aviación · 1926 – 1943
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            La historia de los aviones que nos enseñaron a volar
          </h2>
          <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
            Del ranking histórico a las rutas que se volvieron leyenda. Aerolíneas y vuelos en contexto
            histórico: cómo esas rutas inspiraron la evolución de aerolíneas, vuelos, destinos y puntualidad
            operativa. Contenido informativo sobre vuelos, rutas, puntualidad de la época y vuelo sereno.
            Sin precios, sin ofertas y sin reservas.
          </p>
          <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-300">
            Diferencia horaria entre países: al volar entre destinos hay que ajustar el reloj según el huso
            horario, restando o sumando horas respecto al origen. No es un descuento de precio, es un ajuste
            horario informativo para entender llegadas y salidas en rutas largas.
          </p>
          <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-300">
            Ejemplo histórico, no vigente: en referencias de la época se describe que las nuevas rutas y los
            aviones de mayor capacidad permitieron tarifas más bajas que las iniciales para ciertos destinos.
            Fue un descuento famoso en su momento por abrir el vuelo a más pasajeros. Dato orientativo del
            pasado, ya finalizado, sin oferta actual ni reserva.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#ranking" className="rounded-full bg-[#8C1D1D] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#6d1515]">
              Explorar el ranking
            </a>
            <a href="#rutas" className="rounded-full px-6 py-2.5 text-sm font-semibold text-[#8C1D1D] ring-1 ring-[#8C1D1D]/30 hover:bg-red-50 dark:text-red-300">
              Ver las rutas legendarias
            </a>
          </div>
        </section>

        <section id="ranking" className="mt-14 scroll-mt-20">
          <div className="border-l-4 border-[#C4342B] pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-100">
              El ranking de velocidad
            </h2>
            <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
              Desde <strong>aviones históricos</strong> veloces hasta{" "}
              <strong>transportes</strong> que unieron continentes. Selección
              divulgativa con velocidades aproximadas:
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {maquinas.map((m, i) => (
              <article
                key={m.nombre}
                style={{ animationDelay: `${Math.min(i, 9) * 70}ms` }}
                className="card-in group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#241010]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={m.imagen}
                    alt={m.alt}
                    width={800}
                    height={450}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#2B0A0A]/90 px-3 py-1 text-xs font-bold text-white shadow">
                    #{m.puesto} · {m.velocidad}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C1D1D] dark:text-red-300">
                    {m.tipo} · <span className="italic">{m.dato}</span>
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                    {m.nombre}
                  </h3>
                  <p className="mt-1 text-xs italic text-stone-500 dark:text-stone-400">
                    {m.frase}
                  </p>
                  <div className="mt-2 h-0.5 w-12 rounded-full bg-[#C9A227]" />
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {m.descripcion}
                  </p>
                  <div
                    className="mt-4 h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-white/10"
                    role="img"
                    aria-label={`${m.nombre}: ${m.velocidad} de un máximo de ${MAX_VEL} km/h`}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#8C1D1D] to-[#C4342B]"
                      style={{
                        width: `${Math.round(
                          (parseInt(m.velocidad, 10) / MAX_VEL) * 100
                        )}%`,
                      }}
                    />
                  </div>
                  <dl className="mt-4 flex items-center gap-3 rounded-2xl bg-red-50 px-4 py-3 ring-1 ring-red-100 dark:bg-white/5 dark:ring-white/10">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                      Velocidad máxima
                    </dt>
                    <dd className="ml-auto text-lg font-extrabold text-[#8C1D1D] dark:text-red-300">
                      {m.velocidad}
                    </dd>
                  </dl>
                  <dl className="mt-2 grid grid-cols-2 gap-2 text-xs text-stone-600 dark:text-stone-300">
                    <div className="rounded-xl bg-[#FAF6F1] px-3 py-2 ring-1 ring-stone-200 dark:bg-white/5 dark:ring-white/10">
                      <dt className="font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                        Motor
                      </dt>
                      <dd className="mt-0.5 font-semibold text-stone-800 dark:text-stone-200">
                        {m.motor}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-[#FAF6F1] px-3 py-2 ring-1 ring-stone-200 dark:bg-white/5 dark:ring-white/10">
                      <dt className="font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                        A bordo
                      </dt>
                      <dd className="mt-0.5 font-semibold text-stone-800 dark:text-stone-200">
                        {m.abordo}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Historia */}
        <section id="historia" className="mt-14 scroll-mt-20">
          <div className="border-l-4 border-[#C9A227] pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              1926 – 1943: cómo se ganó el cielo
            </h2>
            <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
              Cinco momentos que explican por qué estas máquinas marcaron
              historia:
            </p>
          </div>
          <ol className="mt-6 space-y-4">
            {hitos.map((h) => (
              <li
                key={h.año}
                className="card-in flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#241010]"
              >
                <span className="h-fit shrink-0 rounded-full bg-[#8C1D1D] px-3 py-1 text-xs font-bold text-white">
                  {h.año}
                </span>
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-stone-100">
                    {h.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {h.texto}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Rutas */}
        <section id="rutas" className="mt-14 scroll-mt-20">
          <div className="border-l-4 border-[#C4342B] pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Rutas que se volvieron leyenda
            </h2>
            <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
              Tres travesías que cambiaron para siempre la idea de viajar:
            </p>
          </div>
          <RutasInteractivas />
        </section>

        {/* Comparativa */}
        <section id="comparativa" className="mt-14 scroll-mt-20">
          <div className="border-l-4 border-[#C4342B] pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Comparativa rápida
            </h2>
            <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
              Los 10 modelos frente a frente, ordenados por velocidad aproximada:
            </p>
          </div>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#241010]">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#2B0A0A] text-xs uppercase tracking-wider text-red-100">
                  <th className="px-4 py-3 font-semibold">#</th>
                  <th className="px-4 py-3 font-semibold">Modelo</th>
                  <th className="px-4 py-3 font-semibold">Tipo</th>
                  <th className="px-4 py-3 font-semibold">Año</th>
                  <th className="px-4 py-3 text-right font-semibold">
                    Velocidad
                  </th>
                </tr>
              </thead>
              <tbody className="text-stone-700 dark:text-stone-300">
                {maquinas.map((m, i) => (
                  <tr
                    key={m.nombre}
                    className={
                      i % 2 === 0
                        ? "bg-white dark:bg-[#241010]"
                        : "bg-[#FAF6F1] dark:bg-white/5"
                    }
                  >
                    <td className="px-4 py-2.5 font-bold text-[#8C1D1D] dark:text-red-300">
                      {m.puesto}
                    </td>
                    <td className="px-4 py-2.5 font-semibold">{m.nombre}</td>
                    <td className="px-4 py-2.5">{m.tipo}</td>
                    <td className="px-4 py-2.5">{m.dato.split(" · ")[0]}</td>
                    <td className="px-4 py-2.5 text-right font-bold">
                      {m.velocidad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Explicación */}
        <section className="mt-14 rounded-3xl bg-white p-6 shadow-md ring-1 ring-stone-200 sm:p-10 dark:bg-[#241010] dark:ring-white/10">
          <div className="border-l-4 border-[#C9A227] pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              ¿Por qué marcaron época?
            </h2>
          </div>
          <div className="mt-6 grid gap-6 text-sm leading-relaxed text-stone-600 sm:grid-cols-3 dark:text-stone-300">
            <div className="rounded-2xl bg-[#FAF6F1] p-5 ring-1 ring-stone-200 dark:bg-white/5 dark:ring-white/10">
              <h3 className="font-bold text-[#8C1D1D] dark:text-red-300">
                1. Diseño honesto
              </h3>
              <p className="mt-1">
                Fuselaje simple, alas de tela y metal. El aire pasaba sin
                adornos, igual que las aves que los inspiraron.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FAF6F1] p-5 ring-1 ring-stone-200 dark:bg-white/5 dark:ring-white/10">
              <h3 className="font-bold text-[#8C1D1D] dark:text-red-300">
                2. Hélice y motor
              </h3>
              <p className="mt-1">
                Motores de pistón y hélices grandes para despegar corto y volar
                estable sin cansar a la tripulación.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FAF6F1] p-5 ring-1 ring-stone-200 dark:bg-white/5 dark:ring-white/10">
              <h3 className="font-bold text-[#8C1D1D] dark:text-red-300">
                3. Cabina cercana
              </h3>
              <p className="mt-1">
                Vuelo bajo, vista abierta del paisaje y ruta a la vista. Volar
                se sentía como un viaje, no como un traslado.
              </p>
            </div>
          </div>
        </section>

        {/* Dato curioso */}
        <section
          id="dato"
          className="mt-8 scroll-mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B0A0A] to-[#8C1D1D] p-6 text-red-100 shadow-md sm:p-10"
        >
          <h2 className="text-lg font-bold tracking-tight text-[#C9A227]">
            Dato curioso
          </h2>
          <div className="mt-2 h-0.5 w-12 rounded-full bg-[#C9A227]/60" />
          <p className="mt-3 text-sm leading-relaxed">
            El transporte continental de 1935, descrito en su época por su
            vuelo estable y su puntualidad, cuenta con ejemplares conservados
            que siguen en exhibición o vuelo histórico casi 90 años después de
            su primer vuelo. Pocos diseños han resistido tan bien el paso del
            tiempo.
          </p>
        </section>

        {/* Preguntas */}
        <section id="preguntas" className="mt-14 scroll-mt-20">
          <div className="border-l-4 border-[#C4342B] pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Preguntas frecuentes
            </h2>
            <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
              Lo que más nos preguntan sobre estos aviones:
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {preguntas.map((p) => (
              <article
                key={p.q}
                className="card-in rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#241010]"
              >
                <h3 className="font-bold text-stone-900 dark:text-stone-100">
                  {p.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {p.a}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Transparencia para Google Ads */}
        <section id="transparencia" className="mt-14 rounded-3xl border border-stone-200 bg-white p-6 text-sm leading-relaxed text-stone-600 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#241010] dark:text-stone-300">
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
            Transparencia del sitio
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Idea que se mantiene:</strong> época dorada del vuelo, ranking de velocidad, historia
              1926-1943, rutas que se volvieron leyenda, comparativa y preguntas. Solo historia de los aviones y
              contexto informativo de aerolíneas, sin precios ni promociones. Keywords: volar, historia aviación,
              aerolíneas, vuelos, rutas, destinos, puntualidad de época, vuelo sereno.
            </li>
            <li>
              <strong>Datos históricos:</strong> velocidades y fechas aproximadas con fines divulgativos. Pueden variar según la fuente.
            </li>
            <li>
              <strong>Contenido militar histórico:</strong> aviones de 1936-1939 solo con fines educativos. No se promocionan armas ni se dan instrucciones.
            </li>
            <li>
              <strong>Imágenes y derechos:</strong> textos 100% originales para esta página. Fotos de Unsplash
              (licencia libre comercial, sin atribución exigida) salvo 1 foto: “DH 82A Tiger Moth - N81DH” de
              Towpilot, vía Wikimedia Commons, licencia{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.es" target="_blank" rel="license noopener" className="text-[#8C1D1D] underline dark:text-red-300">
                CC BY-SA 3.0
              </a>{" "}
              + GFDL, con enlace a{" "}
              <a href="https://commons.wikimedia.org/wiki/File:DH_82A_Tiger_Moth_-_N81DH.jpg" target="_blank" rel="noopener" className="text-[#8C1D1D] underline dark:text-red-300">
                archivo original
              </a>
              . Uso permitido incluso comercial con atribución. No implica respaldo del autor.
            </li>
            <li>
              <strong>Responsable:</strong> Proyecto Aves ·{" "}
              <a href="/sobre-nosotros" className="text-[#8C1D1D] underline dark:text-red-300">Sobre nosotros</a>,{" "}
              <a href="/privacidad" className="text-[#8C1D1D] underline dark:text-red-300">Privacidad</a>,{" "}
              <a href="/terminos" className="text-[#8C1D1D] underline dark:text-red-300">Términos</a>.
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white py-8 text-center text-xs text-stone-500 dark:border-white/10 dark:bg-[#160808] dark:text-stone-400">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-semibold text-stone-700 dark:text-stone-200">
            “Volar sin prisa, llegar con historia” · Época dorada del vuelo · Solo historia
          </p>
          <p className="mt-2 leading-relaxed">
            © 2026 Proyecto Aves · Textos originales. Datos de velocidad aproximados con fines ilustrativos.
            Aviones de uso militar histórico solo con fines educativos. Fotos: Unsplash (uso libre) + 1 foto
            CC BY-SA 3.0 Towpilot vía Wikimedia Commons.
          </p>
          <p className="mt-3">
            Editor responsable: Proyecto Aves ·{" "}
            <a href="/sobre-nosotros" className="underline hover:text-stone-700">Sobre nosotros</a> ·{" "}
            <a href="/privacidad" className="underline hover:text-stone-700">Privacidad</a> ·{" "}
            <a href="/terminos" className="underline hover:text-stone-700">Términos</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
