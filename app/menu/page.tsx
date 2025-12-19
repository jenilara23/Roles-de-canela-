import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const productos = [
  {
    nombre: "Clásico",
    descripcion: "Nuestro rollo tradicional con canela Ceylon y glaseado de vainilla",
    precio: "$65",
    imagen: "/classic-cinnamon-roll-glazed.jpg",
  },
  {
    nombre: "Nuez Pecana",
    descripcion: "Rollo de canela cubierto con nueces pecanas caramelizadas",
    precio: "$75",
    imagen: "/pecan-cinnamon-roll.jpg",
  },
  {
    nombre: "Chocolate",
    descripcion: "Masa con cacao y relleno de chocolate belga",
    precio: "$70",
    imagen: "/chocolate-cinnamon-roll.jpg",
  },
  {
    nombre: "Maple",
    descripcion: "Glaseado de maple auténtico con toque de mantequilla",
    precio: "$70",
    imagen: "/maple-glazed-cinnamon-roll.jpg",
  },
  {
    nombre: "Cream Cheese",
    descripcion: "Con nuestro famoso frosting de queso crema casero",
    precio: "$75",
    imagen: "/cream-cheese-frosting-cinnamon-roll.jpg",
  },
  {
    nombre: "Mini Rolls (6 pzas)",
    descripcion: "Versión mini perfecta para compartir",
    precio: "$120",
    imagen: "/mini-cinnamon-rolls-box.jpg",
  },
]

export default function MenuPage() {
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
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/white-marble-texture.png')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-balance font-serif text-4xl font-light text-neutral-900 md:text-6xl">
            Nuestro Menú
          </h1>
          <p className="text-pretty text-lg text-neutral-600 md:text-xl">
            Cada variedad es única, pero todas comparten nuestro compromiso con la calidad
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto, index) => (
              <Card key={index} className="overflow-hidden border-neutral-200 transition-all hover:shadow-xl">
                <div className="relative h-64 overflow-hidden bg-neutral-100">
                  <img
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-neutral-900">{producto.nombre}</h3>
                    <span className="text-lg font-bold text-amber-700">{producto.precio}</span>
                  </div>
                  <p className="text-neutral-600">{producto.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="bg-neutral-50 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-light text-neutral-900">Bebidas y Extras</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">Café Americano</h3>
              <p className="mb-2 text-2xl font-bold text-amber-700">$35</p>
              <p className="text-sm text-neutral-600">Orgánico y de comercio justo</p>
            </div>
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">Latte</h3>
              <p className="mb-2 text-2xl font-bold text-amber-700">$45</p>
              <p className="text-sm text-neutral-600">Con leche de tu elección</p>
            </div>
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">Chocolate Caliente</h3>
              <p className="mb-2 text-2xl font-bold text-amber-700">$40</p>
              <p className="text-sm text-neutral-600">Chocolate belga auténtico</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-lg text-neutral-700">¿Tienes alguna pregunta sobre nuestros productos?</p>
          <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
