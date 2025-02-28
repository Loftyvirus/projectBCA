# Markdown Rendering Project

### Custom Markdown Styles

The `styles.css` contains custom styles to enhance the rendering of different markdown elements. Here are some examples:

- **Headings**: Large and bold headers.
- **Paragraphs**: Proper line spacing and left alignment.
- **Lists**: Support for ordered and unordered lists.
- **Code Blocks**: Syntax highlighting and proper formatting.
- **Images**: Responsive images with rounded corners.
- **Tables**: Styled tables with alternating row colors.

## Markdown Syntax Supported

Here are the markdown elements that are supported:

### Headings

```markdown
# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading
```

### Lists

Unordered:

```markdown
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2
```

Ordered:

```markdown
1. First item
2. Second item
3. Third item
```

### Code

Inline code:

```markdown
`code`
```

Code block:

```markdown

```

code block

```

```

### Links

```markdown
[OpenAI](https://openai.com)
```

### Images

```markdown
![Image alt text](https://path-to-image.jpg)
```

### Tables

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

### Blockquotes

```markdown
> This is a blockquote.
```

### Horizontal Rule

```markdown
---
```

### Strikethrough

```markdown
This is ~~struck through~~ text.
```

### Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2
```

also supports html renders in markdown as well using rehype!
so contributor can now add markdown uestionpaer into data now
