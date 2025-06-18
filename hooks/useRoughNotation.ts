import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

type RoughAnnotationType = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';

interface UseRoughNotationOptions {
  type: RoughAnnotationType;
  color?: string;
  strokeWidth?: number;
  padding?: number;
  multiline?: boolean;
  animate?: boolean;
  animationDuration?: number;
  iterations?: number;
}

export function useRoughNotation(
  options: UseRoughNotationOptions,
  trigger: boolean = true
) {
  const elementRef = useRef<HTMLElement | null>(null);
  const annotationRef = useRef<{ show: () => void; hide: () => void } | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!elementRef.current || !trigger || hasAnimatedRef.current) return;

    if (!annotationRef.current) {
      annotationRef.current = annotate(elementRef.current, {
        type: options.type,
        color: options.color || '#10b981',
        strokeWidth: options.strokeWidth || 2,
        padding: options.padding || 5,
        multiline: options.multiline || false,
        animate: options.animate !== false,
        animationDuration: options.animationDuration || 800,
        iterations: options.iterations || 1,
      });
    }

    const timer = setTimeout(() => {
      if (annotationRef.current && !hasAnimatedRef.current) {
        annotationRef.current.show();
        hasAnimatedRef.current = true;
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [trigger, options]);

  useEffect(() => {
    return () => {
      if (annotationRef.current) {
        annotationRef.current.hide();
      }
    };
  }, []);

  return elementRef;
} 