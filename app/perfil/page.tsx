"use client";
export const runtime = 'edge';
import { useEffect, useState, useMemo } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import api from "@/app/lib/api";
import {
  Calendar,
  Clock,
  Star,
  XCircle,
  UserCircle,
  LogOut,
  Loader2,
  History,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// CONFIGURAÇÃO DE FUSO HORÁRIO (DAYJS)
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/pt"; // 'pt' é mais seguro para build do que 'pt-pt'

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("pt");

const FUSO_CABO_VERDE = "Atlantic/Cape_Verde";

// --- Tipagens ---
interface IAgendamento {
  id: number;
  data_hora_inicio: string;
  feedback_nota?: number;
  feedback_comentario?: string;
  Servico: { nome_servico: string; preco: number };
  StatusAgendamento: { nome: string };
  Funcionario: { Usuario: { nome: string } };
}

// --- Sub-componente: Badge de Status ---
const StatusBadge = ({ status }: { status: string }) => {
  const config: Record<string, { label: string; style: string }> = {
    confirmado: {
      label: "Confirmado",
      style: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    cancelado: {
      label: "Cancelado",
      style: "bg-red-50 text-red-600 border-red-100",
    },
    pendente: {
      label: "Pendente",
      style: "bg-amber-50 text-amber-600 border-amber-100",
    },
    concluido: {
      label: "Concluído",
      style: "bg-blue-50 text-blue-600 border-blue-100",
    },
    reagendado: {
      label: "Reagendado",
      style: "bg-purple-50 text-purple-600 border-purple-100",
    },
  };
  const current = config[status.toLowerCase()] || {
    label: status,
    style: "bg-gray-50 text-gray-500 border-gray-100",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest border ${current.style}`}
    >
      {current.label}
    </span>
  );
};

export default function PerfilPage() {
  const [agendamentos, setAgendamentos] = useState<IAgendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"proximos" | "historico">(
    "proximos",
  );
  const [userName, setUserName] = useState("");
  const [feedbackData, setFeedbackData] = useState<{
    id: number | null;
    nota: number;
    comentario: string;
  }>({
    id: null,
    nota: 5,
    comentario: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("user_name");
    if (!token) {
      router.push("/login");
      return;
    }
    setUserName(name || "Cliente");
    fetchAgendamentos();
  }, []);

  const fetchAgendamentos = async () => {
    try {
      const res = await api.get("/cliente/meus-agendamentos");
      setAgendamentos(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Falha ao carregar agenda");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelar = async (id: number) => {
    if (!window.confirm("Deseja cancelar esta reserva?")) return;
    setSubmitting(id);
    try {
      await api.patch(`/cliente/agendamentos/${id}/cancelar`);
      await fetchAgendamentos();
    } catch (err: any) {
      alert(err.response?.data?.erro || "Erro ao cancelar.");
    } finally {
      setSubmitting(null);
    }
  };

  const handleSendFeedback = async () => {
    if (!feedbackData.id) return;
    try {
      await api.post(`/cliente/feedback/${feedbackData.id}`, {
        nota: feedbackData.nota,
        comentario: feedbackData.comentario,
      });
      setFeedbackData({ id: null, nota: 5, comentario: "" });
      fetchAgendamentos();
    } catch (e) {
      alert("Erro ao enviar avaliação.");
    }
  };

  // Filtragem Otimizada usando Fuso de Cabo Verde para saber o que é "futuro"
  const agendamentosFiltrados = useMemo(() => {
    const agora = dayjs().tz(FUSO_CABO_VERDE);

    return agendamentos
      .filter((ag) => {
        const dataAg = dayjs.utc(ag.data_hora_inicio).tz(FUSO_CABO_VERDE);
        const status = ag.StatusAgendamento.nome.toLowerCase();

        if (activeTab === "proximos") {
          return (
            dataAg.isAfter(agora) &&
            status !== "cancelado" &&
            status !== "concluido"
          );
        } else {
          return (
            dataAg.isBefore(agora) ||
            status === "cancelado" ||
            status === "concluido"
          );
        }
      })
      .sort((a, b) => {
        const order = activeTab === "proximos" ? 1 : -1;
        return (
          (dayjs(a.data_hora_inicio).unix() -
            dayjs(b.data_hora_inicio).unix()) *
          order
        );
      });
  }, [agendamentos, activeTab]);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900">
      <Navigation blackText />

      <div className="max-w-5xl mx-auto pt-36 pb-20 px-6">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center text-[#e1b01a] shadow-xl border border-orange-100">
              <UserCircle size={48} strokeWidth={1} />
            </div>
            <div>
              <p className="text-[#e1b01a] text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                Cabo Verde • Praia
              </p>
              <h1 className="text-4xl font-serif font-medium text-slate-800 tracking-tight">
                Olá, {userName}
              </h1>
            </div>
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="px-6 py-3 bg-white text-red-500 rounded-2xl text-xs font-bold uppercase tracking-widest border border-red-50 shadow-sm hover:bg-red-50 transition-all"
          >
            Sair da Conta
          </button>
        </header>

        {/* TABS */}
        <nav className="flex p-1.5 bg-white rounded-[2rem] border border-gray-200 w-fit mb-12 shadow-sm">
          {[
            { id: "proximos", label: "Próximos", icon: Calendar },
            { id: "historico", label: "Histórico", icon: History },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-3 px-10 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-xl"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <tab.icon size={16} strokeWidth={3} />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* LISTA */}
        <div className="grid grid-cols-1 gap-6">
          {loading ? (
            <div className="py-20 text-center">
              <Loader2 className="animate-spin mx-auto text-[#e1b01a]" />
            </div>
          ) : agendamentosFiltrados.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100 text-gray-400">
              Não existem agendamentos para mostrar.
            </div>
          ) : (
            agendamentosFiltrados.map((ag) => {
              // LÓGICA DE CONVERSÃO PARA CABO VERDE (UTC-1)
              const dataCV = dayjs
                .utc(ag.data_hora_inicio)
                .tz(FUSO_CABO_VERDE)
                .subtract(1, "hour");
              return (
                <div
                  key={ag.id}
                  className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-5 flex-1">
                      <div className="flex flex-wrap items-center gap-4">
                        <StatusBadge status={ag.StatusAgendamento.nome} />
                        <h3 className="text-2xl font-serif font-medium text-slate-800">
                          {ag.Servico.nome_servico}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-50 rounded-lg text-[#e1b01a]">
                            <Calendar size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-gray-400">
                              Data
                            </span>
                            <span className="text-sm font-bold text-slate-700 capitalize">
                              {dataCV.format("ddd, DD MMMM")}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-50 rounded-lg text-[#e1b01a]">
                            <Clock size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-gray-400">
                              Horário Praia
                            </span>
                            <span className="text-sm font-bold text-slate-700">
                              {/* AQUI MOSTRARÁ 11:30 EM VEZ DE 12:30 */}
                              {dataCV.format("HH:mm")}h
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-50 rounded-lg text-[#e1b01a]">
                            <UserCircle size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-gray-400">
                              Especialista
                            </span>
                            <span className="text-sm font-bold text-slate-700">
                              {ag.Funcionario.Usuario.nome}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-auto flex flex-col items-center gap-4">
                      <div className="text-2xl font-serif font-bold text-[#e1b01a]">
                        {ag.Servico.preco} Esc
                      </div>

                      {activeTab === "proximos" ? (
                        <button
                          disabled={submitting === ag.id}
                          onClick={() => handleCancelar(ag.id)}
                          className="w-full px-6 py-3.5 text-red-400 hover:text-white hover:bg-red-500 border border-red-50 rounded-2xl transition-all font-bold text-[10px] uppercase tracking-widest disabled:opacity-50"
                        >
                          {submitting === ag.id ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <XCircle size={16} />
                          )}{" "}
                          Cancelar Reserva
                        </button>
                      ) : (
                        !ag.feedback_nota &&
                        ag.StatusAgendamento.nome.toLowerCase() ===
                          "concluido" && (
                          <button
                            onClick={() =>
                              setFeedbackData({ ...feedbackData, id: ag.id })
                            }
                            className="w-full bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#e1b01a] transition-all"
                          >
                            Avaliar
                          </button>
                        )
                      )}

                      {ag.feedback_nota && (
                        <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-4 py-2 rounded-full text-[10px] font-black border border-amber-100">
                          <Star size={12} fill="currentColor" />{" "}
                          {ag.feedback_nota}/5
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* MODAL DE FEEDBACK */}
      {feedbackData.id && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl flex items-center justify-center z-[100] p-6">
          <div className="bg-white p-10 rounded-[3.5rem] max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <h3 className="text-2xl font-serif font-medium text-center mb-8">
              Sua Experiência
            </h3>
            <div className="flex justify-center gap-4 mb-10">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setFeedbackData({ ...feedbackData, nota: n })}
                  className="hover:scale-110 transition-transform"
                >
                  <Star
                    size={32}
                    fill={n <= feedbackData.nota ? "#e1b01a" : "none"}
                    stroke="#e1b01a"
                  />
                </button>
              ))}
            </div>
            <textarea
              className="w-full p-6 bg-slate-50 rounded-[2rem] mb-8 text-sm outline-none focus:ring-2 focus:ring-[#e1b01a] resize-none"
              placeholder="Conte-nos como foi o seu atendimento..."
              rows={4}
              value={feedbackData.comentario}
              onChange={(e) =>
                setFeedbackData({ ...feedbackData, comentario: e.target.value })
              }
            />
            <button
              onClick={handleSendFeedback}
              className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-[#e1b01a]"
            >
              Enviar Avaliação
            </button>
            <button
              onClick={() =>
                setFeedbackData({ id: null, nota: 5, comentario: "" })
              }
              className="w-full py-3 mt-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
