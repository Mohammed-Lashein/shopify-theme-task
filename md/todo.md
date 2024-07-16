## Here I document the problems that faced me in the design and I couldn't solve it 

1.  center the logo ideally on mobile screens 
2. How to make the cart disappear without the need to use overflow: hidden on the body . Using overflow: hidden is problematic since that we can't scroll if the website has another content beyond the viewport (which is what is normally expected ) . 

**An update**: I used react-bootstrap in a previous project, where I used the Offcanvas component to serve in cart functionality . I found that the problem I am encountering isn't taking place there . After studying the DOM structure about their component, I found that they append the Offcanvas element to the end of the DOM, then they remove it from the DOM on the Offcanvas disappearance . 
I see that there is no need to implement this functionality here, since this is not required in the task, so no need to over engineer . 

3. In the swiper, on initial render, the first bullet doesn't have the transition and gets the blue color abruptly . 