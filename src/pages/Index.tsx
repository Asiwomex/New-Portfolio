import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import PublicationsSection from "@/components/PublicationsSection";
import CertificationsSection from "@/components/CertificationsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="relative overflow-x-clip">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-[20rem] -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-[62rem] -right-20 h-80 w-80 rounded-full bg-pink/15 blur-3xl" />
      <div className="absolute bottom-64 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
    </div>

    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <BlogsSection />
      <PublicationsSection />
      <CertificationsSection />
      <LeadershipSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
