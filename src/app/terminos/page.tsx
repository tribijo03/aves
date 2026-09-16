export const metadata = {
  title: "Términos de uso — Volar sin prisa",
  description: "Términos de uso del contenido educativo.",
};

export default function Terminos() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-bold">Términos de uso</h1>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
        <li>Contenido educativo y aproximado. Las velocidades y fechas pueden variar según la fuente.</li>
        <li>Los aviones de uso militar histórico se presentan solo con fines divulgativos, sin promoción de armas.</li>
        <li>Textos originales © 2026 Proyecto Aves. Fotos Unsplash con licencia libre; 1 foto “DH 82A Tiger Moth - N81DH” de Towpilot vía Wikimedia Commons bajo CC BY-SA 3.0 y GFDL, con atribución y enlace a licencia.</li>
        <li>Sección de presentación: solo historia de los aviones. Sin precios, sin ofertas y sin reservas.</li>
        <li>Uso permitido: compartir con cita y sin fines engañosos.</li>
      </ul>
      <p className="mt-4">
        <a href="/" className="underline">Volver al inicio</a>
      </p>
    </main>
  );
}
