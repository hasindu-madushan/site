const projects = {
proj1: {
    title:"Face Mask Detector",
    imgs:["img/projects/face-mask-detector-couple.png", "img/projects/face-mask-detector-code1.PNG", 
        "img/projects/face-mask-detector-code2.PNG", "img/projects/face-mask-detector-dataset.PNG", 
        "img/projects/face-mask-detector-crowd.PNG"],
    desc:"In this project, I created and trained a CNN model to take a face image as an input \
    and predict whether the person is wearing a mask or not. First, It detects faces using a \
    haar cascade classifier in OpenCV and then crops the face image and sends it to the CNN \
    model that is created using TensorFlow. The image data set was created by combining few \
    already available datasets. The model training process was done in python. Then I \
    developed a python GUI application and also a Javascript web application to run in the \
    browser that uses this trained model. Javascript application uses Tensorflowjs and OpenCVjs. \
    I used Spyder as the python IDE and VSCode for Javascript, HTML, and CSS. You can try the web \
    application in your browser right now by clicking the following link.",
    links:[{name:"Try", ref:"https://hasindu-madushan.github.io/FaceMaskDetector/"}, {name:"Source code", ref:"https://github.com/hasindu-madushan/FaceMaskDetector"}],
    skills:["Tensorflow", "Python", "Javascript", "machine learning", "OpenCV", "image processing"]
},

proj2: {
    title:"Wizard Chess",
    imgs:["img/projects/chess-game.PNG", "img/projects/chess-game-code1.PNG", "img/projects/chess-game-code2.PNG"],
    desc:"Wizard chess is a 3d chess game where pieces have live animations made with Unity engine. \
    This is based on the famous Harry Potter movie. First, I developed the MiniMax  AI algorithm \
    from scratch in C#. The miniMax algorithm is an AI technique used in turn-based games. It is a \
    recursive algorithm and the difficulty level of the game depends on the depth of the recursive tree. \
    Since I could not find chess pieces asset with animations, I created all the 3D models and animated \
    them in Blender 3d. ",
    links:[],
    skills:["unity", "C#", "AI", "Blender 3D"]
},

proj3: {
    title: "Online Course Platform Front-end",
    imgs: ["img/projects/ilearn-home.PNG", "img/projects/ilearn-code-1.PNG", "img/projects/ilearn-dashboard.PNG", 
        "img/projects/ilearn-courses-view.PNG", "img/projects/ilearn-course-page.PNG"],
    desc: "I developed this front end for a University group project using Vue js framework. This is for an \
    online video course management system.  Users can sign up as teachers or students. Teachers can create \
    courses and upload edit course content. Students can enroll in courses and watch course videos. And also \
    it has an admin account type with the privilege to delete courses and add/delete new categories.  It also \
    has features like course search and sort.  For the front end, I used bootstrap and css for styling. ",
    links:[{name: "Demo", ref: "https://project-ilearn.herokuapp.com"}, {name: "Sourse code", ref: "https://github.com/hasindu-madushan/LMS"}],
    skills: ["Vue js", "Javascript", "CSS", "Bootstrap", "Authentication", "HTML"]
},


proj4: {
    title:"Railway Ticketing System - PC controller",
    imgs:["img/projects/javafx-RTS.PNG"],
    desc:"This was a part of a 3rd-year university project (group). The project was to create an easy, \
    reliable, and fast method to overcome issues of using an ordinary paper ticket system for trains in \
    Sri Lanka. It consists of automatic gates, swiping cards, and a hand-held card scanning device.  \
    Automatic gates are controlled by Arduino. Passengers can open gates by swiping their cards at the \
    gates. I created this Java application to connect the computer at the station to the central server. \
    And also communicate with Arduino to control the gate based on the command send by the server. And also \
    it comes with a very easy-to-use JavaFX GUI to connect gates and view status. Jserialcomm library was \
    used to connect the application to the Arduino board inside the gate. And Apache HTTP client to make \
    HTTP requests.",
    links:[],
    skills:["Java", "JavaFX", "Arduino"]
},

proj5: {
    title:"Multizip",
    imgs:["img/projects/multizip-cover.png", "img/projects/multizip-code1.PNG", "img/projects/multizip-code2.PNG"],
    desc:"One problem with the built-in python Zip file module was it cannot extract zip files with multiple \
    parts. We can create an archive with multiple parts in order to reduce the size of the zip file and make \
    them easy to transfer. I created this Multizip python module to extract files from this kind of multiple \
    zip file.  It currently does not support encryptions. But I am looking forward to adding that too.",
    links:[{name:"Source code", ref:"https://github.com/hasindu-madushan/MultiZip"}],
    skills:["Python", "ZIP", "Modules", "Zlib", "Compression"]
},

proj6:{
    title:"Football Data Analyzer",
    imgs:["img/projects/football-analyzer-1.PNG", "img/projects/football-analyzer-code1.PNG", 
        "img/projects/football-analyzer-2.PNG", "img/projects/football-analyzer-code2.PNG", 
        "img/projects/football-analyzer-code3.PNG"],
    desc:"This is a custom Python application I developed for a client. He wanted to analyze his performance \
    in the football matches based on facts such as sprint distance, duration, heat maps, sprint maps, heart \
    rate data, etc. He could record the GPS coordinates and heart rate data to a .gpx file using his smartwatch. \
    What python application does is to calculate statistics, prepare heat map, sprint map, heart rate zone plot \
    and nicely present them. The challenging part was to convert GPS coordinates to local x, y coordinates \
    relative to the ground. First, it converts GPS to 3d x, y, z coordinate relative to the earth's center. \
    And then those x, y, z coordinates to ECEF coordinates and finally ECFE to local x, y coordinates. I used \
    PyQt5 for GUI, NumPy for vector mathematics, and xml to read .gpx files.",
    links:[],
    skills:["Python", "GPS", "PyQt", "NumPy", "coordinate systems"]
},

proj7: {
    title:"Simple Renderer",
    imgs:["img/projects/simple-renderer-1.PNG", "img/projects/simple-renderer-code1.PNG", "img/projects/simple-renderer-code2.PNG", "img/projects/simple-renderer-code3.PNG"],
    desc:"This is an ongoing project. I am trying to create a portable and easy-to-use c++ library \
    that can create and reander simple 3d scenes using OpenGL specification. I am doing this project to improve my \
    knowledge of real-time rendering. It currently has features such as basic lightning with \
    multiple lights, color mapping, materials, GLSL shaders, shadows, etc. And I am adding more \
    features including HDR, bloom, MAAS, real-time reflections, and many more. The basic advantage \
    of using this library is we can avoid typing very long OpenGL initialization and render codes and render a scene \
    using only a few lines of C++ codes.  We can define a scene using the scene graph of the renderer.\
    Also, it has a rich transform system to move, rotate and scale objects during each iteration.",
    links:[],
    skills:["C++", "C", "OpenGL", "realtime rendering", "GLSL"]
},

proj8: {
    title: "Tower Defence - Unity Game",
    imgs: ["img/projects/tower-defence-2.PNG", "img/projects/tower-defence-code-1.PNG", "img/projects/tower-defence-2.PNG", "img/projects/tower-defence-code-2.PNG",
        "img/projects/tower-defence-code-3.PNG", "img/projects/tower-defence-menu.PNG"],
    desc: "This is a 3d Game I developed as a freelance project. It is a simple tower defense game where \
    the player can defeat the enemy waves by placing structures. There are several structures such as \
    turrets, bombs, etc. It has 3 levels and each level is more difficult than the previous one. Enemy \
    characters consist of state machine-based AI. And all the 3d models for the game were created by me \
    using Blender 3D.",
    links: [],
    skills: ["Unity", "C#", "Blender 3D"]
},

proj9: {
    title: "Tindog - Landing Page",
    imgs: ["img/projects/tindog-1.PNG", "img/projects/tindog-2.PNG", "img/projects/tindog-code-1.PNG", "img/projects/tindog-code-2.PNG"],
    desc: "Tindog is a made-up dating service. But it is not for humans but dogs. This landing page is \
    completely made with Bootstrap CSS and HTML. I developed this project as a part of the full-stack web \
    development course on Udemy.",
    links: [{name: "Demo", ref:"https://hasindu-madushan.github.io/tindog/"}],
    skills: ["Bootstrap", "CSS", "HTML"]
}
};