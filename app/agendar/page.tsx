"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import api from "@/app/lib/api";
import {
  Calendar,
  Clock,
  Check,
  Sparkles,
  Star,
  ArrowRight,
  MessageCircle,
  Loader2,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Agendar() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Dados da API
  const [servicosReais, setServicosReais] = useState<any[]>([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);

  // Estado do Formulário
  const [formData, setFormData] = useState({
    servico_id: "",
    servico_nome: "",
    preco: "",
    funcionario_id: "",
    funcionario_nome: "",
    data: "",
    hora: "",
    observacoes: "",
  });

  // 1. Carregar todos os serviços (e seus respectivos profissionais)
  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const res = await api.get("/cliente/servicos");
        setServicosReais(res.data);
      } catch (err) {
        console.error("Erro ao carregar serviços");
      }
    };
    fetchServicos();
  }, []);

  // 2. Quando seleciona serviço, já grava o funcionário associado
  // 2. Quando seleciona serviço, já grava o funcionário associado
  const handleSelectServico = (servico: any) => {
    const lista = servico.Funcionarios || servico.funcionarios || [];
    const profissional = lista[0];
    setHorariosDisponiveis([]); // Limpa os horários antigos para não mostrar lixo
    setStep(2);
    setFormData({
      ...formData,
      servico_id: servico.id,
      servico_nome: servico.nome_servico,
      preco: servico.preco,
      funcionario_id: profissional?.id || "",
      funcionario_nome: profissional?.Usuario?.nome || "Especialista",
    });
    setStep(2);
  };
  // 3. Consultar horários livres quando a data mudar
  // 3. Consultar horários livres quando a data ou o funcionário mudar
  useEffect(() => {
    // No seu Agendar.tsx, dentro do useEffect que busca as horas:
    const buscarHoras = async () => {
      // Verifique se os TRÊS campos existem antes de chamar a API
      if (!formData.data || !formData.funcionario_id || !formData.servico_id)
        return;

      try {
        setHorariosDisponiveis([]);
        const res = await api.get("/cliente/horarios-disponiveis", {
          params: {
            funcionario_id: formData.funcionario_id,
            data: formData.data,
            servico_id: formData.servico_id, // <--- ADICIONE ESTA LINHA
          },
        });
        setHorariosDisponiveis(res.data);
      } catch (err) {
        console.error("Erro ao buscar horários");
      }
    };

    buscarHoras();
  }, [formData.data, formData.funcionario_id]); // Executa sempre que mudar o dia ou o profissional

  const finalizarAgendamento = async () => {
    setLoading(true);
    try {
      const data_hora_inicio = `${formData.data}T${formData.hora}:00`;

      await api.post("/cliente/agendamentos", {
        servico_id: formData.servico_id,
        funcionario_id: formData.funcionario_id,
        data_hora_inicio: data_hora_inicio,
        observacoes: formData.observacoes,
      });

      alert("Reserva confirmada! Esperamos por si.");
      router.push("/perfil");
    } catch (err: any) {
      alert(err.response?.data?.erro || "Erro ao realizar agendamento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fdfbf9]">
      <Navigation blackText />

      <section className="py-20 px-6 pt-40 max-w-6xl mx-auto">
        {/* INDICADOR DE PASSOS */}
        <div className="flex justify-center items-center gap-4 mb-16">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step >= s ? "bg-[#e1b01a] border-[#e1b01a] text-white" : "border-gray-200 text-gray-400"}`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-0.5 ${step > s ? "bg-[#e1b01a]" : "bg-gray-100"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* PASSO 1: ESCOLHER SERVIÇO */}
        {/* PASSO 1: ESCOLHER SERVIÇO */}
        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif mb-4">
                Escolha o seu Tratamento
              </h1>
              <p className="text-gray-400">
                Cada serviço é realizado por um especialista dedicado
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {servicosReais.map((servico: any) => {
                // --- LÓGICA PARA PEGAR O NOME DO PROFISSIONAL ---
                const lista =
                  servico.Funcionarios || servico.funcionarios || [];
                const nomeProfissional =
                  lista[0]?.Usuario?.nome || "Especialista";

                return (
                  <button
                    key={servico.id}
                    onClick={() => handleSelectServico(servico)}
                    className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all text-left group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                      <Sparkles size={40} className="text-[#e1b01a]" />
                    </div>

                    <h3 className="text-xl font-bold mb-1">
                      {servico.nome_servico}
                    </h3>

                    {/* AQUI APARECERÁ O NOME REAL */}
                    <p className="text-[#e1b01a] text-[10px] font-bold uppercase tracking-widest mb-4">
                      com {nomeProfissional}
                    </p>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-gray-400 text-xs mb-1 uppercase tracking-tighter">
                          {servico.duracao_minutos} minutos
                        </p>
                        <div className="text-2xl font-serif font-medium">
                          {servico.preco} Esc
                        </div>
                      </div>
                      <div className="bg-slate-900 text-white p-3 rounded-2xl group-hover:bg-[#e1b01a] transition-colors">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PASSO 2: DATA E HORA */}
        {/* PASSO 2: DATA E HORA */}
        {step === 2 && (
          <div className="animate-in fade-in duration-500 space-y-10">
            <h2 className="text-3xl font-serif text-center">
              Quando deseja vir?
            </h2>

            <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-3xl">
                  <p className="text-[10px] font-bold text-[#e1b01a] uppercase tracking-widest mb-1">
                    Serviço Selecionado
                  </p>
                  <p className="font-bold text-lg">{formData.servico_nome}</p>
                  {/* CORREÇÃO AQUI: Usar formData em vez de servico */}
                  <p className="text-[#e1b01a] text-[10px] font-bold uppercase tracking-widest">
                    com {formData.funcionario_nome}
                  </p>
                </div>

                <label className="font-bold flex items-center gap-2 pt-4">
                  <Calendar size={18} className="text-[#e1b01a]" /> 1. Escolha o
                  Dia
                </label>
                <input
                  type="date"
                  className="w-full p-5 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#e1b01a] border-none"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setFormData({ ...formData, data: e.target.value })
                  }
                />
              </div>

              <div className="space-y-6">
                <label className="font-bold flex items-center gap-2">
                  <Clock size={18} className="text-[#e1b01a]" /> 2. Horários
                  Disponíveis
                </label>
                {!formData.data ? (
                  <p className="text-gray-400 text-center py-10 italic">
                    Selecione uma data primeiro...
                  </p>
                ) : (
                  <div className="grid grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2">
                    {horariosDisponiveis.map((h) => (
                      <button
                        key={h}
                        onClick={() => setFormData({ ...formData, hora: h })}
                        className={`p-4 rounded-2xl border-2 transition-all font-bold text-sm ${formData.hora === h ? "bg-[#e1b01a] border-[#e1b01a] text-white shadow-lg" : "border-gray-50 text-gray-400 hover:border-[#e1b01a]"}`}
                      >
                        {h}
                      </button>
                    ))}
                    {horariosDisponiveis.length === 0 && (
                      <p className="col-span-3 text-red-400 text-center text-sm py-10">
                        Sem horários para este dia.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => setStep(1)}
                className="font-bold uppercase text-xs tracking-[0.2em] text-gray-400"
              >
                Voltar
              </button>
              <button
                disabled={!formData.hora}
                onClick={() => setStep(3)}
                className="px-12 py-4 bg-slate-900 text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-xl disabled:opacity-30"
              >
                Revisar Agendamento
              </button>
            </div>
          </div>
        )}

        {/* PASSO 3: REVISÃO E CONFIRMAÇÃO */}
        {step === 3 && (
          <div className="animate-in zoom-in-95 duration-500 max-w-xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-10">
              Tudo pronto?
            </h2>

            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 space-y-8 relative">
              <div className="absolute -top-6 -right-6 bg-[#e1b01a] text-white p-4 rounded-full rotate-12">
                <Star fill="white" />
              </div>

              <div className="border-b pb-6 space-y-4">
                <p className="text-[10px] font-bold text-[#e1b01a] uppercase tracking-[0.3em]">
                  Resumo da Experiência
                </p>
                <h4 className="text-2xl font-bold">{formData.servico_nome}</h4>
                <div className="flex items-center gap-2 text-gray-500">
                  <User size={16} /> Especialista:{" "}
                  <span className="text-slate-900 font-bold">
                    {formData.funcionario_nome}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <p className="text-gray-400 mb-1 uppercase text-[10px] font-bold">
                    Data
                  </p>
                  <p className="font-bold">
                    {new Date(formData.data).toLocaleDateString("pt-PT", {
                      day: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1 uppercase text-[10px] font-bold">
                    Hora
                  </p>
                  <p className="font-bold">{formData.hora}</p>
                </div>
              </div>

              <div className="pt-4">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-3">
                  Deseja deixar algum detalhe?
                </label>
                <textarea
                  className="w-full p-5 bg-gray-50 rounded-[1.5rem] border-none outline-none focus:ring-2 focus:ring-[#e1b01a] resize-none"
                  placeholder="Ex: Tenho pressa, ou prefiro atendimento silencioso..."
                  rows={3}
                  onChange={(e) =>
                    setFormData({ ...formData, observacoes: e.target.value })
                  }
                />
              </div>

              <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                <span className="text-gray-400 font-bold uppercase text-xs">
                  Total a pagar
                </span>
                <span className="text-3xl font-serif font-medium text-[#e1b01a]">
                  {formData.preco} Esc
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <button
                disabled={loading}
                onClick={finalizarAgendamento}
                className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-bold uppercase text-xs tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Confirmar Agendamento"
                )}
              </button>
              <button
                onClick={() => setStep(2)}
                className="text-gray-400 font-bold uppercase text-[10px] tracking-widest text-center"
              >
                Voltar e ajustar horário
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
