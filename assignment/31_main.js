const Heading1= document.querySelector('#title1');
Heading1.style.display="inline-block";
Heading1.addEventListener('mouseover', ()=>{
    Heading1.style.color="green";
} );


const Heading2= document.querySelector('#listHeading2');
Heading2.style.color="red";

const liTag=document.querySelector('body');
liTag.style.fontFamily = 'Poppins';

const UlList=document.querySelector('ul');
const litagRemove=document.querySelector('#techStack2');
UlList.removeChild(litagRemove);
