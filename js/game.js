// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            message: "The cave is dark but you find a torch",
            choices: [
                {
                    text: "Light Torch",
                    nextLevel: "death",
                },
            ]
        },
        
        death: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You see teeth in front of you the last thing ever. What did you expect? ",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Continue on your journey",
            choices: [
                {
                    text: "Continue ",
                    nextLevel: "start",
                },
            ]
        },
        
        field: {
            message: "Continue on your journey",
            choices: [
                {
                    text: "Go Back",
                    nextLevel: "cave",
                },
                {
                    text:"Go Home",
                    nextLevel:"home"
                },
            ]
        },
        
        
        home: {
            background_image:"house.jpg",
            message: "You arrive home and eat dinner. Afterwards you raid a village.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
    }
};