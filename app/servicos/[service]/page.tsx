"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

// ============================================================
// DADOS DOS SERVIÇOS COM EXEMPLOS
// ============================================================

const serviceData = {
  cozinhas: {
    nome: "Cozinhas Planejadas",
    descricao:
      "Cozinhas modernas e funcionais, projetadas especialmente para o seu espaço.",
    exemplos: [
      {
        titulo: "Cozinha Sartorini",
        imagem: "/images/C1.jpg",
      },
      {
        titulo: "Cozinha Contemporânea",
        imagem: "/images/C2.jpg",
      },
      {
        titulo: "Cozinha Minimalista",
        imagem: "/images/C3.jpg",
      },
      {
        titulo: "Cozinha de Luxo",
        imagem: "/images/C4.jpg",
      },
    ],
  },
  closets: {
    nome: "Closets",
    descricao:
      "Closets personalizados para organização máxima do seu guarda-roupa.",
    exemplos: [
      {
        titulo: "Closet Nogueira",
        imagem: "/images/C5.jpg",
      },
      {
        titulo: "Closet Moderno",
        imagem: "/images/C6.jpg",
      },
      {
        titulo: "Closet com Bancada",
        imagem: "/images/C7.jpg",
      },
      {
        titulo: "Closet Premium",
        imagem: "/images/C8.jpg",
      },
    ],
  },
  dormitorios: {
    nome: "Dormitórios",
    descricao: "Dormitórios elegantes com móveis planejados sob medida.",
    exemplos: [
      {
        titulo: "Suíte Contemporânea",
        imagem: "/images/C9.jpg",
      },
      {
        titulo: "Dormitório Moderno",
        imagem: "/images/C10.jpg",
      },
      {
        titulo: "Dormitório Aconchegante",
        imagem: "/images/C11.jpg",
      },
      {
        titulo: "Suite Master",
        imagem: "/images/C12.jpg",
      },
    ],
  },
  "home-office": {
    nome: "Home Office",
    descricao:
      "Espaços de trabalho produtivos e confortáveis para sua casa.",
    exemplos: [
      {
        titulo: "Home Office Minimalista",
        imagem: "/images/H1.jpg",
      },
      {
        titulo: "Home Office Profissional",
        imagem: "/images/H2.jpg",
      },
      {
        titulo: "Home Office Compacto",
        imagem: "/images/H3.jpg",
      },
      {
        titulo: "Home Office Espaçoso",
        imagem: "/images/H4.jpg",
      },
    ],
  },
  "areas-gourmet": {
    nome: "Áreas Gourmet",
    descricao:
      "Áreas gourmet completas para momentos de diversão e gastronomia.",
    exemplos: [
      {
        titulo: "Área Gourmet Moderna",
        imagem: "/images/G1.jpg",
      },
      {
        titulo: "Área Gourmet Fechada",
        imagem: "/images/G2.jpg",
      },
      {
        titulo: "Área Gourmet Rústica",
        imagem: "/images/G3.jpg",
      },
      {
        titulo: "Área Gourmet Sofisticada",
        imagem: "/images/G4.jpg",
      },
    ],
  },
  "paineis-tv": {
    nome: "Painéis de TV",
    descricao: "Painéis de TV personalizados que unem design e funcionalidade.",
    exemplos: [
      {
        titulo: "Painel Living Moderno",
        imagem: "/images/P1.jpg",
      },
      {
        titulo: "Painel TV com Nichos",
        imagem: "/images/P2.jpg",
      },
      {
        titulo: "Painel TV Suspenso",
        imagem: "/images/P3.jpg",
      },
      {
        titulo: "Painel TV Compacto",
        imagem: "/images/P4.jpg",
      },
    ],
  },
  banheiros: {
    nome: "Banheiros",
    descricao: "Banheiros sofisticados com móveis sob medida e acabamento premium.",
    exemplos: [
      {
        titulo: "Banheiro Moderno",
        imagem: "/images/B1.jpg",
      },
      {
        titulo: "Banheiro Minimalista",
        imagem: "/images/B2.jpg",
      },
      {
        titulo: "Banheiro Luxuoso",
        imagem: "/images/B3.jpg",
      },
      {
        titulo: "Banheiro Espaçoso",
        imagem: "/images/B4.jpg",
      },
    ],
  },
  corporativo: {
    nome: "Corporativo",
    descricao:
      "Soluções corporativas para escritórios e espaços comerciais.",
    exemplos: [
      {
        titulo: "Escritório Moderno",
        imagem: "/images/COP1.jpg",
      },
      {
        titulo: "Sala de Reunião",
        imagem: "/images/COP2.jpg",
      },
      {
        titulo: "Recepção Corporativa",
        imagem: "/images/COP3.jpg",
      },
      {
        titulo: "Área de Descanso",
        imagem: "/images/COP4.jpg",
      },
    ],
  },
};

export default function ServicePage() {
  const params = useParams();
  const service = params.service as string;

  // Busca os dados do serviço
  const data = serviceData[service as keyof typeof serviceData];

  if (!data) {
    return (
      <main style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Serviço não encontrado</h1>
        <a href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>
          Voltar para o início
        </a>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      {/* ======================================================
          HEADER COM BOTÃO VOLTAR
          ====================================================== */}

      <div
        style={{
          background: "#151311",
          color: "#fff",
          padding: "20px 0",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a
            href="/#servicos"
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={20} />
            Voltar
          </a>
          <h1 style={{ margin: 0, fontSize: 24 }}>{data.nome}</h1>
          <div style={{ width: 60 }} />
        </div>
      </div>

      {/* ======================================================
          HERO DO SERVIÇO
          ====================================================== */}

      <section
        style={{
          padding: "60px 20px",
          background: "var(--cream)",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: 42, marginBottom: 15, lineHeight: 1.1 }}>
            {data.nome}
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "#666",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            {data.descricao}
          </p>

          <a
            href="/#orcamento"
            style={{
              display: "inline-flex",
              gap: 8,
              alignItems: "center",
              marginTop: 30,
              padding: "12px 24px",
              background: "var(--gold)",
              color: "#000",
              textDecoration: "none",
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Solicitar orçamento
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ======================================================
          GALERIA DE EXEMPLOS
          ====================================================== */}

      <section style={{ padding: "80px 20px" }}>
        <div className="container">
          <h2
            style={{
              fontSize: 36,
              marginBottom: 50,
              textAlign: "center",
            }}
          >
            Exemplos de Projetos Entregues
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 30,
            }}
          >
            {data.exemplos.map((exemplo, index) => (
              <div
                key={index}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={exemplo.imagem}
                  alt={exemplo.titulo}
                  style={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div style={{ padding: 20, background: "#fff" }}>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    {exemplo.titulo}
                  </h3>

                  <p
                    style={{
                      color: "#777",
                      fontSize: 14,
                      margin: 0,
                    }}
                  >
                    Projeto sob medida com acabamento premium
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA FINAL
          ====================================================== */}

      <section
        style={{
          background: "var(--cream)",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: 36, marginBottom: 20 }}>
            Pronto para começar?
          </h2>

          <p style={{ fontSize: 18, color: "#666", marginBottom: 30 }}>
            Entre em contato e vamos criar a solução perfeita para seu espaço.
          </p>

          <a
            href="/#orcamento"
            className="btn btn-light"
            style={{
              display: "inline-flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            Solicitar orçamento
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
