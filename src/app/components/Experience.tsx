import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Fullstack Developer',
    company: 'TechCorp Solutions',
    period: 'Jan 2023 - Present',
    description: 'Lead development of enterprise web applications, architecting scalable solutions and mentoring junior developers.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led migration to microservices architecture',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
    ],
  },
  {
    type: 'work',
    title: 'Fullstack Developer',
    company: 'Digital Innovations Inc',
    period: 'Mar 2021 - Dec 2022',
    description: 'Developed and maintained multiple client-facing applications using React, Node.js, and AWS services.',
    achievements: [
      'Built real-time collaboration features using WebSockets',
      'Integrated payment systems processing $2M+ annually',
      'Improved code quality through implementation of testing practices',
    ],
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'StartupHub',
    period: 'Jun 2019 - Feb 2021',
    description: 'Contributed to frontend and backend development of SaaS products, focusing on user experience and performance.',
    achievements: [
      'Developed responsive UI components using React and Tailwind',
      'Implemented RESTful APIs with Node.js and Express',
      'Collaborated with design team to ensure pixel-perfect implementations',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'State University',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and web technologies.',
    achievements: [
      'GPA: 3.8/4.0',
      'Dean\'s List all semesters',
      'Led university hackathon team to 1st place',
    ],
  },
  {
    type: 'education',
    title: 'Fullstack Web Development Bootcamp',
    company: 'Code Academy',
    period: '2018 - 2019',
    description: 'Intensive program covering modern web development technologies and best practices.',
    achievements: [
      'Built 10+ full-stack applications',
      'Learned React, Node.js, MongoDB, PostgreSQL',
      'Graduated top of class',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isWork = exp.type === 'work';
              const Icon = isWork ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                    {/* Icon */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isWork ? 'bg-blue-500/20' : 'bg-purple-500/20'}`}>
                        <Icon className={`w-5 h-5 ${isWork ? 'text-blue-400' : 'text-purple-400'}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm ${isWork ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                            {exp.company}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                          {exp.description}
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                              <span className="text-blue-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
