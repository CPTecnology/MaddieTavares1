"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Eye, EyeOff, Loader2, Mail, Lock, Phone, User } from "lucide-react";
import api from "@/lib/api";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "registro">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "telefone") {
      const apenasNumeros = value.replace(/\D/g, "").slice(0, 7);
      setFormData({ ...formData, [name]: apenasNumeros });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (activeTab === "registro") {
        // ... sua lógica de registro permanece igual ...
        if (formData.telefone.length !== 7) {
          setError("O telefone deve ter 7 dígitos.");
          setLoading(false);
          return;
        }
        if (formData.senha !== formData.confirmarSenha) {
          setError("As senhas não coincidem.");
          setLoading(false);
          return;
        }

        await api.post("/auth/registrar", {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          senha: formData.senha,
        });
        alert("Conta criada com sucesso!");
        setActiveTab("login");
     // ... dentro do handleSubmit, na parte do login ...
} else {
  // 1. Tente o login
  const response = await api.post("/auth/login", {
    email: formData.email,
    password: formData.senha, 
  });

  const { role, token, nome } = response.data; // Pegue o nome se o seu backend retornar
  
  // 2. Salva os dados essenciais
  localStorage.setItem("token", token);
  localStorage.setItem("user_role", role);
  if (nome) localStorage.setItem("user_name", nome);

  // 3. Lógica de Redirecionamento
  if (role === "cliente") {
    // Se for cliente, vai para a página de perfil local
    router.push("/perfil");
  } else if (["admin", "funcionario", "profissional", "recepcionista"].includes(role)) {
    // Se for staff/admin, mantém a lógica de ir para o dashboard externo
    const DASHBOARD_URL =
      window.location.hostname === "localhost"
        ? "http://localhost:3001"
        : "https://admin.maddietavares.cv";

    setLoading(false);
    window.location.href = `${DASHBOARD_URL}/login-bypass?token=${token}&role=${role}`;
  } else {
    // Caso padrão (opcional)
    router.push("/perfil");
  }
}
    } catch (err: any) {
      const msg = err.response?.data?.message || "Erro na autenticação.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfaf8]">
      <Navigation />

      <main className="flex-1 relative flex items-center justify-center p-6 py-28">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              filter: "brightness(0.4) blur(3px)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white rounded-4xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <Image
                src="https://res.cloudinary.com/dzdyokoiv/image/upload/f_auto,q_auto/v1769915331/maddie_tavares/w5io81aj7dshw3h0ocfe.png"
                alt="Maddie Tavares"
                width={180}
                height={60}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mx-auto mb-2"
                style={{ width: "auto", height: "auto" }} // <--- ADICIONE ISTO para manter a proporção
              />
              <p className="text-[#d4af37] italic text-xs tracking-[0.3em] uppercase font-light">
                beauty boutique
              </p>
            </div>

            <div className="flex gap-2 mb-8 bg-gray-50 p-1 rounded-2xl">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === "login"
                    ? "bg-white text-[#d4af37] shadow-sm"
                    : "text-gray-400"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("registro")}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === "registro"
                    ? "bg-white text-[#d4af37] shadow-sm"
                    : "text-gray-400"
                }`}
              >
                Registro
              </button>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs rounded-xl text-center border border-red-100">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === "registro" && (
                <>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase ml-2 mb-1">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={18}
                      />
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4af37] transition-all text-sm outline-none"
                        placeholder="Nome e apelido"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase ml-2 mb-1">
                      Telefone (7 dígitos)
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                        size={18}
                      />
                      <input
                        type="tel"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4af37] transition-all text-sm outline-none"
                        placeholder="9XXXXXX"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase ml-2 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4af37] transition-all text-sm outline-none"
                    placeholder="exemplo@mail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase ml-2 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={18}
                  />
                  <input
                    type={showPass ? "text" : "password"}
                    name="senha"
                    required
                    value={formData.senha}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4af37] transition-all text-sm outline-none"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#d4af37]"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {activeTab === "registro" && (
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase ml-2 mb-1">
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={18}
                    />
                    <input
                      type="password"
                      name="confirmarSenha"
                      required
                      value={formData.confirmarSenha}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#d4af37] transition-all text-sm outline-none"
                      placeholder="Repita a senha"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#d4af37] hover:bg-[#b8962e] text-white rounded-2xl font-bold shadow-xl shadow-yellow-700/20 transition-all flex items-center justify-center gap-3 mt-6 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : activeTab === "login" ? (
                  "Entrar"
                ) : (
                  "Criar Conta"
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
