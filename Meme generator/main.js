
const Meme_generatorButton=document.querySelector(".meme-generatorButton");
const MemeImage=document.querySelector(".meme-image");
const MemeAuthor=document.querySelector(".meme-author");
const MemeTitle=document.querySelector(".memetitle");



async function updateDetail(url,title,author)
{
  MemeImage.setAttribute("src",url);
  MemeTitle.innerHTML=title;
  MemeAuthor.innerHTML=`Meme by: ${author}`;
}

const generateMeme = ()=>
{
      fetch("https://meme-api.com/gimme/wholesomememes")
     
    .then((response) => response.json())
      .then((data) =>{ 

          updateDetail(data.url,data.title,data.author);
      });
      console.log(data);
};

if(Meme_generatorButton){

Meme_generatorButton.addEventListener("click",()=>{

    generateMeme();
})}
generateMeme();




