# Intentionally Inaccessible Infinite Scroll Feed

This web page was created using fake API data from JSONPlaceholder and Faker, logos from Logoipsum and UI structures from shadcn.

It resembles a landing page consisting of five differently designed zones, four of which processes data from these respective APIs.

For faster data access, the data is stored in SessionStorage after initial loading to reduce waiting times when reloading.

The highlight of this page is the infinite scroll feed, which automatically loads and displays new posts when the end of the page is reached by scrolling. The API provides a total of 500 posts. After that, the end of the page is reached.

<img width="883" height="948" alt="preview image" src="https://github.com/user-attachments/assets/636e22e6-8f87-4c78-9f0e-4bb595e651d5" />

This site is a rebuild of the [Infinite Scroll Feed Repository](https://github.com/StackOverflowIsBetterThanAnyAI/infinite-scroll-feed) with the only difference being that it intentionally violates accessibility as often as possible.

## Added Inaccessibilities (WCAG 2.2)

-   decrease contrast of focus indicator (Success Criterion 1.4.11 Non-text Contrast)
-   the order of focusable content is in no meaningful order as it uses a zigzag function (Success Criterion 2.4.3 Focus Order)

### Navigation

-   no alt attribute for image (Success Criterion 1.1.1 Non-text Content)
-   no aria-label for back-to-top button (Success Criterion 1.1.1 Non-text Content)
-   no aria-label for burger menu on non-desktop viewports (Success Criterion 1.1.1 Non-text Content)
-   no aria-label for expanded burger menu navigation on non-desktop viewports (Success Criterion 1.1.1 Non-text Content)
-   replace semantic html (nav) with div (Success Criterion 1.3.1 Info and Relationships)
-   trap keyboard focus in navigation bar (Success Criterion 2.1.2 No Keyboard Trap)

### Hero

-   no alt attribute for image (Success Criterion 1.1.1 Non-text Content)
-   replace semantic html (section, h1, strong 4x, p 3x) with div and span (Success Criterion 1.3.1 Info and Relationships)
-   remove outline from button (Success Criterion 1.4.11 Non-text Contrast)
-   cut off main header (Success Criterion 1.4.12 Text Spacing)
-   insufficient line spacing (Success Criterion 1.4.12 Text Spacing)

### Users

-   replace semantic html (section, p 3x, h2) with div (Success Criterion 1.3.1 Info and Relationships)
-   reduce contrast for heading (Success Criterion 1.4.6 Contrast (Enhanced))

### Quote

-   replace semantic html (section, blockquote, p, h2) with div (Success Criterion 1.3.1 Info and Relationships)
-   insufficient line spacing (Success Criterion 1.4.12 Text Spacing)

### Partners

-   no alt attribute for images (32x) (Success Criterion 1.1.1 Non-text Content)
-   replace semantic html (section, h2) with div (Success Criterion 1.3.1 Info and Relationships)
-   invert colors, reduce opacity of images (32x) (Success Criterion 1.4.11 Non-text Contrast)

### Posts

-   no aria-label for loading animation (Success Criterion 1.1.1 Non-text Content)
-   replace semantic html (main, p 2x, h2 2x) with div (Success Criterion 1.3.1 Info and Relationships)
-   reduce contrast for top 10 posts (Success Criterion 1.4.3 Contrast (Minimum))

### Footer

-   replace semantic html (footer) with div (Success Criterion 1.3.1 Info and Relationships)
