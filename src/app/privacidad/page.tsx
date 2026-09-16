export const metadata = {
  title: "Política de privacidad — Volar sin prisa",
  description: "Política de privacidad del sitio divulgativo.",
};

export default function Privacidad() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-bold">Política de privacidad</h1>
      <p className="mt-4 leading-relaxed">
        Este sitio es informativo y no recoge pagos ni crea cuentas.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li>Este sitio no recoge datos mediante formularios propios.</li>
        <li>Cookies: solo técnicas necesarias. No usamos publicidad personalizada propia.</li>
        <li>Si llegas desde Google Ads, Google puede usar cookies propias según su política.</li>
      </ul>
      <p className="mt-4">
        <a href="/" className="underline">Volver al inicio</a>
      </p>
    </main>
  );
}
