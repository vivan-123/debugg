class Food
{
    constructor()
    {
        this.lastfed;
        this.foodstock;
        this.milkbottle = loadImage("images/Milk.png")
    }

    getFoodStock()
    {        
        var foodref = database.ref("food");
        foodref.on("value", readpos, errorpos);

        var foodstockref = database.ref("foodstock");
        foodstockref.on("value", readpos2, errorpos);

        database.ref("/").set({ foodstock : 50,
        food : 0 }) 
    }

    

    updateFoodStock()
    {
        if(keyDown(DOWN_ARROW))
        { 
            database.ref("/").update({ foodstock : foodstock + 1,
            food : food })
            doggo.changeImage("doggoanimation", dog)
        } 
    }

    deductFoodStock()
    {
        
         
            doggo.changeImage("happydoganimation",happydog) 
            database.ref("/").update({ food : food + 1,
            foodstock : foodstock -1 }) 
        
    }


    display()
    {
        var milk = database.ref("foodstock")
        for (var i = 0;i < milk;i++)
        {
            image (this.milkbottle,250,250,this.milkbottle.width,this.milkbottle.height)
        }
        
    }
}