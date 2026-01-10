import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";

const academicPublications = [
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
  {
    title: "Exploring Global Clean Energy Supply Chains",
    coauthors: "Yang Li, Ketan Ahuja, Muhammed Yildirim, Ricardo Hausmann",
    note: "forthcoming",
  },
  {
    title: "Industrial Clusters in European Clean Energy Supply Chains",
    coauthors: "Ketan Ahuja, Karan Daryanani, and Muhammed Yildirim",
    note: "forthcoming",
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
];

const policyPublications = [
  {
    title: "Generating Economic Growth Through Powershoring",
    venue: "Industry on the Road to 2050, the Climate Club",
    date: "November 2025",
    coauthors: "with Ricardo Hausmann",
    link: "https://climate-club.org/",
    image: "/images/powershoring.jpg",
  },
  {
    title: "Industrial Policy for Competitiveness in the Energy Transition",
    venue: "Bruegel",
    date: "March 2025",
    coauthors: "with Ricardo Hausmann",
    link: "https://www.bruegel.org/policy-brief/industrial-policy-competitiveness-energy-transition",
    image: "/images/bruegel-industrial.jpg",
  },
  {
    title: "Promoting Innovation Ecosystems in Antitrust: A Framework for Antitrust Analysis Applied to Emerging AI Technologies",
    venue: "Roosevelt Institute",
    date: "June 2024",
    link: "https://rooseveltinstitute.org/publications/promoting-innovation-ecosystems-in-antitrust/",
    image: "/images/roosevelt-ai.jpg",
  },
  {
    title: "A More Globally Minded European Green Industrial Policy",
    venue: "Bruegel",
    date: "July 2023",
    coauthors: "with Ricardo Hausmann",
    link: "https://www.bruegel.org/blog-post/more-globally-minded-european-green-industrial-policy",
    image: "/images/bruegel-green.jpg",
  },
  {
    title: "Innovating Antitrust Law: How Innovation Really Happens and How Antitrust Law Should Adapt",
    venue: "Roosevelt Institute",
    date: "October 19, 2022",
    link: "https://rooseveltinstitute.org/publications/innovating-antitrust-law/",
    image: "/images/roosevelt-antitrust.jpg",
  },
  {
    title: "Converging International Competition Enforcement in the Technology Industry",
    venue: "M-RCBG Associate Working Paper No. 190",
    date: "2022",
    link: "https://www.hks.harvard.edu/centers/mrcbg/publications/awp/awp190",
    image: "/images/mrcbg-tech.jpg",
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My research addresses how policy can make markets work better for people by reducing 
              inequality, creating opportunity, and sharing power. My work is often interdisciplinary, 
              connecting themes across the social sciences, to solve pressing policy problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My recent research focuses on two questions:
            </p>
            <ol className="text-muted-foreground leading-relaxed mb-6 list-decimal list-inside space-y-2">
              <li>How to regulate market competition in ways that reduce inequality, share power more broadly, and support innovation and economic growth.</li>
              <li>How policymakers can generate economic growth in the energy transition, and help the world decarbonize at the same time.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Research Interests:</strong> Antitrust, Innovation, the Digital Economy, 
              the Energy Transition, Industrial Policy, Firm Strategy
            </p>
          </motion.div>

          {/* Academic Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-medium text-foreground mb-8 pb-2 border-b border-border">
              Academic Publications
            </h2>
            <div className="space-y-6">
              {academicPublications.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">
                        {item.title}
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

          {/* Policy Publications - Profile Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-medium text-foreground mb-8 pb-2 border-b border-border">
              Policy Publications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyPublications.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group block bg-card border border-border rounded-sm overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6">
                      <span className="text-xs font-medium uppercase tracking-wider text-accent">
                        {item.venue}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-3 mb-2 flex items-start gap-2">
                      <span>{item.title}</span>
                      <ExternalLink size={14} className="opacity-50 flex-shrink-0 mt-1" />
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {item.coauthors && (
                        <p className="italic mb-1">{item.coauthors}</p>
                      )}
                      <p className="text-accent">{item.date}</p>
                    </div>
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

export default Research;
