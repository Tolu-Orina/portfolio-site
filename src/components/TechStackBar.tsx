export default function TechStackBar() {
  const technologies = [
    "AWS", "Azure", "Python", "React", "Node.js", "TypeScript", "Docker", "Kubernetes"
  ];

  return (
    <div className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 text-gray-400">
          {technologies.map((tech) => (
            <span key={tech} className="text-lg font-medium hover:text-orange-500 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
