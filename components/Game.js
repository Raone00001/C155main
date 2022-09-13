// Registering component in Game.js
AFRAME.registerComponent("game-play", {
    schema: {
        elementID: { type:"string", default:"#ring1" }
    },

    update: function() {
        this.isCollider(this.data.elementID);
    },

    isCollider: function(elementID) {
        const element = document.querySelector(elementID);
        element.addEventListener("collider", (e) => {
            //"includes" will find if one string is part of the other string's value
            if(elementID.includes("#ring")){
                console.log(elementID + "collision")
            } else if (elementID.includes("#hurdle")){
                console.log("Bird Collision");
            }
        });
    }
});
