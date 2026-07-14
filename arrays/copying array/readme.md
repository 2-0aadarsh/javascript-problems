So the engine pipeline is
Receive arguments

↓

Normalize start

↓

Normalize end

↓

Check if copying is possible

↓

Create new array

↓

Copy elements



so, whenever we solve a slice() problem, always write:
Step 1 → Parameter Binding

↓

Step 2 → Normalize start

↓

Step 3 → Normalize end

↓

Step 4 → Can copying happen?

↓

Step 5 → Create new array

↓

Step 6 → Copy