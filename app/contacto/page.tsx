import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Phone, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/menu">Menú</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/white-marble-texture.png')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-balance font-serif text-4xl font-light text-neutral-900 md:text-6xl">Visítanos</h1>
          <p className="text-pretty text-lg text-neutral-600 md:text-xl">
            Estamos en el corazón de Monterrey, listos para endulzar tu día
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-neutral-200">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-neutral-900">Ubicación</h3>
                    <p className="text-neutral-600">
                      Av. Constitución 1234, Centro
                      <br />
                      Monterrey, Nuevo León 64000
                      <br />
                      México
                    </p>
                    <Button asChild variant="link" className="mt-2 h-auto p-0 text-amber-700">
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        Ver en Google Maps →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neutral-200">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Clock className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-neutral-900">Horarios</h3>
                    <div className="space-y-1 text-neutral-600">
                      <p>Lunes a Viernes: 7:00 AM - 8:00 PM</p>
                      <p>Sábado: 8:00 AM - 9:00 PM</p>
                      <p>Domingo: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neutral-200">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Phone className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-neutral-900">Teléfono</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+528112345678" className="hover:text-amber-700">
                        (81) 1234-5678
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">Llamadas y WhatsApp</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neutral-200">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Mail className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-neutral-900">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:hola@rolloscanela.com" className="hover:text-amber-700">
                        hola@rolloscanela.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-neutral-100 lg:h-auto">
              <img src="/modern-bakery-storefront-exterior.jpg" alt="Nuestra ubicación" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
                  <MapPin className="mr-2 h-5 w-5" />
                  Abrir en Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-neutral-50 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-light text-neutral-900">Síguenos</h2>
          <p className="mb-8 text-neutral-600">Mantente al día con nuestras novedades y promociones especiales</p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="border-neutral-300 bg-transparent">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-300 bg-transparent">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance font-serif text-3xl font-light text-neutral-900 md:text-4xl">
            ¿Listo para probar nuestros rollos?
          </h2>
          <p className="mb-8 text-lg text-neutral-700">Te esperamos con los hornos calientes y el café listo</p>
          <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
            <Link href="/menu">Ver Menú Completo</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
