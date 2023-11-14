var i = 0;
var txt1 = `
Yo Shaliniiiii, >>
I think we are meeting again at the same place !!!! >>>

I am very bad at expressing myself and very good at messing things, dont know what to say where to start. -> <-// Emoji >>>

I just want you to know that you are my special special speciallllllll person and will always be.
It might not be for you, but naaku any small thing you do affects me a lotttt both in good and bad ways. >>>

Will you come on a "Date" with me 😍.// love-emoji.

// option to select Yes or No.

`
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
