
class Beer {
    
    constructor (name, minTemperature, maxTemperature, currentTemperature){
        this.name = name
        this.minTemperature = minTemperature
        this.maxTemperature = maxTemperature
        this.currentTemperature = currentTemperature
    }
    
    setRoomTemperature(currentTemperature){
        this.currentTemperature= currentTemperature
    }

    isGood(){
        return this.currentTemperature >= this.minTemperature && this.currentTemperature <= this.maxTemperature
    }

    getMessageTemperature(){
        var isGood = this.isGood()
        return isGood ? 'Temperature Ok': 'Temperature is not Ok' 
    }

    static getBeerbyName(name){
        
        for (let index = 0; index < BeerMock().length; index++) {
            const element = BeerMock()[index];
         
            if (element.name == name)
                return element
        }
    }
}

const BeerMock = () =>
    [
        new Beer('', 0, 0, 0),
        new Beer('Beer 1 (Pilsner)', 4, 6, 4),
        new Beer('Beer 2 (IPA)', 5, 6, 5),
        new Beer('Beer 3 (Lager)', 4, 7, 7),
        new Beer('Beer 4 (Stout)', 6, 8, 8),
        new Beer('Beer 5 (Wheat beer)', 3, 5, 3),
        new Beer('Beer 6 (Pale Ale)', 4, 6, 6)
    ]; 

    
export {Beer,  BeerMock}