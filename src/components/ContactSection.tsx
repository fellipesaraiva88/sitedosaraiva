import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const sfTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(sfTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-8 py-24"
    >
      <h2 className="section-header">Contact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Links */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-6">Get in Touch</h3>
          
          <div className="flex flex-col gap-1">
            <a 
              href="mailto:hello@mayachen.design"
              className="flex items-center gap-3 py-2 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span className="text-[17px] text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-200">
                hello@mayachen.design
              </span>
            </a>
            
            <a 
              href="https://linkedin.com/in/mayachen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
              <span className="text-[17px] text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-200 flex items-center gap-1">
                linkedin.com/in/mayachen
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-muted-foreground transition-colors duration-200" />
              </span>
            </a>
            
            <a 
              href="https://dribbble.com/mayachen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 group"
            >
              <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
              </svg>
              <span className="text-[17px] text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-200 flex items-center gap-1">
                dribbble.com/mayachen
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-muted-foreground transition-colors duration-200" />
              </span>
            </a>
          </div>
        </div>
        
        {/* Location */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-6">Location</h3>
          
          <p className="text-[17px] text-muted-foreground font-medium flex items-center gap-2">
            San Francisco, USA <span className="text-xl">🇺🇸</span>
          </p>
          <p className="text-[17px] text-text-tertiary font-medium mt-2">
            {time}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
