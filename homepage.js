body{
<<<<<<< HEAD
    margin: 0;
    padding: 0;
    /* height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: teal; */
}
.main{
    width: 100%;
    height: auto;
    display: flex;
    margin: auto;
    gap:20px;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;
   
}

#side-image{
    width:90%;
    height:500px;
}
.slider{
    width:70%;
    height:500px;
    /* border-radius: 10px; */
    overflow:hidden;
}
.slides{
    width:500%;
    height:500px;
    display:flex;
}
.slides input{
    display:none;
}
.slide{
    width:20%;
    transition:2s;
}
.slide img{
    width:800px;
    height:500px;
}

/* css for manual slide navigation */
.navigation-manual{
   position: absolute;
   width:800px;
   margin-top:-40px;
   display:flex;
   justify-content: center;
}
.manual-btn{
    border : 2px solid gray;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}
.manual-btn:not(:last-child){
    margin-right:40px;
}
.manual-btn:hover{
    background: white;
}
#radio1:checked ~ .first{
    margin-left: 0;
}
#radio2:checked ~ .first{
    margin-left: -20%;
}
#radio3:checked ~ .first{
    margin-left: -40%;
}
#radio4:checked ~ .first{
    margin-left: -60%;
}
/* css for automatic navigation */
.navigation-auto{
    position: absolute;
    display: flex;
    width:800px;
    justify-content: center;
    margin-top: 460px;
}
.navigation-auto div{
    border:2px solid gray;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;
}
.navigation-auto div:not(:last-child){
    margin-right:40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1{
    background: white;
}
#radio2:checked ~ .navigation-auto .auto-btn2{
    background: white;
}
#radio3:checked ~ .navigation-auto .auto-btn3{
    background: white;
}
#radio4:checked ~ .navigation-auto .auto-btn4{
    background: white;
}
=======
    font-family: 'Manrope', sans-serif;
}
#filter{

    width: 20%;
}
.container {
    position: relative;
    width: 100%;
    height: 300px;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease;
  }
  
  .container:hover .overlay {
    display: block;
    background: rgba(0, 0, 0, .3);
  }
  
  img {
    width: 100%;
    height: 300px;
    left: 0;
  }

  .button {
    position: absolute;
    width:100%;
    left:0;
    top: 250px;
    text-align: center;
    opacity: 0;
    transition: opacity .35s ease;
  }
  
  .button a {
    width: 100%;
    padding: 12px 48px;
    text-align: center;
    color:white;
    border: 2px solid white;
   /* background-color: rgb(255,112,53); */
    z-index: 1;
  }
  
  .container:hover .button {
    opacity: 1;
  }
  .btn{
     text-decoration: none;
  }
  #product{
    display: grid;
    grid-template-columns:repeat(3,1fr);
    gap: 20px;
   
   
  }
  .card{
    
    width: 100%;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  .info{
    padding: 10px;
  }
  #mainpage{
    display: flex;
   
  
  }
  .category{
    color: rgb(143,143,143);
  }
  .price{
    color: rgb(255,112,53);
  }
  .discount{
    color: rgb(104,174,92);
  }
  @media screen and (max-width:700px) {
    #mainpage{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      
      }
    #product{
        display: grid;
        grid-template-columns:repeat(2,1fr);
        gap: 20px;
        border: 1px solid black;
       
      }
      #filter{
        margin: auto;
        width: 90%;
        display: flex;
        margin-bottom: 30px;
    }
  }
>>>>>>> 6a6aaabab2b47efe1bf0c8c4da0ab15c218a8267
