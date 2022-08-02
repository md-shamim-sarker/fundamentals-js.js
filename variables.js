{
    var x = 10;
    console.log(x);

    var x = 20; // allowed
    console.log(x);

    x = 30; // allowed
    console.log(x);
}

{
    let x = 10;
    console.log(x);

    // let x = 20; // not allowed

    x = 30; // allowed
    console.log(x);
}

{
    const x = 10;
    console.log(x);

    // const x = 20; // not allowed

    // x = 30; // not allowed
}

/*
3. variables
Variables are placeholders for information. Think of it as a memory bucket that holds your data.

Use the keyword let to declare a variable and give it a name.

This will initialize it. You can assign a value to it using =

If you don’t assign anything to it, the default is set to undefined — which means that it’s been initialized but there’s absolutely nothing in the bucket. In short, it just means that it hasn’t been set, ever.

This is different from null

With null , a developer has to manually assign it. In a way, it’s physically acknowledging the fact that your code has purposely made sure that the bucket is empty and that you just haven’t forgotten to fill it or that something went wrong in the process.

In older scripts, var is used. The way they behave impacts on your final output.
*/