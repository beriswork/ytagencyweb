import { Button } from "@/components/ui/button"

const GetStarted = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Scale Your Business?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Let's create a YouTube ad strategy that will take your business to new heights.
        </p>
        <Button className="text-lg px-8 py-6 metallic-button glow-effect">
          Schedule Your Free Strategy Call
        </Button>
      </div>
    </section>
  )
}

export default GetStarted