{    
    class Cat{
        stateFeedPoint: number = 0;
        statePlayPoint: number = 0;
        feel: string = "";
        // 'hungry' | 'tired' | 'full' | 'happy'

        feed(){
            this.stateFeedPoint += 30;
            console.log(this.state());
        }

        play(){
            this.statePlayPoint += 15;
            console.log(this.state());
        }

        state(): string{
            if(this.stateFeedPoint <= 30 && this.statePlayPoint < 30){
                this.feel = "tired";
            }else if(this.stateFeedPoint <= 30 && this.statePlayPoint > 30){
                this.feel = "hungry";
            }else if(this.stateFeedPoint > 30 && this.statePlayPoint <= 30){
                this.feel = "full";
            }else if(this.stateFeedPoint > 30 && this.statePlayPoint >= 30){
                this.feel = "happy";
            }else{
                throw new Error('Error');
            }

            return this.feel;
        }
        
    }

    const cat = new Cat();
    cat.feed();
    cat.feed();
    cat.play();
    cat.play();
    cat.play();
    
}