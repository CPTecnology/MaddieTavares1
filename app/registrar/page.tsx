"use client";
export const runtime = 'edge';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import api from "@/app/lib/api";

export default function Registrar() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estados para mostrar/esconder senha
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "telefone") {
      // 1. Remove qualquer coisa que não seja número
      // 2. Corta a string para ter NO MÁXIMO 7 caracteres
      const apenasNumeros = value.replace(/\D/g, "").slice(0, 7);
      setFormData((prev) => ({ ...prev, [name]: apenasNumeros }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.telefone.length !== 7) {
      setError("O telefone deve ter exatamente 7 dígitos.");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/registrar", {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        senha: formData.senha,
      });

      if (response.status === 201) {
        alert("Conta criada com sucesso!");
        router.push("/login");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao criar conta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#3d2b2b] relative overflow-hidden">
      <Navigation />

      {/* Background image similar ao seu screenshot */}

      <section className="relative z-10 py-20 px-6 pt-32 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 pb-4 text-center">
            <img
              src="/logo-maddie.png"
              alt="Maddie Tavares"
              className="h-12 mx-auto mb-2"
            />
            <p className="text-[#d4af37] italic text-xs tracking-[0.2em] uppercase">
              beauty boutique
            </p>
          </div>

          {/* Tabs de Login/Registro */}
          <div className="flex px-8 gap-4 mb-6">
            <Link
              href="/login"
              className="flex-1 py-3 text-center text-gray-400 bg-gray-50 rounded-xl font-medium"
            >
              Login
            </Link>
            <button className="flex-1 py-3 text-center text-white bg-[#eab308] rounded-xl font-medium">
              Registro
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
            {error && (
              <p className="text-red-500 text-xs text-center bg-red-50 p-2 rounded-lg">
                {error}
              </p>
            )}

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#f0f4f8] border border-transparent focus:border-[#d4af37] focus:bg-white rounded-xl outline-none transition-all text-sm"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                Telefone (7 dígitos)
              </label>
              <input
                type="text"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                maxLength={7}
                className="w-full px-4 py-3 border border-gray-200 focus:border-[#d4af37] rounded-xl outline-none transition-all text-sm"
                placeholder="Ex: 9752586"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#f0f4f8] border border-transparent focus:border-[#d4af37] focus:bg-white rounded-xl outline-none transition-all text-sm"
                placeholder="exemplo@email.com"
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                Senha
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="senha"
                required
                value={formData.senha}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:border-[#d4af37] rounded-xl outline-none transition-all text-sm pr-10"
                placeholder="Sua senha"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 bottom-3 text-gray-400"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">
                Confirmar Senha
              </label>
              <input
                type={showConfirmPass ? "text" : "password"}
                name="confirmarSenha"
                required
                value={formData.confirmarSenha}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:border-[#d4af37] rounded-xl outline-none transition-all text-sm pr-10"
                placeholder="Repita a senha"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 bottom-3 text-gray-400"
              >
                {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#eab308] hover:bg-[#d4a007] text-white rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Criar Conta"}
            </button>

            <p className="text-center text-[10px] text-gray-400 mt-4">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-[#d4af37] font-bold">
                Faça login
              </Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
