import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-medium text-foreground">
              Ketan Ahuja
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:Ahuja.Ketan@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ketan-ahuja-65897926/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/Ketan_Ahuja_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://bsky.app/profile/ketan-ahuja.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Bluesky"
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
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ketan Ahuja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
