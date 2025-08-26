import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  Briefcase,
  Database,
  Brain
} from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Pre-Sales Solutions Engineer / Technical Architect",
      company: "Current Role",
      period: "Present",
      description: "Leading technical architecture discussions and solution design for enterprise clients.",
      achievements: ["Cloud architecture design", "Technical presentations", "Solution optimization"],
      icon: Briefcase
    },
    {
      title: "Junior Data Engineer",
      company: "HAMOYE",
      period: "July 2022 - Present",
      description: "Working on open source projects and learning modern data engineering methodologies.",
      achievements: ["Team collaboration", "Open source contributions", "Knowledge sharing"],
      icon: Database
    },
    {
      title: "Data Science Intern",
      company: "HAMOYE",
      period: "Aug 2021 - Oct 2021",
      description: "Applied data science concepts to real-world projects including Ethereum price prediction.",
      achievements: ["Ethereum Price Prediction", "Fake News Detection", "Machine Learning implementation"],
      icon: Brain
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-faculty font-bold mb-4 text-white">Professional Experience</h2>
          <p className="text-lg font-faculty text-gray-400">
            My journey in technology and data science
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((job) => (
            <div key={job.title}>
              <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                        <job.icon className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white font-faculty">{job.title}</CardTitle>
                        <CardDescription className="text-lg text-gray-400 font-faculty">{job.company}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-orange-500 text-orange-500 font-faculty">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4 font-faculty">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-orange-500" />
                        <span className="text-gray-300 font-faculty">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
