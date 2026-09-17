export const metadata = {
  title: "Sobre nosotros — Volar sin prisa",
  description: "Quiénes somos: proyecto divulgativo sobre aviación histórica, sin venta de productos.",
};

export default function SobreNosotros() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-bold">Sobre nosotros</h1>
      <p className="mt-4 leading-relaxed">
        “Volar sin prisa” es un proyecto divulgativo sobre aviación histórica
        (1926-1943). Publicamos textos originales con fines educativos.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li>Editor responsable: Volar Sin Prisa</li>
        <li>Fuentes: referencias históricas generales y archivos fotográficos ilustrativos.</li>
      </ul>
      <p className="mt-4">
        <a href="/" className="underline">Volver al inicio</a>
      </p>
    </main>
  );
}
