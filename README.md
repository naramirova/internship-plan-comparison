## Narrow Screen Treatment (Mobile Design)

On narrow viewports (such as 320px mobile screens), displaying a 4-column comparison table side-by-side causes text truncation and layout compression if forced to fit into a single screen width.

### Chosen Strategy: Accessible Scrollable Container
To address this without compromising data clarity:
1. **Contained Horizontal Scroll:** The `<table>` is wrapped in a dedicated container with `overflow-x-auto`. This prevents global page horizontal scrolling while allowing users to touch-swipe or keyboard-scroll through all columns (`Basic`, `Pro`, `Enterprise`).
2. **Keyboard Accessibility:** The table container includes `tabindex="0"` and an `aria-label`, enabling screen-reader users and keyboard-only navigators to focus on the table and scroll horizontally using arrow keys.
3. **Filter Integrity:** The "Highlight differences" toggle operates seamlessly in this layout by hiding matching `<tr>` elements without disturbing the horizontal scroll position.
