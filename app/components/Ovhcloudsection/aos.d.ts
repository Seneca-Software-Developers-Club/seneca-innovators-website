declare module 'aos' {
  interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  declare const AOS: {
    init(options?: AOSOptions): void;
    refresh(): void;
  };

  export default AOS;
}
