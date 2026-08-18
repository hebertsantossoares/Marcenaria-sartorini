"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import ThemeToggle from "./components/ThemeToggle";

// ============================================================
// DADOS DO PORTFÓLIO
// Cada projeto possui: nome, imagem e categoria.
// ============================================================

const projects = [
  [
    "Cozinha Sartorini",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "Cozinha",
  ],
  [
    "Suíte Contemporânea",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    "Dormitório",
  ],
  [
    "Closet Nogueira",
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    "Closet",
  ],
  [
    "Home Office",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
    "Office",
  ],
  [
    "Área Gourmet",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "Gourmet",
  ],
  [
    "Painel Living",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "Sala",
  ],
];

// ============================================================
// DADOS DOS SERVIÇOS
// Cada serviço possui: slug, nome e imagem.
// ============================================================

const services = [
  [
    "cozinhas",
    "Cozinhas Planejadas",
    "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "closets",
    "Closets",
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "dormitorios",
    "Dormitórios",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "home-office",
    "Home Office",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "areas-gourmet",
    "Áreas Gourmet",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "paineis-tv",
    "Painéis de TV",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "banheiros",
    "Banheiros",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "corporativo",
    "Corporativo",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  ],
];

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Home() {
  // Estados responsáveis pela interação da página:
  // navbar durante o scroll, menu mobile, FAQ aberto
  // e confirmação do envio do formulário.
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  // Detecta o scroll da página para adicionar a classe
  // "scrolled" à navbar quando o usuário passa de 40px.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Atualmente o formulário apenas exibe uma mensagem
  // de sucesso. Os dados ainda não são enviados para um backend.
  function quote(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      {/* ======================================================
          NAVBAR
          ====================================================== */}

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#inicio" className="logo">
            SARTORINI
            <span style={{ color: "var(--gold)" }}>.</span>
          </a>

          {/* Links da navegação */}
          <div className="nav-links">
            {[
              ["Início", "inicio"],
              ["Sobre", "sobre"],
              ["Serviços", "servicos"],
              ["Projetos", "projetos"],
              ["Depoimentos", "depoimentos"],
              ["Contato", "orcamento"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>

          {/* Botão principal da navbar */}
          <a className="btn btn-dark" href="#orcamento">
            Solicitar orçamento
            <ArrowRight size={16} />
          </a>

          <ThemeToggle />

          {/* Botão do menu mobile */}
          <button
            className="mobile"
            onClick={() => setMenu(!menu)}
            aria-label="Abrir menu"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ======================================================
          MENU MOBILE
          Só aparece quando "menu" é true.
          ====================================================== */}

      {menu && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 45,
            background: "#fff",
            padding: "100px 8%",
          }}
        >
          {[
            ["Início", "inicio"],
            ["Sobre", "sobre"],
            ["Serviços", "servicos"],
            ["Projetos", "projetos"],
            ["Depoimentos", "depoimentos"],
            ["Contato", "orcamento"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenu(false)}
              style={{
                display: "block",
                fontSize: 25,
                fontFamily: "Playfair Display",
                padding: "18px 0",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* ======================================================
          HERO
          ====================================================== */}

      <section id="inicio" className="hero">
        <div className="container">
          <span className="kicker">Marcenaria sob medida</span>

          <h1>
            Seu espaço.
            <br />
            Sua identidade.
          </h1>

          <p>
            Projetamos e produzimos móveis planejados que unem
            arquitetura, funcionalidade e acabamento impecável.
          </p>

          <div className="hero-actions">
            <a href="#orcamento" className="btn btn-light">
              Criar meu projeto
              <ArrowRight size={17} />
            </a>

            <a href="#projetos" className="btn btn-outline">
              Ver projetos
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          SOBRE A EMPRESA
          ====================================================== */}

      <section className="section" id="sobre">
        <div className="container">
          <div className="about-grid">
            <img
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85"
              style={{
                width: "100%",
                height: 550,
                objectFit: "cover",
                borderRadius: 24,
              }}
              alt="Interior planejado"
            />

            <div>
              <span className="kicker">Nossa essência</span>

              <h2
                style={{
                  fontSize: 52,
                  lineHeight: 1.05,
                  margin: "15px 0 25px",
                }}
              >
                A marcenaria como parte da arquitetura.
              </h2>

              <p
                style={{
                  lineHeight: 1.8,
                  color: "#666",
                  fontSize: 17,
                }}
              >
                Na Sartorini, cada ambiente nasce de uma conversa.
                Entendemos sua rotina, desenhamos soluções e
                transformamos medidas em espaços que fazem sentido
                para você.
              </p>

              {/* Diferenciais da empresa */}
              <div
                style={{
                  marginTop: 30,
                  display: "grid",
                  gap: 16,
                }}
              >
                {[
                  "Projetos personalizados",
                  "Materiais selecionados",
                  "Fabricação própria",
                  "Instalação especializada",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "center",
                    }}
                  >
                    <Check size={18} color="var(--gold)" />
                    <b>{item}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ESTATÍSTICAS
          ====================================================== */}

      <section
        style={{
          background: "var(--cream)",
          padding: "60px 0",
        }}
      >
        <div className="container stats">
          {[
            ["+200", "Projetos entregues"],
            ["+20", "Anos de experiência"],
            ["100%", "Clientes satisfeitos"],
            ["+5", "Cidades atendidas"],
          ].map(([number, label]) => (
            <div className="stat" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          SERVIÇOS
          ====================================================== */}

      <section className="section" id="servicos">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="kicker">Soluções</span>

              <h2
                style={{
                  fontSize: 52,
                  margin: "12px 0 0",
                }}
              >
                Feito para o seu ambiente.
              </h2>
            </div>

            <p
              style={{
                maxWidth: 400,
                color: "#666",
                lineHeight: 1.7,
              }}
            >
              Do primeiro desenho à instalação, cuidamos de cada
              detalhe para entregar um resultado único.
            </p>
          </div>

          {/* Os cards são criados automaticamente a partir
              do array "services". */}
          <div className="grid services">
            {services.map(([slug, name, image]) => (
              <div className="card" key={slug}>
                <img className="service-img" src={image} alt={name} />

                <div style={{ padding: 22 }}>
                  <h3
                    style={{
                      fontSize: 23,
                      margin: "0 0 10px",
                    }}
                  >
                    {name}
                  </h3>

                  <p
                    style={{
                      color: "#777",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    Projeto sob medida, materiais selecionados e
                    acabamento premium.
                  </p>

                  <a
                    href={`/servicos/${slug}`}
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      display: "inline-flex",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    Conhecer
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESSO DE TRABALHO
          ====================================================== */}

      <section
        className="section"
        style={{
          background: "#151311",
          color: "#fff",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "auto",
            }}
          >
            <span className="kicker">Como funciona</span>

            <h2
              style={{
                fontSize: 52,
                margin: "12px 0 50px",
              }}
            >
              Do primeiro contato à entrega.
            </h2>
          </div>

          <div className="process-grid">
            {[
              "Briefing",
              "Medição",
              "Projeto 3D",
              "Orçamento",
              "Produção",
              "Instalação",
            ].map((step, index) => (
              <div
                key={step}
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    border: "1px solid #ffffff33",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    margin: "0 auto 18px",
                    color: "var(--gold)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <b>{step}</b>

                <p
                  style={{
                    fontSize: 12,
                    color: "#aaa",
                    lineHeight: 1.5,
                  }}
                >
                  Cuidado em cada etapa.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PORTFÓLIO
          ====================================================== */}

      <section className="section" id="projetos">
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            <span className="kicker">Portfólio</span>

            <h2
              style={{
                fontSize: 52,
                margin: "12px 0",
              }}
            >
              Projetos que inspiram.
            </h2>

            <p style={{ color: "#666" }}>
              Uma seleção de ambientes desenvolvidos pela nossa equipe.
            </p>
          </div>

          {/* Cards gerados automaticamente pelo array projects */}
          <div className="grid projects">
            {projects.map(([name, image, category]) => (
              <div className="card" key={name}>
                <img
                  className="gallery-img"
                  src={image}
                  alt={name}
                />

                <div style={{ padding: 20 }}>
                  <span className="kicker">{category}</span>

                  <h3
                    style={{
                      fontSize: 22,
                      margin: "7px 0 0",
                    }}
                  >
                    {name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          DEPOIMENTOS
          ====================================================== */}

      <section
        className="section"
        id="depoimentos"
        style={{
          background: "var(--cream)",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
          }}
        >
          <span className="kicker">Depoimentos</span>

          <h2
            style={{
              fontSize: 50,
              margin: "12px 0 40px",
            }}
          >
            Quem vive nossos projetos.
          </h2>

          <div
            className="card"
            style={{
              padding: 45,
              maxWidth: 760,
              margin: "auto",
            }}
          >
            {/* Cinco estrelas de avaliação */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  fill="var(--gold)"
                  color="var(--gold)"
                  size={19}
                />
              ))}
            </div>

            <p
              style={{
                font: "24px 'Playfair Display'",
                lineHeight: 1.5,
              }}
            >
              “Desde o primeiro atendimento percebemos o cuidado
              com cada detalhe. O projeto ficou exatamente como
              imaginávamos — e a execução foi impecável.”
            </p>

            <b>Hebert Santos</b>

            <div
              style={{
                color: "#777",
                fontSize: 13,
              }}
            >
              Sorocaba • SP
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FORMULÁRIO DE ORÇAMENTO
          ====================================================== */}

      <section className="section" id="orcamento">
        <div className="container">
          <div className="contact-grid">
            {/* Informações de contato */}
            <div>
              <span className="kicker">Vamos conversar</span>

              <h2
                style={{
                  fontSize: 58,
                  lineHeight: 1.02,
                  margin: "15px 0 25px",
                }}
              >
                Seu próximo ambiente começa aqui.
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                  fontSize: 17,
                }}
              >
                Conte um pouco sobre o que você imagina. Nossa
                equipe entrará em contato para entender seu projeto
                e orientar os próximos passos.
              </p>

              <div
                style={{
                  marginTop: 35,
                  display: "grid",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                  }}
                >
                  <MessageCircle color="var(--gold)" />

                  <span>
                    <b>WhatsApp</b>
                    <br />
                    (15) 99729-1738
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                  }}
                >
                  <Phone color="var(--gold)" />

                  <span>
                    <b>Atendimento</b>
                    <br />
                    Segunda a sexta, 8h às 18h
                  </span>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form
              onSubmit={quote}
              className="card quote-card"
            >
              {sent ? (
                // Mensagem exibida após o envio
                <div
                  style={{
                    textAlign: "center",
                    padding: 45,
                  }}
                >
                  <Check
                    size={45}
                    color="var(--gold)"
                  />

                  <h3
                    style={{
                      fontSize: 30,
                    }}
                  >
                    Recebemos seu pedido!
                  </h3>

                  <p style={{ color: "#666" }}>
                    Em breve nossa equipe entrará em contato.
                  </p>

                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => setSent(false)}
                  >
                    Novo orçamento
                  </button>
                </div>
              ) : (
                // Formulário exibido normalmente
                <>
                  <input
                    required
                    placeholder="Seu nome"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="WhatsApp"
                  />

                  <input
                    type="email"
                    placeholder="E-mail"
                  />

                  <select defaultValue="">
                    <option value="" disabled>
                      Tipo de ambiente
                    </option>

                    <option>Cozinha</option>
                    <option>Quarto</option>
                    <option>Closet</option>
                    <option>Home Office</option>
                    <option>Área Gourmet</option>
                    <option>Outro</option>
                  </select>

                  <textarea
                    required
                    rows={5}
                    placeholder="Conte um pouco sobre seu projeto..."
                  />

                  <button
                    className="btn btn-dark"
                    type="submit"
                  >
                    Solicitar orçamento
                    <ArrowRight size={17} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
          ====================================================== */}

      <section
        style={{
          background: "var(--wood)",
          color: "#fff",
          padding: "70px 0",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
          }}
        >
          <Sparkles
            color="var(--gold)"
            size={30}
          />

          <h2
            style={{
              fontSize: 46,
              margin: "15px 0",
            }}
          >
            Vamos transformar seu ambiente?
          </h2>

          <p style={{ color: "#ddd" }}>
            Agende uma conversa com nossa equipe.
          </p>

          <a
            href="#orcamento"
            className="btn btn-light"
            style={{
              marginTop: 15,
            }}
          >
            Solicitar orçamento
          </a>
        </div>
      </section>

      {/* ======================================================
          FAQ
          ====================================================== */}

      <section className="section">
        <div className="container">
          <div
            style={{
              maxWidth: 800,
              margin: "auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <span className="kicker">Dúvidas</span>

              <h2
                style={{
                  fontSize: 48,
                  margin: "12px 0 40px",
                }}
              >
                Perguntas frequentes.
              </h2>
            </div>

            {[
              "Vocês fazem projeto 3D?",
              "Qual o prazo de fabricação?",
              "Vocês fazem a instalação?",
              "Quais cidades vocês atendem?",
              "Existe garantia nos móveis?",
            ].map((question, index) => (
              <div
                key={question}
                style={{
                  borderBottom: "1px solid #ddd",
                }}
              >
                {/* Pergunta clicável */}
                <button
                  onClick={() =>
                    setFaq(
                      faq === index ? null : index
                    )
                  }
                  style={{
                    width: "100%",
                    background: "none",
                    border: 0,
                    padding: "22px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 700,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {question}

                  <ChevronDown
                    style={{
                      transform:
                        faq === index
                          ? "rotate(180deg)"
                          : "none",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>

                {/* Resposta da pergunta selecionada */}
                {faq === index && (
                  <p
                    style={{
                      color: "#666",
                      lineHeight: 1.7,
                      padding: "0 0 20px",
                      margin: 0,
                    }}
                  >
                    Sim. Nossa equipe analisa o ambiente,
                    necessidades e medidas para desenvolver uma
                    solução personalizada. O prazo e detalhes são
                    definidos conforme o projeto.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
          ====================================================== */}

      <footer
        style={{
          background: "#111",
          color: "#fff",
          padding: "55px 0 25px",
        }}
      >
        <div className="container">
          <div
            className="footer-grid"
            style={{
              gap: 40,
              paddingBottom: 40,
              borderBottom: "1px solid #ffffff1a",
            }}
          >
            {/* Informações da empresa */}
            <div>
              <div className="logo">
                SARTORINI
                <span style={{ color: "var(--gold)" }}>
                  .
                </span>
              </div>

              <p
                style={{
                  color: "#aaa",
                  maxWidth: 350,
                  lineHeight: 1.7,
                }}
              >
                Marcenaria sob medida para ambientes que contam
                a sua história.
              </p>
            </div>

            {/* Links */}
            <div>
              <b>Empresa</b>

              <p>
                <a href="#sobre">Sobre</a>
              </p>

              <p>
                <a href="#projetos">Projetos</a>
              </p>
            </div>

            {/* Serviços */}
            <div>
              <b>Serviços</b>

              <p>Cozinhas</p>
              <p>Closets</p>
              <p>Corporativo</p>
            </div>

            {/* Contato */}
            <div>
              <b>Contato</b>

              <p>(15) 99729-1738</p>
              <p>Sorocaba • SP</p>

              <p>
                <Instagram size={18} />
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p
            style={{
              color: "#777",
              fontSize: 12,
              marginTop: 22,
            }}
          >
            © 2026 Sartorini Marcenaria. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ======================================================
          BOTÃO FLUTUANTE DO WHATSAPP
          ====================================================== */}

      <a
        href="https://wa.me/5515997291738?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed",
          right: 22,
          bottom: 22,
          zIndex: 40,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          boxShadow: "0 8px 30px #0003",
        }}
      >
        <MessageCircle />
      </a>
    </main>
  );
}