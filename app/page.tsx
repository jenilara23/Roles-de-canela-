import Link from "next/link"
import { ArrowRight, Clock, Star, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-neutral-50 px-4 py-20 md:min-h-[90vh]">
        {/* Background Texture & decorative elements */}
        <div className="absolute inset-0 bg-[url('/white-marble-texture-subtle.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-100/40 rounded-full blur-3xl" />

        {/* Glassmorphism Container */}
        <div className="relative z-10 mx-auto max-w-4xl rounded-[2.5rem] border border-white/60 bg-white/30 p-6 shadow-2xl shadow-amber-900/5 backdrop-blur-md md:px-12 md:py-10">
          <div className="text-center">
            <FadeIn direction="down">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/50 px-4 py-1.5 text-xs font-medium text-amber-900 shadow-sm backdrop-blur-sm md:text-sm">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                Hechos con amor en Monterrey
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-4 text-balance font-serif text-4xl font-light tracking-tight text-neutral-900 md:text-6xl lg:text-7xl drop-shadow-sm">
                Rollos de Canela
                <span className="block font-script text-6xl text-amber-800 md:text-7xl lg:text-8xl pt-2 drop-shadow-md transform -rotate-2">Artesanales</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto mb-6 max-w-lg text-pretty text-base text-neutral-700 md:text-lg leading-relaxed font-light">
                Descubre el sabor auténtico de nuestros rollos de canela, elaborados diariamente con <span className="font-medium text-amber-900">ingredientes premium</span> y recetas tradicionales.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6 text-sm md:text-base bg-amber-700 text-white hover:bg-amber-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-amber-900/20 rounded-full">
                  <Link href="/menu">
                    Ver Nuestro Menú
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6 text-sm md:text-base border-amber-200 text-amber-900 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-amber-300 hover:scale-105 transition-all duration-300 rounded-full shadow-sm">
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.8} direction="up" className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-bounce text-xs font-semibold text-amber-900/50 tracking-widest uppercase">Desliza para descubrir</div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20 md:py-32 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50" />

        <div className="mx-auto max-w-6xl relative z-10">
          <FadeIn>
            <h2 className="mb-4 text-center font-serif text-3xl font-light text-neutral-900 md:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-neutral-600">
              Cada rollo es una obra maestra artesanal
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            <FadeIn delay={0.1} fullWidth>
              <div className="group h-full rounded-2xl bg-neutral-50 p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-amber-200 hover:bg-amber-50/50">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
                  <Clock className="h-8 w-8 text-amber-700 group-hover:text-amber-800" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900">Recién Horneados</h3>
                <p className="text-neutral-600">
                  Horneamos en pequeños lotes durante todo el día para garantizar frescura absoluta.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} fullWidth>
              <div className="group h-full rounded-2xl bg-neutral-50 p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-amber-200 hover:bg-amber-50/50">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
                  <Star className="h-8 w-8 text-amber-700 group-hover:text-amber-800" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900">Ingredientes Premium</h3>
                <p className="text-neutral-600">
                  Solo utilizamos ingredientes de la más alta calidad, sin conservadores ni aditivos.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} fullWidth>
              <div className="group h-full rounded-2xl bg-neutral-50 p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-amber-200 hover:bg-amber-50/50">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-amber-700 group-hover:text-amber-800" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900">Hechos con Amor</h3>
                <p className="text-neutral-600">
                  Cada rollo es preparado con cariño y dedicación por nuestro equipo apasionado.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Product Section - El Clásico */}
      <section className="py-20 md:py-32 bg-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/white-marble-texture-subtle.jpg')] bg-cover bg-center opacity-30 mix-blend-multiply" />

        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-amber-200 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl rotate-3 transition-transform duration-500 group-hover:rotate-0">
                  <img
                    src="/classic-cinnamon-roll-glazed.jpg"
                    alt="Rollo de canela clásico"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 fill-amber-800" />
                  El Favorito de Todos
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 mb-6">
                  El Clásico
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Nuestro rollo insignia que lo empezó todo. Masa suave y esponjosa fermentada por 24 horas, rellena con nuestra mezcla generosa de canela Ceylon importada y azúcar mascabado, todo cubierto con nuestro inigualable glaseado de vainilla de Madagascar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg">
                    <Link href="/menu">
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Ordenar Ahora
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="text-neutral-900 hover:bg-amber-100">
                    <Link href="/menu">
                      Ver Detalles
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-neutral-50 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn delay={0.1} direction="left">
              <div className="group relative h-[300px] overflow-hidden rounded-2xl md:h-[400px] shadow-lg">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
                <img
                  src="/cinnamon-rolls-fresh-baked.jpg"
                  alt="Rollos de canela recién horneados"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="group relative h-[300px] overflow-hidden rounded-2xl md:h-[400px] shadow-lg">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
                <img
                  src="/artisan-bakery-interior-modern.jpg"
                  alt="Interior de panadería"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 px-4 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/white-marble-texture-subtle.jpg')] bg-cover bg-center opacity-10 mix-blend-multiply" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <FadeIn>
            <h2 className="mb-6 text-balance font-serif text-3xl font-light text-neutral-900 md:text-5xl">
              Visítanos hoy y descubre el mejor rollo de canela de Monterrey
            </h2>
            <p className="mb-8 text-lg text-neutral-700">Estamos listos para endulzar tu día</p>
            <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 hover:scale-105 transition-transform duration-300 shadow-xl">
              <Link href="/contacto">
                Encuentra nuestra ubicación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
