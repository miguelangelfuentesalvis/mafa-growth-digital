import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Cpu, LineChart, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Author = () => {
  const keyPoints = [
    { icon: <Cpu className="h-7 w-7 text-primary" />, text: 'Experto en IA & Automatización de Marketing.' },
    { icon: <LineChart className="h-7 w-7 text-primary" />, text: 'Trafficker Digital con foco en performance y ROI.' },
    { icon: <Code className="h-7 w-7 text-primary" />, text: 'Desarrollador Web Full-Stack (Next.js & Python).' },
  ];

  return (
    <section id="author" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Columna de la Imagen */}
            <motion.div 
              className="relative h-80 md:h-auto"
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src="/images/mafa-profile-picture.jpg" 
                alt="Matias Falla, Mafa Growth Digital" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Columna de Contenido */}
            <motion.div 
              className="p-8 md:p-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                De Trafficker Digital a Arquitecto de Soluciones con IA.
              </h2>
              <p className="text-muted-foreground mb-8">
                Mi nombre es Matías Falla. Comencé en el marketing digital, gestionando campañas y optimizando embudos. Pronto me di cuenta que para generar un impacto real, necesitaba ir más allá. Por eso, me especialicé en desarrollo web y ciencia de datos, uniendo lo mejor de tres mundos para crear soluciones que no solo atraen, sino que también convierten y fidelizan.
              </p>
              
              <div className="space-y-5 mb-10">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">{point.icon}</div>
                    <span className="font-semibold text-lg text-foreground">{point.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <a href="https://www.linkedin.com/in/mafagrowthdigital" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Conecta conmigo en LinkedIn
                  <Linkedin className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
