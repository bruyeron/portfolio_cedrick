import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Master Informatique (L3)',
    organization: 'Le CNAM Madagascar',
    location: 'Antananarivo, Madagascar',
    period: 'Septembre 2026 - Juillet 2028',
    description: "Formation en développement logiciel, ingénierie web et systèmes informatiques avec une orientation fullstack et architecture logicielle.",
    achievements: [
      "Développement de projets fullstack avec technologies web modernes",
      "Pratique des concepts d’architecture logicielle et API REST",
      "Travaux pratiques en algorithmique et structures de données",
    ],
  },
  {
    type: 'work',
    title: 'Stagiaire Data & Planification',
    organization: 'Connecteo (Groupe AXIAN)',
    location: 'Antananarivo, Madagascar',
    period: 'Février 2026 - Mai 2026',
    description: "Travail sur l'analyse de données, l'automatisation et le développement d'outils internes de production.",
    achievements: [
      "Développement d'outils d'analyse avec React.js, FastAPI et PostgreSQL",
      "Automatisation de tâches via scripts Python",
      "Traitement de données avec NumPy, Pandas et Selenium",
      "Administration Linux et déploiement via Docker",
    ],
  },
  {
    type: 'work',
    title: 'Stagiaire Développeur',
    organization: 'Orange Digital Center Antananarivo',
    location: 'Antananarivo, Madagascar',
    period: 'Août 2025 - Novembre 2025',
    description: "Participation à un programme d'innovation et développement d'un projet fullstack dans le cadre de l'Orange Summer Challenge.",
    achievements: [
      "Participation à l'Orange Summer Challenge 2025 (projet Tranon'AI)",
      "Développement d'un site vitrine avec React.js et TailwindCSS",
      "Conception UI/UX et intégration de fonctionnalités avancées (assistance vocale, modélisation 3D)",
    ],
  },
  {
    type: 'work',
    title: 'Front-end Developer (Stagiaire)',
    organization: 'EDBM Madagascar',
    location: 'Antananarivo, Madagascar',
    period: 'Janvier 2025 - Avril 2025',
    description: "Développement d'un site vitrine et amélioration d'un système de gestion de contenu pour une structure institutionnelle.",
    achievements: [
      "Développement d'un site vitrine avec Next.js",
      "Intégration de documents dynamiques et amélioration de l'interface utilisateur",
      "Création de templates HTML/CSS pour la facturation",
    ],
  },
  {
    type: 'education',
    title: 'Licence Informatique (L3)',
    organization: 'Le CNAM Madagascar',
    location: 'Antananarivo, Madagascar',
    period: 'Octobre 2023 - Juillet 2025',
    description: "Formation en développement logiciel, ingénierie web et systèmes informatiques avec une orientation fullstack et architecture logicielle.",
    achievements: [
      "Développement de projets fullstack avec technologies web modernes",
      "Pratique des concepts d’architecture logicielle et API REST",
      "Travaux pratiques en algorithmique et structures de données",
    ],
  },
  {
    type: 'education',
    title: 'Licence Physique-Chimie',
    organization: 'Université d’Ankatso',
    location: 'Antananarivo, Madagascar',
    period: 'Janvier 2021 - Juillet 2022',
    description: "Formation scientifique axée sur la physique fondamentale et la chimie générale, avec développement de compétences analytiques.",
    achievements: [
      "Développement de capacités analytiques et logiques",
      "Résolution de problèmes scientifiques complexes",
    ],
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-900">
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
            <Briefcase className="w-6 h-6 text-green-500" />
            <span className="text-sm uppercase tracking-wider text-green-500 font-semibold">
              Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-16 items-start md:items-center`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{item.period}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="text-blue-400">
                          {item.organization}
                        </div>
                        <div className="text-sm text-gray-500">{item.location}</div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 ${
                              isEven ? 'md:flex-row-reverse md:text-right' : ''
                            }`}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Icon - Center */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-900 rounded-full border-4 border-gray-700 items-center justify-center z-10">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                        item.type === 'work'
                          ? 'from-blue-500 to-purple-600'
                          : 'from-green-500 to-emerald-600'
                      } flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Icon - Mobile */}
                  <div className="md:hidden flex items-center gap-3 mb-2">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                        item.type === 'work'
                          ? 'from-blue-500 to-purple-600'
                          : 'from-green-500 to-emerald-600'
                      } flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Spacer for even layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
