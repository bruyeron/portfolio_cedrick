import { motion } from 'motion/react';
import { Code2, Database, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React / Next.js', level: 10 },
      { name: 'TypeScript', level: 15 },
      { name: 'Tailwind CSS', level: 12 },
      { name: 'Vue.js', level: 10 },
      { name: 'Redux / Zustand', level: 5 },
      { name: 'React Native', level: 15 },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js / Express', level: 50 },
      { name: 'Python / Django', level: 70 },
      { name: 'PostgreSQL / MySQL', level: 90 },
      { name: 'MongoDB', level: 10 },
      { name: 'GraphQL', level: 10 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 50 },
      { name: 'AWS / Azure', level: 60 },
      { name: 'CI/CD', level: 50 },
      { name: 'Kubernetes', level: 50 },
      { name: 'Linux', level: 90 },
    ],
  },
  {
    title: 'Other Skills',
    icon: Lightbulb,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'System Design', level: 50 },
      { name: '3D Modeling', level: 90 },
      { name: 'Agile / Scrum', level: 30 },
      { name: 'UI/UX Design', level: 82 },
      { name: 'WebSockets', level: 50 },
      { name: 'Microservices', level: 30 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-800">
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
            <Code2 className="w-6 h-6 text-purple-500" />
            <span className="text-sm uppercase tracking-wider text-purple-500 font-semibold">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set covering modern web development technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: '1+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Completed' },
            { number: 'Kelysisa', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  type: 'spring',
                }}
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
