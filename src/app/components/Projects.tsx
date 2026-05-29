import { motion } from 'motion/react';
import { ExternalLink, Tag, CodeXml,} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import flashProdImg from "../../assets/projet_pic/flashprod.png";
import tranonaiImg from "../../assets/projet_pic/tranonai.png";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.items[0].title,
      description: t.projects.items[0].description,
      image: flashProdImg,
      tags: [
        'Python',
        'ReactJS',
        'TailwindCSS',
        'Node.js',
        'PostgreSQL',
        'FastAPI',
      ],
      github: 'https://github.com/bruyeron/flash-postgres',
      demo: 'https://flashprod.netlify.app/',
    },

    {
      title: t.projects.items[1].title,
      description: t.projects.items[1].description,
      image: tranonaiImg,
      tags: [
        'ReactJS',
        'Node.js',
        'TailwindCSS',
      ],
      github: 'https://github.com/bruyeron/tranonai',
      demo: 'https://tranonai.netlify.app/',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Tag className="w-6 h-6 text-blue-500" />

            <span className="text-sm uppercase tracking-wider text-blue-500 font-semibold">
              Portfolio
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            {t.projects.title}
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all group"
            >

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Title */}
                <h3 className="text-2xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors flex-1 justify-center"
                  >
                    <CodeXml className="w-4 h-4" />

                    {t.projects.items[0].code}
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 text-white rounded-lg text-sm transition-all flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />

                    {t.projects.items[0].demo}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}