import { ExternalLink, BookOpen, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import blogDjango from "@/assets/blog-django-deploy.png";
import blogGithub from "@/assets/blog-github-pages.png";

const blogs = [
  {
    title: "Automated Deployment of a Django To-Do API to AWS EC2 Using GitHub Actions and DockerHub",
    excerpt: "A step-by-step guide on setting up an automated CI/CD pipeline to deploy a Django REST API to AWS EC2 using GitHub Actions, DockerHub, and Docker Compose.",
    url: "https://medium.com/@asiwomex/automated-deployment-of-a-django-to-do-api-to-aws-ec2-using-github-actions-and-dockerhub-31bb6dce688b",
    image: blogDjango,
    tags: ["Django", "AWS EC2", "GitHub Actions", "Docker"],
    readTime: "4 min read",
    gradient: "var(--gradient-primary)",
  },
  {
    title: "Static Website Deployment onto GitHub Pages Using GitHub Actions for CI/CD",
    excerpt: "Learn how to automate the deployment of a static website to GitHub Pages using GitHub Actions workflows for continuous integration and delivery.",
    url: "https://medium.com/@asiwomex/static-website-deployment-onto-github-pages-using-github-actions-for-the-ci-cd-98a71fb5d74d",
    image: blogGithub,
    tags: ["GitHub Actions", "GitHub Pages", "CI/CD", "Static Sites"],
    readTime: "3 min read",
    gradient: "var(--gradient-accent)",
  },
];

const BlogsSection = () => (
  <section id="blogs" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">Blog</span>
        <h2 className="section-title">Technical <span className="gradient-text">Writing</span></h2>
        <p className="section-subtitle">Sharing knowledge through articles and tutorials</p>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <StaggerItem key={blog.title}>
            <motion.a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="glass-card group flex flex-col h-full p-0 overflow-hidden block"
            >
              {/* Blog thumbnail */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[11px]">{tag}</span>
                  ))}
                </div>

                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-base leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={12} /> {blog.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all">
                    Read on Medium <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default BlogsSection;
