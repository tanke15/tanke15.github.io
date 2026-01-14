import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight text-balance">
                Ketan Ahuja
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Fellow at{" "}
                <span className="text-foreground font-medium">Harvard Kennedy School's Growth Lab</span>{" "}
                and DPhil candidate at the{" "}
                <span className="text-foreground font-medium">University of Oxford</span>.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                I work on economic growth, antitrust, industrial policy, and the energy transition. 
                I'm motivated to make markets work better for people: reducing inequality, sharing power, 
                and supporting innovation and economic growth.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                My work bridges academic research and policy practice, helping policymakers make 
                better policy with frontier research. I have been published by Cambridge University Press, 
                Harvard Kennedy School, the Financial Times, ProMarket, MSNBC, Bruegel and the Roosevelt 
                Institute, among others.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                My prior experience has spanned industrial policy and economic development initiatives 
                in the clean energy and technology sectors, commercial management in the private sector, 
                and legal advisory work in antitrust and competition policy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
                >
                  View Research
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-sm hover:bg-secondary transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <img
                src={profilePhoto}
                alt="Ketan Ahuja"
                className="w-72 md:w-80 lg:w-96 rounded-sm object-cover aspect-[3/4] shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
