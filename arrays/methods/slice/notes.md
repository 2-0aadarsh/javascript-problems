Now we complete slice() before moving to another method.

There are still five important behaviors left:

✅ slice(start) (omit end)
✅ slice() (omit both parameters)
✅ Negative indices (slice(-2), slice(1,-1))
✅ Why slice() performs a shallow copy instead of a deep copy (this is a huge interview topic)
✅ Build a production-grade slice() polyfill later, after we've learned functions, defaults, objects, prototypes, and array internals.

After that, we'll move to the next array method (splice()), where you'll see the complete opposite philosophy:

slice() → does not mutate the original array.
splice() → does mutate the original array.

That contrast is one of the most important concepts in JavaScript array APIs.




Part 1 — Omitted end
    arr.slice(start)

Part 2 — Omitted start and end
    arr.slice()

Part 3 — Negative indices
    arr.slice(-2)
    arr.slice(1,-1)
    arr.slice(-4,-1)

Part 4 — Edge cases
    start > end
    start == end
    start > length
    end > length
    empty arrays
    sparse arrays
Part 5 — Shallow Copy
    This is the biggest interview topic.

    Most developers cannot explain it properly.

    We'll spend quite some time here because it leads directly into object references, React immutability, Redux, and interview questions. slice() creates a shallow copy, not a deep copy.

Part 6 — Mixed Interview Questions

    Exactly like LeetCode.
    You'll reason through:

    output questions
    debugging questions
    predict-the-engine questions
    "what if" questions
    write-your-own-slice questions

    Only after you're confident will we move to splice().



Part 1 : The only new concept is-> Missing end is replaced by array.length before extraction begins.
const arr = [5, 10, 15, 20, 25, 30];
const result = arr.slice(3);

so slice(start) accepts only start and thus end is undefined during parameter binding and thus if  Math.min(end, arr.length) gives NaN, thus replace  the value of the end with arr.length. Hence, array from indices 3 to but not including arr.length get copied to new array
Hence, result = [20,25,30];


Part 2 arr.slice() : Notice that we passed, thus,
    start = undefined and 
    end = undefined
    so, the js engine doesn't leave them as undefined. It normalizes them before doing any work. Conceptually, it does:

        if (start is omitted)
            start = 0

        if (end is omitted)
            end = arr.length
    so, arr.slice();  becomes arr.slice(0, arr.length);

    Therefore, the slice() with no arguments creates a new array containing all the elements of the original array. Internally, it behaves like slice(0, arr.length), so it returns a new array object while leaving the original array unchanged.



Part 3 — Negative Indices : if you want the last two elements,then js allows you to simply write->arr.slice(-2);
    Now During parameter binding : 
        start = -2
        end = undefined, right
    The engine cannot use -2 directly as an array index. So what should it convert -2 into some +ve value as  -2 becomes (length + (-2)).

    so, for  0    1    2    3    4       => length = 5
             10   20   30   40   50

    so, arr.splice(-2) => start = length + (-2) => start = 5-2 = 3. Thus, start = index 3
    
    so, arr.splice(-3) => start = length + (-3) => start = 5-3 = 2. Thus, start = index 2

    Now, Without running any code, convert these into positive indices for an array of length 8:
    1. slice(-1) => start = length + (-1) => 8-1 = 7
    1. slice(-3) => start = length + (-3) => 8-3 = 5
    1. slice(-8) => start = length + (-8) => 8-8 = 0
    1. slice(-10)=> start = length + (-10)=> 8-10= -2 (I don't know what does this means now!! or maybe just like if end is not sure with undefined values it falls for arr.length. Similarly when start goes something like this then maybe it falls for 0. Not sure how to define these things)

    now, think if const arr = [10,20,30,40,50]; 
    arr.slice(2,-1) means what??

    thus, arr.slice(2,-1) js engine will first tries to make it into positive index => 
    arr.slice(2,-1) => arr.slice(2, (length+(-1)) ) => arr.slice(2, (5-1)) => arr.slice(2,4)
    thus, arr.slice(2,-1) becomes arr.slice(2,4)


    again think of arr.slice(-4, -1)
    arr.slice(-4, -1) => arr.slice((length + (-4)), (length + (-1))) 
    arr.slice((8-4), (8-1)) => arr.slice(4, 7)


Part 4: Edge cases!
    The Engine Pipeline, Every slice() call conceptually goes through this pipeline:
    
    Receive start and end
            │
            ▼
    Normalize start  (check if start >= arr.length) =>  The start position is already beyond the end of the array. => start >= arr.length means  start from the position that does not present  in the index, thus  start from the last  index of the array. So,  start = arr.length. So, even if start get to the last position and end is also at last so that will return an empty array [] as arr.slice(n,n). Conceptually, any position beyond the end of the array behaves exactly like the end boundary (array.length) because there are no elements beyond that point.
            │
            ▼
    Normalize end
            │
            ▼
    Is start >= end?
            │
        Yes │ No
            │
            ▼
    Return []     Copy elements


    /////**** Edge Case 1 — start > end ****/////
    const arr = [10,20,30,40,50];

    arr.slice(4,2);
    Step 1 : Parameter binding
        start = 4, end = 2
    Step 2 : Normalize start => already +ve => 4
    Step 3 : Normalize end   => already +ve => 2

    Step 4 : Can we copy??? Since 4>2 => start>end => means start from 4th index move in right till we get to index 2 (practically impossible or we can say "The extraction range contains zero elements."). Hence, NO COPY => return []

    -> slice() never changes direction. It always walks forward from the normalized start toward the normalized end. If the end position is at or before the start position, the result is an empty array.


    /////**** Edge Case 1 — start == end ****/////
    const arr = [10,20,30,40,50];

    arr.slice(2,2);
    Step 1 : Parameter binding
        start = 2, end = 2
    Step 2 : Normalize start => already +ve => 2
    Step 3 : Normalize end   => already +ve => 2

    Step 4 : Can we copy??? Since 2>2 => start>end => means start from 2nd index move in right till we get to index 2 (practically impossible or we can say "The extraction range contains zero elements."). Hence, NO COPY => return []




# Understanding `arr.slice(100, 100)` — What Actually Happens?

One thing confused me initially:

> If `start >= array.length`, why do people say JavaScript "treats it as `array.length`"?

Let's build the correct mental model.

---

## Step 1 — Consider the array

```javascript
const arr = [10, 20, 30, 40, 50];
```

The array has:

```text
length = 5
```

Its valid indices are:

```text
Index

0    1    2    3    4
```

Notice something important.

Although the last valid index is **4**, there is one **boundary** after the last element.

```text
Boundaries

0    1    2    3    4    5
|----|----|----|----|----|
```

That final boundary is exactly equal to `arr.length`.

---

## Step 2 — Now execute

```javascript
arr.slice(100, 100);
```

Parameter binding:

```text
start = 100
end   = 100
```

---

## Step 3 — Can the engine start from index 100?

No.

The array only contains elements up to index **4**.

There is no index **100**.

At this point, JavaScript has two possible choices:

### Choice 1

Throw an error.

JavaScript intentionally does **not** do this.

---

### Choice 2

Recognize that the requested position is **already beyond the end of the array**.

Conceptually, every position beyond the end behaves exactly like the **last boundary**, which is `arr.length`.

Think of it like this:

```text
Requested start

100

↓

Beyond the array

↓

Last valid boundary

↓

5
```

Similarly,

```text
Requested end

100

↓

Beyond the array

↓

Last valid boundary

↓

5
```

---

## Step 4 — Conceptual transformation

The engine does **not** literally overwrite your variables.

Instead, conceptually, it behaves as if the call were:

```javascript
arr.slice(5, 5);
```

This is simply a mental model that helps us reason about the behavior.

---

## Step 5 — Copying

Now the engine tries to copy:

```text
Start Boundary = 5

End Boundary = 5
```

It copies elements **starting at boundary 5** and stops **before boundary 5**.

There is no space between the two boundaries.

Therefore:

```text
0 elements are copied.
```

Result:

```javascript
[]
```

---

# Important Clarification

When we say:

> "JavaScript treats `100` as `array.length`."

we do **not** mean that JavaScript literally changes:

```text
start = 100
```

into

```text
start = 5
```

inside memory.

Instead, we mean:

> **Conceptually, any position beyond the end of the array behaves exactly like the end boundary (`array.length`), because there are no elements beyond that point.**

This mental model makes it much easier to understand why all of the following behave the same:

```javascript
arr.slice(5, 5);
arr.slice(100, 100);
arr.slice(1000, 1000);
```

All of them return:

```javascript
[]
```

because, conceptually, the extraction starts and ends at the final boundary of the array, leaving **zero elements** to copy.




Q1. What is a shallow copy?
ans. A shallow copy creates a new outer object (such as a new array or object), but it does not recursively duplicate nested objects. Instead, it copies the references to those nested objects. As a result, the outer containers are independent, but nested objects are shared.

