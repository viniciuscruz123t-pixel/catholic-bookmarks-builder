import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen, Users, Heart, Gift, Check, X, Shield, Star, Zap, Lock,
  Printer, Scissors, BookMarked, ChevronDown, Bookmark, Sparkles,
} from "lucide-react";
import heroBundle from "@/assets/mc/hero-bundle.png";
import steps from "@/assets/mc/steps.png";
import pageMaria from "@/assets/mc/page-maria.png";
import pageJesus from "@/assets/mc/page-jesus.png";
import pageCristo from "@/assets/mc/page-cristo.png";
import pageAnjos from "@/assets/mc/page-anjos.png";
import capa150 from "@/assets/mc/capa-150.png";
import bonusImpressao from "@/assets/mc/bonus-impressao.png";
import bonusCriancas from "@/assets/mc/bonus-criancas.png";
import bonusSalmos from "@/assets/mc/bonus-salmos.jpg";
import bonusPlaylist from "@/assets/mc/bonus-playlist.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <TopBar />
      <Hero />
      <Testimonials />
      <StepsSection />
      <FeitoPara />
      <Galeria />
      <Categorias />
      <TudoReceber />
      <Ofertas />
      <Garantia />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ============ TOP BAR ============ */
function TopBar() {
  const [time, setTime] = useState({ h: 14, m: 15, s: 7 });
  useEffect(() => {
    const i = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const today = new Date();
  const date = `${pad(today.getDate())}/${pad(today.getMonth() + 1)}/${today.getFullYear()}`;
  return (
    <div
      className="w-full text-primary-foreground text-sm py-2 px-4 text-center flex items-center justify-center gap-3 flex-wrap"
      style={{ background: "var(--gradient-navy)" }}
    >
      <span className="font-semibold flex items-center gap-1">
        <Zap className="w-4 h-4 text-[color:var(--brand-gold)]" />
        Oferta especial somente hoje {date}
      </span>
      <span className="opacity-60">•</span>
      <span>Encerra em <span className="font-mono font-bold text-[color:var(--brand-gold)]">{pad(time.h)}:{pad(time.m)}:{pad(time.s)}</span></span>
    </div>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="px-4 pt-10 pb-16 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-gold)]/40 bg-white/60 px-4 py-1.5 text-sm text-[color:var(--brand-navy)] mb-6">
          <Sparkles className="w-4 h-4 text-[color:var(--brand-gold-deep)]" />
          Coleção Premium • 150 modelos exclusivos
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[color:var(--brand-navy)] leading-tight">
          150 Marcadores Católicos de Páginas{" "}
          <span className="text-[color:var(--brand-gold-deep)] italic">prontos para imprimir</span>
        </h1>
        <p className="mt-6 text-lg text-[color:var(--brand-navy)]/80 max-w-xl mx-auto">
          Marcadores premium de <strong>5 x 15 cm</strong> com Maria, Jesus, santos, anjos e versículos — ideais para Bíblia, missal, livros e devocionais. <strong>Plano Premium leva +16 marcadores bônus.</strong>
        </p>
        <div className="mt-10">
          <img src={heroBundle} alt="150 Marcadores Católicos — mockup" className="w-full rounded-2xl" style={{ boxShadow: "var(--shadow-card)" }} />
        </div>
        <div className="mt-10">
          <a href="#oferta" className="inline-block w-full max-w-md rounded-2xl px-8 py-5 text-lg font-bold text-[color:var(--brand-navy)] tracking-wide transition-transform hover:scale-[1.02]"
             style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}>
            QUERO MEUS MARCADORES
          </a>
          <p className="mt-4 text-sm text-[color:var(--brand-navy)]/70 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Compra 100% segura • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
const testimonials = [
  { init: "MA", color: "bg-rose-500", name: "Maria Aparecida", city: "Aparecida, SP", text: "Comprei para colocar na minha Bíblia e amei! As imagens são lindas, parecem santinhos antigos. Imprimi em papel fotográfico e ficou perfeito." },
  { init: "JP", color: "bg-blue-500", name: "João Pedro", city: "Belo Horizonte, MG", text: "Recebi na hora por e-mail. Já imprimi vários para presentear minha mãe e minha sogra. Elas choraram de emoção. Vale muito a pena!" },
  { init: "LF", color: "bg-fuchsia-500", name: "Luciana Ferreira", city: "Curitiba, PR", text: "Sou catequista e usei como lembrancinha na crisma da turma. As crianças adoraram! A qualidade da impressão é impressionante." },
  { init: "CE", color: "bg-teal-600", name: "Carlos Eduardo", city: "Recife, PE", text: "Mais de 150 modelos diferentes — tem para todo gosto. Maria, Jesus, santos, anjos, versículos… Uso um diferente em cada livro espiritual." },
  { init: "BS", color: "bg-amber-500", name: "Beatriz Souza", city: "Porto Alegre, RS", text: "Levei a super oferta. O guia de impressão me ajudou demais a acertar o papel e a gramatura. Os marcadores infantis foram um mimo lindo!" },
  { init: "RL", color: "bg-indigo-500", name: "Rafael Lima", city: "Salvador, BA", text: "Imprimi, plastifiquei e dei de presente aos meus padrinhos de casamento. Ficaram emocionados. Material lindo e barato pelo que entrega." },
];
function Testimonials() {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--brand-navy)]">Quem já imprimiu, recomenda</h2>
      <p className="text-center text-[color:var(--brand-navy)]/70 mt-3">Histórias reais de quem já está usando os marcadores na Bíblia e nos livros</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {testimonials.map((t) => (
          <div key={t.init} className="rounded-2xl bg-white p-6 border border-[color:var(--brand-navy)]/10" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex gap-1 text-[color:var(--brand-gold-deep)] mb-3">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-[color:var(--brand-navy)]/85 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[color:var(--brand-navy)]/5">
              <div className={`w-10 h-10 rounded-full ${t.color} text-white flex items-center justify-center font-semibold text-sm`}>{t.init}</div>
              <div>
                <div className="font-semibold text-[color:var(--brand-navy)]">{t.name}</div>
                <div className="text-xs text-[color:var(--brand-navy)]/60">{t.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ STEPS ============ */
function StepsSection() {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-navy)]">Veja como é simples usar seus marcadores</h2>
      <p className="text-[color:var(--brand-navy)]/70 mt-3 max-w-2xl mx-auto">Imprima, recorte e utilize. Em 3 passos seus marcadores estão prontos para acompanhar sua oração diária.</p>
      <img src={steps} alt="3 passos: imprima, recorte e utilize" className="w-full max-w-3xl mx-auto mt-10 rounded-2xl" style={{ boxShadow: "var(--shadow-card)" }} />
    </section>
  );
}

/* ============ FEITO PARA ============ */
const feitoItems = [
  { icon: BookOpen, title: "Para sua Bíblia", text: "Marque versículos e capítulos com beleza e devoção em cada leitura." },
  { icon: Users, title: "Para catequistas", text: "Use como lembrancinha em crismas, primeiras comunhões e encontros." },
  { icon: Heart, title: "Para presentear", text: "Padrinhos, madrinhas, mães e amigos — um presente de fé que emociona." },
  { icon: Gift, title: "Para sua paróquia", text: "Distribua marcadores lindos em retiros, missas e grupos de oração." },
];
function FeitoPara() {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--brand-navy)]">Feito para quem ama a fé católica</h2>
      <p className="text-center text-[color:var(--brand-navy)]/70 mt-3">Um material pensado para acompanhar sua jornada espiritual todos os dias.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {feitoItems.map((it) => (
          <div key={it.title} className="rounded-2xl bg-white p-6 border border-[color:var(--brand-navy)]/10" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "oklch(0.95 0.08 85)" }}>
              <it.icon className="w-6 h-6 text-[color:var(--brand-gold-deep)]" />
            </div>
            <h3 className="font-bold text-[color:var(--brand-navy)] text-lg">{it.title}</h3>
            <p className="text-sm text-[color:var(--brand-navy)]/70 mt-2 leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ GALERIA ============ */
function Galeria() {
  const imgs = [
    { src: pageMaria, alt: "Marcadores de Nossa Senhora e devoções marianas" },
    { src: pageJesus, alt: "Marcadores do Sagrado Coração de Jesus" },
    { src: pageCristo, alt: "Marcadores de Cristo Redentor, Bom Pastor e Luz do Mundo" },
    { src: pageAnjos, alt: "Marcadores de São Miguel, Gabriel, Rafael e Anjo da Guarda" },
  ];
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--brand-navy)]">Veja a beleza de cada marcador</h2>
      <p className="text-center text-[color:var(--brand-navy)]/70 mt-3 max-w-2xl mx-auto">Ilustrações premium, cores vibrantes e detalhes em dourado. Cada marcador é uma verdadeira obra de arte sacra para acompanhar sua leitura.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {imgs.map((i) => (
          <img key={i.alt} src={i.src} alt={i.alt} className="w-full rounded-2xl" style={{ boxShadow: "var(--shadow-card)" }} />
        ))}
      </div>
    </section>
  );
}

/* ============ CATEGORIAS ============ */
const categorias = [
  ["Virgem Maria", 32], ["Jesus Cristo", 24], ["Santos", 32], ["Anjos e Arcanjos", 8],
  ["Versículos Bíblicos", 24], ["Frases dos Santos", 16], ["Ano Litúrgico", 8], ["Minimalista Premium", 6],
] as const;
function Categorias() {
  return (
    <section className="px-4 py-16 text-primary-foreground" style={{ background: "var(--gradient-navy)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-[color:var(--brand-gold)]">150 marcadores</span> divididos em 8 categorias devocionais
        </h2>
        <p className="mt-3 opacity-80">Uma coleção completa para acompanhar toda a sua vida de oração.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {categorias.map(([name, n]) => (
            <div key={name} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-5 py-4">
              <span className="font-medium">{name}</span>
              <span className="w-9 h-9 rounded-full bg-[color:var(--brand-gold)] text-[color:var(--brand-navy)] font-bold flex items-center justify-center text-sm">{n}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl bg-white/5 border border-white/10 py-4 px-6">
          <span className="font-mono font-bold text-[color:var(--brand-gold)]">TOTAL: 150 marcadores</span>
          <span className="opacity-90"> — prontos para imprimir, recortar e utilizar.</span>
        </div>
      </div>
    </section>
  );
}

/* ============ TUDO RECEBER ============ */
function TudoReceber() {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--brand-navy)]">Tudo o que você vai receber</h2>
      <p className="text-center text-[color:var(--brand-navy)]/70 mt-3">150 marcadores premium em alta qualidade + bônus exclusivos para imprimir, presentear e viver a fé todos os dias.</p>

      {/* Produto principal */}
      <div className="mt-10 rounded-2xl bg-white p-6 md:p-8 border border-[color:var(--brand-navy)]/10 flex flex-col md:flex-row gap-6 items-center" style={{ boxShadow: "var(--shadow-card)" }}>
        <img src={capa150} alt="150 Marcadores Católicos" className="w-56 rounded-xl" />
        <div className="flex-1">
          <div className="text-xs font-mono uppercase tracking-widest text-[color:var(--brand-gold-deep)]">Produto principal</div>
          <h3 className="text-2xl font-bold text-[color:var(--brand-navy)] mt-1">150 Marcadores Católicos para Imprimir</h3>
          <p className="text-[color:var(--brand-navy)]/70 mt-2">Coleção premium com 150 marcadores ilustrados (5 x 15 cm), em arquivo digital pronto para baixar, imprimir e utilizar onde quiser.</p>
          <ul className="mt-4 space-y-2">
            {["150 modelos exclusivos em alta resolução","Tamanho ideal 5x15 cm — perfeito para Bíblia e livros","Maria, Jesus, santos, anjos, versículos e mais","Arquivo digital — acesso imediato no e-mail","Imprima quantas vezes quiser"].map((li) => (
              <li key={li} className="flex gap-2 items-start text-sm text-[color:var(--brand-navy)]/85"><Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />{li}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bônus */}
      <div className="text-center mt-14">
        <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--brand-gold-deep)]">4 bônus exclusivos <span className="text-[color:var(--brand-navy)]">na Super Oferta</span></h3>
        <p className="text-[color:var(--brand-navy)]/70 mt-2">2 bônus normais + <strong className="font-mono">2 bônus super premium</strong></p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {[
          { img: bonusImpressao, n: "Bônus 01", t: "Guia de Impressão Perfeita", d: "O passo a passo completo para imprimir seus marcadores com qualidade profissional: papel recomendado, gramatura ideal, plastificação, como recortar e dicas extras de cuidados." },
          { img: bonusCriancas, n: "Bônus 02", t: "16 Marcadores Infantis — Histórias Bíblicas", d: "16 marcadores especiais para crianças com ilustrações fofas e versículos das principais histórias da Bíblia: Arca de Noé, multiplicação dos pães, nascimento de Jesus e muito mais." },
        ].map((b) => (
          <div key={b.n} className="rounded-2xl bg-white overflow-hidden border border-[color:var(--brand-navy)]/10" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={b.img} alt={b.t} className="w-full aspect-square object-cover" />
            <div className="p-6">
              <div className="text-xs font-mono text-[color:var(--brand-gold-deep)]">🎁 {b.n}</div>
              <h4 className="font-bold text-[color:var(--brand-navy)] text-lg mt-1">{b.t}</h4>
              <p className="text-sm text-[color:var(--brand-navy)]/70 mt-2">{b.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-mono text-[color:var(--brand-gold-deep)] border border-[color:var(--brand-gold)]/40 bg-white/60">+ 2 BÔNUS SUPER PREMIUM</span>
      </div>

      {[
        { img: bonusSalmos, n: "Bônus 03", tag: "Bônus Premium • +700 páginas", t: "150 Salmos Explicados Verso a Verso", d: "Mais de 700 páginas explicando, verso a verso, todos os 150 Salmos da Bíblia — em linguagem simples, didática e profunda. Perfeito para complementar seus marcadores e mergulhar na Palavra de Deus.", bullets: ["Mais de 700 páginas de conteúdo exclusivo","Explicação verso por verso dos 150 Salmos","Linguagem simples, fácil e didática","Um verdadeiro best-seller — seu de graça como bônus"] },
        { img: bonusPlaylist, n: "Bônus 04", tag: "Bônus Premium • +15 horas de música", t: "Playlist com +100 Músicas Marianas e Católicas", d: "Uma seleção cuidadosa de mais de 100 músicas que tocam a alma — para rezar nos momentos difíceis, encontrar paz no meio do caos e sentir o abraço de Maria todos os dias.", bullets: ["Mais de 100 músicas selecionadas com amor","Mais de 15 horas de louvor e adoração","Perfeita para oração, terço, missa e meditação","Ouça onde e quando quiser — celular, tablet ou PC"] },
      ].map((b) => (
        <div key={b.n} className="mt-8 rounded-2xl bg-white border-2 border-[color:var(--brand-gold)]/40 overflow-hidden flex flex-col md:flex-row" style={{ boxShadow: "var(--shadow-card)" }}>
          <img src={b.img} alt={b.t} className="w-full md:w-80 object-cover" />
          <div className="p-6 md:p-8 flex-1 relative">
            <span className="absolute top-4 right-4 rounded-full bg-[color:var(--brand-navy)] text-primary-foreground text-xs font-mono px-3 py-1">🎁 {b.n}</span>
            <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[color:var(--brand-gold)]/15 text-[color:var(--brand-gold-deep)]">✦ {b.tag}</span>
            <h4 className="text-xl font-bold text-[color:var(--brand-navy)] mt-3">{b.t}</h4>
            <p className="text-sm text-[color:var(--brand-navy)]/70 mt-2">{b.d}</p>
            <ul className="mt-4 space-y-1.5">
              {b.bullets.map((li) => (
                <li key={li} className="flex gap-2 items-start text-sm text-[color:var(--brand-navy)]/85"><Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />{li}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-[color:var(--brand-gold)]/10 border border-[color:var(--brand-gold)]/30 px-4 py-3 flex items-center gap-3">
              <span className="line-through text-[color:var(--brand-navy)]/60 text-sm">De R$ 97,00</span>
              <span className="font-bold text-[color:var(--brand-gold-deep)]">GRÁTIS PARA VOCÊ</span>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-10 text-center">
        <a href="#oferta" className="inline-block rounded-2xl px-8 py-4 font-bold text-[color:var(--brand-navy)]"
           style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}>Ver minha oferta agora</a>
      </div>
    </section>
  );
}

/* ============ OFERTAS ============ */
function Ofertas() {
  return (
    <section id="oferta" className="px-4 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--brand-navy)]">Escolha sua oferta</h2>

      {/* Basic */}
      <div className="mt-10 rounded-2xl bg-white border border-[color:var(--brand-navy)]/10 overflow-hidden max-w-lg mx-auto" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="bg-[color:var(--brand-navy)]/5 text-center py-3 text-xs font-mono tracking-widest text-[color:var(--brand-navy)]/70">OFERTA BÁSICA</div>
        <div className="p-6">
          <img src={capa150} alt="150 Marcadores" className="w-48 mx-auto" />
          <h3 className="text-2xl font-bold text-center text-[color:var(--brand-navy)] mt-4">150 Marcadores Católicos</h3>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />150 marcadores premium prontos para imprimir</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />Tamanho 5x15 cm — ideal para Bíblia e livros</li>
            <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />Arquivo digital — acesso imediato por 6 meses</li>
            {["Bônus 1 — Guia de Impressão Perfeita","Bônus 2 — 16 Marcadores Infantis","Bônus 3 — 150 Salmos Explicados (+700 págs)","Bônus 4 — Playlist com +100 músicas marianas"].map((li) => (
              <li key={li} className="flex gap-2 text-[color:var(--brand-navy)]/40 line-through"><X className="w-4 h-4 shrink-0 mt-0.5" />{li}</li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <div className="text-sm text-[color:var(--brand-navy)]/60 line-through">De R$ 67,00</div>
            <div className="text-4xl font-bold text-[color:var(--brand-navy)]">R$ 27,90</div>
          </div>
          <a href="https://pay.kiwify.com.br/kRHYBK9" className="mt-5 block text-center rounded-xl border-2 border-[color:var(--brand-navy)] text-[color:var(--brand-navy)] font-bold py-3 hover:bg-[color:var(--brand-navy)] hover:text-primary-foreground transition-colors">Quero a oferta básica</a>
        </div>
        <div className="bg-[color:var(--brand-gold)]/10 border-t border-[color:var(--brand-gold)]/30 px-6 py-4 text-center text-sm text-[color:var(--brand-navy)]">
          ⚠️ Ainda dá tempo de levar a melhor opção abaixo!
          <div className="mt-1"><strong>95% das pessoas</strong> escolhem a Super Oferta — leve os 4 bônus por apenas R$ 10 a mais.</div>
          <ChevronDown className="w-5 h-5 mx-auto mt-2 text-[color:var(--brand-gold-deep)]" />
        </div>
      </div>

      {/* Super */}
      <div className="mt-8 rounded-2xl overflow-hidden border-2 border-[color:var(--brand-gold)] max-w-2xl mx-auto bg-white" style={{ boxShadow: "0 20px 60px -10px oklch(0.68 0.15 70 / 0.4)" }}>
        <div className="text-center py-3 font-bold text-[color:var(--brand-navy)]" style={{ background: "var(--gradient-cta)" }}>
          ⭐ SUPER OFERTA — MAIS ESCOLHIDA
        </div>
        <div className="p-6 md:p-8">
          <img src={heroBundle} alt="150 Marcadores + 4 bônus" className="w-full rounded-xl" />
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[color:var(--brand-navy)] mt-6">150 Marcadores Católicos + 4 Bônus</h3>

          <div className="mt-5 rounded-xl border border-[color:var(--brand-gold)]/40 bg-[color:var(--brand-gold)]/5 p-4">
            <div className="text-center text-xs font-mono text-[color:var(--brand-gold-deep)] mb-3">✦ 2 BÔNUS PREMIUM INCLUSOS</div>
            {[
              { img: bonusSalmos, n: "Bônus 03", t: "150 Salmos Explicados Verso a Verso", d: "+700 páginas — verso por verso" },
              { img: bonusPlaylist, n: "Bônus 04", t: "+100 Músicas Marianas e Católicas", d: "+15 horas para rezar e meditar" },
            ].map((b, i) => (
              <div key={b.n} className={`flex gap-3 items-center ${i ? "mt-3 pt-3 border-t border-[color:var(--brand-gold)]/20" : ""}`}>
                <img src={b.img} alt={b.t} className="w-14 h-14 rounded-lg object-cover" />
                <div>
                  <div className="text-[10px] font-mono text-[color:var(--brand-gold-deep)]">🎁 {b.n}</div>
                  <div className="font-semibold text-[color:var(--brand-navy)] text-sm">{b.t}</div>
                  <div className="text-xs text-[color:var(--brand-navy)]/60">{b.d}</div>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-5 space-y-2 text-sm">
            {["150 marcadores principais (5x15 cm)","🎁 Bônus 1 — Guia de Impressão Perfeita","🎁 Bônus 2 — 16 Marcadores Infantis","🎁 Bônus 3 — 150 Salmos Explicados (+700 págs)","🎁 Bônus 4 — Playlist com +100 músicas marianas","Acesso imediato por 6 meses"].map((li) => (
              <li key={li} className="flex gap-2 items-start"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />{li}</li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <div className="text-sm text-[color:var(--brand-navy)]/60 line-through">De R$ 167,00</div>
            <div className="text-5xl font-bold text-[color:var(--brand-navy)]">R$ 37,90</div>
            <div className="text-xs text-[color:var(--brand-navy)]/70 mt-2">apenas R$ 10 a mais por <strong className="font-mono">+16 marcadores bônus + 3 bônus exclusivos</strong></div>
          </div>
          <a href="https://pay.kiwify.com.br/8syr8lJ" className="mt-6 block text-center rounded-xl py-4 font-bold text-primary-foreground text-lg"
             style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.42 0.16 255))", boxShadow: "0 10px 30px -5px oklch(0.42 0.16 255 / 0.5)" }}>
            QUERO A SUPER OFERTA
          </a>
          <p className="mt-3 text-center text-sm text-[color:var(--brand-navy)]/70 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Pagamento 100% seguro
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============ GARANTIA ============ */
function Garantia() {
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto">
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
          <Shield className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--brand-navy)] mt-4">Garantia incondicional de 7 dias</h2>
        <p className="text-[color:var(--brand-navy)]/80 mt-3">Se nos próximos 7 dias você sentir que o material não é para você, basta nos enviar um e-mail e devolveremos <strong className="font-mono">100% do seu investimento</strong> — sem perguntas, sem burocracia.</p>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
const faqs = [
  { q: "Como vou receber os marcadores?", a: "Após a confirmação do pagamento, você recebe o acesso imediato no seu e-mail. O material é 100% digital (PDF), pronto para baixar e imprimir quantas vezes quiser, em qualquer impressora." },
  { q: "Qual o tamanho de cada marcador?", a: "Cada marcador tem 5 x 15 cm — o tamanho ideal para Bíblia, missal e livros." },
  { q: "Que tipo de papel devo usar para imprimir?", a: "Recomendamos papel fotográfico ou couché a partir de 180g. O guia de impressão que acompanha o material explica em detalhes." },
  { q: "Posso imprimir várias vezes? E para presentear?", a: "Sim! Você pode imprimir quantas vezes quiser, para uso pessoal, para presentear a família ou distribuir na sua paróquia." },
  { q: "Funciona no celular? Preciso de computador?", a: "Você pode baixar pelo celular ou computador. Para imprimir, basta encaminhar os arquivos para qualquer impressora ou gráfica." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos 100% do valor." },
  { q: "O conteúdo é fiel ao Magistério da Igreja?", a: "Sim, todo o conteúdo é inspirado na tradição e devoção da Igreja Católica, com respeito ao Magistério." },
];
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--brand-navy)]">Perguntas frequentes</h2>
      <div className="mt-8 space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="rounded-xl bg-white border border-[color:var(--brand-navy)]/10 overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
              <span className="font-semibold text-[color:var(--brand-navy)]">{f.q}</span>
              <span className="text-[color:var(--brand-navy)]/60 text-xl">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-sm text-[color:var(--brand-navy)]/75">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
function FinalCTA() {
  return (
    <section className="px-4 py-16 text-primary-foreground text-center" style={{ background: "var(--gradient-navy)" }}>
      <div className="max-w-3xl mx-auto">
        <Bookmark className="w-10 h-10 mx-auto text-[color:var(--brand-gold)]" />
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Comece hoje a marcar sua fé com <span className="text-[color:var(--brand-gold)] italic">beleza e devoção</span>
        </h2>
        <p className="mt-4 opacity-85">Acesso imediato. Garantia de 7 dias. 150 marcadores premium na sua Bíblia ainda hoje.</p>
        <a href="#oferta" className="mt-8 inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-bold text-[color:var(--brand-navy)]"
           style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}>
          <Printer className="w-5 h-5" /> QUERO MEUS MARCADORES
        </a>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="px-4 py-8 text-center text-xs text-[color:var(--brand-navy)]/70">
      <p>© {new Date().getFullYear()} Editora GPR. Todos os direitos reservados.</p>
      <p className="mt-2 max-w-2xl mx-auto">Este produto não é afiliado oficialmente a nenhuma instituição eclesiástica. Conteúdo inspirado na tradição e devoção da Igreja Católica.</p>
    </footer>
  );
}
