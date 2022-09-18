import { styled } from 'twin.macro'

export const Footer = () => {
  const Footer = styled.footer(() => [
    {
      backgroundImage: 'url("/footerRectangle.png")',
      height: '52px',
    },
  ])

  return <Footer />
}
