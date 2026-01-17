"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Login() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"login" | "registro">("login")
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (activeTab === "login") {
      const isReceptionist = formData.email.includes("@maddietavares.com") || formData.email.includes("admin")

      if (isReceptionist) {
        alert("Login de recepcionista realizado com sucesso!")
        router.push("/admin/agendamentos")
      } else {
        alert("Login realizado com sucesso!")
        router.push("/")
      }
    } else {
      if (formData.senha !== formData.confirmarSenha) {
        alert("As senhas não coincidem!")
        return
      }
      alert("Registro realizado com sucesso!")
      setActiveTab("login")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-50">
        <Navigation />
      </div>

      <main className="flex-1 relative flex items-center justify-center p-6 py-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/whatsapp-20image-202025-11-17-20at-2021.jpeg)",
              filter: "blur(1px) brightness(0.4)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="text-4xl font-serif font-bold tracking-wide text-primary mb-1 text-center"><img src="/images/logo.png" alt="Maddie Tavares Logo" className="h-12 w-auto mt-4" style={{height: '10vh', width: '25vh'}}/></div>
              <div className="text-lg font-light italic text-primary/80 tracking-widest">beauty boutique</div>
            </div>

            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 px-6 rounded-xl font-medium transition ${
                  activeTab === "login" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("registro")}
                className={`flex-1 py-3 px-6 rounded-xl font-medium transition ${
                  activeTab === "registro" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Registro
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {activeTab === "registro" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition"
                      placeholder="(+238) XXXX-XXXX"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition"
                  placeholder="seumail@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition"
                  placeholder="••••••••"
                />
              </div>

              {activeTab === "registro" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Senha</label>
                  <input
                    type="password"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition"
                    placeholder="••••••••"
                  />
                </div>
              )}

              {activeTab === "login" && (
                <div className="text-right">
                  <Link href="#" className="text-sm text-primary hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition shadow-lg"
              >
                {activeTab === "login" ? "Entrar" : "Criar Conta"}
              </button>
            </form>

            {activeTab === "login" && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Não tem uma conta?{" "}
                  <button onClick={() => setActiveTab("registro")} className="text-primary hover:underline font-medium">
                    Crie agora
                  </button>
                </p>
              </div>
            )}

            {activeTab === "registro" && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Já tem uma conta?{" "}
                  <button onClick={() => setActiveTab("login")} className="text-primary hover:underline font-medium">
                    Faça login
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  )
}
