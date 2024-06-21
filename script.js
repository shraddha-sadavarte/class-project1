function changeAboutMeText(){
    const aboutMeTexts = ["Frontend Developer", "Java Developer", "Web Developer"];
    const typingspeed = 100;
    const erasespeed = 100;
    const pausetime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type(){
        const currentText = aboutMeTexts[textIndex];

        //typing
        if(!isDeleting && charIndex < currentText.length){
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingspeed);
        }

        //erasing
        else if(isDeleting && charIndex > 0){
            aboutMeElement.textContent = currentText.substring(0, charIndex -1);
            charIndex--;
            setTimeout(type, erasespeed);
        }

        //switching the deleting or typing process
        else{
            isDeleting = !isDeleting;
            if(!isDeleting){
                textIndex = (textIndex+1)% aboutMeTexts.length;
            }
            setTimeout(type, pausetime)
        }
    }
    type();
}
window.addEventListener("load", changeAboutMeText);