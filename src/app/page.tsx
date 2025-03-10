'use client'

import * as React from "react"
import { useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Clock as ClockIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GlampingReservations() {
  const [checkIn, setCheckIn] = React.useState<Date>()
  const [checkOut, setCheckOut] = React.useState<Date>()
  const [showConfirmation, setShowConfirmation] = React.useState(false)
  const reservaRef = useRef<HTMLElement>(null)
  const alojamientosRef = useRef<HTMLElement>(null)
  const contactoRef = useRef<HTMLElement>(null)
  const actividadesRef = useRef<HTMLElement>(null)

  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmation(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Glamping Adventures</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Inicio
          </Link>
          <button 
            onClick={() => scrollToSection(alojamientosRef)}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Alojamientos
          </button>
          <button 
            onClick={() => scrollToSection(actividadesRef)}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Actividades
          </button>
          <button 
            onClick={() => scrollToSection(contactoRef)}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contacto
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="/cama-matrimonial.jpeg"
            alt="Fondo de glamping"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white mb-8">
                   Eco Glamping Valle del Elqui
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-12 mb-16 leading-relaxed">
                  Experimenta la mezcla perfecta entre lo{" "}
                  <span className="bg-white/90 text-black/70 px-2 py-0.5 rounded-full mx-1">social</span>{" "}
                  de una hostal y el{" "}
                  <span className="bg-white/90 text-black/70 px-2 py-0.5 rounded-full mx-1">confort</span>{" "}
                  de un hotel. Todo en contacto directo con la{" "}
                  <span className="bg-white/90 text-black/70 px-2 py-0.5 rounded-full mx-1">naturaleza</span>
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4 mt-16">
                <Button variant="outline" className="rounded-full text-white border-white bg-transparent hover:bg-white/20">
                  Más información
                </Button>
                <Button className="rounded-full bg-orange-500 text-white hover:bg-orange-600" onClick={() => scrollToSection(reservaRef)}>
                  Reservar ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section ref={alojamientosRef} className="w-full py-24 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nuestros Alojamientos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Carpa de Lujo Privada</CardTitle>
                  <CardDescription>Cama matrimonial</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/cama-matrimonial.jpeg"
                    alt="Carpa de Lujo Privada"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2">Espaciosa carpa con cama matrimonial y baño privado.</p>
                  <p className="mt-2 font-bold">Precio:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li className="font-bold">$60.000 por pareja (una noche)</li>
                    <li className="font-bold">$48.000 por pareja (agendando dos o más noches)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Carpa de Lujo Privada</CardTitle>
                  <CardDescription>Dos camas individuales</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/dos-camas-individuales.jpeg"
                    alt="Carpa de Lujo Privada con Dos Camas"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2">Cómoda carpa con dos camas individuales y baño privado.</p>
                  <p className="mt-2 font-bold">Precio:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li className="font-bold">$60.000 por pareja (una noche)</li>
                    <li className="font-bold">$48.000 por pareja (agendando dos o más noches)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Carpa de Lujo Privada</CardTitle>
                  <CardDescription>Compartida para 5 personas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/dos-camas-individuales.jpeg"
                    alt="Carpa Compartida"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2">Amplia carpa compartida ideal para grupos o viajeros sociales.</p>
                  <p className="mt-2 font-bold">Precio:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li className="font-bold">$23.000 por persona (una noche)</li>
                    <li className="font-bold">$17.000 por persona (agendando dos o más noches)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section ref={actividadesRef} className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Actividades</h2>
            <p className="text-gray-500 text-center max-w-[800px] mx-auto mb-12">
              Descubre experiencias únicas que harán de tu estancia una aventura inolvidable
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src="/yoga.jpeg"
                      alt="Yoga bajo las estrellas"
                      fill
                      className="object-cover object-bottom rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Yoga Bajo las Estrellas</h3>
                    <p className="text-gray-600 mb-4">
                      Hazle un favor a tu cuerpo y a tu mente mientras contemplas el cielo nocturno más limpio del mundo en nuestras sesiones de yoga guiadas.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        <span>60 minutos | 20:00 hrs</span>
                      </div>
                      <span className="text-green-600 font-semibold">Gratis</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Todos los días</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src="/meditacion.jpeg"
                      alt="Meditación en la naturaleza"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Meditación en la Naturaleza</h3>
                    <p className="text-gray-600 mb-4">
                      Encuentra tu paz interior con sesiones de meditación guiada en medio del bosque.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        <span>45 minutos | 07:00 hrs</span>
                      </div>
                      <span className="text-green-600 font-semibold">Gratis</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Todos los días</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src="/paseo-caballos.jpeg"
                      alt="Paseo a caballo"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Paseo a Caballo</h3>
                    <p className="text-gray-600 mb-4">
                      Explora los senderos montañosos en una inolvidable aventura ecuestre guiada por expertos locales.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        <span>120 minutos | 10:00 hrs y 15:00 hrs</span>
                      </div>
                      <span className="font-semibold">$55.000 por persona</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">De jueves a domingo</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src="/fogata.jpeg"
                      alt="Fogata grupal"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Fogata Grupal</h3>
                    <p className="text-gray-600 mb-4">
                      Conoce otros apasionados de la naturaleza como tú en un ambiente distendido y social.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        <span>Todas las noches</span>
                      </div>
                      <span className="text-green-600 font-semibold">Gratis</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Todos los días</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src="/desayuno.jpeg"
                      alt="Desayuno grupal"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Desayuno Grupal</h3>
                    <p className="text-gray-600 mb-4">
                    ¡El favorito de todos! Comienza tu día compartiendo un nutritivo desayuno con otros viajeros en nuestro espacio común.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        <span>07:00 - 11:30 hrs</span>
                      </div>
                      <span className="text-green-600 font-semibold">Gratis</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Todos los días</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="reserva" ref={reservaRef} className="w-full py-24 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Reserva tu Estancia</h2>
            <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" placeholder="Ingresa tu nombre" required className="rounded-full bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" placeholder="tu@email.com" required type="email" className="rounded-full bg-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accommodation">Tipo de alojamiento</Label>
                <Select required>
                  <SelectTrigger className="rounded-full bg-white">
                    <SelectValue placeholder="Selecciona un alojamiento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury-double">Carpa de Lujo - Cama Matrimonial</SelectItem>
                    <SelectItem value="luxury-twin">Carpa de Lujo - Dos Camas Individuales</SelectItem>
                    <SelectItem value="shared">Carpa Compartida (5 personas)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="check-in">Fecha de llegada</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-full bg-white",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="check-out">Fecha de salida</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-full bg-white",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <ClockIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="comments">Comentarios o consultas</Label>
                <textarea
                  id="comments"
                  placeholder="¿Tienes alguna pregunta o requerimiento especial?"
                  className="w-full min-h-[100px] px-4 py-3 rounded-2xl border border-input bg-white text-sm resize-y"
                />
              </div>
              <Button className="w-full rounded-full bg-orange-500 text-white hover:bg-orange-600" type="submit">
                Reservar ahora
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer ref={contactoRef} className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 Glamping Adventures. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de privacidad
          </Link>
        </nav>
      </footer>
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">¡Gracias por tu reserva!</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p>Nos pondremos en contacto contigo a la brevedad para confirmarla.</p>
            <Button 
              onClick={() => setShowConfirmation(false)}
              className="rounded-full bg-orange-500 text-white hover:bg-orange-600"
            >
              Aceptar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

