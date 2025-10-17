import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, TrendingDown, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Tu web es invisible',
    description: 'Atraes poco o ningún tráfico cualificado. Los clientes potenciales no te encuentran en Google y tu competencia se lleva toda la atención.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'No generas suficientes leads',
    description: 'Las visitas que recibes no se convierten en prospectos. Tu formulario de contacto acumula polvo y tu teléfono no suena.',
  },
  {
    icon: <TrendingDown className="h-10 w-10 text-primary" />,
    title: 'Estás perdiendo autoridad',
    description: 'Tu sitio se ve anticuado o poco profesional. No inspira la confianza necesaria para que un cliente potencial decida contactarte.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: 'Tu inversión no da resultados',
    description: 'Has gastado dinero en marketing o en un sitio web que simplemente no funciona como esperabas. No ves un retorno claro de tu inversión.',
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Tu sitio web se siente más como un gasto que como una inversión?
          </h2>
          <p className="text-lg text-muted-foreground">
            Si te identificas con alguno de estos problemas, no estás solo. Son los síntomas de una estrategia digital rota.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="bg-background p-8 rounded-xl shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
