
class Container {
    
    constructor (name, temperature){
        this.name = name
        this.temperature = temperature
        this.beers = []
    }
    
    addBeer(beer){
        this.beers.push(beer)
    }

    getTemperature(){
        return this.temperature
    } 
}

export {Container}