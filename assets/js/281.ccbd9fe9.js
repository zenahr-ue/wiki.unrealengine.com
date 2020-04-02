(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{644:function(e,t,i){"use strict";i.r(t);var o=i(28),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("Build Android and iOS binary - Epic Wiki")]),e._v(" "),i("h1",{attrs:{id:"build-android-and-ios-binary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#build-android-and-ios-binary"}},[e._v("#")]),e._v(" Build Android and iOS binary")]),e._v(" "),i("p",[e._v("From Epic Wiki")]),e._v(" "),i("p",[e._v("Jump to: "),i("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),i("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),i("p",[i("a",{attrs:{href:"/index.php?title=Template:Rating&action=edit&redlink=1",title:"Template:Rating (page does not exist)"}},[e._v("Template:Rating")])]),e._v(" "),i("h2",{attrs:{id:"contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Android"}},[e._v("2 Android")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#IOS"}},[e._v("3 IOS")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Conclusion"}},[e._v("4 Conclusion")])])]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("Greetings!")]),e._v(" "),i("p",[e._v("This is a simple tutorial show you how to build UE4 binary for Android and iOS platform on Windows.")]),e._v(" "),i("p",[e._v("Let's start from Android.")]),e._v(" "),i("h2",{attrs:{id:"android"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[e._v("#")]),e._v(" Android")]),e._v(" "),i("p",[e._v("Navigate to [ENGINE Source LOCATION]\\Engine\\Extras\\Android, you'll find tadp-2.0r8-windows.exe, this a one-stop solution for Android development from NVIDIA, run the exe and use the default installation set to install. It will begin to download and install everything needed to build Android native application.")]),e._v(" "),i("p",[e._v("The important pieces are:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("SDK")])]),e._v(" "),i("li",[i("p",[e._v("NDK")])]),e._v(" "),i("li",[i("p",[e._v("JDK")])]),e._v(" "),i("li",[i("p",[e._v("Ant")])])]),e._v(" "),i("p",[e._v("After the installation done, you should close your UE4.sln if it is open, then run [ENGINE INSTALL LOCATION]\\GenerateProjectFiles.bat to refresh the project files.")]),e._v(" "),i("p",[e._v("Load UE4.sln again, now you can select Android platform from the target platform drop down list on Visual Studio toolbar, then you should change the solution configuration from Development Editor to Development, now you can right click UE4 project to build it. If everything is going well, when build progress done, you'll find UE4Game-armv7.apk和UE4Game-armv7.so in [ENGINE Source LOCATION]\\Engine\\Binaries fold, UE4Game-armv7.so is UE4 Android runtime library.")]),e._v(" "),i("h2",{attrs:{id:"ios"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" IOS")]),e._v(" "),i("p",[e._v("Build for Android platform is straightforward, for iOS there is a little more steps.")]),e._v(" "),i("p",[e._v("Before start, there is something need to clarify.")]),e._v(" "),i("p",[e._v("Unreal Engine use a uniform build system, that is you can start launch any platform build proccess within Visual Studio， then UnrealBuildTool will route the build configuration parameters to platform independent toolchain to build。")]),e._v(" "),i("p",[e._v("For iOS platform, UnrealBuildTool use RPC protocol transfer needed source file and compile command to Mac，then UnrealRemoteTool will parse the compile command and launch clang to compile.")]),e._v(" "),i("p",[e._v("Prerequisite:")]),e._v(" "),i("p",[e._v("1. A Macintosh running Mac OS 10.9.2 or higher, virtual machine is OK.")]),e._v(" "),i("p",[e._v("2.With XCode 5.1 and Command Line Tool installed.")]),e._v(" "),i("p",[e._v("3.Change the Mac OS host name to a1011(UnrealBuildTool will searching for this host).")]),e._v(" "),i("p",[e._v("4.Running UnrealRemoteTool on Mac OS.")]),e._v(" "),i("p",[e._v("5.You should have a validate certificate for iOS development，more information please refer "),i("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Platforms/iOS/GettingStarted/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.unrealengine.com/latest/INT/Platforms/iOS/GettingStarted/index.html"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("change the mobileprovision file name to UE4Game.mobileprovision and put it into [ENGINE Source LOCATION]\\Engine\\Build\\IOS")]),e._v(" "),i("p",[e._v("Note: UnrealRemoteTool can find at [ENGINE Source LOCATION]\\Engine\\Build\\IOS")]),e._v(" "),i("p",[e._v("6.On Mac OS, open terminal window and execute follow command:")]),e._v(" "),i("p",[e._v("sudo mkdir /UE4")]),e._v(" "),i("p",[e._v("sudo chmod 777 /UE4")]),e._v(" "),i("p",[e._v("sudo mkdir -p /Library/MobileDevice/Provisioning\\ Profiles")]),e._v(" "),i("p",[e._v("sudo chmod 777 /Library/MobileDevice/Provisioning\\ Profiles")]),e._v(" "),i("p",[e._v("Now we can start build, change target platform to IOS and solution configuration to Development in Visual Studio, right click UE4 project to build.")]),e._v(" "),i("p",[e._v("When build process done， you can find UE4Game.app, UE4Game.ipa in /UE4/Builds/HostPCName/Users/MacUserName/Desktop/UnrealEngine-4.0/Engine/Binaries/IOS")]),e._v(" "),i("h2",{attrs:{id:"conclusion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),i("p",[e._v("The Unreal Engine 4 codebase is invaluable for developer and this uniform build system is easy to deploy and maintain, we can learn something from this treasure.")]),e._v(" "),i("p",[i("a",{attrs:{href:"/index.php?title=User:Eros&action=edit&redlink=1",title:"User:Eros (page does not exist)"}},[e._v("Eros")]),e._v(" ("),i("a",{attrs:{href:"/index.php?title=User_talk:Eros&action=edit&redlink=1",title:"User talk:Eros (page does not exist)"}},[e._v("talk")]),e._v(")")]),e._v(" "),i("p",[e._v('Retrieved from "'),i("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Build_Android_and_iOS_binary&oldid=701",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Build_Android_and_iOS_binary&oldid=701"),i("OutboundLink")],1),e._v('"')]),e._v(" "),i("p",[i("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"/index.php?title=Category:Tutorials&action=edit&redlink=1",title:"Category:Tutorials (page does not exist)"}},[e._v("Tutorials")])]),e._v(" "),i("li",[i("a",{attrs:{href:"/index.php?title=Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);