# JavaScript - The DOM

## The Great Frog Race Demo

[View Live](https://andrewbaldwin44.github.io/The_Great_Frog_Race/)

## Exercise 1 - Creating DOM Nodes

<img src="./__lecture/assets/exercise-1.png" />

In this exercise, we'll see how to create web pages using Javascript alone!

In the exercise-1 folder, there are the following files.

- `example.html` (READ ONLY) This is the file that contains the HTML of a short webpage.
- `styles.css` (READ ONLY) Some styles that are used in `example.html`
- `exercise.html` (READ ONLY) This is the HTML file in which you will use JavaScript to recreate the HTML content from `example.html`
- `scripts.js` This is where you will write the JS required to inject all of the HTML into `exercise.html`
- `assets` Some images used in the example

Create the content of a webpage entirely with Javascript.

1. Recreate the content structure from `example.html` in enclosed `exercise.html`.
2. To do this, **you are not allowed to modify any of the HTML files**, only `scripts.js` should be modified.
3. Once you've completed this, compare `example.html` and your `exercise.html` file using "Live Preview", you will notice that they look nothing alike.
4. Add code to the `scripts.js` that will add a `<link>` to the `styles.css` in the `<head>` of `exercise.html`.

In other words: We'll start by recreating the HTML structure, without worrying about the styles. Once the HTML is correct, we'll add a `<link>` tag, which will add the relevant styles.

### How do I do this?

You'll need to make extensive use of `document.createElement`!

---

## Exercise 2 - The Frog Race

<img src="./__lecture/assets/exercise-2.gif" />

By the end of this exercise, you will have a track, a stable of frogs that you can race, and everytime you load the page, random frogs from the stable will race a predetermined distance. _Gambling is not condoned or encouraged._

### Exercise 2.1 - Set up the track

1. Write a `for` loop that will generate a "lane" for each frog.
2. Each lane should be an `li`.
3. Inside each `li` there should be a `span` that contains the lane number.

We are going to need to target each lane separately at some point in our program. So let's give each lane its own `id` as well.

4. Assign each lane an `id` following the this pattern: `lane-<LANE_NUMBER>`. e.g. `lane-1`, `lane-2`, `lane-3`, etc.
5. If you preview the page, you should now see an ordered list, with the lane number as its only value.

### Exercise 2.2 - Call in the frogs!

We need to add our stable of frogs to the app. You will find a file called `frogStable.js` in `exercise-2/assets/`.

1. Link that file in your `index.html` file. It should be added right _before_ the `app.js` file is added.
2. Define an empty array called `racers`. We will push random frogs from the stable into this array.
3. Write a `for` loop that keeps pushing frogs from `frogStable` into `racers` until we have the required number of frogs (as defined by `FROGS`).
4. Output the racers array to the console to make sure you actually have frogs in there.

### Exercise 2.3 - Line 'em up!

We need to assign each frog to a lane.

1. Use the racers array to assign each frog to a lane.
2. We should also show the name/number of the frog in the lane. (This will involve creating at least one element inside the lane `li`)
3. Add a class of `frog` to each of the frogs so that we can style them later.
4. Let's also temporarily set the background color of the frog element to the color assigned to it in its object.
5. Set the frog's progress to 0 inside its object, inside of the racers array.
6. Add each frog's progress to the progress to the screen as well.
7. This might also be a good time to add the stylesheet that is in the assets folder.

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

### Exercise 2.4 - Make 'em hop!

1. Create a function called `racingFrog`. It will accept one parameter. This parameter will be a frog object from the racers array.
2. We need to calculate a random distance for each hop the frog will make. Use `Math.random()` for this. It might be good to consider percentages here...
3. Use `setInterval` to keep the frog hopping until the progress is greater than 100%. Remember to `clearInterval` once it reaches the end of the course.
4. Write a message to the console, once the frog has reached the end.
5. If you have ever seen a frog race, it isn't all that exciting. The frogs are generally not that motivated to reach the end... To that end, let's give each frog its own random delay time for the setInterval to simulate a frog waiting around between hops.
6. "Why aren't they moving?!!" Examine the CSS file and determine what property you can modify to get them moving on the screen.
7. Almost done! Now, call `racingFrog()` for each frog in the race.

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

### Exercise 2.5 - And the Winner is...

1. Create an array named `ranking`;
2. As soon as a frog reaches the end, push it into the array.
3. Once all of the frogs have finished, write a message to the console as well as the first, second and third place frogs (as applicable).

Hint: You will need to use setInterval...

### Challenge 1

It would be great if we could pick frogs at random from the stable, instead of simply taking them in order. See what you can change to make this happen. You will most likely need to use a `while` loop instead of a `for` loop.

### Challenge 2

The race needs some sprucing up. Make the game a more presentable! Flex those CSS muscles.

This could also include

- replace the beautiful circles with actual frog images.
- announcing the winner in the page.
- printing each frog's progress.
- a podium for the winners.
- etc.
