import MainSection from '@/components/MainSection';
import CoreServices from '@/components/CoreServices';
import Testimonials from '@/components/Testimonials';
import GetStarted from '@/components/GetStarted';
import ROICalculator from '@/components/ROICalculator';

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainSection />
      <CoreServices />
      <Testimonials />
      <ROICalculator />
      <GetStarted />
    </div>
  );
}