# Intentionally Inaccessible Infinite Scroll Feed

This web page was created using fake API data from JSONPlaceholder and Faker, logos from Logoipsum and UI structures from shadcn.

It resembles a landing page consisting of five differently designed zones, four of which processes data from these respective APIs.

For faster data access, the data is stored in SessionStorage after initial loading to reduce waiting times when reloading.

The highlight of this page is the infinite scroll feed, which automatically loads and displays new posts when the end of the page is reached by scrolling. The API provides a total of 500 posts. After that, the end of the page is reached.

This site is a rebuild of the [Infinite Scroll Feed Repository](https://github.com/StackOverflowIsBetterThanAnyAI/infinite-scroll-feed) with the only difference being that it intentionally violates accessibility as often as possible:

- Accessible Feed:

<img width="1396" height="1914" alt="Image" src="https://github.com/user-attachments/assets/a4cda795-7a9e-40d1-85af-c5d7fcfc9c0f" />

- Inaccessible Feed:

<img width="1392" height="1924" alt="Image" src="https://github.com/user-attachments/assets/bda8cbdd-bdd7-4733-8e18-d29714c3a6eb" />

## Added Inaccessibilities (WCAG 2.2)

- the order of focusable content is in no meaningful order as it uses a zigzag function (Success Criterion 2.4.3 Focus Order)
- removed title attribute of web page (Success Criterion 2.4.2 Page Titled)
- wrong language attribute of web page (Success Criterion 3.1.1 Language of Page)
- bad maximum scale value (Success Criterion 1.4.4 Resize Text)
- 6x underline text when there is no link (Success Criterion 3.2.4 Consistent Identification)

### Navigation

- no alt attribute for image (Success Criterion 1.1.1 Non-text Content)
- 2x no accessible name for button (Success Criterion 1.1.1 Non-text Content)
- 2x button cannot be reached by keyboard (Success Criterion 2.1.1 Keyboard)
- 2x button cannot be activated by keyboard (Success Criterion 2.1.1 Keyboard)
- toggle button has no aria-expanded (Success Criterion 4.1.2 Name, Role, Value)

### Hero

- no alt attribute for image (Success Criterion 1.1.1 Non-text Content)
- 4x button cannot be reached by keyboard (Success Criterion 2.1.1 Keyboard)
- 4x button cannot be activated by keyboard (Success Criterion 2.1.1 Keyboard)
- cut off main header (Success Criterion 1.4.12 Text Spacing)
- insufficient line spacing (Success Criterion 1.4.12 Text Spacing)
- 4x bad accessible name for links (Success Criterion 2.4.4 Link Purpose (In Context))
- aria-attribute cannot be applied to specific element (Success Criterion 1.3.1 Info and Relationships)

### Users

- 6x mail content has no link (Success Criterion 2.1.1 Keyboard)
- 10x link to website is a button instead of an anchor (Success Criterion 4.1.2 Name, Role, Value)
- 10x button cannot be reached by keyboard (Success Criterion 2.1.1 Keyboard)
- 10x button cannot be activated by keyboard (Success Criterion 2.1.1 Keyboard)
- 1x insufficient color contrast (Success Criterion 1.4.3 Contrast (Minimum))
- 1x animation cannot be paused (Success Criterion 2.2.2 Hide, Stop, Pause)

### Quote

- insufficient line spacing (Success Criterion 1.4.12 Text Spacing)

### Partners

- 32x no alt attribute for images (Success Criterion 1.1.1 Non-text Content)
- 32x inverted colors, reduce opacity of images (Success Criterion 1.4.11 Non-text Contrast)
- 1x animation cannot be paused (Success Criterion 2.2.2 Hide, Stop, Pause)

### Posts

- 11x insufficient color contrast (Success Criterion 1.4.3 Contrast (Minimum))
- no accessible name for loading animation (Success Criterion 1.1.1 Non-text Content)
- 3x button cannot be reached by keyboard (Success Criterion 2.1.1 Keyboard)
- 3x button cannot be activated by keyboard (Success Criterion 2.1.1 Keyboard)
- 2x insufficient clickable space (Success Criterion 2.5.8 Target Size (Minimum))
- carousel with role region has no accessible name (Success Criterion 2.4.6 Headings and Labels)

### Footer

- no accessible name for link (Success Criterion 2.4.4 Link Purpose (In Context))

### General

- 6x text content is not included in a landmark (Success Criterion 2.4.1 Bypass Blocks)
