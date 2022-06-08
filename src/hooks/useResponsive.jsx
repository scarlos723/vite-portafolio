import { css } from 'styled-components'

/**
 * For standard breakpoints use range, othewise use display value
 * @param {*} display min-width value or range key
 * @returns css media query
 */
export const ResponsiveTo = (display = 'md') => {
  const range = {
    // Width values from tailwind responsive
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  }
  return (css`@media only screen and (min-width: ${range[display] || display} )`)
}
