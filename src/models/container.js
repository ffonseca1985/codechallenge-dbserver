
class Container {
    
    constructor (name, temperature){
        this.name = name
        this.temperature = temperature
        this.beer = []
    }
    
    addBeer(beer){
        this.beer.push(beer)
    }
}

export {Container}