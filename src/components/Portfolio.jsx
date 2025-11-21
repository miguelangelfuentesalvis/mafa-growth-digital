import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Este Portafolio',
      description: 'Este sitio web personal, desarrollado con React, Vite y TailwindCSS, es una demostración de mis habilidades en desarrollo frontend. Incluye un diseño responsivo, animaciones sutiles y una estructura de componentes moderna.',
      image: '/images/banermg.png',
      category: 'web',
      technologies: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: 'https://github.com/miguelangelfuentesalvis',
      featured: true
    },
    // Para agregar un nuevo proyecto, descomenta el siguiente bloque y personalízalo
    /*
    {
      id: 2,
      title: 'Nuevo Proyecto Web',
      description: 'Descripción detallada de tu nuevo proyecto web. Habla sobre el objetivo, el proceso y los resultados.',
      image: '/images/banermg.png',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'GraphQL'],
      liveUrl: 'https://ejemplo.com',
      githubUrl: 'https://github.com/tu-usuario/nuevo-proyecto',
      featured: false
    },
    */
  ];

  return (
    <section id="portfolio" className="scroll-mt-32 py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portafolio de Desarrollo Web
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aquí presento una selección de mis proyectos, donde aplico tecnologías modernas para crear experiencias de usuario fluidas y funcionales.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group ${
                project.featured ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      Destacado
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Ver Sitio</span>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Ver Código</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90"
          >
            Iniciar Proyecto
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;