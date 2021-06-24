{
    type test1 = {
        aa: string,
        bb: number
        cc(): void
    }

    interface test2{
        aa: string,
        bb: number,
        cc(): void
    }


    class test3 implements test2{
        aa: "dd" = "dd";
        bb: 123 = 123;
        cc(): void {
            console.log('dddd');
        }
    }
    const test2 = new test3();
    console.log(test2);
}