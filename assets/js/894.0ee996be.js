(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{1414:function(e,t,a){"use strict";a.r(t);var i=a(28),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Parallax Occlusion Mapping - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"parallax-occlusion-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallax-occlusion-mapping"}},[e._v("#")]),e._v(" Parallax Occlusion Mapping")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Parallax_Occlusion_Mapping"}},[e._v("1 Parallax Occlusion Mapping")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Assets_Used"}},[e._v("2 Assets Used")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Material_Outcome"}},[e._v("3 Material Outcome")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Steps_to_Follow"}},[e._v("4 Steps to Follow")])])]),e._v(" "),a("h2",{attrs:{id:"parallax-occlusion-mapping-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallax-occlusion-mapping-2"}},[e._v("#")]),e._v(" Parallax Occlusion Mapping")]),e._v(" "),a("p",[e._v("This tutorial is a simple example of how to set up Parallax Occlusion Mapping (POM). It is assumed the user has an intermediate understanding of the Material Editor and its associated terminology.")]),e._v(" "),a("p",[e._v("Parallax Occlusion Mapping or (POM) is an enhancement of the parallax mapping technique. Parallax occlusion mapping is used to procedurally create 3D definition in textured surfaces, using a displacement map (similar to a topography map) instead of through the generation of new geometry.")]),e._v(" "),a("p",[e._v("I will be giving a brief explanation of the inputs being used, but if you want a more in depth explanation head to the "),a("a",{attrs:{href:"http://www.twitch.tv/unrealengine/v/34107433",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.twitch.tv/unrealengine/v/34107433"),a("OutboundLink")],1),e._v(" and listen to Ryan Brucks go into greater detail on the POM Function.")]),e._v(" "),a("h2",{attrs:{id:"assets-used"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assets-used"}},[e._v("#")]),e._v(" Assets Used")]),e._v(" "),a("p",[e._v("The textures used in this example are T_CobbleStone_Pebble from the Starter Content pack. You will also want a somewhat curved plane mesh for the material function to work well for this example. I have attached the example mesh in this tutorial below.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:POM_Mesh.zip",title:"File:POM Mesh.zip"}},[e._v("File:POM Mesh.zip")])]),e._v(" "),a("h2",{attrs:{id:"material-outcome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#material-outcome"}},[e._v("#")]),e._v(" Material Outcome")]),e._v(" "),a("p",[e._v("Here is an example of what your outcome will look like. This is a simple example of how POM can be used as a filler around large objects like rocks and pillars.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:ParallaxOcclusionMapping_Example.PNG"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/d5/ParallaxOcclusionMapping_Example.PNG/800px-ParallaxOcclusionMapping_Example.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("POM Example")]),e._v(" "),a("h2",{attrs:{id:"steps-to-follow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-follow"}},[e._v("#")]),e._v(" Steps to Follow")]),e._v(" "),a("p",[e._v("1. Create new blank project with Starter Content.")]),e._v(" "),a("p",[e._v("2. Import the attached mesh (or your own if you have one).")]),e._v(" "),a("p",[e._v("3. In the Content Browser locate the 'T_CobbleStone_Pebble_M'")]),e._v(" "),a("p",[e._v("4. Right-click on the texture sample and choose the 'Create Material' option.")]),e._v(" "),a("p",[e._v("5. Within the Material Editor graph, right-click and type 'Parallax' and select the 'Parallax Occlusion Mapping' material function.")]),e._v(" "),a("p",[e._v("6. Hold the 'S' key and left click to create a Scalar Parameter. You will want to create 5 of these.")]),e._v(" "),a("p",[e._v("7. Right-click the texture sample 'T_CobbleStone_Pebble_M' and convert it to a texture object and plug it into the 'Heightmap Texture(T2d).")]),e._v(" "),a("p",[e._v("8. Take one of your Scalar Parameters and name it 'Height of Texture' and plug this into the 'Height Ratio' input.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('This will define the height your texture will appear to be "lifted"\n')])])]),a("p",[e._v("9. Take another one of your Scalar Parameters and name it 'Min Steps', give it a value of 8.0, and plug it into the Min Steps input.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("The Min and Max steps affect the quality of the function as specific view angles.\nSpecifically the amount of steps required to reach the effect. \nRyan Brucks provides a more in depth explanation of this on the twitch stream.\n")])])]),a("p",[e._v("10. Create a 'Multiply', 'Lerp', and 'Dither TemporalAA' node.")]),e._v(" "),a("p",[e._v("11. Name another Scalar Parameter 'Max Steps' and the other 'TempAA Step Multiplier'")]),e._v(" "),a("p",[e._v("12. Plug the 'Dither TemporalAA' node into the 'Alpha' of the 'Lerp' and the 'TempAA Step Multiplier' into the 'B' input.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("This is done to reduce artifacts when used in combination with TemporalAA.\n")])])]),a("p",[e._v("13. Plug the output of the 'Lerp' into the 'B' of the 'Multiply' and the 'Max Steps' to the 'A' input.")]),e._v(" "),a("p",[e._v("14. Plug the output of the 'Multiply' into the input of 'Max Steps'")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("This is to help increase accuracy and quality when looking at the meshes surface at flat angles.\n")])])]),a("p",[e._v("15. Create another 'Multiply' and give the 'A' input a 'TexCoord' and the 'B' input a Scalar Parameter named 'Tiling'. Plug this into the 'UVs(V2)'.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("This will allow you to modify the texture tiling.\n")])])]),a("p",[e._v("16. Now create a 'Vector4' parameter and name it 'Channel'. Set it's values to 1,0,0,0.")]),e._v(" "),a("p",[e._v("17. Create an 'Append' node and connect the sRGB output from the 'Channel' parameter to the 'A' and the 'Alpha' to the 'B'. Plug the 'Output' from the 'Append' to the 'Heightmap Channel(V4)' input.")]),e._v(" "),a("p",[e._v("18. Now create a 'DDX' and a 'DDY' node.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("These will be connected to the Multiply from the 'TexCoord' \nand plug directly into the Normal texture sample. This is\nalso done to reduce artifacts when calculating Mips. \n")])])]),a("p",[e._v("19. Create a 'Static Bool Parameter' and name it 'Specify Manual Texture' and plug this into the relative input of the POM node. Set the default value to 'False'.")]),e._v(" "),a("p",[e._v("Your material graph should look something like the below image thus far. If you are having trouble viewing the image you can click on it to navigate to the original file to view the largest size.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:POM_MatFunction_Input.PNG"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/3/32/POM_MatFunction_Input.PNG/850px-POM_MatFunction_Input.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("POM Inputs")]),e._v(" "),a("p",[e._v("20. Now drag the 'T_CobbleStone_Pebbles_N' and the 'T_CobbleStone_Pebbles_D' texture samples into the material graph.")]),e._v(" "),a("p",[e._v("21. Plug the 'Parallax UVs' output from the POM function into the UVs of each texture sample.")]),e._v(" "),a("p",[e._v("22. Select the normal texture sample and change the 'MipValueMode' to 'Derivative'")]),e._v(" "),a("p",[e._v("23. Plug the output of the 'DDX' and 'DDY' into their relative inputs on the normal texture sample.")]),e._v(" "),a("p",[e._v("24. Plug the diffuse texture sample and normal sample into their respective inputs of the material.")]),e._v(" "),a("p",[e._v("25. Plug the 'Pixel Depth Offset' output into the same input of the material.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:POM_MatFunctionOutput.PNG"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/5/53/POM_MatFunctionOutput.PNG/800px-POM_MatFunctionOutput.PNG",alt:""}})])]),e._v(" "),a("p",[e._v("POM Connected to Material")]),e._v(" "),a("p",[e._v("Congratulations, you have now successfully created a material using Parallax Occlusion Mapping! Now create a material instance and apply it to your mesh to edit your parameters and see how each one affects the outcome.")]),e._v(" "),a("p",[e._v("Keep in mind, this is an expensive function in itself so you need to use it wisely.")]),e._v(" "),a("ul",[a("li",[e._v("Note - You might need to disable shadow casting on the mesh to get the correct visual effect. This is because the shadows are not accounting for the offset height and still trying to cast a shadow using the original mesh. There are ways to change this using the bottom half of the POM function, but that will be for another time! Goodluck and have fun making some awesome materials!")])]),e._v(" "),a("p",[e._v("Thanks for following along! I have written some more tutorials you can check out by following the links within my Wiki Profile page found below.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/User:AndrewHurley",title:"User:AndrewHurley"}},[e._v("Andrew Hurley Wiki Profile Page")])]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Parallax_Occlusion_Mapping&oldid=22665",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Parallax_Occlusion_Mapping&oldid=22665"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Epic_Created_Content",title:"Category:Epic Created Content"}},[e._v("Epic Created Content")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Material",title:"Category:Material"}},[e._v("Material")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);