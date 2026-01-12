import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import capitolForumImage from "@/assets/speaking/capitol-forum.png";
import henryGeorgeImage from "@/assets/speaking/henry-george-podcast.png";

const featuredTalks = [
  {
    title: "Antitrust Risks in the OpenAI-Windsurf Deal with Ketan Ahuja",
    venue: "Capitol Forum",
    date: "June 4, 2025",
    link: "https://thecapitolforum.com/resource/antitrust-risks-in-the-openai-windsurf-deal-with-ketan-ahuja/",
    image: capitolForumImage,
  },
  {
    title: "Rethinking Economics in Antitrust",
    venue: "The Henry George School Podcast",
    date: "May 15, 2025",
    link: "https://creators.spotify.com/pod/profile/smart-talk-hgsss/episodes/158--Rethinking-Economics---Using-antitrust-to-create-ecosystems-of-innovation-e32obhm/a-abuh12l",
    image: henryGeorgeImage,
  },
];

const otherTalks = [
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
    title: "Fast-tracking international industry decarbonization",
    venue: "Climate Club, New York Climate Week",
    date: "September 26, 2024",
  },
  {
    title: "Workshop on Law and Industrial Policy",
    venue: "Yale Law School, Center for Private Law",
    date: "December 7-8, 2023",
  },
  {
    title: "Decarbonization - From Obligation to Opportunity",
    venue: "IFC Conference Panel, Washington DC",
    date: "November 9, 2023",
  },
  {
    title: "Innovating Antitrust Law",
    venue: "Oxford Institute for New Economic Thinking",
    date: "April 27, 2023",
  },
  {
    title: "Greening Economic Development: What does it take?",
    venue: "Harvard Kennedy School",
    date: "April 13, 2023",
  },
  {
    title: "Innovation and Competition in the Startup Economy",
    venue: "Virginia Law and Business Review Symposium",
    date: "April 7, 2023",
  },
  {
    title: "The Role of Hydrogen in Achieving a Net Zero Economy",
    venue: "MIT Energy Conference (Keynote Panel)",
    date: "April 2023",
  },
];

const Speaking = () => {
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
              Speaking
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Selected talks, podcast appearances and speaking engagements.
            </p>
          </motion.div>

          {/* Featured Talks - Profile Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-serif font-medium text-foreground mb-8 pb-2 border-b border-border">
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredTalks.map((item, index) => (
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
                  <div className="aspect-[16/9] bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-foreground text-lg group-hover:text-accent transition-colors mb-2 flex items-start gap-2">
                      <span>{item.title}</span>
                      <ExternalLink size={14} className="opacity-50 flex-shrink-0 mt-1.5" />
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      <p className="text-accent mb-1">{item.venue}</p>
                      <p>{item.date}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Other Speaking Engagements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-medium text-foreground mb-8 pb-2 border-b border-border">
              Other Engagements
            </h2>
            <div className="space-y-6">
              {otherTalks.map((item, index) => (
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

export default Speaking;
