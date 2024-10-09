import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Youtube, TrendingUp, BarChart3 } from 'lucide-react'

const services = [
  {
    title: "YouTube Ad Creation",
    description: "Compelling video ads that capture attention and drive conversions.",
    icon: Youtube
  },
  {
    title: "Campaign Optimization",
    description: "Data-driven strategies to maximize your ad spend and ROI.",
    icon: TrendingUp
  },
  {
    title: "Performance Analytics",
    description: "Detailed reporting and insights to track your campaign's success.",
    icon: BarChart3
  }
]

const CoreServices = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:bg-card/80 transition-colors duration-300 glow-effect">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreServices