## Here I write the lessons I learnt throughout the project

1. It almost took me 2 hours to figure it out : In the desktop navbar, If the classes were added on the li instead of the anchor tag, the pseudo element would appear with a flickering in the bg-color (the color starts faint then darkens after the transition end, which is against the design and is also bad visually) .

2. On using left and right on an element that is applying position: absolute , the behavior -from the docs- : "When both left and right are defined, and width constraints don't prevent it, the element will stretch to satisfy both. If the element cannot stretch to satisfy both, the position of the element is overspecified. When this is the case, the left value has precedence when the container is left-to-right; the right value has precedence when the container is right-to-left."

3. display property is not animatable in css

4. background-color: currentColor

5. flex-basis definition (just as a refresher): sets the initial main size of flex item

6. This lesson took me more than 2 hours to understand and figure out :
   I thought that using animation-fill-mode: backwards should make the animation revert to the original state after the finish of the animation .. this turned out to be **totally wrong.**

=> The implementation of backwards appears firstly when we play the animation for first time and it has a delay . The initial state of the animation before playing after the first time will be the first frame (if the animation-direction is unchanged) .

But using animation-fill-mode: backwards will never enforce a state or a styling on an element after the end of the animation .

In a nutshell, the element will return to its original stylings after the end of the animation .

7. When we want to change the height of the container so that it gets a height on a click of a btn, using height: auto; won't make the transition take place . We need a concrete value in order for the transition to take place (If we wanted to calculate the height dynamically - which is the better approach instead of hardcoding the value in css file - we can use methods like getBoundingClientRect())