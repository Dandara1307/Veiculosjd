"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Instagram, Facebook, Linkedin, Phone } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // AOS animation simulation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar uma consulta com a Dra. Jayne Montoro."
    const whatsappUrl = `https://wa.me/5511986944662?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInstagramClick = () => {
    window.open("https://instagram.com/dra.jaynemaiaa", "_blank")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeaderSticky ? "h-16 bg-white/95 backdrop-blur-sm shadow-sm" : "h-20 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className={`${
              isHeaderSticky
                ? "bg-red-600 border-red-600 text-white hover:bg-red-700"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20"
            } transition-all hover:scale-105 botao-hover uppercase tracking-wider`}
            onClick={handleWhatsAppClick}
          >
            AGENDAR
          </Button>

          <div className="flex items-center gap-4">
            <div className="logo-jm">JM</div>
          </div>

          <button
            onClick={toggleMenu}
            className={`${
              isHeaderSticky ? "text-black" : "text-white"
            } hover:scale-105 transition-all flex items-center gap-2`}
          >
            <Menu size={24} />
            <span className="text-sm uppercase tracking-wider">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-red-600/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-12">
              <div className="logo-jm">JM</div>
              <button onClick={toggleMenu} className="text-white flex items-center gap-2">
                <X size={24} />
                <span className="text-sm uppercase">fechar</span>
              </button>
            </div>

            <nav className="space-y-8">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white text-2xl font-light uppercase tracking-wider hover:text-red-200 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-white text-2xl font-light uppercase tracking-wider hover:text-red-200 w-full text-left"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection("treatments")}
                className="block text-white text-2xl font-light uppercase tracking-wider hover:text-red-200 w-full text-left"
              >
                Tratamentos
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block text-white text-2xl font-light uppercase tracking-wider hover:text-red-200 w-full text-left"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("office")}
                className="block text-white text-2xl font-light uppercase tracking-wider hover:text-red-200 w-full text-left"
              >
                Consultório
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-white text-2xl font-light uppercase tracking-wider hover:text-red-200 w-full text-left"
              >
                Contato
              </button>
            </nav>

            <div className="mt-12">
              <Button className="bg-white text-red-800 hover:bg-red-50" onClick={handleWhatsAppClick}>
                Agendar Consulta
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <button onClick={handleInstagramClick}>
                <Instagram className="w-6 h-6 text-white hover:text-red-200 cursor-pointer" />
              </button>
              <Facebook className="w-6 h-6 text-white hover:text-red-200 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-white hover:text-red-200 cursor-pointer" />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Video Background */}
      <section id="home" className="relative h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a777343c-5a6a-4691-9e02-10c7dc2abdb5-mexRdrkZQWzT4yTYiS8ZrDXUAYzD57.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-3xl text-white">
            <h1
              className="text-6xl md:text-8xl font-light mb-6 leading-tight text-red-500"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Beleza que Permanece
            </h1>
            <h3
              className="text-3xl md:text-4xl font-light mb-8 text-white/90"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              cuidado que transforma
            </h3>

            {/* Video abaixo do título principal (video da primeira versão) */}
            <div
              className="w-full max-w-lg mb-10 rounded-2xl overflow-hidden shadow-2xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <video autoPlay loop muted playsInline className="w-full h-auto object-cover">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a777343c-5a6a-4691-9e02-10c7dc2abdb5-mexRdrkZQWzT4yTYiS8ZrDXUAYzD57.mp4" type="video/mp4" />
              </video>
            </div>

            <p
              className="text-xl md:text-2xl font-light mb-10 leading-relaxed text-white/90 max-w-2xl"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Tratamentos dermatológicos exclusivos, tecnologia de ponta e um olhar refinado para realçar sua beleza com
              naturalidade.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-red-50 transition-all hover:scale-105 px-8 py-4 text-lg botao-hover"
              onClick={handleWhatsAppClick}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              agendar consulta
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-5xl md:text-6xl font-light mb-10 text-red-600"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                dra. jayne montoro
              </h2>
              {/* Imagem da Dra. Jayne removida daqui */}
            </div>
            <div className="space-y-8">
              <p
                className="text-xl text-black leading-relaxed"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                Com anos de experiência e especializações em tratamentos regenerativos e preventivos, a Dra. Jayne
                Montoro une tecnologia e personalização para oferecer um atendimento altamente diferenciado.
              </p>
              <p
                className="text-xl text-black leading-relaxed"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                Cada paciente recebe um plano exclusivo, garantindo resultados que respeitam sua individualidade e
                realçam sua beleza natural ao longo do tempo.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all hover:scale-105 bg-transparent px-8 py-4 text-lg botao-hover"
                onClick={handleWhatsAppClick}
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light mb-6 text-center text-red-600" data-aos="fade" data-aos-duration="1000">
            Atendimento detalhado
          </h2>
          <p
            className="text-xl text-black mb-20 text-center max-w-3xl mx-auto"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            Trazendo modernidade e Tecnologia para atender as individualidades de cada paciente.
          </p>

          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-12">
              <div className="w-px h-20 bg-red-600" data-aos="fade" data-aos-duration="1000"></div>
              <div className="flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                <div className="text-5xl font-light text-red-600 mb-4">01</div>
                <p className="text-xl text-black">
                  Consultas humanizadas avaliando minuciosamente as necessidades da paciente
                </p>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="w-px h-20 bg-red-600" data-aos="fade" data-aos-duration="1000" data-aos-delay="100"></div>
              <div className="flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                <div className="text-5xl font-light text-red-600 mb-4">02</div>
                <p className="text-xl text-black">
                  Tratamentos personalizados de forma eficaz, realizados com Tecnologias de ponta
                </p>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="w-px h-20 bg-red-600" data-aos="fade" data-aos-duration="1000" data-aos-delay="200"></div>
              <div className="flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                <div className="text-5xl font-light text-red-600 mb-4">03</div>
                <p className="text-xl text-black">
                  Resultados naturais, duradouros e sofisticados mantendo a individualidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-24 text-center bg-white border-t border-red-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-5xl font-light mb-20 uppercase tracking-wider text-red-600"
            data-aos="fade"
            data-aos-duration="1000"
          >
            tratamentos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div
              className="group cursor-pointer p-8 rounded-2xl hover:shadow-lg transition-all border border-red-100"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-light text-black group-hover:text-red-600 transition-colors mb-3">
                Preenchimento Facial
              </h3>
              <p className="text-lg text-red-400">Bocal, labial e demais áreas faciais</p>
            </div>
            <div
              className="group cursor-pointer p-8 rounded-2xl hover:shadow-lg transition-all border border-red-100"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-light text-black group-hover:text-red-600 transition-colors mb-3">
                Harmonização Facial
              </h3>
              <p className="text-lg text-red-400">Equilíbrio e proporção facial</p>
            </div>
            <div
              className="group cursor-pointer p-8 rounded-2xl hover:shadow-lg transition-all border border-red-100"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-light text-black group-hover:text-red-600 transition-colors mb-3">
                Tratamento de Mandíbula
              </h3>
              <p className="text-lg text-red-400">Definição e contorno mandibular</p>
            </div>
            <div
              className="group cursor-pointer p-8 rounded-2xl hover:shadow-lg transition-all border border-red-100"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-light text-black group-hover:text-red-600 transition-colors mb-3">
                Tratamento de Olheiras
              </h3>
              <p className="text-lg text-red-400">Rejuvenescimento da região periorbital</p>
            </div>
            <div
              className="group cursor-pointer p-8 rounded-2xl hover:shadow-lg transition-all border border-red-100"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-light text-black group-hover:text-red-600 transition-colors mb-3">
                Preenchimento Labial
              </h3>
              <p className="text-lg text-red-400">Volume e definição dos lábios</p>
            </div>
            <div
              className="group cursor-pointer p-8 rounded-2xl hover:shadow-lg transition-all border border-red-100"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <h3 className="text-2xl font-light text-black group-hover:text-red-600 transition-colors mb-3">
                Rejuvenescimento Facial
              </h3>
              <p className="text-lg text-red-400">Tratamentos anti-idade completos</p>
            </div>
          </div>

          {/* Imagem de procedimentos estéticos removida daqui */}

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-105 px-8 py-4 text-lg botao-hover"
              onClick={handleWhatsAppClick}
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Agendar Avaliação
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section - Nova seção com todas as imagens e vídeos únicos */}
      <section id="gallery" className="py-24 bg-white border-t border-red-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light mb-20 text-center text-red-600" data-aos="fade" data-aos-duration="1000">
            Cuidados e Tratamentos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Proteção Solar */}
            <div className="rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-duration="1000">
              <Image
                src="/images/protecao-solar.jpeg"
                alt="Proteção Solar Diária"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Fotoproteção e Manchas */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <Image
                src="/images/fotoproteção-manchas.jpeg"
                alt="Tratamento de Manchas"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ozonioterapia */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Image
                src="/images/ozonioterapia.jpeg"
                alt="Ozonioterapia"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tratamento Capilar */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Image
                src="/images/tratamento-capilar.jpeg"
                alt="Tratamento Capilar"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hidratação da Pele */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <Image
                src="/images/hidratacao-pele.jpeg"
                alt="Hidratação da Pele"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vídeo de Introdução removido daqui */}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-white border-t border-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="logo-jm mx-auto mb-12" data-aos="zoom-in" data-aos-duration="1500"></div>
            <div className="w-full h-px bg-red-200 mb-20" data-aos="fade" data-aos-duration="2000"></div>
          </div>

          {/* Imagem de infográfico de tratamentos removida daqui */}

          <div className="text-center mt-20">
            <h2 className="text-5xl font-light mb-10 text-red-600" data-aos="fade-up" data-aos-duration="2000">
              você merece se sentir incrível todos os dias
            </h2>
            <Button
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-105 px-8 py-4 text-lg botao-hover"
              onClick={handleWhatsAppClick}
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              agendar consulta
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-24 bg-white border-t border-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Apenas uma imagem grande na seção pessoal */}
            <div className="text-center">
              <Image
                src="/images/dr-jayne-personal.jpeg"
                alt="Dra. Jayne Montoro - Por trás do jaleco"
                width={1000}
                height={1000}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="text-center">
              <video autoPlay loop muted playsInline className="rounded-2xl shadow-xl w-full h-auto object-cover">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VIDEO-2025-07-06-09-33-56-dO3fIyD8ea8u0PvezUxhn6F2X2Fy5t.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-center">
              <Image
                src="/images/dr-jayne-and-partner.jpeg"
                alt="Dra. Jayne Montoro com parceiro"
                width={1000}
                height={1000}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-t border-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
              <Image
                src="/images/barba-saudavel.jpeg"
                alt="Quer uma barba mais cheia e saudável?"
                width={800}
                height={800}
                className="rounded-2xl shadow-xl w-full max-w-2xl mx-auto"
              />
            </div>
            <h3 className="text-3xl font-light mb-12 text-red-600" data-aos="fade-up" data-aos-duration="2000">
              histórias de pacientes
            </h3>

            <div className="space-y-16">
              <Card className="p-10 shadow-lg border-red-100 rounded-2xl">
                <CardContent className="p-0">
                  <p className="text-xl italic mb-8 text-black leading-relaxed">
                    "Dra. Jayne além de cuidar de mim de forma tão delicada e responsável e manter-me sempre linda, é
                    extremamente estudiosa, dedicada, atualizada e sabe entregar aos seus pacientes o melhor sem
                    enveredar-se nos modismos, mas sempre buscando o melhor para cada paciente."
                  </p>
                  <div>
                    <p className="font-semibold text-black text-lg">Maria Silva</p>
                    <p className="text-red-400">@mariasilva</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-10 shadow-lg border-red-100 rounded-2xl">
                <CardContent className="p-0">
                  <p className="text-xl italic mb-8 text-black leading-relaxed">
                    "Você é maravilhosa! Eu sou uma pessoa antes e depois de conhecer você. Todas 50+ merecem seus
                    tratamentos."
                  </p>
                  <div>
                    <p className="font-semibold text-black text-lg">Ana Costa</p>
                    <p className="text-red-400">@anacosta</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-10 shadow-lg border-red-100 rounded-2xl">
                <CardContent className="p-0">
                  <p className="text-xl italic mb-8 text-black leading-relaxed">
                    "Espaço maravilhoso, super indico a Dra. Jayne, a melhor Dermato que já fui até hoje!! Adorooooo"
                  </p>
                  <div>
                    <p className="font-semibold text-black text-lg">Carla Santos</p>
                    <p className="text-red-400">@carlasantos</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section id="office" className="py-24 bg-white border-t border-red-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-8 text-red-600" data-aos="fade-right" data-aos-duration="2000">
                INSTITUTO HORMONE
              </h2>
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Interior do consultório"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>

            <div className="space-y-10">
              <div data-aos="fade-left" data-aos-duration="2000">
                <h3 className="text-3xl font-light mb-6 text-red-600">Endereço</h3>
                <p className="text-xl text-black leading-relaxed">
                  Instituto Hormone - Clínica Especializada
                  <br />
                  Rua Nestor de Barros, 116 Conj 194
                  <br />
                  Vila Regente Feijó, São Paulo
                </p>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000">
                <h3 className="text-3xl font-light mb-6 text-red-600">contato</h3>
                <p className="text-xl text-black">(11) 98694-4662</p>
                <Button className="mt-4 bg-red-600 text-white hover:bg-red-700" onClick={handleWhatsAppClick}>
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>

              {/* Imagem de Wrinkle Types */}
              <div className="mt-8">
                <Image
                  src="/images/wrinkle-types.jpeg"
                  alt="Qual ruga te incomoda mais?"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="contact" className="py-24 bg-white border-t border-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
            <h2 className="text-4xl font-light mb-8 text-red-600">Acompanhe</h2>
            <Button
              variant="outline"
              size="lg"
              onClick={handleInstagramClick}
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent text-xl px-8 py-4"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @dra.jaynemaiaa
            </Button>
          </div>

          {/* Todas as imagens do Instagram removidas daqui */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="logo-jm mx-auto mb-12 bg-white text-red-600"></div>
          </div>

          <div className="border-t border-red-500 pt-12">
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-red-200 text-lg">
                home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-red-200 text-lg">
                sobre
              </button>
              <button onClick={() => scrollToSection("treatments")} className="text-white hover:text-red-200 text-lg">
                tratamentos
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-red-200 text-lg">
                contato
              </button>
              <button onClick={handleWhatsAppClick} className="text-white hover:text-red-200 text-lg">
                agendar
              </button>
            </div>

            <div className="border-t border-red-500 pt-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div>
                  <p className="text-red-100">
                    © Dra Jayne Montoro - CRM: 150418/RQE 69328 - 2025. Todos os direitos reservados.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-red-200 mb-2">Desenvolvido por</p>
                  <p className="font-semibold text-white text-lg">Dandara Silva</p>
                </div>

                <div className="flex justify-center md:justify-end gap-6">
                  <button onClick={handleInstagramClick}>
                    <Instagram className="w-7 h-7 text-red-200 hover:text-white cursor-pointer transition-colors" />
                  </button>
                  <Linkedin className="w-7 h-7 text-red-200 hover:text-white cursor-pointer transition-colors" />
                  <Facebook className="w-7 h-7 text-red-200 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-xl"
          onClick={handleWhatsAppClick}
        >
          <Phone className="w-7 h-7" />
        </Button>
      </div>
    </div>
  )
}
