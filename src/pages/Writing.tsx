import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";

const writingItems = [
  {
    title: "The Atlas of Economic Complexity: Supporting strategic economic planning and green industrial policy in Ministries of Finance",
    venue: "Macroeconomics of Green and Resilient Transitions, Compendium of Practice",
    date: "June 2025",
    coauthors: "with Muhammed Yildirim",
  },
  {
    title: "The Antitrust Agencies Should Block OpenAI's Windsurf Acquisition To Support AI Innovation",
    venue: "ProMarket",
    date: "May 2025",
    link: "https://www.promarket.org",
  },
  {
    title: "The CFPB performs an ancient social function",
    venue: "Fintech Nexus",
    date: "March 2025",
  },
  {
    title: "Here's why Google without Chrome is still a monopoly",
    venue: "MSNBC",
    date: "November 2024",
    coauthors: "with Niko Lusiani",
  },
  {
    title: "Antitrust has a Role in Policing the AI Landscape",
    venue: "Financial Times",
    date: "April 2023",
  },
  {
    title: "Antitrust Misunderstands Innovation. This Is How We Fix It.",
    venue: "ProMarket",
    date: "November 2022",
    link: "https://www.promarket.org",
  },
  {
    title: "How to Converge the US and European Antitrust Approaches Toward Big Tech",
    venue: "ProMarket",
    date: "September 2022",
    coauthors: "with Michal Halperin",
  },
];

const talks = [
  {
    title: "Innovation, AI and Antitrust",
    venue: "Digital Competition Conference, Georgetown University",
    date: "February 2026",
  },
  {
    title: "Presenting Greenplexity",
    venue: "COP 30, Belem, Brazil",
    date: "November 2025",
  },
  {
    title: "'Green Industrial Policy' Panel",
    venue: "Columbia Center on Sustainable Investment, New York Climate Week",
    date: "September 2025",
  },
  {
    title: "Competition Law 2.0: Forging A New Paradigm in a Crisis-Driven World",
    venue: "University College London",
    date: "June 2025",
  },
  {
    title: "Forum on the Macroeconomics of Green and Resilient Transitions",
    venue: "Copenhagen",
    date: "June 2025",
  },
  {
    title: "'Rethinking Economics in Antitrust'",
    venue: "The Henry George School Podcast",
    date: "May 2025",
  },
  {
    title: "The Role of Hydrogen in Achieving a Net Zero Economy",
    venue: "MIT Energy Conference (Keynote Panel)",
    date: "April 2023",
  },
];

const Writing = () => {
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
              Writing & Talks
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Commentary, public writing, and selected presentations on antitrust, 
              innovation policy, and the green economy.
            </p>
          </motion.div>

          {/* Commentary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-medium text-foreground mb-8 pb-2 border-b border-border">
              Commentary & Op-Eds
            </h2>
            <div className="space-y-6">
              {writingItems.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-start gap-2"
                          >
                            <span>{item.title}</span>
                            <ExternalLink size={14} className="opacity-50 mt-1 flex-shrink-0" />
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <div className="mt-1 text-sm text-muted-foreground">
                        <span className="text-accent">{item.venue}</span>
                        {item.coauthors && (
                          <span className="italic"> ({item.coauthors})</span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Talks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-medium text-foreground mb-8 pb-2 border-b border-border">
              Selected Talks & Presentations
            </h2>
            <div className="space-y-6">
              {talks.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.venue}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Writing;
