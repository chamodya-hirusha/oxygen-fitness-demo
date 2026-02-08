import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-heading text-3xl font-bold mb-6">
              OXYGEN <span className="text-primary">FITNESS</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-xs">
              Building stronger bodies and healthier lives since 2014. Join our
              community and transform your fitness journey.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Trainers", "Schedule", "Membership"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Programs</h4>
            <ul className="space-y-3">
              {[
                "Weight Training",
                "Cardio Classes",
                "Personal Training",
                "Group Fitness",
              ].map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>123 Fitness Street, Downtown, New York</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+94 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@oxygenfitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Braintisa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
