import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, HardHat, Rocket } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: '1. Diagnóstico y Auditoría Inicial',
      description: 'Analizamos tu situación actual, tu competencia y tus objetivos. Identificamos puntos de fricción y oportunidades de mejora en tu embudo de ventas digital.',
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: '2. Estrategia y Arquitectura de Conversión',
      description: 'Diseñamos un plan a medida. Definimos la estructura del sitio, el recorrido del usuario y los puntos de captura de leads para maximizar la conversión.',
    },
    {
      icon: <HardHat className="h-8 w-8 text-primary" />,
      title: '3. Construcción con Tecnología de Vanguardia',
      description: 'Desarrollamos tu sitio web con Next.js, React Server Components y una arquitectura optimizada para la velocidad y el SEO. Integramos las automatizaciones necesarias.',
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: '4. Lanzamiento, Medición y Optimización',
      description: 'Lanzamos tu nuevo vendedor digital. Monitorizamos el rendimiento con herramientas de análisis y aplicamos mejoras continuas para asegurar un ROI creciente.',
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Así construyo tu nuevo Vendedor Digital.
          </h2>
          <p className="text-lg text-muted-foreground">
            Mi metodología en 4 pasos está diseñada para entregar un activo digital que no solo se ve bien, sino que trabaja para ti.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* La línea vertical de la línea de tiempo */}
          <div className="absolute left-9 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative pl-20 mb-12 last:mb-0"
            >
              {/* El punto en la línea de tiempo */}
              <div className="absolute left-9 top-1 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center -translate-x-1/2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0 mt-[-4px] hidden md:block">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
