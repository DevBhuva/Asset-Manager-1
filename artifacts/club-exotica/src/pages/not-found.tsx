import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-12">
          The destination you are looking for does not exist or remains hidden.
        </p>
        <Link 
          href="/" 
          className="text-sm tracking-[0.2em] uppercase border border-primary px-8 py-4 hover:bg-primary hover:text-white transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
