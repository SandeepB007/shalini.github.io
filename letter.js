var i = 0;
var txt1 = `
Yo Shaliniiiii, >>
I think we are meeting again at the same place !!!! >>>

I am very bad at expressing myself and very good at messing things, dont know what to say where to start 👉👈.
Whenever I see you, forget seeing even when I talk with you. I feel fullll butterflies and em cheppalo anni marchiptotaaa 😅😁.

I just want you to know that you are my special special speciallllllll person and will always be.
I want to call you my cutiepie, sweetie, bangaram, bujji, bajji, ammulu everything. I just want to make you feel as special as you are in my head.

Will you come on a "Date" with me 😍.
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
