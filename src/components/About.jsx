import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-upper">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
            <p className="text-xl mt-20" style={{color:"grey"}}>
            Greetings, esteemed individuals! I am Abhijeet Singh Kushwaha, a dedicated scholar currently immersed in the pursuit of excellence as a third-year student of Chemical Engineering at the illustrious Indian Institute of Technology Guwahati.
        An enthusiastic student interested in software development having good experience of data structures who believes in changing the world through improving softwares.
        I’ve always been passionate about learning things and applying them and exploring the tech world has been a lot of fun to me.
        </p>


        <p className="text-xl" style={{color:"grey"}}>
        I am currently a budding  programmer who alse specialises in building web applications, has experience in game development as well as proficient in data structures and various algorithms along with presentation and design skills.
        I have good mental aptitude and fast problem solving skills. I always seek new opportunities for cooperation on interesting projects and designing things.
        </p>
          </p>
        </div>
        <br />
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Achievemants:
           
            <p className="text-xl mt-20 text-grey" style={{color:"grey"}}>
               <a href="https://leetcode.com/abhijeetkushwaha208001/" style={{color:"white"}}>Leetcode: </a>   
               Solved 650+ problems on Data Structures and Algorithms (Max rating of 1660).
               
               <br />
               <br />
               <a href="https://auth.geeksforgeeks.org/user/abhijeetkushwaha208001/practice" style={{color:"white"}}>GeeksForGeeks: </a>   
               Solved 200+ problems on Data Structures and Algorithms. 
               <br />
               <br />
               <a href="https://www.hackerrank.com/domains/cpp?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=cpp" style={{color:"white"}}>HackerRank: </a>   
                 6 start in CPP.
               <br />
               <br /> 
               <p className="text-xl">
               <a href="" style={{color:"white"}}>State Topper: </a> 
                 Secured 8th rank in the state among 2.5 million+ candidates in board examination 2018
               </p>
            </p>
             
         </p>
        </div>
        
      </div>
    </div>
    
    
  );
};

export default About;
