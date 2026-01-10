import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";

const writingItems = [
  {
    title: "The Atlas of Economic Complexity: Supporting strategic economic planning and green industrial policy in Ministries of Finance",
    venue: "Macroeconomics of Green and Resilient Transitions, Compendium of Practice",
    date: "June 2025",
    coauthors: "with Muhammed Yildirim",
    link: "https://www.financeministersforclimate.org/compendium",
  },
  {
    title: "The Antitrust Agencies Should Block OpenAI's Windsurf Acquisition To Support AI Innovation",
    venue: "ProMarket",
    date: "May 2025",
    link: "https://www.promarket.org/2025/05/05/the-antitrust-agencies-should-block-openais-windsurf-acquisition-to-support-ai-innovation/",
  },
  {
    title: "The CFPB performs an ancient social function",
    venue: "Fintech Nexus",
    date: "March 2025",
    link: "https://www.fintechnexus.com/the-cfpb-performs-an-ancient-social-function/",
  },
  {
    title: "Here's why Google without Chrome is still a monopoly",
    venue: "MSNBC",
    date: "November 2024",
    coauthors: "with Niko Lusiani",
    link: "https://www.msnbc.com/opinion/msnbc-opinion/google-chrome-sale-monopoly-antitrust-rcna181040",
  },
  {
    title: "Antitrust has a Role in Policing the AI Landscape",
    venue: "Financial Times",
    date: "April 2023",
    link: "https://www.ft.com/content/b2a6ba18-c458-42de-b23b-77e2c1c9e91c",
  },
  {
    title: "Antitrust Misunderstands Innovation. This Is How We Fix It.",
    venue: "ProMarket",
    date: "November 2022",
    link: "https://www.promarket.org/2022/11/02/antitrust-misunderstands-innovation-this-is-how-we-fix-it/",
  },
  {
    title: "How to Converge the US and European Antitrust Approaches Toward Big Tech",
    venue: "ProMarket",
    date: "September 2022",
    coauthors: "with Michal Halperin",
    link: "https://www.promarket.org/2022/09/22/how-to-converge-the-us-and-european-antitrust-approaches-toward-big-tech/",
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
              Writing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Commentary and public writing on antitrust, innovation policy, and the green economy.
            </p>
          </motion.div>

          {/* Featured Writing - Profile Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {writingItems.map((item, index) => (
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
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-6">
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">
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

export default Writing;
