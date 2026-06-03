import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

import heroParis from "@/assets/hero-paris.jpg";
import heroParisVideo from "@/assets/hero-paris-v3.mp4.asset.json";
import founderEli from "@/assets/founder-eli.jpg";
import parisClassic from "@/assets/paris-classic.jpg";
import maraisMontmartre from "@/assets/marais-montmartre.jpg";
import lutecia from "@/assets/lutecia.jpg";
import parisArtistique from "@/assets/paris-artistique.jpg";
import parisShopping from "@/assets/paris-shopping.jpg";
import feVinho from "@/assets/fe-vinho.jpg";

import parisCafe from "@/assets/paris-cafe.jpg";
import slide1 from "@/assets/IMG_8888_1.jpg.asset.json";
import slide2 from "@/assets/IMG_9475_1.jpg.asset.json";
import slide3 from "@/assets/IMG_0699_1.jpg.asset.json";
import slide4 from "@/assets/IMG_1438_1.jpg.asset.json";
import slide5 from "@/assets/IMG_8508_1.jpg.asset.json";
import slide6 from "@/assets/IMG_1511_1.jpg.asset.json";
import { PhotoSlideshow } from "@/components/PhotoSlideshow";

import guiaOrganizar from "@/assets/guia-organizar.png.asset.json";
import guiaMetro from "@/assets/guia-metro.png.asset.json";
import guiaArte from "@/assets/guia-arte.png.asset.json";
import guiaRoteiro from "@/assets/guia-roteiro.png.asset.json";
import guiaHospedagem from "@/assets/guia-hospedagem.png.asset.json";

const guias = [
  { src: guiaOrganizar.url, title: "Como Organizar Minha Viagem a Paris", desc: "Burocracia e cuidados para uma viagem inesquecível e econômica." },
  { src: guiaMetro.url, title: "Paris em Trilhos", desc: "Domine o transporte público em Paris com segurança." },
  { src: guiaRoteiro.url, title: "Paris dos Sonhos", desc: "O método para criar o seu roteiro perfeito em Paris." },
  { src: guiaArte.url, title: "Paris dos Pincéis", desc: "O essencial da arte e dos museus Louvre e Orsay, para iniciantes." },
  { src: guiaHospedagem.url, title: "Hotéis Econômicos", desc: "Se hospede em Paris com segurança, boa localização e sem gastar uma fortuna." },
];

const porQueSlides = [
  { src: slide1.url, alt: "Momento de viagem em Paris" },
  { src: slide2.url, alt: "Momento de viagem em Paris" },
  { src: slide3.url, alt: "Momento de viagem em Paris" },
  { src: slide4.url, alt: "Momento de viagem em Paris" },
  { src: slide5.url, alt: "Momento de viagem em Paris" },
  { src: slide6.url, alt: "Momento de viagem em Paris" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viagem Real — Paris não se visita. Paris se vive." },
      {
        name: "description",
        content:
          "Curadoria de experiências sob medida em Paris e na França. Roteiros, guiamento e assessoria com atendimento em português, segurança e sofisticação.",
      },
      { property: "og:title", content: "Viagem Real — Curadoria de experiências em Paris" },
      {
        property: "og:description",
        content:
          "Viva Paris com leveza, segurança e presença. Experiências sob medida desenhadas por Eli, brasileira em Paris desde 2012.",
      },
      { property: "og:image", content: heroParis },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const services = [
  {
    name: "Guia Signature",
    tagline: "Paris conduzida com precisão e leveza",
    body:
      "Para quem deseja viver Paris com tudo previamente organizado, sem preocupação durante a viagem. Roteiro sob medida, reservas estratégicas, curadoria de experiências, acompanhamento presencial de até 8h por dia e suporte contínuo.",
  },
  {
    name: "Personal Guia + Consultoria",
    tagline: "Autonomia com segurança em Paris",
    body:
      "Para quem deseja se sentir confiante na cidade, mesmo viajando sozinha ou pela primeira vez. Você aprende a se orientar na cidade luz com segurança: transporte público, máquinas de autoatendimento, caixas eletrônicos, banheiros públicos e dinâmicas essenciais do dia a dia.",
  },
  {
    name: "Assessoria",
    tagline: "Planejamento completo da sua viagem",
    body:
      "Para quem quer chegar com tudo estruturado e organizado antes da viagem. Inclui: roteiro sob medida, reuniões online de planejamento, curadoria e organização de reservas (atrações, TGV, hotéis e restaurantes), orientação prática sobre o metrô de Paris e suporte durante toda a sua experiência em Paris.",
  },
  {
    name: "Roteiro sob medida",
    tagline: "Seus passeios organizados de forma inteligente",
    body:
      "Roteiro personalizado em PDF (clicável), com percursos otimizados, sugestões alinhadas ao seu estilo de viagem, curadoria de restaurantes, orientações de deslocamento e recomendações para viver Paris com mais leveza e segurança.",
  },
  {
    name: "Outras experiências",
    tagline: "Complementos que elevam sua viagem",
    body: "Transfer, ensaio fotográfico, piquenique personalizado e assistência infantil, tudo pensado para tornar sua experiência ainda mais fluida e especial.",
  },
];

const curations = [
  {
    title: "Paris Classic",
    description: "Torre Eiffel e Arco do Triunfo - \nÍcones de Paris em uma experiência clássica, elegante e inesquecível.",
    image: parisClassic,
  },
  {
    title: "Marais & Montmartre",
    description: "Uma experiência entre a alma artística de Montmartre e o espírito vibrante do Marais.",
    image: maraisMontmartre,
  },
  {
    title: "Lutécia & Paris",
    description: "O coração histórico de Paris em uma vivência entre cultura, alma e autenticidade.",
    image: lutecia,
  },
  {
    title: "Paris Artistique",
    description: "A essência da arte e da elegância no coração cultural de Paris.",
    image: parisArtistique,
  },
  {
    title: "Paris Shopping",
    description: "Uma experiência onde Paris é vivida através do estilo, da elegância e do prazer de escolher com calma.",
    image: parisShopping,
  },
  {
    title: "Fé e Vinho",
    description: "Uma experiência entre fé, tradição e os sabores autênticos da cultura francesa.",
    image: feVinho,
  },
];

const trust = [
  { label: "Experiência local desde 2012" },
  { label: "ATENDIMENTO EM PORTUGUÊS, FRANCÊS E ESPANHOL" },
  { label: "Curadoria sob medida" },
  { label: "Suporte durante a viagem" },
  { label: "RESERVAS E ORGANIZAÇÃO ANTECIPADA" },
  { label: "Segurança e conforto" },
];

const whyUs = [
  "Curadoria personalizada",
  "Orientação local em português",
  "Conforto e segurança nos deslocamentos",
  
  "Reservas e experiências organizadas com antecedência",
  "Roteiros alinhados ao seu perfil",
  "Suporte durante a estadia",
];

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden [&>section+section]:mt-[30px]">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <span className="font-serif text-[color:var(--cream)] tracking-[0.3em] uppercase text-sm">
            Viagem Real
          </span>
          <nav className="hidden md:flex items-center gap-10 text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--cream)]">
            <a href="#sobre" className="hover:text-[color:var(--gold)] transition-colors">Sobre</a>
            <a href="#experiencias" className="hover:text-[color:var(--gold)] transition-colors">Experiências</a>
            <a href="#curadoria" className="hover:text-[color:var(--gold)] transition-colors">Curadoria</a>
            <a href="#contato" className="hover:text-[color:var(--gold)] transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center">
        <video
          src={heroParisVideo.url}
          poster={heroParis}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy)]/70 via-[color:var(--navy)]/45 to-[color:var(--navy)]/85" />
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in -mt-16">
          <div className="flex justify-center mb-0 animate-fade-up">
            <Logo size={180} className="brightness-110 drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]" />
          </div>
          <p className="eyebrow text-[color:var(--gold-soft)] mb-6 animate-fade-up -mt-4">CURADORIA DE EXPERIÊNCIAS · FRANÇA</p>
          <h1 className="font-serif text-[color:var(--cream)] text-5xl md:text-7xl leading-[1.02] tracking-tight animate-fade-up">
            Paris não se visita.
            <br />
            <span className="italic text-[color:var(--gold-soft)]">Paris se vive.</span>
          </h1>
          <p className="mt-8 text-[color:var(--champagne)] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed animate-fade-up">
            Experiências sob medida na França para quem deseja viajar com leveza, segurança e propósito.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <CTAButton size="lg">Quero planejar minha experiência em Paris</CTAButton>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[color:var(--cream)]/70 text-[0.65rem] tracking-[0.4em] uppercase">
          Role para descobrir
        </div>
      </section>


      {/* POR QUE */}
      <section className="relative px-6 py-[30px] bg-cream mt-[30px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative">
            <PhotoSlideshow
              images={porQueSlides}
              intervalMs={4000}
              className="w-full h-[520px] rounded-2xl shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden md:block" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Por que Viagem Real"
              title="Viajar com presença, não com pressa."
              align="left"
            />
            <p className="mt-8 text-[color:var(--navy)]/80 font-light text-base md:text-lg leading-relaxed">
              Criamos experiências alinhadas ao seu ritmo, estilo e momento de vida, para que você viva Paris com tranquilidade e aproveite aquilo que realmente importa.
            </p>
            <ul className="mt-10 space-y-5">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="mt-2 w-6 h-px bg-gold transition-all duration-500 group-hover:w-10" />
                  <span className="text-base text-[color:var(--navy)]/85 font-light leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <CTAButton variant="outline">Planejar minha viagem</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEITO ERA */}
      <section className="relative px-6 py-[60px] overflow-hidden mt-[30px]">
        <img
          src={heroParis}
          alt="Paris ao entardecer"
          width={1920}
          height={1280}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--navy)]/85" />
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full bg-[color:var(--gold)] blur-3xl" />
          <div className="absolute -bottom-32 -right-10 w-[520px] h-[520px] rounded-full bg-[color:var(--gold-soft)] blur-3xl" />
        </div>
        <div className="absolute top-10 right-10 font-serif italic text-[color:var(--gold)]/10 text-[14rem] leading-none select-none hidden md:block">
          ERA
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-[color:var(--gold-soft)] mb-5">Nosso Conceito</p>
            <h2 className="font-serif text-[color:var(--cream)] text-4xl md:text-6xl leading-[1.05]">
              ERA — <em className="text-[color:var(--gold-soft)] not-italic">Encontro Real de Alma</em>
            </h2>
            <span className="gold-divider mt-7 mb-8 inline-block" />
            <p className="text-[color:var(--champagne)] text-lg font-light leading-relaxed">
              A essência da Viagem Real nasce do que chamamos de ERA — três pilares que guiam
              cada experiência que desenhamos para você em Paris.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { letter: "E", title: "Experiência", desc: "Viver Paris de forma real e sensorial." },
              { letter: "R", title: "Recordação", desc: "Criar memórias que permanecem depois da viagem." },
              { letter: "A", title: "Alma / Afeto", desc: "Construir uma conexão emocional com a cidade." },
            ].map((p, i) => (
              <article
                key={p.letter}
                className="group relative bg-[color:var(--navy)]/50 backdrop-blur-sm border border-[color:var(--gold)]/25 rounded-xl p-6 md:p-7 overflow-hidden transition-all duration-700 hover:border-[color:var(--gold)]/60 hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="absolute -top-4 -right-1 font-serif italic text-[color:var(--gold)]/15 text-[6rem] leading-none transition-all duration-700 group-hover:text-[color:var(--gold)]/30 group-hover:-rotate-6">
                  {p.letter}
                </div>
                <div className="relative">
                  <p className="font-serif text-[color:var(--gold)] text-4xl md:text-5xl leading-none">
                    {p.letter}
                  </p>
                  <h3 className="mt-4 font-serif text-xl md:text-2xl text-[color:var(--cream)]">
                    {p.title}
                  </h3>
                  <span className="block w-6 h-px bg-gold mt-3 mb-3 transition-all duration-500 group-hover:w-12" />
                  <p className="text-[color:var(--champagne)]/90 font-light text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-14 text-center font-serif italic text-[color:var(--gold-soft)] text-2xl md:text-3xl">
            Nosso propósito é fazer você viver Paris.
          </p>
        </div>
      </section>


      {/* SOBRE ELI */}
      <section id="sobre" className="px-6 py-[30px] bg-background mt-[30px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={founderEli}
              alt="Eli, fundadora da Viagem Real"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-[600px] object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold hidden md:block" />
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow mb-5">A fundadora</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[color:var(--navy)] leading-tight">
              Eli — vivência local,
              <br />
              <em className="text-[color:var(--gold)] not-italic">cuidado brasileiro.</em>
            </h2>
            <span className="gold-divider mt-7 inline-block" />
            <div className="mt-8 space-y-5 text-[color:var(--navy)]/80 font-light text-base md:text-lg leading-relaxed">
              <p>
                Sou brasileira e vivo em Paris desde 2012. Com mais de 25 anos de atuação na hotelaria e
                formação em Turismo e Hotelaria de Luxo pela Université Paris-Est Marne-la-Vallée.
              </p>
              <p>
                Une vivência local, o cuidado brasileiro e uma visão inspirada na arte de viver bem à francesa — onde o tempo de qualidade e as experiências ganham significado.
                <br />
                <br />
                <br />
                Sua viagem começa antes mesmo de você chegar.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <div>
                <p className="font-serif text-2xl">14+</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">anos em Paris</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-serif text-2xl">25+</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">anos em hotelaria</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-serif text-2xl">PT | FR | ES</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">atendimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section id="experiencias" className="px-6 py-[30px] bg-sand mt-[30px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-20">
            <SectionHeading
              eyebrow="EXPERIÊNCIAS VIAGEM REAL"
              title="Escolha como deseja viver Paris"
              subtitle="Cada experiencia foi criada para atender diferentes momentos da viagem, da curadoria estratégica antes da chegada ao acompanhamento presencial em Paris, sempre com o mesmo propósito."
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <article
                key={s.name}
                className={`group relative bg-cream rounded-2xl p-10 md:p-12 border border-transparent hover:border-gold transition-all duration-700 shadow-soft hover:shadow-elegant ${
                  i === services.length - 1 ? "lg:col-span-1" : ""
                }`}
              >
                <p className="font-serif text-[color:var(--gold)] text-sm tracking-[0.35em] uppercase mb-6">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-3xl md:text-[2rem] text-[color:var(--navy)] leading-tight">
                  {s.name}
                </h3>
                <p className="mt-2 text-[color:var(--gold)] italic font-serif text-lg">{s.tagline}</p>
                <span className="gold-divider mt-6 mb-6 inline-block" />
                <p className="text-[color:var(--navy)]/75 font-light leading-relaxed">{s.body}</p>
                <div className="mt-8">
                  <CTAButton variant="outline">Saiba mais</CTAButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CURADORIA */}
      <section id="curadoria" className="px-6 py-[30px] bg-background mt-[30px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-20">
            <SectionHeading
              eyebrow="PARIS COM SIGNIFICADO"
              title="Experiências pensadas - não roteiros engessados."
              subtitle="Cada experiência é desenhada ao seu ritmo, aos seus interesses e ao tempo que você deseja viver em Paris — criando uma vivência única, leve e totalmente personalizada na cidade."
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {curations.map((c) => (
              <article key={c.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="font-serif text-2xl md:text-3xl text-[color:var(--cream)] leading-tight">
                      {c.title}
                    </h3>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-700">
                      <p className="text-[color:var(--champagne)] text-sm font-light mt-3 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                    <span className="block w-8 h-px bg-gold mt-4 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EMOCIONAL */}
      <section className="relative px-6 py-[30px] overflow-hidden mt-[30px]">
        <img
          src={parisCafe}
          alt="Café parisiense ao sol da manhã"
          width={1600}
          height={1024}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--navy)]/75" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="gold-divider mb-8 inline-block" />
          <h2 className="font-serif text-[color:var(--cream)] text-4xl md:text-6xl leading-[1.1]">
            Em Paris, o verdadeiro luxo é{" "}
            <em className="text-[color:var(--gold-soft)] not-italic">não precisar pensar em nada.</em>
          </h2>
          <p className="mt-8 text-[color:var(--champagne)] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Tudo pode ser organizado antes da sua chegada — para que você aproveite a cidade sem pressa, sem medo, sem dúvidas e sem desperdício de tempo. Apenas vivendo Paris.
          </p>
          <div className="mt-12">
            <CTAButton>Quero viver Paris com segurança</CTAButton>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="px-6 py-[30px] bg-cream mt-[30px]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {trust.map((t) => (
              <div
                key={t.label}
                className="bg-cream p-8 text-center flex items-center justify-center min-h-[140px]"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--navy)]/80 leading-relaxed">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-[30px] bg-background mt-[30px]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-20">
            <SectionHeading eyebrow="Como funciona" title="Três passos para a sua experiência em Paris." />
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {[
              { n: "01", t: "Conversa", d: "Você entra em contato pelo WhatsApp e iniciamos uma conversa sobre a sua viagem." },
              { n: "02", t: "Escuta", d: "Compreendemos o seu perfil e os desejos que tornam essa viagem única." },
              { n: "03", t: "Desenho", d: "Criamos sua experiência ideal — guiamento, roteiro, assessoria ou serviços complementares." },
            ].map((s) => (
              <div key={s.n} className="text-center md:text-left">
                <p className="font-serif text-[color:var(--gold)] text-5xl md:text-6xl leading-none">{s.n}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[color:var(--navy)] mt-5">{s.t}</h3>
                <span className="gold-divider mt-5 mb-5 inline-block" />
                <p className="text-[color:var(--navy)]/75 font-light leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <CTAButton>Falar com a Viagem Real</CTAButton>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative px-6 py-[30px] bg-navy overflow-hidden mt-[30px]">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroParis}
            alt=""
            aria-hidden
            width={1920}
            height={1280}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Contato</p>
          <h2 className="font-serif text-[color:var(--cream)] text-4xl md:text-6xl leading-[1.05]">
            Sua experiência em Paris
            <br />
            <em className="text-[color:var(--gold-soft)] not-italic">começa antes do embarque!</em>
          </h2>
          <p className="mt-8 text-[color:var(--champagne)] font-light text-lg leading-relaxed max-w-xl mx-auto">
            Conte para a Eli como você imagina os seus dias em Paris. Respondemos pessoalmente, com atenção a
            cada detalhe.
          </p>
          <div className="mt-12">
            <CTAButton size="lg">Conversar pelo WhatsApp</CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy border-t border-[color:var(--gold)]/20 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="flex md:justify-start justify-center">
            <Logo size={120} className="brightness-110" />
          </div>
          <p className="text-center font-serif italic text-[color:var(--gold-soft)] text-lg">
            Viagem Real, como toda <br /> viagem deve ser!
          </p>
          <div className="flex md:justify-end justify-center gap-8 text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--champagne)]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--gold)] transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--gold)] transition-colors">
              WhatsApp
            </a>
            <a href="mailto:contato@viagemreal.com" className="hover:text-[color:var(--gold)] transition-colors">
              E-mail
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[color:var(--cream)]/10 text-center text-[0.65rem] uppercase tracking-[0.3em] text-[color:var(--champagne)]/60">
          © {new Date().getFullYear()} Viagem Real · Paris · France
        </div>
      </footer>
    </main>
  );
}
