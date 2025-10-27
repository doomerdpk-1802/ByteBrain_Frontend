import { GenericButton } from "./Button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-balance">
          Your Second Brain,
          <span className="block text-blue-600">Amplified</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          Capture fleeting ideas, organize scattered thoughts, and connect
          knowledge across your digital mind. Build upon your insights to unlock
          creativity, accelerate learning, and supercharge productivity.
        </p>

        <div className="flex justify-center">
          <GenericButton onClick={() => {}}>Get Started</GenericButton>
        </div>
      </div>
    </section>
  );
}
