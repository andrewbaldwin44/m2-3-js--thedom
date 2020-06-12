const head = document.querySelector('head');
const body = document.querySelector('body');

let stylesLink = document.createElement('link');
let main = document.createElement('main');
let header = document.createElement('h1');
let subHeader = document.createElement('h2');
let headParagraph = document.createElement('p');
let ratingParagraph = document.createElement('p');
let mainParagraph = document.createElement('p');
let secondMainParagraph = document.createElement('p');
let image = document.createElement('img');
let source = document.createElement('a');

header.textContent = "The best How I Met Your Mother episode (according to fans)";

headParagraph.textContent = `As impossible as it seems to name just 1 of the 208
                            legendary episodes as the “best”, the fans have
                            spoken and the highest rated episode is… wait for
                            it…`;

subHeader.textContent = "The Slap Bet (Season 2, Episode 9)";
ratingParagraph.textContent = "IMDB Rating: 9.5";

mainParagraph.textContent = `In this episode, Ted is learning a few secrets about
                              Robin, namely that she has an unexplained aversion
                              to the mall. Robin refuses to tell Ted and the
                              others why she won’t go to the mall, so the gang
                              forms their own theories. Marshall believes it’s
                              because she got married in a mall and is still
                              married. Barney believes it has something to do with
                              Robin having performed in a porn video. The two of
                              them make a slap bet with each other: whoever is
                              right gets to slap the other across the face as hard
                              as he can. Lily is named the Slap Bet Commissioner,
                              as long as she promises to be unbiased.`;

secondMainParagraph.textContent = `In the end, Robin’s big secret was revealed- she was
                                    a Canadian, teen pop sensation named Robin Sparkles.
                                    Barney finds the music video for her hit single
                                    “Lets Go To The Mall”. The slap bet takes a few
                                    turns throughout the episode, but ends with Marshall
                                    having the right to slap Barney 5 times- available
                                    for all of eternity (horrible call Barney).`;

source.textContent = "Source";

stylesLink.setAttribute('rel', 'stylesheet');
stylesLink.setAttribute('href', 'styles.css');

image.setAttribute('src', "images/robin-sparkles.jpg");
image.setAttribute('alt', "Robin Sparkles");

source.setAttribute('href', "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/");

head.appendChild(stylesLink);
body.appendChild(main);
main.appendChild(header);
main.appendChild(headParagraph);
main.appendChild(subHeader);
main.appendChild(ratingParagraph);
main.appendChild(image);
main.appendChild(mainParagraph);
main.appendChild(secondMainParagraph);
main.appendChild(source);
