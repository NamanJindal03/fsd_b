
Functional and class based components

React -> 2013 -> 

class based components -> widely -> 

		functional components -> werent powerfull -> (state) -> dumb components

FEb 2019 -> 
	class === functional -> 

	reasons 
	1) They are easy to use
	2) They involve writing less code
	3) For the people coming from different language to js, it becomes
	difficult for them to adopt the class based approach because js is veru
	different interms of this keyword. 

All the companies who had their codebase in class -> functioanl 

95% -> fucntioanl components 

Startup -> class based -> 
	1) migrate the code from class base to functional compoents
	2) 


If you have a UI based change, then your that particular variabel needs
to be a state. 
If it is not a UI change, its just a internal change  that is not meant to be 
displayed to the user then you wont be using states.

 Hooks -> 

 Statefull components and stateless components -> 
 	Components that have presence of state in them is called statefull,
 	and those who don't have any state defined in them they are called stateleess

 	Initally functioanl components werent that powerful -> functioanl
 	components -> 
 		func component -> could not create state before 

 		Hooks -> declare state


when we use setState (setCount) ->
1) updating the internal value of the count, 0 to 1
2) Updating the ui value of count again from 0 to 1, that happens with a 
process of rerendering 

1) the advantage of states is that it retains the value it is holding even
upon rerendering  but a normal variable will get reinitialized in that 
scenario

github pages -> static websites
react -> server

difference between state and prop -> 

1) we can also pass state as a prop ->


ddeployment ->
Todo Project -> 

Conditional Rendering ->
1) Through Ternary Operator 
2) && 
3) 


Tic Tac Toe -> 
1) reactstrap 
2) react-icons
3) conditional rendering 
4) child components, parent components 

px
em rem
%
responsive -> 

Desktop
Mobile -> 

CI CD -> Continuous Integration Continous Deployment -> 

1) prevState  -> (problems with setState) -> important -> 
2) forms in react
3) useref
4) uncontrolelr and controlled components

What kind of hooks you have used in react? 



units -> 

px ->
% ->
em -> 
rem -> root em
vw -> viewport width
vh -> viewport height

General Thumb ->
	font-size -> rem -> 99.5%
	Padding, margin ->em -> 95% 
	Width -> em, % (100%) or vw

	height: em, % (100%) or vh

body{
	margin:0px;
}
*{
	box-sizing: border-box;
}


imp properties flex ->

Parent level ->
	display: flex
	flex-direction:
	flex-wrap:
	align-items:
	justify-content

flex-direction -> row 
	justify-content => row => x axis
	align-items => column => y axis

flex-direction -> column 
	justify-content => column => y axis, parallel to the flex direction
	align-items => 90degrees with the flex direction

Child Level 
order
flex-grow
flex-shrink


what all we can do in css? 

style -> attributes? 
internal css 

what's the difference between 
how you work with directories -> 

./ -> means the current directory 
../ -> means the parent of the current directory


/ -> will talk some other day (this means the root of the current drive)

Absolute Path (not dependent)
-> Relative Path -> (in relation to someother path)


1) Tag selector 
2) ID Selector
3) Class Selector 



Things on my end
1) visibilikty hidden use cases
2) dispay none does it actually come on the dom tree.



amazon.in -> IP Address (192.168.0.2) -> data -> browser 

FRONTEND -> 

HTML -> Pillars or say raw structure of your house
CSS -> painting the house, marbelling the floor, 
JS -> Equipmetns, washing machine, light bulbb 

27th
	HTML Tags
		2 categories (interview )
		1) inline tags -> span, b, i, img, input
		2) block tags -> div, p, h1 - h6

		1) Paired tags <> </> -> div, span, h1, 
		2) Self Closing tags < /> -> br, img
		3) Paired and self closing 
		4) unpaired tags -> <> 

	Chrome Web Tools (web tools)
		Why to use vs code and chrome

	Attributes 
		Attributes give additional information about a tag 
		Compulsory
		Optional 

	Boilerplate  what does it indicate 
	10-12 Tags
	Paired and unpaired
	File structure

	1) DNS -> Done -> what happens when someone enters a url in browser
	2) Client server model -> done -> we related it to the url example
	2) Meta -> done -> 3 major things in meta -> 
	3) White Space collapsing  -> done -> br, &nbsp, &emsp, 
	
	4) Images -> 
		Attributes -> height, width, alt, src 
	5) File Structure -> absolute vs relative path -> 


		Addition of images 
		1) FIle  ->
		2) Url  -> 
	5) Assignment in class

	7) What should we prefer in absolute vs relative
	6) Audio, video 


	./ -> coming outside the file
	../ -> 1 directory or folder up
	../../ -> 2 directory up
	../../../ -> 3 directory up



Ip address -> IPv4 IPv6

jpg
jpeg
png
webp
gif

svg -> 


figure 
figcaption

1) when to use absolute and when to use relative path
2) 

audio
video 
	assignment ->


iframe -> 
	can any webpage in the internet be allowed to put on our website? -> done

Breakdown of a website -> DOne

Semantic HTML -> 

//Alternative to div ->
//certain meaning -> certain represenation ->  HTML 5

aside  ---->>> sidebar -> 
footer
header 

section -> often -> 
article ->

main ->>>
nav

many more 


Aria Attributes ->
All region internet access 



Tables -> 
	rowspan -> 
	colspan ->

thead and tbody -> a bit in more depth -> DONE
description list ->  DONE
to combine rowspan and colspan ->  DONE 
extensions in vs code -> Done

class, id =>  attributes -> 

class -> .
id => #

in class assignemnts ->  DOne
a little discussion on some applications of tables -> DONE
git -> Small intro -> versioning tool -> 



css -> intro -> 
forms -> 

 
Untracked   ->>>>>> git add <filename> || git add . (. all the files)
Tracked but not committed  ->>>>>>>> git commit -m "some meaningful message"
Committed 

to push changes on to the remote -> online -> 

git status -> 

<input type ="text" />
type = "number"
type ="email"
type ="url"
type ="password"
type="file"
type ="date"
type ="color"
type = "radio"

validation?????


type ="range"


css ->  (waterfall)
three ways in which we can include the css -> 
	inline 
	internal 
	external (preferred)

inline why? 
internal? -> 

font-size -> 
font-weight -> 
border -> 1px solid red
color -> 
background-color || background

background-color
font-weight

camelCase 


selectors -> 
	Basic Selectors
		tag selector (most basic selector)
		id selector -> # -> JS
		class selector -> . -> JS

specificity of inline css > internal || external

id vs class
id => identification (unique)
class => 

specificity -> id vs class vs tag

id > class > tag

some more selector -> 
attribute selector  -> title, href -> 
regex 

and more 

border || margin || padding - vvvimportant

CSS Units 

px -> 
em
rem
%
vh
vw

em tag vs em as a css unit

colors: RGB, HEX, HSL, 

rgb(100, 10, 255) => opacity, understanding 

0-255

rgba -> opacity -> 



display - vvv important
display: 
	block
	inline
	inline-block
	none

padding-top, padding-bottom, margin-top, margin-bottom with inline elements
block elements

display
inline 
	1) you cannot use height and width
	2) it takes onlt the content worth width and height
	3) you cannot use margin, padding top and bottom
block
	1) you can define height and width
	2) by default it has 100% width and 0px height
	3) you can use all margin and padding

inline-block 
none 
difference between display none and visibility: hidden (extreemely important
interview question as well as on a concept and application level)

Psuedo Classes -> 7 
at the time of interacting with the element
we are targetting some specific behaviour of the elements

:hover -> 

:active
:focus

:visited

:focus-

CSS combinators -> 

h1, h2, h3{
	
}
*{
	
}
element/tag , id and class ->
attribute selector -> 

Descendent Selector ( ) -> parent children
	element/id/class(parent) [space] element/id/class (child) any grand{

	}
	specificity -> 

	DOM -> Document Object Model -> 

Child Selector (>) -> parent > child (1st nesting) -> parent children

Adjacent Selector (+) ->  sibling relationship 

General Siblings Selector -> (~)

Psuedo Elements -> 
	a part of an element ->m
	list -> bullet points -> supporting content
	first-letter
	first-line

	most important (interview)
	::after
	::before

	::first-letter
	::first-line

	::marker
	::selection
	::placeholder

nth selector 

border: 1px solid red;
border-color:
border-width: 
border-type:


	div -> width 500px
			padding - 10px
			border 2px
			margin - 5px
	box sizing -> border-box

	What is the value of content-width based on the above css?


21st May 
	Box-sizing - ( important - )
	width, border, padding
		content-box -> default -> 
		border-box ->

	Background - 

	text-align:

	Flexbox - (vvv important) 

	display: flex;

	Parent Properties of flex ->

	display: flex;
	flex-direction: row; column;

	justify-content:
		space-between
		space-around
		space-evenly
		flex-start
		center

		
		flex-end

	align-items:
	

	flex-wrap


	align-content -> dependent (whether flex-wrap: wrap)



	how to center a div? vertically and horizontally

	Child Properties in flexbox ->

	1) Order








	https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d
	?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80
	Query Params

	display: grid;


Positions -> 
CSS -> 
	
	position: 
	1) Static -> default 
	2) Relative
	3) Absolute
	4) Fixed
	5) Sticky

	top, bottom, left, right

	z-index

Responsiveness 
	em
	px
	rem
	%
	vh 
	vw

font-size: rem 
padding, margin : em 
width: %, em, vw
border: px or em (preferred)

minmax() ->

if -> targetting -> desktop first -> 
	base css -> for desktop
	on media query -> handle smaller viewporrs/ devices
	-> max-width

if -> targeting -> mobile first ->
	base css -> for mobile 
	on media query -> handle bigger viewports/ devices
	-> min-width 

1 June ->
Bootstrap -> 

what is bootstrap? CSS and JS -> Framework or library ?

1) Speeds up your code writing -> 
2) Bootstrap -> Responsive Layout -> 
	Grid Model -> Responsiveness ->

Material Design -> 
Chakra UI ->

Tailwind -> utility classes ->

Some Disclaimers -> 

Versioning -> 
	Major Updates -> 
		4.2.2 -> 5.0.2  => Major Update
	Minor updates -> 


	Patch Update -> 5.0.2 -> 5.0.4 
	Minor Update -> 4.2.2 -> 4.4.2 
	Major Update -> code breaking changes -> 
	revenue loss -> heavy repurcursions ->

	CDN -> 4.12.2 -> 5 -> 

Colors ->

Warning -> yellow
Success -> green
Dark -> black sort of
danger -> red 
info -> 

extra small  -> no symbol
small -> sm
medium -> md
large -> lg
extra large -> xl
extra extra large -> xxl

g -> gap
gy -> gap y
gx -> gap x

area naming -> 



Transform -> 
	2d and 3d changes(transformations) 

	Rotate
		RotateX
		RotateY
		RotateZ
	scale
		scale(x,y)
		scaleX
		scaleY
		scale
	translate 
	skew

Transitions -> 

Animations -> 

	@keyframes -> template -> font-size
	animation-name -> font-size-animation


	Box-Model: border, margin, padding, content, 
	box-sizing -> border, padding, content, 

	border-box and content-box? 



	Display , -> done

	flex-box, -> align-content ||  done


	Position,  done
	media queries, 
	Cobinators, 
	Pseudo class and elements, 
	
	grid,  -> a project
	
	interview questions,


	element width , content width, border width, padding

	element width = content width + border width (left,right) + padding (left, right)

	x = 200 + 10+10 + 20 +20 
	x= 260


	200 = content-width + 10 +10 + 20 + 20
	content-width = 140;
	content-box ->
		content-width = 200, border:10, padding: 20 


	border-box 
		the width that we define that is the element width (not the content
		width)



	display  , when we use flex (justify-content), align items

	display: flex

	display: inline, inlin-block, block



	main axis -> justify content
	opposite axis -> align items

	flex direction -> row ( i.e main axis is X) ->

	main axis -> y -> justify content will work on y xis

	align items will work on x axis 


	parallax effect -> 


	Positions -> 

	Relative -> 
		static -> we dont have access to top, bottom, left, right

		1) the elemenent takes the top, bottom, left, right from its 
		original place. 





gap: 10px;  //row-gap: 10px; column-gap: 10px;
gap: 10px 20px;  //row-gap: 10px; column-gap: 20px;
row-gap: 30px;
column-gap: 40px;

grid ->

grid project -> 

are we making a mobile-first-desgin or a desktop first design -> 

mobile first design -> 
	( @media query ??? -> min-width)


1) CSS Reset -> small reset
2) Defining Variabels 
3) Making Utility classes 
4) Generic code base -> 



LiveScript -> 
JS -> Javascript?
December 4 1995 -> Brendan -> 

why?
Java popular -> 
Javascipt -> 

Javascript -> Nodejs, denojs 

wordpress -> 

Js -> 
use js 

JS -> learning how js works 

JS -> frontned -> html css alonf with js

JS -> as a frontend framework -> react

JS -> as a backend tech -> node

How to connect js to html?


Javascript ->
Java -> 
Java vs Javascript -> 

1) JS is a dynamically typed language-> 
	JAVA -> 
		int var1 = 10;
		char abcd = 'a';

		var1 = 'abcd'; //error

	var 

	whereas Java is a strictly typed language

2) Twice declaration || redeclaration of the same variable
	
	int var1 = 10;
	int var1 = 20;

	JS ->
		var var1 = 10;
		var var1 = 20; //this var 

	var ->

3) we can output the variable or we can have access to variable before 
even the declaration

	Java -> will throw me an error

	Javascript -> it won't throw me an error it will give me undefined


Reserved keywords ->
let
var
class
this

4) Not Usage of semicolon wont throw me any error in js
	
	java -> error
	js -> no error -> but -> it is recommended to add semicolons -> 

5) JS is a functional language, Java, c++ -> Object oriented language
	IN JS there is no fundametal concept of class 

6) Js is a high level language, Java, c++ etc are low level language

if
for
while
ternary operator
||
&&
switch

function  


high level langauges ->
low level language 
assembly level languages -> most difficult to write but have the maximum 
control and efficienncy -> 
hardware 

4 lines of code in js -> 40 lines of code in c++

Js -> 
Js is a single threaded non blocking asynchronous concurrent language.

JS -> data types in js 

1) Primitive Data types
	A) number
	B) Boolean
	C) String
	D) null
	5) undefined

	memory allocation or not

	7) Big Int
	6) symbol -> not that imporant 

2) Non Primitive Data types
	A) Array -> []
	B) Objects -> {}

	C) Date - important 

	and a few more


Combining Data types in JS -> 

string + number => 'a' + 4 + 'b' => 'a4b'


					'1' + 4 => '14'

NaN -> Not a number -> type of (NaN) => number => 

operators -> 
*
>
<
+
-
%
\

condition ? true : false => 
== => double euivalency => comparision of the value
!=

=== => triple equivalency -> comparision of data type along with the value
!==

implicit conversion -> coercision ->

data type -> 

str == num -> it does this type conversion -> implicitely -> on its own

parseInt(str) -> conversion -> explicit conversion -> i am doing intentionally



var str = '10' => datatype is string

var numb = 10; => datatype is number 

when I do something like 

str == numb => how internally it is getting executed

------>   parseInt(str) => compare str and numb -> integer 10 and integer 10
===> true

str === numb => max times you will be preferring === over ==
======> false


Falsy and truthy values -> 

false -> booleans
true -> booleans 

Falsy values ->
	1) 0
	2) NaN
	3) undefined
	4) null
	5) ''

	if your variables are getting computed to any of the above valeus 
	they will be sort of considered as false.


Execution Context ->
	memory allocation pahse & code execution phase -> 

	single threaded ->
Functions -> 
	normal functions
	functions expression
		var funcVariable = function abcd(){
			console.log('something')
		}
		abcd() -> this is wrong -> error
		funcVariable()



Execution Context -> 
	var and functions

	function expression -> variable -> variable rather functions
	var funcX = function abcd(){

	}

Hoisting -> The phenomenon where we are able to get the value undefined 
for the variables which are yet to be declared that is basically your hoisting -> 

	1) variable declaratio are scanned and made undefined
	2) function declarations(normal functiosns) are scanned and made avaiable ->

Scope and scope chain -> 

22nd June

Scope -> more illustrations
Questions on scope, execution context and hoisting -> var

Basic about objects -> basics 

Dealing with strings ->



In Class questions - all remaining

Quiz 


Algorithm -> 
	1) Execution context gets pushed to the stack
	2) Memory allocation phase happens (js doesnt care what is going on
	in the code)
	3) Code Execution happens line by line



Some basics around programming -> binary operators and operator
precedence -> done

Scope Questions -> more
Lexical Environments -> done ->

IIFE -> Instantaneoulsy Invoked Function Expression

Arrow Functions, 
callback, 
first class functions and 
high class functions


First Class Functions and High class function 
first order function and high order function


try catch

-> predefined errors -> 
	Error
	TypeError
	ReferenceError
	RangeError
	SyntaxError

-> custom errors as well -> 
	How? not required right now 


let and const -> 
scoping of let and const  ->


var vs let vs const 
1) declarations and initilizations
2) scoping 

let and cosnt have block scope whereas the var has function scope
{
	
}

var a = 5;
function (){
	//var a = 10;
	console.log(a) //10
}
console.log(a) //5

function scope vs block scope -> 

in case of let and const we cannot have the same declarations of it
in the same scope. 
If they are in differnt scope they will act as a different variable
like the same way we had a "var" in global and a function.


Alternate
we cannot have 2 same variable if one of them is let or const declaration in same scope

loops -> 
for()



hoisting in let and const -> 
temporal dead zone -> 
impact of let and const on execution context ->
questions based on let and const -> 

hoisting even happens in let and const. 


Harsha
Mansha
Tushar
Sheik
Kajal





Github pages hosting -> 

Hosting -> 
	FE -> Github pages -> easiest
		netlify 
		vercel
	Be + Fe -> Netlify
				vercel  

				domain -> netlify
						vercel
						github 

				domain-> buy
				hosting ->


Grid website 

1) variables - 1)
2) Reset -> 
3) Utility classes -> 

4) normal css ->
	1) taking care of symbol -> rem, em, %,vh vw, px
	2) Usage of flex, grid 
	3) media queries 

ideally -> more than 3 breakpoints -> 




let vs const vs var 

1) const -> 
2) let -> 

var -> frontend -> window.(var based variable) -> ()

.length
.push
.pop 

const arr = [10, 20, 30];
arr.pop(); 
clg(arr); [10, 20]
clg(arr.length); //2
arr.push(60); 
clg(arr);//[10 20 60]



array methods -> split and join
spread operator -> 
true copy vs not

rest and spread operator in array 
destructing in array 




more array methods -> (splice, slice, indexOf, lastIndexOf); done
questions on spread operator -> done


higher order functions -> inbuilt -> array
	Every ->
	Map ->
	Filter -> 

	Reduce -> 




Reduce -> 
internal workings of (proabable)-> reduce, map, filter, every 


JS Math -> 
for in loop obj ->
destructing in objects ->

//Next lecture
destructing -> 

spread operator in objects -> done
questions on destructing and spread in objects -> done



sorting in arrays -> (a little ) -> done
imperative vs declarative programming -> 

	imperative, declarative -> 

	imperative -> the developer is doing the more work
	you have more control over your code -> 

	decalrative -> we are depending on the library (existing code)
	we are more focused over the output -> 

	for -> 

		for(let i=0; i<1; i+2){

		}
		for(let value of arr){

		}

let, const, var -> edge cases (hositing, scopes)-> (30 mins) done


//Next to next lecture ->
Core JS -> Js in browser -> () ->
DOM ->
Selectors -> 
Css addition -> 


client side js vs server side js 


Browsers renders soemthing on the page -> 

HTML -> Markdown language -> 


JS -> 
1) Can access elements 
2) It can change the content of the elements
3) we can add style (inline css ) to the elements through JS
4) Dealing with classes -> adding, removing

window -> global object 

window -> 
		console
		document
		location -> pathname, complete url name, port, protocol
			to switch html pages -> 

		setTimeout -> 
		setInterval ->

		localStorage
		sessionStorage
		and many more things that we will see later on



you have 2 buttons on the webpage, 
the first button should have its color as red immediatelly when we 
execcute the js
the second button should have its background color as green after 
4seconds.

1) create 2 buttons on html 
2) selector of buttons 
3) change color of first
4) change bg color of second in a setTimeout


button 
button 


window
	location

setInterval
setTimeout

-----------------------------
Events -> extremely important 

How to select -> select attributes
How to add -> attributes through js

In class questions ->
-----------------------------

click -> 

dblclick -> 
focus -> 
blur ->
scroll -> 
keyup / keydown / keypress -> 
change -> 
mouseover  ->
mouseenter ->
mousexit -> 

Register -> addEventListener ->  (** the one you have to use)
onclick  -> html end
selectedELement.onclick -> js end


Separation of Concerns -> 

I don't want the js to be present with my html code ->

why? 
readibility ->
easeiness of finding things -> 

not interlink -> 

//hwo to get a vlaue from the input box -> 

You have two input boxes -> 
both input box accepts number ->

There is a button called as sum ->

Once the user clicks on the button -> On the consoled I want the added 
sum of of the input boxes.

Points to take care of:-
1) If the input box is empty, you should not display any sum
rather you should print on console that please provide all inputs
2) once sum has been succesfully calculated the input box should be 
empty



event -> 

form -> 'submit' ->default functionality -> redicerts and submits form
information and refreshes -> forms->

button -> 'click' -> 

a -> href -> redirects to the url -> default 


dragover -> not to be dragged -> 



user submits the form -> capture response -> store in obj ->
print ovj -> inside the displayArea show the values of the user ->

event capturing and bubbling -> 


events are a very expensive operation -> 
why expensive? we will discuss later -> 
That we should apply events judiciously -> 

1) output questions based on event listeners -> propagation
2) immediateStopPropagation()
3) event delegation ->  question based on event delegation

4) DOM level 2 -> 
	Creation of html nodes -> 


-> formData -> 
	docuemnt.querySelector()


formda
API -> new formData() -> form -> 

internal storage in browsers
localstorage
sessionstorage
cookies 


5) Level 3 -> formdata()
creating your own events 
dispatching your custom events 
dispatching the events already present



->
calculator -> should not work with mouse ->
everythign should be handled with keyboard -> 

only the place where you want to enter the value can be clicked 
rest whole claculator should be operated with the keyboard itself 


keyboard -> \ -> on the entire screen -> you will place the cursor
at the input area -> 









stopPropagation -> 
child and parent -> events propgatin ->



immediateStopPropagation -> superSet of stopPropgation ->

stopProgation + it even blocks the other events on the same level


(obj['key'] === obj.key) != obj[key]



Take home assingment -> solution to be done by 6th August 2023 
9:00 pm ->

TODO LIST ->  easily relatable real life application ->

TODO List -> JS  -> assignement 

	Input box -> 
	Next to the input box you have a create task button ->

	User inputs a value -> click on the create task button ->
	the value gets appended to a box ->

	Now the way this todo is getting added -> 
	within this todo -> there should be

	1) Remove button -> when the user clicks on the remove button
	the todolist should be removed
	2) ofcourse the user data -> 
	3) Optional -> there is another button -> Mark Important ->
	when the user clicks this button for the first time -> 
	the entire background of that todo becomes yellow 
	when the user clicks that button again the yellow background 
	gets removed 
	(Hint: to solve optional -> use classlist.toggle())

to use localstorage to handle the list -> (not to be btohered)

TODO List -> React, -> with multiple other things ->


LocalStorage Vs Session Storage Vs Cookies -> 

All these are browser storage ->
Basically if you temprarily wanna store something on to the clients
 end4

 LocalStorage -> whatever information you store in localstorage 
 it remains there permanently unless and untill you delete it by going 
 in the chrome web tools and deleting it or through code.

 basically -> local storage isnt automatically deleted by browser ->
 you need a manual triggger to delete it.


 CRUD -> create read update delete

 //create
localStorage.setItem('name', 'naman');
localStorage.setItem('age', '10');

//update -> manipulating an existing key
localStorage.setItem('name', 'new valuie')


//read
const newName = localStorage.getItem('name');
console.log(newName);

//delete
localStorage.removeItem('name');


localstorage -> 
stores things in string format -> 

JSON -> Javascript Object Notation

Whenever we are communicating we need a certain format for that 
communication 
and that format is JSON

Json is not kjsut used for communication -> it is also used for storage


to convert JS object to JSON -> use -> JSON.stringify(<JS_object>)
to convert JSON to JS Object -> use -> JSON.parse(<JSON>)


Session Storage -> 
session storage -> can get automatically removed by the browser on 
closure of a tab/ browser

the manual ways that we had in local storage is also present in 
session storage -> 

Localstorage and session storage have storage value in MB 
session storage -> 5MB, Local storage -> >5MB

Cookies -> 
1KB -> 

Why we need cookies -> 


Next Lecture ->
COmplete TODO application by integrating local storage -> 
Another application -> making a toast -> very good question ->
CLass assignemnts ->

Homework -> to attemot the class assignemtns ->
			Revision 

Fundamentals -> 

Next Leccture ->
JS again -> THIS keyword ->


