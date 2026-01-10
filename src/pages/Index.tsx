import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
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
                Fellow at the{" "}
                <span className="text-foreground font-medium">Harvard Kennedy School Growth Lab</span>{" "}
                and DPhil candidate at{" "}
                <span className="text-foreground font-medium">Oxford University</span>, researching antitrust, 
                innovation, and green industrial policy.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                My work bridges academic research and policy practice, advising governments 
                and institutions on economic growth strategies and competition policy.
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
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-sm -z-10 transform rotate-3" />
                <img
                  src={profilePhoto}
                  alt="Ketan Ahuja"
                  className="w-72 md:w-80 lg:w-96 rounded-sm object-cover aspect-[3/4] shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Research Focus</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Exploring the intersection of economic policy, competition law, and sustainable development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Antitrust & Competition",
                description: "Reimagining competition law for the digital age, with focus on innovation ecosystems and emerging technologies like AI.",
                icon: FileText,
              },
              {
                title: "Green Industrial Policy",
                description: "Developing frameworks for economic growth through the energy transition, working with governments worldwide.",
                icon: BookOpen,
              },
              {
                title: "Innovation Economics",
                description: "Understanding how innovation really happens and how policy can better support dynamic, innovative economies.",
                icon: Mic,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated group"
              >
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Affiliations</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { institution: "Harvard Kennedy School", role: "Fellow, Growth Lab" },
              { institution: "University of Oxford", role: "DPhil Candidate" },
              { institution: "Oxford INET", role: "Affiliate" },
              { institution: "Yale School of Management", role: "Former Visiting Fellow" },
            ].map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="font-serif text-lg font-medium text-foreground">
                  {item.institution}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{item.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Interested in collaboration?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              I'm always open to discussing research opportunities, policy work, 
              and speaking engagements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
