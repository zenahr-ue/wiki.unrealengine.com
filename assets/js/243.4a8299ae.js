(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{594:function(t,e,n){"use strict";n.r(e);var a=n(28),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Blueprint Rotating Movement Component - Epic Wiki")]),t._v(" "),n("h1",{attrs:{id:"blueprint-rotating-movement-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-rotating-movement-component"}},[t._v("#")]),t._v(" Blueprint Rotating Movement Component")]),t._v(" "),n("p",[t._v("From Epic Wiki")]),t._v(" "),n("p",[t._v("Jump to: "),n("a",{attrs:{href:"#mw-head"}},[t._v("navigation")]),t._v(", "),n("a",{attrs:{href:"#p-search"}},[t._v("search")])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("In UE3 we were able to make rotating actors through creating "),n("strong",[t._v("Mover (Interpactor)")]),t._v(" and adjusting it's "),n("strong",[t._v("Rotation Rate")]),t._v(" parameters."),n("br"),t._v("\nIn UE4 it can be done via "),n("strong",[t._v("Rotating Movement Component")]),t._v(" in blueprint.")]),t._v(" "),n("h2",{attrs:{id:"blueprint-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-example"}},[t._v("#")]),t._v(" Blueprint example")]),t._v(" "),n("p",[t._v("Create a new blueprint from "),n("strong",[t._v("Actor")]),t._v(" class.")]),t._v(" "),n("p",[t._v("Open "),n("strong",[t._v("Components")]),t._v(" tab and add:")]),t._v(" "),n("ul",[n("li",[t._v("Rotating Movement Component")]),t._v(" "),n("li",[t._v("Static Mesh Component (Movable)")])]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_1.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/6/61/BRMC_1.jpg",alt:"BRMC 1.jpg"}})])]),t._v(" "),n("p",[t._v("Select "),n("strong",[t._v("Rotating Movement Component")]),t._v(" and look at "),n("strong",[t._v("Details")]),t._v(" panel. Here you can see its parameters.")]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_2.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/4/4e/BRMC_2.jpg",alt:"BRMC 2.jpg"}})])]),t._v(" "),n("p",[n("strong",[t._v("Rotation Rate")]),t._v(" - rotator, which specifies rotation speed in degrees per second."),n("br"),t._v(" "),n("strong",[t._v("Pivot Translation")]),t._v(" - vector, which specifies rotation pivot local offset."),n("br"),t._v(" "),n("strong",[t._v("Rotation in Local Space")]),t._v(" - boolean, which specifies is rotation in local or world space.")]),t._v(" "),n("p",[t._v("Open "),n("strong",[t._v("Graph")]),t._v(" tab -> Construction Script")]),t._v(" "),n("p",[t._v("Create next editable variables:")]),t._v(" "),n("ul",[n("li",[t._v("Rotation Rate (Rotator)")]),t._v(" "),n("li",[t._v("Pivot Translation (Vector)")]),t._v(" "),n("li",[t._v("Rotation in Local Space (Bool)")]),t._v(" "),n("li",[t._v("Mesh (Static Mesh)")])]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_3.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/86/BRMC_3.jpg",alt:"BRMC 3.jpg"}})])]),t._v(" "),n("p",[t._v("So, for now we need to setup blueprint to change mesh and adjust rotation parameters when it is already in level.")]),t._v(" "),n("p",[t._v("Drag and drop "),n("strong",[t._v("Static Mesh")]),t._v(" (component) and "),n("strong",[t._v("Mesh")]),t._v(" (variable) one by one into "),n("strong",[t._v("Construction Script")]),t._v(" graph selecting "),n("strong",[t._v("Get")]),t._v("."),n("br"),t._v("\nDrag "),n("strong",[t._v("Static Mesh")]),t._v(" (component) pin and find "),n("strong",[t._v("Set Static Mesh")]),t._v(" node.")]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_4.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/a7/BRMC_4.jpg",alt:"BRMC 4.jpg"}})])]),t._v(" "),n("p",[t._v("Using "),n("strong",[t._v("Set Static Mesh")]),t._v(" node and "),n("strong",[t._v("Mesh")]),t._v(" (variable) set new mesh into "),n("strong",[t._v("Static Mesh Component")])]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_5.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/3/3d/BRMC_5.jpg",alt:"BRMC 5.jpg"}})])]),t._v(" "),n("p",[t._v("Now, get "),n("strong",[t._v("Rotating Movement")]),t._v(" component, drag its pin and find "),n("strong",[t._v("Set")]),t._v(" functions for its variables - Rotation Rate, Pivot Translation, Rotation in Local Space.")]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_6.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/8c/BRMC_6.jpg",alt:"BRMC 6.jpg"}})])]),t._v(" "),n("p",[t._v("And using early created correspond variables set new parameters for rotating movement.")]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_7.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/c/c9/BRMC_7.jpg",alt:"BRMC 7.jpg"}})])]),t._v(" "),n("p",[t._v("Compile and save blueprint. Place it in your level, select and look at "),n("strong",[t._v("Details")]),t._v(" panel. Here you can find and adjust all parameters we told about.")]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_8.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/a4/BRMC_8.jpg",alt:"BRMC 8.jpg"}})])]),t._v(" "),n("p",[t._v("On this simple preview mesh you can see how it works in comparison with old system.")]),t._v(" "),n("p",[t._v("X = Roll"),n("br"),t._v("\nY = Pitch"),n("br"),t._v("\nZ = Yaw")]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=File:BRMC_9.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/83/BRMC_9.jpg",alt:"BRMC 9.jpg"}})])]),t._v(" "),n("p",[t._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprint_Rotating_Movement_Component&oldid=187",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Blueprint_Rotating_Movement_Component&oldid=187"),n("OutboundLink")],1),t._v('"')]),t._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/index.php?title=Category:Tutorials&action=edit&redlink=1",title:"Category:Tutorials (page does not exist)"}},[t._v("Tutorials")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);