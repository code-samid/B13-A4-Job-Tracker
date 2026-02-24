
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

	• getElementById → selects one element using its unique ID.
	• getElementsByClassName → selects all elements with the same class.
	• querySelector → selects the first element that matches a CSS selector.
	• querySelectorAll → selects all elements that match a CSS selector.

### 2. How do you create and insert a new element into the DOM?

Create an element using document.createElement(), add text or content, and then insert it into a parent using appendChild() or append().

### 3. What is Event Bubbling? And how does it work?

Event bubbling is when an event starts on the clicked element and then moves up to its parent elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding an event listener to a parent element instead of multiple child elements.

It is useful because it:
	•	improves performance
	•	works for dynamically added elements
	•	keeps code cleaner

### 5. What is the difference between preventDefault() and stopPropagation() methods?


	• preventDefault() stops the browser’s   default action (like form reload).
	• stopPropagation() stops the event from moving to parent elements.
