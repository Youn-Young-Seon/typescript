{    
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private
    // protected
    class CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (Object) level

        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots: shots,
                hasMilk: false
            }
        }
    }

    
    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    console.log(maker);
    // maker.fillCoffeeBeans(-1);


    class User{
        // private firstName: string;
        // private lastName: string;        
        constructor(private firstName: string, private lastName: string){
            // this.firstName = firstName;
            // this.lastName = lastName;
        }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }

        set age(num: number){
            this.internalAge = num;
        }

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const user = new User('Steve', 'Jobs');
    console.log(user.fullName);
    // user.firstName = 'Ellie';
    console.log(user.fullName);
}