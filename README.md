progress-step
=============

When you page is like a wizard or if you screen is performing multiple steps before proceeding to next page, it would be handy if you could combine the progress step and loading like animation. This small snippet allows to do navigate through steps and animate when a specific step is in progress

CSS approach was borrowed from this site http://thecodeplayer.com/walkthrough/jquery-multi-step-form-with-progress-bar

I improvised to pull the progress header out and made it dynamic and standalone widget with nice little animations.

![My image](http://praveen262k.github.io/resources/Screen Shot 2.png)
![My image](http://praveen262k.github.io/resources/Screen%20Shot.png)

Working example
=============
http://praveen262k.github.io/progress-step/example.html

Usage
=============

//Initialize the component with the step labels

progressStepsWidget.initialize("progressbar",
                ["Authenticating", "Loading Profile", "Synchronizing", "Loading home screen"]);

//Sets the animation to the first label

progressStepsWidget.start();

//Move to next step

progressStepsWidget.moveNext();

//If the current step has errored out
progressStepsWidget.setError();


