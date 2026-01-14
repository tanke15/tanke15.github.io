import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";

import leadingGreenGrowthImg from "@/assets/teaching/leading-green-growth.png";
import antitrust21stCenturyImg from "@/assets/teaching/antitrust-21st-century.png";

const teachingItems = [
  {
    title: "Leading Green Growth",
    institution: "Harvard Kennedy School",
    period: "2023 – Present",
    description: "Designed and taught a course on Green Growth with Ricardo Hausmann and Dan Schrag. The course explores how countries can leverage the energy transition for economic development and sustainable growth.",
    image: leadingGreenGrowthImg,
    link: "https://www.hks.harvard.edu/educational-programs/executive-education/leading-green-growth-economic-strategies-low-carbon-world",
  },
  {
    title: "Antitrust in the 21st Century",
    institution: "Yale School of Management",
    period: "2021 – 2022",
    description: "Designed interdisciplinary course on Antitrust law, economics, and politics with Fiona Scott Morton, Erika Douglas, and Barak Orbach. The course examined modern challenges to competition policy in the digital economy.",
    image: antitrust21stCenturyImg,
    link: "https://som.yale.edu/centers/thurman-arnold-project-at-yale/antitrust-law-course",
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
              I love designing creative, interdisciplinary courses that challenge students to make connections and build better intuitions on policy problems. I have designed and taught courses on antitrust and green growth at leading universities.
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
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-sm overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-muted overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                        {item.institution}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                        {item.title}
                        <ExternalLink size={14} className="opacity-50 flex-shrink-0" />
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Teaching;
