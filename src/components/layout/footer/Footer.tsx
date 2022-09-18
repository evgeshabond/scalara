import { styled, css, theme } from 'twin.macro'

export const Footer = () => {
  const Footer = styled.footer(() => [
    {
      // backgroundImage: 'url("/footerRectangle.png")',
      height: '52px',
    },
    css`
      background: repeating-linear-gradient(
        90deg,
        ${theme`colors.yellow.light`},
        ${theme`colors.yellow.light`} 32px,
        ${theme`colors.red.3`} 32px,
        ${theme`colors.red.3`} 80px
      );
    `,
  ])

  return <Footer />
}
