'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface NavigationProps {
  blackText?: boolean
}

export function Navigation({ blackText }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [userName, setUserName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Lógica de Login: Executada apenas no cliente
    const token = localStorage.getItem('token')
    const name = localStorage.getItem('user_name')
    if (token) {
      setIsLogged(true)
      setUserName(name || 'Cliente')
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    setIsLogged(false)
    router.push('/login')
  }

  // Define a cor dos links baseada no scroll ou propriedade blackText
  const linkClass = scrolled || blackText 
    ? 'text-black hover:text-[#e1b01a]' 
    : 'text-white hover:text-[#e1b01a]'

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur border-b border-border shadow-md h-20' 
        : 'bg-transparent h-24'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915331/maddie_tavares/w5io81aj7dshw3h0ocfe.png" 
              alt="Maddie Tavares Logo" 
              className="transition-all duration-300"
              style={{ height: scrolled ? '7vh' : '9vh', width: 'auto' }}
               sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>

          {/* Desktop Menu - GARANTINDO QUE TODOS OS LINKS APARECEM */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className={`text-sm font-medium transition ${linkClass}`}>Home</Link>
            <Link href="/servicos" className={`text-sm font-medium transition ${linkClass}`}>Serviços</Link>
            <Link href="/sobre" className={`text-sm font-medium transition ${linkClass}`}>Sobre</Link>
            <Link href="/contato" className={`text-sm font-medium transition ${linkClass}`}>Contacto</Link>
            
            <Link 
              href="/agendar" 
              className="px-6 py-2 bg-[#e1b01a] text-white rounded-full text-sm font-bold hover:brightness-110 transition shadow-lg"
            >
              Agendar
            </Link>

            {/* ÁREA CONDICIONAL: LOGIN OU PERFIL */}
            {isLogged ? (
              <div className="flex items-center gap-6 pl-4 border-l border-gray-200">
                <Link href="/perfil" className={`flex items-center gap-2 text-sm font-bold ${linkClass}`}>
                  <User size={18} className="text-[#e1b01a]" />
                  <span className="max-w-[100px] truncate">{userName.split(' ')[0]}</span>
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="text-gray-400 hover:text-red-500 transition"
                  title="Sair"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link href="/login" className={`text-sm font-medium ${linkClass}`}>
                Entrar
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition ${scrolled || blackText ? 'text-black' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - CORRIGIDO */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 space-y-4 shadow-xl text-black">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-base font-medium">Home</Link>
            <Link href="/servicos" onClick={() => setIsOpen(false)} className="block text-base font-medium">Servicos</Link>
            <Link href="/sobre" onClick={() => setIsOpen(false)} className="block text-base font-medium">Sobre</Link>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="block text-base font-medium">Contato</Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
               <Link href="/agendar" onClick={() => setIsOpen(false)} className="w-full py-3 bg-[#e1b01a] text-white rounded-xl text-center font-bold">
                Agendar Agora
              </Link>
              {isLogged ? (
                <>
                  <Link href="/perfil" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Meu Perfil</Link>
                  <button onClick={handleLogout} className="text-red-500 font-medium text-left">Sair da Conta</button>
                </>
              ) : (
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Fazer Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}