import React from 'react'
import { Global } from '@emotion/react'
import { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  html: {
    height: '100%',
  },
  body: {
    fontFamily: 'Open Sans',
    background: theme`colors.yellow.light`,
    height: '100%',
  },
  '#__next': {
    height: '100%',
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
