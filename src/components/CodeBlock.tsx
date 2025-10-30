import { useEffect, useRef } from 'react';
import { highlightCode } from '../utils/highlightCode';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = highlightCode(code);
    }
  }, [code]);

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-language">{language}</span>
      </div>
      <pre className="code-pre">
        <code ref={codeRef} className="code-content" />
      </pre>
    </div>
  );
}
