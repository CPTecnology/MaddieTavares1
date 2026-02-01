'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Quem é Maddie Tavares?',
    answer:
      'Maddie Tavares é uma profissional renomada na área de estética e bem-estar, com mais de 7 anos de experiência. Especializada em tratamentos faciais e corporais de alta performance, ela é conhecida por sua abordagem personalizada e resultados excepcionais.',
  },
  {
    question: 'Quais são as especializações de Maddie Tavares?',
    answer:
      'Maddie Tavares é especializada em harmonização facial, tratamentos anti-idade, limpeza de pele profunda, peeling químico, microagulhamento, e diversos protocolos de rejuvenescimento. Ela também possui certificações em técnicas avançadas de estética europeia.',
  },
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é uma avaliação completa onde Maddie analisa o seu tipo de pele, histórico de cuidados, objetivos estéticos e estilo de vida. A partir dessa análise, é criado um plano de tratamento personalizado e exclusivo para você.',
  },
  {
    question: 'Os tratamentos são seguros?',
    answer:
      'Sim, todos os tratamentos realizados pela Maddie Tavares seguem rigorosos protocolos de segurança e higiene. Utilizamos apenas produtos de alta qualidade e equipamentos de última geração certificados.',
  },
  {
    question: 'Quanto tempo dura cada sessão?',
    answer:
      'O tempo varia conforme o tratamento escolhido. Limpezas de pele duram em média 1 hora, enquanto tratamentos mais completos como harmonização facial podem levar de 1h30 a 2 horas. Na consulta inicial, você receberá todas as informações sobre duração e intervalos.',
  },
  {
    question: 'É necessário algum preparo antes dos tratamentos?',
    answer:
      'Depende do procedimento. Para alguns tratamentos, recomendamos evitar exposição solar intensa nos dias anteriores e suspender o uso de ácidos. Todas as orientações específicas serão fornecidas no momento do agendamento.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos pagamento em dinheiro,  em rede 24 e via transferências. Também oferecemos pacotes promocionais com condições especiais de pagamento.',
  },
  {
    question: 'Como posso agendar uma consulta?',
    answer:
      'Você pode agendar sua consulta diretamente pelo nosso site na seção "Agendar", pelo WhatsApp, ou entrando em contato por telefone. Nossa equipe está disponível para ajudá-la a encontrar o melhor horário.',
  },
]

export function FaqSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-2 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reunimos as principais dúvidas sobre a Maddie Tavares e nossos
            tratamentos para ajudá-la a conhecer melhor nosso trabalho.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

