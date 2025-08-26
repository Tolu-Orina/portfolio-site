import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cloud,
  Database,
  Brain,
  Code
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      color: "blue",
      proficiency: 90
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["Apache Airflow", "Apache Kafka", "AWS Redshift", "SQL", "ETL"],
      color: "green",
      proficiency: 85
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLOps"],
      color: "purple",
      proficiency: 88
    },
    {
      icon: Code,
      title: "Software Development",
      skills: ["React", "Node.js", "TypeScript", "Python", "Java"],
      color: "orange",
      proficiency: 82
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-faculty font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-lg font-faculty text-gray-400">
            Comprehensive technical skills across cloud, data, and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <Card className="h-full bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white font-faculty">{category.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-faculty">Proficiency</span>
                      <span className="text-orange-500 font-faculty">{category.proficiency}%</span>
                    </div>
                    <Progress value={category.proficiency} className="h-2 bg-gray-700">
                      <div className="h-full orange-gradient rounded-full" style={{ width: `${category.proficiency}%` }}></div>
                    </Progress>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300 border-gray-600 font-faculty">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
