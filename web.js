const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <!-- <link rel="stylesheet" href="style.css"> -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <style>
          *{
      padding: 0%;
      margin: 0%;
  }
  .navbar
  {
      border: solid;
      background-color:rgb(48, 167, 48);
      width: 100%;
      height: 25px;
      border-radius: 30px;
      display: flex;
      padding-bottom: 14px;
      position: fixed;
      z-index: 23;
  
  }
  .navbar ul
  {
      display: flex;
      list-style: none;
      padding-top: 10px;
  }
  .navbar ul li a
  {
     font-family: 'DynaPuff', cursive;
      padding: 3px;
      border: 20px;
      color:white;
      text-decoration: none;
      padding-right: 25px;
      padding-left: 25px;
  
  }
  .navbar ul li a:hover
  {
      background-color: white;
      color: rgb(48, 167, 48);
      border-radius: 7px;
  }
  #gimsimage
  {
      width: 100px;
      height: 30px;
      filter: invert(90%);
      padding-right: 5px;
  }
  .saeed
  {
      padding-top: 0.3%;
      padding-left: 1%;
  }
  #root
  {
      background: url(https://www.extremenetworks.com/wp-content/uploads/2021/02/34418-lincoln-university-cs-featured-image_705x400_v1-01-1024x581.jpg);
      width: 100%;
      height: 500px;
      opacity: 0.7;
      background-repeat: no-repeat;
      background-size: 100%;
      z-index: -165;
  }
  #college_name
  {
      align-items: center;
      padding-left: 350px;
      color: aliceblue;
      padding-top: 100px;
      font-size: 50px;
  }
  
  #function
  {
      width: 100%;
      height: 400px;
      border-color: black;
      display: flex;
      background-color: silver;
      justify-content: center;
      padding: 10px;
      align-items: center;
      justify-content: space-around;
  }
  .classmain
  {
      border: 1px;
      width: 300px;
      height: 300px;
      background-color: rgb(137, 238, 148);
  }
  .classmain
  {
      text-align: center;
  
  }
  #main1 button
  {
      border: solid;
      padding: 5%;
      margin-top: 20%;
      cursor: pointer;
  }
  #main2 button
  {
      border: solid;
      padding: 5%;
      margin-top: 20%;
      cursor: pointer;
  }
  #main3 button
  {
      border: solid;
      padding: 5%;
      margin-top: 20%;
      cursor: pointer;
  }
  #main1 button:hover
  {
      background-color:rgb(63, 161, 21);
      width: 150px;
      height: 100px;
      color: white;
  }
  #main2 button:hover
  {
      background-color: rgb(63, 161, 21);
      width: 150px;
      height: 100px;
      color: white;
  }
  #main3 button:hover
  {
      background-color:rgb(63, 161, 21);
      width: 150px;
      height: 100px;
      color: white;
  }
  .classmain p
  {
      margin-top: 50px;
      font-family: 'Bebas Neue', cursive;;
  }
  .sponsor
  {
      width: 100%;
      height: 300px;
      border: solid;
      margin-bottom: 5pc;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
  
  }
  #apple
  {
      width: 200px;
      height: 100px;
  }
  #amazon
  {
      width: 200px;
      height: 100px;
  }
  #facebook
  {
      width: 200px;
      height: 100px;
  }
  #tata
  {
      width: 200px;
      height: 100px;
  }
  
      </style>
  </head>
  <body>
       <div class="navbar">
          <img id="gimsimage" class="saeed" src="gims.png" alt="www.google.com">
          <ul class="saeed">
               <li><a href="www.facebbok.com" target="_blank">HOME</a></li>
               <li><a href="www.facebbok.com" target="_blank">REGISTRATION</a></li>
               <li><a href="www.facebbok.com" target="_blank">DEPARTMENT</a></li>
               <li><a href="www.facebbok.com" target="_blank">GALLERY</a></li>
               <li><a href="www.facebbok.com" target="_blank">ABOUT US</a> </li>
               <li><a href="www.facebbok.com" target="_blank">HELP</a></li>
          </ul>
      </div> 
      <div id="root" >
          <!-- <img src="https://www.extremenetworks.com/wp-content/uploads/2021/02/34418-lincoln-university-cs-featured-image_705x400_v1-01-1024x581.jpg" id="campus" alt="www.google.com"> -->
          <h1 id="college_name">GIMS INSTITUTE OF TECHNOLOGY</p>    
      </div>
      <div id="function">
          <div class="classmain" id="main1">
              <button class="button" onchange="https://github.com/saeeduddin094">ADMISSION</button><br><p> OPEN FOR BATCH 2022-2023 </p>
          </div>
          <div class="classmain" id="main2"> 
              <button class="button" onclick="https://github.com/saeeduddin094">CAMPUS</button><br><p>500+ ACRE GREEN AND CLEAN CAMPUS </p>
          </div>
          <div class="classmain" id="main3">
              <button class="button">ALUMINI</button><br><p>500+ ALUMINI ALL OVER THE WORLD</p>
          </div>
      </div>
      <div class="sponsor">     
           <div class="S">
              <a href="https://www.hackerrank.com/saeednitjsr"><img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202208050401" alt="www.facebook.com" id="apple"> </a>
           </div>
           <div class="S">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="www.facebook.com" id="amazon">
           </div>
           <div class="S">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt="www.facebook.com" id="facebook">
           </div>
           <div class="S">
              <img src="https://logos-world.net/wp-content/uploads/2021/10/Tata-Logo.png" alt="www.facebook.com" id="tata">
           </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});