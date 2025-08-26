import BlogSection from "@/views/Home/BlogSection";
import NewDiscoverySection from "@/views/Home/Discovery";
import ExploreSection from "@/views/Home/Explore";
import HeroSection from "@/views/Home/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewDiscoverySection />
      <ExploreSection />
      <BlogSection />
    </>
  );
}
