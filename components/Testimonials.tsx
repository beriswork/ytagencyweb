import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Life Coach",
    content: "AdScalers transformed my YouTube ad strategy. I've seen a 300% increase in client acquisitions!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Consultant",
    content: "Their expertise in YouTube ads helped me reach my target audience effectively. My ROI has never been better!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Online Course Creator",
    content: "Thanks to AdScalers, my course enrollments have skyrocketed. They truly understand the digital education market.",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:bg-card/80 transition-colors duration-300 glow-effect">
              <CardHeader>
                <CardTitle className="text-white">{testimonial.name}</CardTitle>
                <CardDescription className="text-gray-300">{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials