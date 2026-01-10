import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";

const teachingItems = [
  {
    title: "Leading Green Growth",
    institution: "Harvard Kennedy School",
    period: "2023 – Present",
    description: "Designed and taught a course on Green Growth with Ricardo Hausmann and Dan Schrag. The course explores how countries can leverage the energy transition for economic development and sustainable growth.",
  },
  {
    title: "Antitrust in the 21st Century",
    institution: "Yale School of Management",
    period: "2021 – 2022",
    description: "Designed interdisciplinary course on Antitrust law, economics, and politics with Fiona Scott Morton, Erika Douglas, and Barak Orbach. The course examined modern challenges to competition policy in the digital economy.",
  },
];

const Teaching = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
              Teaching
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am passionate about teaching and have designed and taught courses at 
              Harvard Kennedy School and Yale School of Management on topics ranging from 
              green growth to antitrust policy.
            </p>
          </motion.div>

          {/* Teaching Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {teachingItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-sm overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/8] bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                    <BookOpen size={48} className="text-primary/60" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-serif text-xl font-medium text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-accent text-sm mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Teaching;
