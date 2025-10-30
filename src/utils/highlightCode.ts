const keywords = /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|try|catch|throw|typeof|instanceof|extends|interface|type|enum)\b/g;
const strings = /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;
const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
const numbers = /\b(\d+)\b/g;

export function highlightCode(code: string): string {
  let highlighted = code;

  highlighted = highlighted.replace(comments, '<span class="token-comment">$1</span>');
  highlighted = highlighted.replace(strings, '<span class="token-string">$1$2$1</span>');
  highlighted = highlighted.replace(keywords, '<span class="token-keyword">$1</span>');
  highlighted = highlighted.replace(numbers, '<span class="token-number">$1</span>');

  return highlighted;
}
