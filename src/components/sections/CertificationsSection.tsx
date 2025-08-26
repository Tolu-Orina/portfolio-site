import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud,
  Database,
  Brain,
  Award
} from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "May 2022",
      description: "Validates ability to design and implement distributed systems on AWS",
      badge: "AWS",
      icon: Cloud
    },
    {
      title: "Business Intelligence with ETL and Data Warehousing",
      issuer: "IBM",
      date: "May 2022",
      description: "ETL pipelines with Airflow and Kafka, Data Warehousing with IBM Cognos",
      badge: "IBM",
      icon: Database
    },
    {
      title: "AI in Healthcare Specialization",
      issuer: "Stanford University",
      date: "Feb 2022",
      description: "AI applications in healthcare and machine learning fundamentals",
      badge: "Stanford",
      icon: Brain
    },
    {
      title: "Professional Data Scientist",
      issuer: "DataCamp",
      date: "Sept 2022",
      description: "Data manipulation, visualization, and machine learning expertise",
      badge: "DataCamp",
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-faculty font-bold mb-4 text-white">Certifications & Achievements</h2>
          <p className="text-lg font-faculty text-gray-400">
            Professional certifications and recognitions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title}>
              <Card className="h-full bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                        <cert.icon className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white font-faculty">{cert.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2 bg-gray-700 text-gray-300 border-gray-600 font-faculty">{cert.badge}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-400 font-faculty">{cert.issuer} • {cert.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 font-faculty">{cert.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
