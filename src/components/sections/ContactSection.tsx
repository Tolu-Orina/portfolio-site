import { Button } from "@/components/ui/button";
import { 
  Download, 
  Mail
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="text-4xl font-faculty font-black mb-4 text-white">Let&apos;s Connect</h2>
          <p className="text-lg font-faculty font-semibold text-gray-200 mb-8">
            Ready to discuss your next project or opportunity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="orange-bg hover:orange-bg text-white border-0 font-faculty font-bold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-gray-500 text-gray-800 hover:bg-gray-800 hover:text-white font-faculty font-bold shadow-lg transition-all duration-300 transform hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
