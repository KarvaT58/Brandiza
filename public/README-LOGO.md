# Logo da Brandiza

## Como adicionar a logo:

1. Coloque o arquivo da logo na pasta `public/` com o nome:
   - `logo.png` (recomendado - formato PNG com fundo transparente)
   - ou `logo.svg` (formato vetorial - melhor qualidade)

2. A logo será exibida automaticamente no cabeçalho ao lado do nome "Brandiza"

## Especificações recomendadas:

- **Formato**: PNG (com fundo transparente) ou SVG
- **Tamanho**: 40x40 pixels ou maior (será redimensionado automaticamente)
- **Fundo**: Transparente (PNG) ou sem fundo (SVG)
- **Resolução**: Mínimo 80x80 pixels para qualidade em telas retina

## Nota:

Se você usar SVG, atualize o código em `components/layout/Header.tsx` para usar:
```tsx
<img src="/logo.svg" alt="Brandiza Logo" className="w-10 h-10" />
```







