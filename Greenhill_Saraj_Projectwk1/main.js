/*
Description: PWA2 - Week One - Project One
Author: Sarah R. Greenhill - 770562
Date: August 9, 2015
*/

$(document).ready(function() {
	$("#contentleft ul").css("backgroundColor", "orange"); /* Target 1-A: Targetted the first unordered list under the ID of contentleft and changed the background color to orange with a css method*/
	console.log($("#contentleft ul").offset()); /* Target 1-B: Logged to the console the top position of the first ul under the contentleft ID*/
	console.log($("#contentleft ul").position()); /* Target 1-C: Logged to the console the top position using the position method*/
	
	$("#contentleft ul").find("li").eq(1).css("marginLeft", "30px"); /* Target 2-A: Targetted the UL located under contentleft ID, selected its children li elements using the .find() method, and the used the .eq method to specify exactly which li child I wanted to change the margin on */
	
	$("#contentleft ul").find("li").eq(3).css("color", "red"); /* Target 3-A: Targetted the UL located under contentleft ID, selected its children li elements using the .find() method, and the used the .eq() method to specify exactly which li child I wanted to change in the list, then used .css() method to change the text's color to red*/
	
	console.log($("#contentleft ul").find("li").filter(":last").width()); /* Target 3-B: Logged to the console the width of the last li child in the stack by utilizing the .filter()method and specifying which li element I wanted to select and output */
	
	$("#contentright h3").css("float" , "right"); /* Target 4-A: Traversed the DOM by using the contentright ID and h3 element to float the h3 element to the right */
	$("#contentright h3").addClass("listhead").append(); /* Target 4-B: Applied the listhead class to the floated h3 element with the .addClass() method and appending it to the DOM */
	console.log($("#contentright h3").hasClass("listhead")); /* Target 4-C: Logged to the console whether or not the floated h3 element under the contentright ID was indeed classified with "listhead"*/
	
	$("#contentright ul").children().next().next().find("a").attr("href" , "http://www.yahoo.com"); /* Target 5-A: Selected the href of the third li element in the list under the ul that is a child of the contentright ID. Using the .children() method and then traversing through the DOM with .next() methods until I reache the proper location in the stack, I then changed the link to yahoo */
	$("#contentright ul li").next().find("a").attr("href" , "http://www.notgoogle.com"); /* Target 5-B: Finally targetted all of the a elements in the list under the ul that is a child of the contentright ID and changed them all, except for the first a element in the list, to notgoogle by skipping over the first with a .next() method */
});

