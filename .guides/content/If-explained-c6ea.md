Let's analyse how our `if` statement works.

```javascript
if ( keyCode == 'LEFT' ) {
  player.moveLeft()
} 
```

An `if` statement starts with 

```javascript
if (some condition is true) {
```

**You start your line with `if`** and then ask the question you are interested in. This is known as a condition and it is enclosed in brackets. At the end of the line, you add a `{`, known as a **curly bracket**. 

**If** this condition is true, then you execute all the instructions that come after it, within the `{` `}`. There is only one instruction in this example.

## Code blocks
The `{` at the end of the `if` line denotes the start of a code block. As explained above, you can then add any number of instructions on the following lines.

After your last instruction that relates to the condition being true, you close the code block with a `}`.


