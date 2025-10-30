import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export function parseMarkdown(content: string): React.ReactNode[] {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || 'javascript';
      const codeLines: string[] = [];
      i++;

      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }

      elements.push(
        <CodeBlock
          key={elements.length}
          code={codeLines.join('\n')}
          language={language}
        />
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={elements.length} className="post-heading">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      elements.push(
        <h1 key={elements.length} className="post-heading">
          {line.slice(2)}
        </h1>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={elements.length} className="post-spacer" />);
    } else {
      const formatted = formatInlineCode(line);
      elements.push(
        <p key={elements.length} className="post-paragraph">
          {formatted}
        </p>
      );
    }

    i++;
  }

  return elements;
}

function formatInlineCode(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /`([^`]+)`/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <code key={parts.length} className="inline-code">
        {match[1]}
      </code>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
