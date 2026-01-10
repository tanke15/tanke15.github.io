import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";

const publications = [
  {
    category: "Academic Publications",
    items: [
      {
        title: "Innovation Ecosystems in Antitrust",
        venue: "Cambridge Handbook on Theoretical Foundations of Antitrust and Competition Law",
        year: "2026",
        note: "forthcoming",
      },
      {
        title: "Private Labels, Brands and Competition Law Enforcement",
        venue: "Brands, Competition Law and IP (Cambridge University Press)",
        year: "2015",
        coauthors: "with Ariel Ezrachi",
      },
    ],
  },
  {
    category: "Policy Reports",
    items: [
      {
        title: "Generating Economic Growth Through Powershoring",
        venue: "Industry on the Road to 2050, Climate Club",
        year: "2025",
        coauthors: "with Ricardo Hausmann",
      },
      {
        title: "Industrial Policy for Competitiveness in the Energy Transition",
        venue: "Bruegel",
        year: "2025",
        coauthors: "with Ricardo Hausmann",
        link: "https://www.bruegel.org",
      },
      {
        title: "Promoting Innovation Ecosystems in Antitrust: A Framework for Antitrust Analysis Applied to Emerging AI Technologies",
        venue: "Roosevelt Institute",
        year: "2024",
        link: "https://rooseveltinstitute.org",
      },
      {
        title: "Growth Through Inclusion in South Africa",
        venue: "Harvard Growth Lab",
        year: "2023",
      },
      {
        title: "A More Globally Minded European Green Industrial Policy",
        venue: "Bruegel",
        year: "2023",
        coauthors: "with Ricardo Hausmann",
      },
      {
        title: "Innovating Antitrust Law: How Innovation Really Happens and How Antitrust Law Should Adapt",
        venue: "Roosevelt Institute",
        year: "2022",
      },
    ],
  },
  {
    category: "Works in Progress",
    items: [
      {
        title: "Castle in the Sky: The Hidden Architecture of Antitrust",
        note: "Book project; forthcoming",
      },
      {
        title: "Generating Economic Growth through Powershoring",
        coauthors: "with Ricardo Hausmann",
        note: "Climate Policy, forthcoming",
      },
      {
        title: "Balancing Global Competitiveness and Regional Economic Development in US Green Industrial Policy",
        coauthors: "with Eric Protzer, Muhammed Yildirim, Ricardo Hausmann",
        note: "under review",
      },
    ],
  },
];

const Research = () => {
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
              Research
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              My research spans antitrust law, innovation economics, and green industrial policy. 
              I'm particularly interested in how competition law can better account for innovation 
              dynamics and how countries can leverage the energy transition for economic growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Research Interests:</strong> Antitrust, Innovation, Digital Economy, 
              Energy Transition, Industrial Policy, Firm Strategy
            </p>
          </motion.div>

          <div className="mt-16 space-y-16">
            {publications.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h2 className="text-2xl font-serif font-medium text-foreground mb-8 pb-2 border-b border-border">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                              >
                                {item.title}
                                <ExternalLink size={14} className="opacity-50" />
                              </a>
                            ) : (
                              item.title
                            )}
                          </h3>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {item.venue && <span>{item.venue}</span>}
                            {item.coauthors && (
                              <span className="italic"> ({item.coauthors})</span>
                            )}
                            {item.note && (
                              <span className="text-accent"> — {item.note}</span>
                            )}
                          </div>
                        </div>
                        {item.year && (
                          <span className="text-sm text-muted-foreground font-medium">
                            {item.year}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
