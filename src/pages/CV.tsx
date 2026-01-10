import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";

const cvSections = [
  {
    title: "Current Position",
    items: [
      {
        role: "Fellow, Growth Lab",
        institution: "Harvard Kennedy School",
        period: "Sep 2022 – Present",
        description: "Created and lead a research program on green economic growth & industrial policy. Policy engagements in Morocco, South Africa, Azerbaijan, and the Coalition of Finance Ministers.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        role: "DPhil in Law",
        institution: "University of Oxford",
        period: "2022 – 2026 (expected)",
        description: 'Thesis: "Castle in the Sky: The Hidden Architecture of Antitrust" | Supervisor: Ariel Ezrachi',
      },
      {
        role: "Master in Public Policy (MPP)",
        institution: "Harvard Kennedy School",
        period: "2020 – 2022",
      },
      {
        role: "B.A. Jurisprudence (Law)",
        institution: "University of Oxford",
        period: "2013",
      },
    ],
  },
  {
    title: "Fellowships & Affiliations",
    items: [
      {
        role: "Affiliate",
        institution: "Oxford Institute for New Economic Thinking",
        period: "2022 – Present",
      },
      {
        role: "Visiting Fellow (Thurman Arnold Project)",
        institution: "Yale School of Management",
        period: "2021",
      },
      {
        role: "Fellow, Solar Energy Technologies Office",
        institution: "U.S. Department of Energy",
        period: "Dec 2019 – Aug 2020",
      },
    ],
  },
  {
    title: "Teaching",
    items: [
      {
        role: "Leading Green Growth",
        institution: "Harvard Kennedy School",
        period: "2023 – Present",
        description: "Designed and taught a course on Green Growth with Ricardo Hausmann and Dan Schrag.",
      },
      {
        role: "Antitrust in the 21st Century",
        institution: "Yale School of Management",
        period: "2021 – 2022",
        description: "Designed interdisciplinary course on Antitrust law, economics, and politics with Fiona Scott Morton, Erika Douglas, and Barak Orbach.",
      },
    ],
  },
  {
    title: "Selected Awards & Grants",
    items: [
      { role: "Bruegel Grant", institution: "EUR 25,000 (with Growth Lab)", period: "2026" },
      { role: "Bezos Earth Fund", institution: "USD 500,000 (with Growth Lab)", period: "2023" },
      { role: "University of Oxford Doctoral Fellowship", institution: "GBP 30,000", period: "2022" },
      { role: "Roosevelt Institute", institution: "USD 6,500", period: "2022, 2024" },
    ],
  },
  {
    title: "Professional Experience",
    items: [
      {
        role: "Consultant / Strategy & Operations Director",
        institution: "JD Healthcare",
        period: "2017 – 2019",
        description: "Restructured SME with £20M revenue. Doubled revenue and quadrupled EBITDA margins.",
      },
      {
        role: "UK Qualified Attorney",
        institution: "Latham & Watkins LLP",
        period: "2014 – 2016",
        description: "Antitrust, litigation, and commercial matters.",
      },
    ],
  },
];

const CV = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
                Curriculum Vitae
              </h1>
              <p className="text-muted-foreground">
                Full academic CV available for download
              </p>
            </div>
            <a
              href="/Ketan_Ahuja_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors self-start md:self-auto"
            >
              <Download size={18} />
              Download PDF
            </a>
          </motion.div>

          <div className="space-y-12">
            {cvSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.05 }}
              >
                <h2 className="text-xl font-serif font-medium text-foreground mb-6 pb-2 border-b border-border">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-8"
                    >
                      <div>
                        <h3 className="font-medium text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-accent text-sm mt-0.5">
                          {item.institution}
                        </p>
                        {item.description && (
                          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <h2 className="text-xl font-serif font-medium text-foreground mb-4">
              Certifications & Licenses
            </h2>
            <ul className="text-muted-foreground space-y-1">
              <li>UK Bar Admission (2016 – present)</li>
              <li>Yale Center for Business and Environment, Certificate in Financing and Deploying Clean Energy (2020)</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CV;
