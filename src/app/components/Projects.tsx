import { motion } from 'motion/react';
import { CodeXml, ExternalLink, Tag } from 'lucide-react';
import flashProdImg from "../../assets/projet_pic/flashprod.png";

const projects = [
  {
    title: 'Flash Production – KPI Monitoring System',
    description: "Production monitoring system for contact centers that turns CSV data into interactive KPI dashboards with role-based access and a full-stack architecture.",
    image: flashProdImg,
    tags: ['Python','ReactJS', 'Node.js', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com/bruyeron/flash-postgres',
    demo: 'https://flashprod.netlify.app/',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive data visualizations, custom reporting, and AI-powered insights for business intelligence.',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Nzk3MzIzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'Next.js', 'D3.js', 'MongoDB', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop interface, team workspaces, and real-time synchronization across devices.',
    image: 'https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3Nzk3OTIxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Express', 'Socket.io', 'MySQL', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Social Media Platform',
    description: 'Modern social networking platform with content feeds, real-time messaging, stories feature, and advanced privacy controls.',
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBsYXRmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3OTc2OTc2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, instant transfers, and comprehensive financial management tools.',
    image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc5NzYwNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Admin Dashboard',
    description: 'Comprehensive admin panel with user management, system monitoring, automated reporting, and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Nzk3OTIxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Angular', 'NestJS', 'PostgreSQL', 'Elasticsearch', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-900">
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
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

                {/* Links */}
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
                    Code
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
                    Demo
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
