"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const ROICalculator = () => {
  const [budget, setBudget] = useState('')
  const [roi, setRoi] = useState<number | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const calculateROI = () => {
    const budgetNum = parseFloat(budget)
    if (isNaN(budgetNum)) return

    const estimatedROI = budgetNum * 4.3
    setRoi(estimatedROI)
    setShowConfetti(true)
  }

  useEffect(() => {
    if (showConfetti) {
      const confettiCount = 100
      const container = document.querySelector('#calculator')

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div')
        confetti.classList.add('confetti')
        confetti.style.left = `${Math.random() * 100}%`
        confetti.style.animationDelay = `${Math.random() * 3}s`
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        container?.appendChild(confetti)

        confetti.animate([
          { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          { transform: 'translateY(100vh) rotate(720deg)', opacity: 0 }
        ], {
          duration: 3000 + Math.random() * 3000,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => confetti.remove()
      }

      setTimeout(() => setShowConfetti(false), 4000)
    }
  }, [showConfetti])

  return (
    <section id="calculator" className="py-20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card glow-effect">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center mb-4 text-white">ROI Calculator</CardTitle>
            <CardDescription className="text-center text-gray-300">Estimate your return on ad spend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Input
                type="number"
                placeholder="Enter your ad budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="flex-grow bg-muted text-white"
              />
              <Button onClick={calculateROI} className="metallic-button">Calculate ROI</Button>
            </div>
            {roi !== null && (
              <div className="text-center mt-6 animated-gradient p-4 rounded-lg">
                <p className="text-xl mb-2 text-white">Estimated Return:</p>
                <p className="text-3xl font-bold text-white">${roi.toFixed(2)}</p>
                <p className="mt-2 text-sm text-gray-300">Based on our average 4.3x return on ad spend</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ROICalculator