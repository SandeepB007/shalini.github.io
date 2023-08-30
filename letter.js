var i = 0;
var txt1 = `
Dearest Somuuuuu,>>

I don't even know where to start!! There are just endless awesome things about you
and I'm having a difficult time picking one to talk about 😁. But before all that.. 
thank you soo much for letting me express myself, letting me vulnerable around ya, 
letting me love you and feel loved. Thank you for chosing me among all the different
other men who tried hitting on ya (poor them, and lucky me 😊).>>

Do you even have any idea how much I have been smiling lately? Not sure about other 
stuff but I'd trade everything I have, to keep that pretty smile on your face for as 
long as I could. Super jealous of people around ya. Not sure what black magic you know 
but with you around, time freezes!! Or Maybe it's due to the strong force of attractions 
around ya that have been hindering my ability to perceive time. Put it shortly, you are 
beyond amazing.>>

No seriously, you are an amazing dancer 😍, with one of the sweetest voice 🥰, ambitious about 
your career 📈, damn fking strong 💪 (too afraid to be sexist around ya), you can file ITR too 🤩!!!, 
a kind hearted soul who was willing to even take me to a doctor 🥺, man the list just would 
go on and onnnn. I bet hundreds of others would've already shared them with you and I don't wanna 
bore you saying the exact same things again and again, but damnnn you are an angel.. you are 
everything any guy would wish for! ❤️❤️. How can anyone not pamper you!!>>

I don't know what the future holds for us, nor do I wanna spend time worring about things I have no control on. I don't 
wanna make another one of those boring ass promises (promises are overrated 😩). I don't wanna 
ask you about your traumas and make you exp them once again. For all I know, I am out of luck 
as all of it was used in finding you. Now that you are here, let me love you, 
let me love you a little more every day in this very moment. I wanna hold your hand and smile 
like the luckiest man in this world 😁.. for you, brighten my day than the sun ever can, ring the 
bells of happiness with every ping I receive, every notification I get I secretly hope it's 
from you. Darling without you even realizing, you are making me go to the moon and back!! >>

Loveee you sooooooooooo much somuuuu 😚😚😚 >>

Your hopless romantic >
Juju
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
