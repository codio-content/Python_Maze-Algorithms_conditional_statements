Here we go again with another event handler. This time it is a **keyPress** event we are handling.

Look at the code on the left and let's analyse it.

## Handler
This event handler gets called whenever any key is pressed. We are looking to see what key was pressed and if it is one we are interested in, we deal with it.

## You can only move left
Notice that you can only move the player to the left. We will deal with this in a moment.

## keyCode
Let's look at the following statement

```python
  if keyCode == 'LEFT':
    moveLeft()
```

`keyCode` is a parameter that is passed into our event handler. It contains a string that indicates which key has been pressed by the user. It has the following values

| Key | keyCode |
|-|-|
| Up Arrow | UP |
| Down Arrow | DOWN |
| Left Arrow | LEFT |
| Right Arrow | RIGHT |

So our code is saying "if the `keyCode` of the key pressed is `LEFT` then move the player to the left. Notice how the `moveLeft()` portion of the code is indented? Any code that needs to run when the if statement condition is met needs to be indented.
