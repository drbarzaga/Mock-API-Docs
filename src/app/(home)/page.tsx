import Link from "next/link";
import { ArrowRight, BookOpen, Zap, Shield, Code } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-primary/10 text-primary text-lg font-semibold mb-6">
            <Zap className="w-6 h-6" />
            <span>Mock API</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Mock API
            <br />
            <span className="text-primary">Fictional but useful</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Mock API is an API with fictional data for testing and development.
            Use this API to test, prototype and develop your application without
            the need to connect to the real API.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              View Documentation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
