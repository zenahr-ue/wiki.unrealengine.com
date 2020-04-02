(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{961:function(e,t,i){"use strict";i.r(t);var a=i(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("HTTP Administration Plugin Tutorial - Epic Wiki")]),e._v(" "),i("h1",{attrs:{id:"http-administration-plugin-tutorial"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#http-administration-plugin-tutorial"}},[e._v("#")]),e._v(" HTTP Administration Plugin Tutorial")]),e._v(" "),i("h2",{attrs:{id:"contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#HTTP_Administration_Plugin_Tutorial"}},[e._v("1 HTTP Administration Plugin Tutorial")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#Requirements"}},[e._v("1.1 Requirements")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Skipping_to_the_fun_stuff"}},[e._v("1.2 Skipping to the fun stuff")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Embedded_HTTP_mods"}},[e._v("1.3 Embedded HTTP mods")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#IModuleInterface"}},[e._v("1.4 IModuleInterface")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#HTTPAdmin_header"}},[e._v("1.5 HTTPAdmin header")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#HTTPAdmin_source_file"}},[e._v("1.6 HTTPAdmin source file")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Easy_ways_to_improve_and_extend_this_example"}},[e._v("1.7 Easy ways to improve and extend this example")])])])])]),e._v(" "),i("h1",{attrs:{id:"http-administration-plugin-tutorial-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#http-administration-plugin-tutorial-2"}},[e._v("#")]),e._v(" HTTP Administration Plugin Tutorial")]),e._v(" "),i("p",[e._v("This tutorial will teach you how to make a more complex C++ server-side mod for Unreal Tournament. If you have not completed "),i("a",{attrs:{href:"/C%2B%2B_Game_Mode_Tutorial",title:"C++ Game Mode Tutorial"}},[e._v("C++_Game_Mode_Tutorial")]),e._v(" or the "),i("a",{attrs:{href:"/C%2B%2B_Mutator_Tutorial",title:"C++ Mutator Tutorial"}},[e._v("C++_Mutator_Tutorial")]),e._v(", I recommend you do that first.")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("ul",[i("li",[e._v("Engine version: 4.5.1")]),e._v(" "),i("li",[e._v("Skill level: intermediate C++ knowledge")])]),e._v(" "),i("h2",{attrs:{id:"skipping-to-the-fun-stuff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#skipping-to-the-fun-stuff"}},[e._v("#")]),e._v(" Skipping to the fun stuff")]),e._v(" "),i("ul",[i("li",[e._v("There's already two C++ tutorials that go over build.cs and .uplugin file creation so I'm glossing over most things and just sticking to the things that might interest an advanced user right now.")]),e._v(" "),i("li",[e._v("You can download the files required for this tutorial at "),i("a",{attrs:{href:"https://github.com/knepleyp/UTHTTPAdmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/knepleyp/UTHTTPAdmin"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("We'll use a slightly modified version of "),i("a",{attrs:{href:"https://code.google.com/p/embedded-httpd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://code.google.com/p/embedded-httpd/"),i("OutboundLink")],1),e._v(" to get the HTTP interactions done")])]),e._v(" "),i("h2",{attrs:{id:"embedded-http-mods"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#embedded-http-mods"}},[e._v("#")]),e._v(" Embedded HTTP mods")]),e._v(" "),i("ul",[i("li",[e._v('#include "AllowWindowsPlatformTypes.h" is required before #include <winsock.h" so types like INT and DWORD are allowed')]),e._v(" "),i("li",[e._v('#include "HTTPAdmin.h" is required in httpd.cpp because of Unreal Header Tool')]),e._v(" "),i("li",[e._v("I've set the HTTP socket to be non-blocking with ioctlsocket(server->socket, FIONBIO, &nonblock);")]),e._v(" "),i("li",[e._v("The server is set to Cache-Control: no-cache everything by default. This really isn't what we want. Everything but our json should get cached for at least an hour. Modified httpresponse_response to make that happen.")])]),e._v(" "),i("h2",{attrs:{id:"imoduleinterface"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#imoduleinterface"}},[e._v("#")]),e._v(" IModuleInterface")]),e._v(" "),i("ul",[i("li",[e._v("Inside HTTPAdminPlugin, we have our IModuleInterface class that the Plugin Manager will create")]),e._v(" "),i("li",[e._v("Note that unlike the previous example, we use StaticConstructObject to create a UHTTPAdmin object")]),e._v(" "),i("li",[e._v("Also of note is that immediately after construction, Init() is called which happens to flag the UHTTPAdmin object to be in the root set and avoid garbage collection. This is very important.")])]),e._v(" "),i("h2",{attrs:{id:"httpadmin-header"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#httpadmin-header"}},[e._v("#")]),e._v(" HTTPAdmin header")]),e._v(" "),i("ul",[i("li",[e._v("Our UHTTPAdmin class inherits from FTickableGameObject which means the engine will call our ::Tick() every frame")]),e._v(" "),i("li",[e._v("We've set our class to Config=HTTPAdmin, this will cause Plugins\\HTTPAdmin\\Config\\DefaultHTTPAdmin.ini to be loaded at runtime and fill out our UPROPERTY(Config) variables")])]),e._v(" "),i("h2",{attrs:{id:"httpadmin-source-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#httpadmin-source-file"}},[e._v("#")]),e._v(" HTTPAdmin source file")]),e._v(" "),i("ul",[i("li",[e._v("Once again, note that ::Init() flags the object as root set so that it won't get garbage collected, that's very important.")]),e._v(" "),i("li",[e._v("Due to the way Embedded HTTP works, we had to supply it a static function pointer and pass our classes's this pointer to it. StaticHTTPHandler calls back into our class's this pointer later.")]),e._v(" "),i("li",[e._v("::HTTPHandler() does a simple version of HTTP Basic Authentication if the config variable bRequireAuth is set.")]),e._v(" "),i("li",[e._v('The HTTP argument "consolecommand" is fetched from either HTTP form POST or GET and then sent to GEngine->Exec()')]),e._v(" "),i("li",[e._v("Any json request is piped into the function PrepareAdminJSON(). PrepareAdminJSON() assembles some relevant server information into a JSON object for easy consumption from admin.html's XMLHTTPRequest.")]),e._v(" "),i("li",[e._v("The remainder of ::HTTPHandler() serves data files given certain file extensions")])]),e._v(" "),i("h2",{attrs:{id:"easy-ways-to-improve-and-extend-this-example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#easy-ways-to-improve-and-extend-this-example"}},[e._v("#")]),e._v(" Easy ways to improve and extend this example")]),e._v(" "),i("ul",[i("li",[e._v("The HTTP server used is not well suited for world facing applications. It is most likely insecure to buffer overflows and doesn't have threading to handle malicious spam attacks. Updating to a HTTPd implementation that's more robust is recommended. Mongoose may be a good alternative for those doing non-commercial plugins.")]),e._v(" "),i("li",[e._v("Hook up kick and ban buttons")]),e._v(" "),i("li",[e._v("Make kick and ban do POST requests instead of GET requests")]),e._v(" "),i("li",[e._v("Mutator enabling and disabling via web request")]),e._v(" "),i("li",[e._v("Map list changing via web request")]),e._v(" "),i("li",[e._v("Add some more variables to the JSON output")])]),e._v(" "),i("p",[e._v('Retrieved from "'),i("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=HTTP_Administration_Plugin_Tutorial&oldid=10612",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=HTTP_Administration_Plugin_Tutorial&oldid=10612"),i("OutboundLink")],1),e._v('"')]),e._v(" "),i("p",[i("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"/Category:Unreal_Tournament",title:"Category:Unreal Tournament"}},[e._v("Unreal Tournament")])]),e._v(" "),i("li",[i("a",{attrs:{href:"/Category:UT_Content_Creation",title:"Category:UT Content Creation"}},[e._v("UT Content Creation")])])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);