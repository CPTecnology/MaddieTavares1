"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Check,
  Sparkles,
  Star,
  ArrowRight,
  MessageCircle,
  CreditCard,
  Wallet,
  Building2,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function Agendar() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    hora: "",
    servico: "",
    categoria: "",
    mensagem: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("")
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    installments: "1",
  })

  const agendamentosExistentes = [
    { data: "2025-01-25", hora: "09:00" },
    { data: "2025-01-25", hora: "10:00" },
    { data: "2025-01-25", hora: "14:00" },
    { data: "2025-01-25", hora: "15:00" },
    { data: "2025-01-26", hora: "09:30" },
    { data: "2025-01-26", hora: "11:00" },
    { data: "2025-01-27", hora: "10:00" },
    { data: "2025-01-27", hora: "10:30" },
    { data: "2025-01-27", hora: "11:00" },
    { data: "2025-01-27", hora: "11:30" },
    { data: "2025-01-27", hora: "14:00" },
    { data: "2025-01-27", hora: "14:30" },
    { data: "2025-01-27", hora: "15:00" },
    { data: "2025-01-27", hora: "15:30" },
    { data: "2025-01-27", hora: "16:00" },
    { data: "2025-01-27", hora: "16:30" },
    { data: "2025-01-27", hora: "17:00" },
    { data: "2025-01-27", hora: "17:30" },
    { data: "2025-01-27", hora: "18:00" },
    { data: "2025-01-27", hora: "18:30" },
    { data: "2025-01-27", hora: "19:00" },
    { data: "2025-01-27", hora: "19:30" },
  ]

  const categorias = [
    {
      nome: "Facial",
      icon: "✨",
      cor: "from-amber-400/20 to-yellow-400/20",
      border: "border-amber-300/50",
      servicos: [
        { nome: "Limpeza de Pele Profunda", duracao: "60 min", preco: "8.500 Esc" },
        { nome: "Peeling Químico", duracao: "45 min", preco: "12.000 Esc" },
        { nome: "Microdermabrasão", duracao: "50 min", preco: "10.500 Esc" },
        { nome: "Harmonização Facial", duracao: "90 min", preco: "25.000 Esc" },
      ],
    },
    {
      nome: "Corporal",
      icon: "💆",
      cor: "from-amber-500/20 to-yellow-500/20",
      border: "border-amber-400/50",
      servicos: [
        { nome: "Massagem Relaxante", duracao: "60 min", preco: "7.500 Esc" },
        { nome: "Drenagem Linfática", duracao: "75 min", preco: "9.000 Esc" },
        { nome: "Hidroterapia", duracao: "60 min", preco: "11.000 Esc" },
        { nome: "Sessão Spa Completa", duracao: "120 min", preco: "18.000 Esc" },
      ],
    },
    {
      nome: "Estética Avançada",
      icon: "🔬",
      cor: "from-amber-600/20 to-yellow-600/20",
      border: "border-amber-500/50",
      servicos: [
        { nome: "Radiofrequência Facial", duracao: "50 min", preco: "15.000 Esc" },
        { nome: "Depilação a Laser", duracao: "30 min", preco: "6.500 Esc" },
        { nome: "Microagulhamento com PRP", duracao: "90 min", preco: "22.000 Esc" },
        { nome: "Bioestimulação 3D", duracao: "60 min", preco: "18.500 Esc" },
      ],
    },
  ]

  const todosHorarios = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ]

  const isHorarioOcupado = (data: string, hora: string) => {
    return agendamentosExistentes.some((ag) => ag.data === data && ag.hora === hora)
  }

  const getHorariosDisponiveis = (data: string) => {
    return todosHorarios.filter((hora) => !isHorarioOcupado(data, hora))
  }

  const isDiaLotado = (data: string) => {
    const disponiveis = getHorariosDisponiveis(data)
    return disponiveis.length === 0
  }

  const getStatusDisponibilidade = (data: string) => {
    const disponiveis = getHorariosDisponiveis(data)
    const total = todosHorarios.length
    const percentual = (disponiveis.length / total) * 100

    if (percentual === 0) return { status: "lotado", texto: "Lotado", cor: "text-red-500", bg: "bg-red-50" }
    if (percentual <= 25)
      return { status: "poucos", texto: "Poucos horários", cor: "text-amber-500", bg: "bg-amber-50" }
    if (percentual <= 50)
      return { status: "medio", texto: "Disponibilidade média", cor: "text-yellow-500", bg: "bg-yellow-50" }
    return { status: "disponivel", texto: "Muitos horários", cor: "text-green-500", bg: "bg-green-50" }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Agendamento:", formData)
    console.log("Pagamento:", { method: paymentMethod, ...paymentData })
    alert("Agendamento e pagamento confirmados com sucesso! Você receberá a confirmação por email.")
    setFormData({ nome: "", email: "", telefone: "", data: "", hora: "", servico: "", categoria: "", mensagem: "" })
    setPaymentMethod("")
    setPaymentData({ cardNumber: "", cardName: "", expiryDate: "", cvv: "", installments: "1" })
    setStep(1)
  }

  const servicoSelecionado = categorias.flatMap((c) => c.servicos).find((s) => s.nome === formData.servico)
  const horariosDisponiveisParaData = formData.data ? getHorariosDisponiveis(formData.data) : []
  const statusData = formData.data ? getStatusDisponibilidade(formData.data) : null

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Navigation blackText />

      <section className="py-20 px-6 pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <Sparkles size={16} className="text-accent" />
              <span className="text-accent text-sm font-medium">Agendamento Online</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
              Reserve Sua Transformação
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Em apenas 4 passos, garanta seu momento de cuidado e bem-estar
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-16">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                    step >= s
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {step > s ? <Check size={20} /> : s}
                </div>
                {s < 4 && <div className={`w-20 h-0.5 mx-2 ${step > s ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            {step === 1 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light mb-4">Escolha Seu Tratamento</h2>
                  <p className="text-muted-foreground">Selecione a categoria e o serviço desejado</p>
                </div>

                {categorias.map((cat, idx) => (
                  <div key={cat.nome} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{cat.icon}</span>
                      <h3 className="text-2xl font-light">{cat.nome}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {cat.servicos.map((servico) => (
                        <button
                          key={servico.nome}
                          onClick={() => {
                            setFormData({ ...formData, servico: servico.nome, categoria: cat.nome })
                            setStep(2)
                          }}
                          className={`group p-6 rounded-2xl border-2 text-left transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-br ${cat.cor} ${
                            formData.servico === servico.nome ? cat.border : "border-border"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <Star className="text-accent" size={20} />
                            {formData.servico === servico.nome && (
                              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                <Check size={14} className="text-primary-foreground" />
                              </div>
                            )}
                          </div>
                          <h4 className="font-medium mb-3 text-balance leading-tight">{servico.nome}</h4>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {servico.duracao}
                            </span>
                          </div>
                          <div className="text-2xl font-light text-primary">{servico.preco}</div>
                          <div className="mt-4 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition">
                            Selecionar <ArrowRight size={16} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light mb-4">Escolha Data e Horário</h2>
                  <p className="text-muted-foreground">Selecione o melhor momento para você</p>
                  {servicoSelecionado && (
                    <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
                      <Check size={18} className="text-primary" />
                      <span className="font-medium">{servicoSelecionado.nome}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-primary">{servicoSelecionado.preco}</span>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <label className="block text-lg font-medium mb-4 flex items-center gap-2">
                      <Calendar className="text-primary" />
                      Data Desejada
                    </label>
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={(e) => setFormData({ ...formData, data: e.target.value, hora: "" })}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-6 py-4 border-2 border-border rounded-2xl focus:outline-none focus:border-primary transition bg-background text-lg"
                    />

                    {formData.data && statusData && (
                      <div
                        className={`p-4 rounded-xl border-2 ${
                          statusData.status === "lotado"
                            ? "border-red-200 bg-red-50"
                            : statusData.status === "poucos"
                              ? "border-amber-200 bg-amber-50"
                              : statusData.status === "medio"
                                ? "border-yellow-200 bg-yellow-50"
                                : "border-green-200 bg-green-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {statusData.status === "lotado" ? (
                            <AlertCircle className="text-red-500" size={20} />
                          ) : (
                            <CheckCircle className="text-green-500" size={20} />
                          )}
                          <div>
                            <p className={`font-medium ${statusData.cor}`}>{statusData.texto}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {horariosDisponiveisParaData.length} de {todosHorarios.length} horários disponíveis
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <label className="block text-lg font-medium mb-4 flex items-center gap-2">
                      <Clock className="text-primary" />
                      Horário Disponível
                      {formData.data && (
                        <span className="text-sm text-muted-foreground font-normal">
                          ({horariosDisponiveisParaData.length} disponíveis)
                        </span>
                      )}
                    </label>

                    {!formData.data ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <Clock size={48} className="mx-auto mb-4 opacity-20" />
                        <p>Selecione uma data para ver os horários disponíveis</p>
                      </div>
                    ) : isDiaLotado(formData.data) ? (
                      <div className="text-center py-12">
                        <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
                        <p className="text-lg font-medium text-red-500 mb-2">Dia Lotado</p>
                        <p className="text-muted-foreground">
                          Todos os horários estão ocupados. Por favor, escolha outra data.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
                        {todosHorarios.map((hora) => {
                          const ocupado = isHorarioOcupado(formData.data, hora)
                          return (
                            <button
                              key={hora}
                              onClick={() => !ocupado && setFormData({ ...formData, hora })}
                              disabled={ocupado}
                              className={`py-3 px-4 rounded-xl border-2 transition-all ${
                                ocupado
                                  ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                                  : formData.hora === hora
                                    ? "bg-primary border-primary text-primary-foreground scale-105 shadow-lg"
                                    : "border-border hover:border-primary/50 hover:scale-105"
                              }`}
                            >
                              <div className="flex flex-col items-center gap-1">
                                <span className="font-medium">{hora}</span>
                                {ocupado && <span className="text-xs">Ocupado</span>}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="px-8 py-4 border-2 border-border rounded-full hover:border-primary transition"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => formData.data && formData.hora && setStep(3)}
                    disabled={!formData.data || !formData.hora}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Continuar <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light mb-4">Seus Dados</h2>
                  <p className="text-muted-foreground">Preencha suas informações para confirmar</p>
                </div>

                <div className="p-8 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h3 className="font-medium mb-6 flex items-center gap-2">
                    <Check className="text-primary" />
                    Resumo do Agendamento
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Serviço:</strong> {formData.servico}
                    </p>
                    <p>
                      <strong className="text-foreground">Data:</strong>{" "}
                      {new Date(formData.data + "T00:00:00").toLocaleDateString("pt-BR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>
                      <strong className="text-foreground">Horário:</strong> {formData.hora}
                    </p>
                    {servicoSelecionado && (
                      <>
                        <p>
                          <strong className="text-foreground">Duração:</strong> {servicoSelecionado.duracao}
                        </p>
                        <p className="text-2xl font-light text-primary pt-2">{servicoSelecionado.preco}</p>
                      </>
                    )}
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setStep(4)
                  }}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                        <User size={18} className="text-primary" />
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        required
                        className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                        <Mail size={18} className="text-primary" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                      <Phone size={18} className="text-primary" />
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      required
                      className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                      placeholder="(238) 98765-4321"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                      <MessageCircle size={18} className="text-primary" />
                      Observações (Opcional)
                    </label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      rows={4}
                      className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition resize-none bg-background"
                      placeholder="Alguma observação especial sobre seu tratamento..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 px-8 py-4 border-2 border-border rounded-full hover:border-primary transition"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-8 py-5 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                    >
                      Continuar para Pagamento <ArrowRight size={20} />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 4 && (
              <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light mb-4">Pagamento Online</h2>
                  <p className="text-muted-foreground">Escolha sua forma de pagamento</p>
                </div>

                <div className="p-8 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h3 className="font-medium mb-6 flex items-center gap-2">
                    <Check className="text-primary" />
                    Resumo do Pedido
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Serviço:</strong> {formData.servico}
                    </p>
                    <p>
                      <strong className="text-foreground">Data:</strong>{" "}
                      {new Date(formData.data + "T00:00:00").toLocaleDateString("pt-BR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>
                      <strong className="text-foreground">Horário:</strong> {formData.hora}
                    </p>
                    {servicoSelecionado && (
                      <>
                        <p>
                          <strong className="text-foreground">Cliente:</strong> {formData.nome}
                        </p>
                        <div className="border-t border-primary/20 my-4 pt-4">
                          <p className="text-3xl font-light text-primary">Total: {servicoSelecionado.preco}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-medium">Método de Pagamento</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("credit")}
                      className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                        paymentMethod === "credit"
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <CreditCard size={32} className="mx-auto mb-3" />
                      <p className="font-medium">Cartão de Crédito</p>
                      <p className="text-xs mt-2 opacity-80">Em até 3x sem juros</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("debit")}
                      className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                        paymentMethod === "debit"
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Wallet size={32} className="mx-auto mb-3" />
                      <p className="font-medium">Cartão de Débito</p>
                      <p className="text-xs mt-2 opacity-80">Pagamento à vista</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("transfer")}
                      className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                        paymentMethod === "transfer"
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Building2 size={32} className="mx-auto mb-3" />
                      <p className="font-medium">Transferência</p>
                      <p className="text-xs mt-2 opacity-80">Bancária ou Mobile</p>
                    </button>
                  </div>

                  {(paymentMethod === "credit" || paymentMethod === "debit") && (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
                    >
                      <div className="space-y-6 p-8 bg-secondary/50 rounded-2xl">
                        <div>
                          <label className="block text-sm font-medium mb-3">Número do Cartão</label>
                          <input
                            type="text"
                            value={paymentData.cardNumber}
                            onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                            required
                            maxLength={19}
                            placeholder="0000 0000 0000 0000"
                            className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-3">Nome no Cartão</label>
                          <input
                            type="text"
                            value={paymentData.cardName}
                            onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                            required
                            placeholder="Nome como está no cartão"
                            className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-3">Validade</label>
                            <input
                              type="text"
                              value={paymentData.expiryDate}
                              onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                              required
                              maxLength={5}
                              placeholder="MM/AA"
                              className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-3">CVV</label>
                            <input
                              type="text"
                              value={paymentData.cvv}
                              onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                              required
                              maxLength={4}
                              placeholder="123"
                              className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                            />
                          </div>
                        </div>

                        {paymentMethod === "credit" && (
                          <div>
                            <label className="block text-sm font-medium mb-3">Parcelas</label>
                            <select
                              value={paymentData.installments}
                              onChange={(e) => setPaymentData({ ...paymentData, installments: e.target.value })}
                              className="w-full px-5 py-4 border-2 border-border rounded-xl focus:outline-none focus:border-primary transition bg-background"
                            >
                              <option value="1">1x de {servicoSelecionado?.preco} sem juros</option>
                              <option value="2">
                                2x de{" "}
                                {servicoSelecionado &&
                                  Math.round(Number.parseInt(servicoSelecionado.preco.replace(/[^0-9]/g, "")) / 2)}{" "}
                                Esc sem juros
                              </option>
                              <option value="3">
                                3x de{" "}
                                {servicoSelecionado &&
                                  Math.round(Number.parseInt(servicoSelecionado.preco.replace(/[^0-9]/g, "")) / 3)}{" "}
                                Esc sem juros
                              </option>
                            </select>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 px-8 py-4 border-2 border-border rounded-full hover:border-primary transition"
                        >
                          Voltar
                        </button>
                        <button
                          type="submit"
                          className="flex-1 px-8 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                        >
                          <Check size={20} />
                          Confirmar Pagamento
                        </button>
                      </div>
                    </form>
                  )}

                  {paymentMethod === "transfer" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="p-8 bg-secondary/50 rounded-2xl space-y-4">
                        <h4 className="font-medium text-lg">Dados para Transferência</h4>
                        <div className="space-y-3 text-muted-foreground">
                          <p>
                            <strong className="text-foreground">Banco:</strong> BCA - Banco Comercial do Atlântico
                          </p>
                          <p>
                            <strong className="text-foreground">Titular:</strong> Maddie Tavares Beauty Boutique
                          </p>
                          <p>
                            <strong className="text-foreground">NIB:</strong> 0000 0000 0000 0000 0000 0000
                          </p>
                          <p>
                            <strong className="text-foreground">Referência:</strong> Usar seu nome como referência
                          </p>
                        </div>
                        <div className="border-t border-primary/20 my-4 pt-4">
                          <p className="text-3xl font-light text-primary">Valor: {servicoSelecionado?.preco}</p>
                        </div>
                        <div className="bg-amber-400/10 border-2 border-amber-400/30 rounded-xl p-4 mt-4">
                          <p className="text-sm text-amber-600 dark:text-amber-400">
                            Após realizar a transferência, envie o comprovante via WhatsApp (238) 333-5512
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 px-8 py-4 border-2 border-border rounded-full hover:border-primary transition"
                        >
                          Voltar
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="flex-1 px-8 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                        >
                          <Check size={20} />
                          Confirmar Agendamento
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-2xl text-center border-2 border-amber-300/20">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" />
              </div>
              <p className="text-accent tracking-widest uppercase text-sm font-light mb-3">Atendimento</p>
              <p className="text-2xl font-light">Segunda a Sábado</p>
              <p className="text-muted-foreground mt-2">9h00 - 20h00</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl text-center border-2 border-amber-400/20">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" />
              </div>
              <p className="text-accent tracking-widest uppercase text-sm font-light mb-3">Telefone</p>
              <p className="text-2xl font-light">(238) 333-5512</p>
              <p className="text-muted-foreground mt-2">Chat via WhatsApp</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-600/10 to-yellow-600/10 rounded-2xl text-center border-2 border-amber-500/20">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" />
              </div>
              <p className="text-accent tracking-widest uppercase text-sm font-light mb-3">Email</p>
              <p className="text-2xl font-light">maddie@tavares.cv</p>
              <p className="text-muted-foreground mt-2">Resposta em 24h</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
