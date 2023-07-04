import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Link() {
  return (
    <div>Link
        <AnchorLink href='#home'></AnchorLink>
        <AnchorLink href="#about"></AnchorLink>
        <AnchorLink href="skills"></AnchorLink>
        <AnchorLink href="projects"></AnchorLink>
    </div>
  )
}
