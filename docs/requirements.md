# Calculator Requirements

## Tech

1. HTML
2. CSS
3. JS

## MVP (Minimal Viable Product)

The calculator should have a fake solar panel at the top.

The calculator should have a display area at the top.

The display should show "0" by default.

The calculator should have the following function buttons:
	1. Division			(/)
	2. Multiplication	(x)
	3. Subtraction		(-)
	4. Addition 		(+)
	5. Calculate 		(=)
	6. Clear			(C)
	7. All Clear		(AC)
	8. Sign Toggle		(+/-)

The calculator should have 10 digit buttons, 0-9.

The calculator should store three values internally:
	1. The first number entered by the user (possibly multidigit).
	2. The operator selected by the user (/, x, -, +).
	3. The second number entered by the user.

The display should update as the user presses number buttons.

When the Decimal button (.) is pressed, it should be appended to the current number and the display should be updated, just as with a digit button. However, there can 

When the calculate button (=) is pressed, the calculator should:
	1. Apply the operation to the two stored numbers in the appropriate order.
	2. Update the display.

When the Clear button (C) is pressed, the current stored number should be discarded and display should return to 0.

When the All Clear button (AC) is pressed, all stored data should be discarded and the display should return to 0.

When the Sign button (+/-) is pressed, the sign of the current value should alternate.

