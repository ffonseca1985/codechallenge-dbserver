
class Beer {
    
    constructor (name, minTemperature, maxTemperature, currentTemperature){
        this.name = name
        this.minTemperature = minTemperature
        this.maxTemperature = maxTemperature
        this.currentTemperature
    }
    
    setCurrentTemperature(currentTemperature){
        this.currentTemperature= currentTemperature
    }

    isGood(){
        return this.currentTemperature > this.minTemperature && this.currentTemperature < this.maxTemperature
    }
}

const BeerMock = () =>
    [
        new Beer('Beer 1 (Pilsner)', 4, 6),
        new Beer('Beer 2 (IPA)', 5, 6),
        new Beer('Beer 3 (Lager)', 4, 7),
        new Beer('Beer 4 (Stout)', 6, 8),
        new Beer('Beer 5 (Wheat beer)', 3, 5),
        new Beer('Beer 6 (Pale Ale)', 4, 6)
    ]; 

export {Beer,  BeerMock}