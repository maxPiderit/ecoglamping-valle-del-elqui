import * as React from "react"
import { useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

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
  const reservaRef = useRef<HTMLElement>(null)

  const scrollToReserva = useCallback(() => {
    reservaRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Alojamientos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Actividades
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Vive la aventura del Glamping
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Experimenta la naturaleza con el confort de un hotel de lujo. Reserva ahora tu escapada perfecta.
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <Button variant="outline" className="rounded-full text-black border-white bg-white hover:bg-gray-100">
                  Más información
                </Button>
                <Button className="rounded-full bg-orange-500 text-white hover:bg-orange-600" onClick={scrollToReserva}>
                  Reservar ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Nuestros Alojamientos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Carpa de Lujo Privada</CardTitle>
                  <CardDescription>Cama matrimonial</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Carpa de Lujo Privada"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2">Espaciosa carpa con cama matrimonial y baño privado.</p>
                  <p className="mt-2 font-bold">Precio: $50.000 por pareja</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Carpa de Lujo Privada</CardTitle>
                  <CardDescription>Dos camas individuales</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Carpa de Lujo Privada con dos camas"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2">Cómoda carpa con dos camas individuales y baño privado.</p>
                  <p className="mt-2 font-bold">Precio: $50.000 por pareja</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle>Carpa Compartida</CardTitle>
                  <CardDescription>Para 5 personas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Carpa Compartida"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2">Amplia carpa compartida ideal para grupos o viajeros sociales.</p>
                  <p className="mt-2 font-bold">Precio: $18.000 por persona</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="reserva" ref={reservaRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Reserva tu Estancia</h2>
            <form className="max-w-md mx-auto space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" placeholder="Ingresa tu nombre" required className="rounded-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" placeholder="tu@email.com" required type="email" className="rounded-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accommodation">Tipo de alojamiento</Label>
                <Select required>
                  <SelectTrigger className="rounded-full">
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
                          "w-full justify-start text-left font-normal rounded-full",
                          !checkIn && "text-muted-foreground",
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
                          "w-full justify-start text-left font-normal rounded-full",
                          !checkOut && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Button className="w-full rounded-full bg-orange-500 text-white hover:bg-orange-600" type="submit">
                Reservar ahora
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Glamping Adventures. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de privacidad
          </Link>
        </nav>
      </footer>
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

