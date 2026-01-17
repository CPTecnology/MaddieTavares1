import { redirect } from 'next/navigation'

export default function Page() {
  // Redireciona /admin para /admin/agendamentos para evitar 404
  redirect('/admin/agendamentos')
}
