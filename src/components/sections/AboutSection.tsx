import { Code, Smartphone, Cloud } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: Code,
      title: "Cloud Architecture",
      description: "Designing scalable cloud solutions"
    },
    {
      icon: Smartphone,
      title: "Data Science",
      description: "Machine learning and analytics"
    },
    {
      icon: Cloud,
      title: "DevOps & MLOps",
      description: "Automation and deployment"
    }
  ];

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Services */}
          <div className="space-y-8">
            <div className="space-y-6">
              {services.map((service) => (
                <div key={service.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-faculty font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 font-faculty">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - About Text and Stats */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-faculty font-bold text-white mb-6">About me</h2>
              <p className="text-lg font-faculty text-gray-400 leading-relaxed">
                I started my journey in technology with a passion for solving complex problems. 
                Through my experience in data science and cloud architecture, I&apos;ve learned to love 
                the process of creating scalable solutions from scratch. This has led me to become 
                a Solutions Architect, fulfilling my love for learning and building innovative systems.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-faculty font-bold text-orange-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm font-faculty">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
