import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                I welcome inquiries about research collaborations, speaking engagements, 
                policy advisory work, and media opportunities.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:Ahuja.Ketan@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground group-hover:text-accent transition-colors">
                      Click to send an email
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Cambridge, Massachusetts
                    </p>
                  </div>
                </div>
              </div>

              {/* Request CV Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 pt-8 border-t border-border"
              >
                <a
                  href="mailto:Ahuja.Ketan@gmail.com?subject=CV%20Request"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
                >
                  <FileText size={18} />
                  Request CV
                </a>
              </motion.div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect on social</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/ketan-ahuja-65897926/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/Ketan_Ahuja_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <Twitter size={20} />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                  <a
                    href="https://bsky.app/profile/ketan-ahuja.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3c-2.39 2.04-7 6.49-7 9.75C5 16.08 7.23 18 10 18c1.28 0 2.44-.46 3.33-1.22a.5.5 0 0 1 .67 0C14.89 17.54 16.05 18 17.33 18c2.77 0 5-1.92 5-5.25 0-3.26-4.61-7.71-7-9.75a.5.5 0 0 0-.67 0z"/>
                      <path d="M5 18c.83 1.5 2.3 2 4 2 1.5 0 2.5-.5 3-1.5.5 1 1.5 1.5 3 1.5 1.7 0 3.17-.5 4-2"/>
                    </svg>
                    <span className="text-sm font-medium">Bluesky</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
