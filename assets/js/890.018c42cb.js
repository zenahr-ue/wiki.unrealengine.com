(window.webpackJsonp=window.webpackJsonp||[]).push([[890],{694:function(e,r,t){"use strict";t.r(r);var n=t(28),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Package and Deployment Troubleshooting - Epic Wiki")]),e._v(" "),t("h1",{attrs:{id:"package-and-deployment-troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-and-deployment-troubleshooting"}},[e._v("#")]),e._v(" Package and Deployment Troubleshooting")]),e._v(" "),t("p",[t("em",[e._v("This page is currently under construction, more errors and solutions will be added over time.")])]),e._v(" "),t("h2",{attrs:{id:"contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Additional_Resources"}},[e._v("1 Additional Resources")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Using_Answerhub_for_Packaging_Issues"}},[e._v("2 Using Answerhub for Packaging Issues")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Packaging_Failed_.28Automation_Tool_Unable_to_Run_Successfully.29"}},[e._v("2.1 Packaging Failed (Automation Tool Unable to Run Successfully)")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Searching_for_your_error"}},[e._v("2.2 Searching for your error")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Posting_on_Answerhub"}},[e._v("2.3 Posting on Answerhub")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Retrieving_Logs_from_a_packaged_game"}},[e._v("2.4 Retrieving Logs from a packaged game")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#What_are_Unreal_Engine_4.27s_system_recommendations.3F"}},[e._v("2.5 What are Unreal Engine 4's system recommendations?")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Common_errors"}},[e._v("3 Common errors")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Non-platform_specific"}},[e._v("3.1 Non-platform specific")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Windows"}},[e._v("3.2 Windows")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Android"}},[e._v("3.3 Android")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#iOS"}},[e._v("3.4 iOS")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#HTML5"}},[e._v("3.5 HTML5")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Mac"}},[e._v("3.6 Mac")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#TVOS"}},[e._v("3.7 TVOS")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Additional_Resources_2"}},[e._v("3.8 Additional Resources")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Miscellaneous_Links"}},[e._v("3.9 Miscellaneous Links")])])])])]),e._v(" "),t("p",[e._v("Packaging and Deployment Troubleshooting")]),e._v(" "),t("h2",{attrs:{id:"additional-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[e._v("#")]),e._v(" Additional Resources")]),e._v(" "),t("p",[e._v("Here are a few helpful guides:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"/Mobile_Development_Troubleshooting_Guide",title:"Mobile Development Troubleshooting Guide"}},[e._v("Mobile Development Troubleshooting Guide")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Basics/Projects/Packaging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packaging Projects Documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Deployment/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packaging and Cooking Games Documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Platforms/Android/GettingStarted/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Quick Start"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Platforms/iOS/QuickStart/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Quick Start"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://wiki.unrealengine.com/Mobile_Development_Troubleshooting_Guide#How_to_get_logs_off_of_an_Android_device",target:"_blank",rel:"noopener noreferrer"}},[e._v("Obtain logs off an Android Device"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://wiki.unrealengine.com/Mobile_Development_Troubleshooting_Guide#How_to_get_logs_off_of_an_iOS_device",target:"_blank",rel:"noopener noreferrer"}},[e._v("Obtain logs off an iOS Device"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("strong",[e._v("This page is currently under development and will be populated as we find more common mobile development bugs/crashes. Thank you for your understanding.")])]),e._v(" "),t("p",[t("strong",[e._v("If you notice a build failure in your logs, please try the following first:")])]),e._v(" "),t("ol",[t("li",[e._v("Open the log that includes the information about your build failure in a text editor. This can be found in the project's directory under the Saved/Logs directory.")]),e._v(" "),t("li",[e._v('Use the find function (Ctrl+F) to search for the word "Error" and "Warning"')]),e._v(" "),t("li",[e._v("Make a list of each unique error/warning and attempt to search for other Answerhub posts that mention them (Please take a look further in this guide for more information on common error messages, as well as the information that would likely be needed to diagnose your issue)")])]),e._v(" "),t("p",[e._v("If you cannot find another report of the error you're receiving and are not able to solve the issue, a general all purpose solution can sometimes be to delete the following folders:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Intermediate")])]),e._v(" "),t("li",[t("p",[e._v("Saved")])]),e._v(" "),t("li",[t("p",[e._v("Config")])]),e._v(" "),t("li",[t("p",[e._v("Restart your computer if there is an 'Unknown Cook Failure'")])])]),e._v(" "),t("p",[e._v("If the above does not help your situation, please look through the rest of this guide for a run down of the troubleshooting process and examples of common errors and solutions")]),e._v(" "),t("h1",{attrs:{id:"using-answerhub-for-packaging-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-answerhub-for-packaging-issues"}},[e._v("#")]),e._v(" Using Answerhub for Packaging Issues")]),e._v(" "),t("h2",{attrs:{id:"packaging-failed-automation-tool-unable-to-run-successfully"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packaging-failed-automation-tool-unable-to-run-successfully"}},[e._v("#")]),e._v(" Packaging Failed (Automation Tool Unable to Run Successfully)")]),e._v(" "),t("p",[e._v("The first thing to keep in mind is that there are multiple error messages that are generic that are there to let you know that a process failed but will not give any useful information otherwise. These error messages are two examples of general errors which are stating that the process failed. This could be the result of a multitude of different errors. The best course of action is to search elsewhere in the log for other errors and warnings, as this is likely a symptom of those issues.")]),e._v(" "),t("p",[e._v("A couple more of these types of errors are:")]),e._v(" "),t("ul",[t("li",[e._v("RunUAT.bat ERROR: AutomationTool was unable to run")]),e._v(" "),t("li",[e._v("Error: Error Unknown Error")])]),e._v(" "),t("h2",{attrs:{id:"searching-for-your-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-your-error"}},[e._v("#")]),e._v(" Searching for your error")]),e._v(" "),t("p",[e._v("Once you believe you've found the actual error or warning that is causing your problem, try searching for the issue here. If the issue isn't listed on this page, you can try searching for it in our database. Try searching for your error on the "),t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation"),t("OutboundLink")],1),e._v(" page as this covers all of our support outlets.")]),e._v(" "),t("p",[e._v("If you are able to find a post that relates to your issue but the information is not helpful or the issue was never resolved, check the Product Version listed. If the Product Version is older than what you are currently using, create a new post (see next section). Otherwise, feel free to post about your issue on the existing page.")]),e._v(" "),t("h2",{attrs:{id:"posting-on-answerhub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#posting-on-answerhub"}},[e._v("#")]),e._v(" Posting on Answerhub")]),e._v(" "),t("p",[e._v("When posting about a packaging issue on Answerhub, it will be easier for someone to help you when you provide them with as much information as possible. The list below can give you a starting point but any additional information is always helpful.")]),e._v(" "),t("ul",[t("li",[e._v("Logs (These are the most important and should be attached as a .txt file)")]),e._v(" "),t("li",[e._v("Engine version")]),e._v(" "),t("li",[e._v("The exact steps you've taken to package.")]),e._v(" "),t("li",[e._v("The exact OS version you're on.")]),e._v(" "),t("li",[e._v("Can it be reproduced in a clean project?")]),e._v(" "),t("li",[e._v("If it can be reproduced, provide a clear list of steps to reproduce the issue.")])]),e._v(" "),t("h2",{attrs:{id:"retrieving-logs-from-a-packaged-game"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-logs-from-a-packaged-game"}},[e._v("#")]),e._v(" Retrieving Logs from a packaged game")]),e._v(" "),t("p",[e._v("Finding errors that occur in the game that results from a successful package attempt can be done by looking at the warnings in the original packaging log but can also be seen in the logs for the packaged game itself. They can found different locations based off the platform.")]),e._v(" "),t("ul",[t("li",[e._v("Windows: "),t("em",[e._v("PackagedDirectory")]),e._v("/"),t("em",[e._v("ProjectName")]),e._v("/Saved/Logs/"),t("em",[e._v("ProjectName")]),e._v(".log")]),e._v(" "),t("li",[e._v("Mac: ~/Library/Logs/ProjectName/")]),e._v(" "),t("li",[e._v("iOS: "),t("a",{attrs:{href:"https://wiki.unrealengine.com/Mobile_Development_Troubleshooting_Guide#How_to_get_logs_off_of_an_iOS_device",target:"_blank",rel:"noopener noreferrer"}},[e._v("Obtain logs off an iOS Device"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Android: "),t("a",{attrs:{href:"https://wiki.unrealengine.com/Mobile_Development_Troubleshooting_Guide#How_to_get_logs_off_of_an_Android_device",target:"_blank",rel:"noopener noreferrer"}},[e._v("Obtain logs off an Android Device"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("HTML5: "),t("em",[e._v("To be added")])]),e._v(" "),t("li",[e._v("Linux: "),t("em",[e._v("To be added")])]),e._v(" "),t("li",[e._v("tvOS: "),t("em",[e._v("To be added")])])]),e._v(" "),t("h2",{attrs:{id:"what-are-unreal-engine-4-s-system-recommendations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-are-unreal-engine-4-s-system-recommendations"}},[e._v("#")]),e._v(" What are Unreal Engine 4's system recommendations?")]),e._v(" "),t("p",[e._v("For developing with UE4, we recommend a certain level of hardware for a desired result. UE4 will run on desktops and laptops below these recommendations, but performance may be limited. For more information on these recommendations, please see "),t("a",{attrs:{href:"https://wiki.unrealengine.com/Recommended_Hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("Recommended Hardware"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h1",{attrs:{id:"common-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-errors"}},[e._v("#")]),e._v(" Common errors")]),e._v(" "),t("p",[e._v("This section will provide a list of common errors along with resolved Answerhub links related to the issue as well as possible solutions.")]),e._v(" "),t("h2",{attrs:{id:"non-platform-specific"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#non-platform-specific"}},[e._v("#")]),e._v(" Non-platform specific")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/303922/build-failed-64-bit-windows.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Error loading an asset")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/412747/build-failed-windows.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v('WARNING: Visual C++ 2015 toolchain does not appear to be correctly installed. Please verify that "Common Tools for Visual C++ 2015" was selected when installing Visual Studio 2015.')]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("No 32-bit compiler toolchain found in C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\VC\\bin\\cl.exe")])])]),e._v(" "),t("p",[e._v("This is a warning that can cause other errors to occur. This can be resolved by installing the Common Tools for Visual C++ 2015 for Visual Studio 2015. Please see the Answerhub post for steps to do so.")]),e._v(" "),t("ul",[t("li",[e._v("No modules found to build. All requested binaries were already part of the installed engine data.")])]),e._v(" "),t("p",[e._v("This is a message that points out that you are using a Plugin that requires being compiled but you're using it in a Blueprint-only project. In this case, there are three options:")]),e._v(" "),t("ul",[t("li",[e._v("Find a version of the plugin that does not require compiling, if it exists")]),e._v(" "),t("li",[e._v("Disable/Uninstall the plugin")]),e._v(" "),t("li",[e._v("Add code to your project (File > New C++ Class...). Please note: This will permanently make the project a code project.")])]),e._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/252762/failed-to-open-descriptior-file.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Shipping - Source Build")]),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Ensure you have built for the type of build you're packaging: Shipping | Debug | Development")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/262680/failed-to-open-descriptor-file-error.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Rename the .exe")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/239140/descriptor-file-3.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Migrating Files to a New Project")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/284296/cant-package-game-an-item-with-the-same-key-has-al.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("An item with the same key has already been added")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/364215/how-to-create-a-working-shipping-build.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("How to create a working Shipping build?")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/385259/bug-4104-configurations-not-making-it-to-ios-devic.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Win10: Configurations are not updating on iOS devices via Remote Build")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/297165/global-shader-cache-pcd3d-sm5-missing.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Global shader cache-pcd3d-sm5 missing")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/397520/cannot-launch-y-level-after-update-from-4104-to-41.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("UE4Game.pdb Missing")]),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v('This may also be resolved by unchecking "Include Debug Files" in your project\'s Project Settings under the Packaging section.')]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/420623/cannot-find-hcadlib-when-using-unrealed.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Cannot find HCAD.lib")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/337507/unknown-structure-error-when-cook.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Unknown Structure Error")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/311220/fatal-error-in-packaged-game.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Fatal Error")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/338180/cant-package-project.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("MSCORLIB ERROR: An item with the same key has already been added")]),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[e._v("#")]),e._v(" Android")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/478177/unable-to-deploy-to-android-1.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Unable to Deploy to Android")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/590201/android-packaging-failed-unknown-error-2.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Error: C:\\Unreal Projects\\"),t("em",[e._v("ProjectName")]),e._v("\\Intermediate\\Android\\APK\\JavaLibs\\play-services-ads-9.2.0 is not a valid project (AndroidManifest.xml not found).")]),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" iOS")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/480092/how-to-launch-code-project-to-ios-on-windows-413.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Unable to Launch Code Projects on Windows - Cygwin")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/223227/remove-obsolete-mobileprovision-profiles-ios.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("How to manually remove Mobile Provisions for iOS")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Windows: C:\\Users\\(you)\\AppData\\Local\\Apple Computer\\MobileDevices\\Provisioning Profiles")])]),e._v(" "),t("li",[t("p",[e._v("Mac: ~/Library/MobileDevice/Provisioning Profiles")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/350633/ios-crash-on-first-launch.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Crashes on First Launch")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/361738/distribution-packing-ios-on-source-build-fails.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Distribution Source Build Fails to Package")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/258023/ios-identifier-not-matched.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("iOS Identifier is Not Matching")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/498731/ios10-deploy-fails.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Code signing is required for product type 'Application' in SDK iOS 10.0'")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/480693/iap-enabled-apps-get-rejected-from-ios-store.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("In-App Purchase Enabled Apps are Rejected from iOS")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/424191/ios-provisioning-and-signingkey-not-found-worked-o.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Provision & Signing Keys Not Found")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Related documentation: "),t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Platforms/iOS/QuickStart/6/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating & Importing Provisions"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/341162/why-hud-is-odd-on-iphone-4s-after-49-version.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("iOS 4S Incorrect HUD Scaling")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Related documentation: "),t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Platforms/DeviceProfiles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting Device Profiles"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/489154/assetpackmanifestplist-creating-errors-when-upload.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("AssetPackManifest.plist Errors")]),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"html5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html5"}},[e._v("#")]),e._v(" HTML5")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/517823/hosting-html5-game-on-github-page.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Issues hosting a HTML5 game online")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/496832/ue4-doesnt-package-nor-launch-html5.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Environment Variables aren't set for HTML5")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/287463/questions-about-the-packing-size.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Trouble Launching Packaged Projects on Certain Sites")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/331691/how-to-deploy-a-html5-game-on-apache.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("How to Deploy HTML5 Games on Apache? (4.9)")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/331805/html5-how-to-make-it-work.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("HTML5: Little-Endian Error")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/432839/html5-build-fails.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Failed to run llvm optimizations")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/270610/html5-can-not-load-levels.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("HTML5 In-Game Complications")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Related documentation: "),t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Levels/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Levels"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[e._v("#")]),e._v(" Mac")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/400490/ue-411-hangs-cooking-on-macbook-pro.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Cooking with a Macbook Pro Hangs")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Related documentation: "),t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Deployment/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packaging and Cooking Games"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"tvos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tvos"}},[e._v("#")]),e._v(" TVOS")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/372681/411-packaging-ios-incorrect-bundle-identifier.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Error: iOS Incorrect Bundle Identifier")]),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"additional-resources-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources-2"}},[e._v("#")]),e._v(" Additional Resources")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/404275/how-can-i-stop-unreal-engine-from-closing-on-its-o.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("How to stop UE4 from crashing on its own")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://wiki.unrealengine.com/Mobile_Development_Troubleshooting_Guide",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Mobile Development Troubleshooting Guide")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Deployment/index.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Packaging and Cooking Games")]),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"miscellaneous-links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous-links"}},[e._v("#")]),e._v(" Miscellaneous Links")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/499017/packaging-fails-when-using-chunks.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Packaging Fails when using Chunk ID")]),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://answers.unrealengine.com/questions/395344/how-to-change-the-name-of-target-build.html",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Renaming Target Build")]),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v('Retrieved from "'),t("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Package_and_Deployment_Troubleshooting&oldid=25394",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Package_and_Deployment_Troubleshooting&oldid=25394"),t("OutboundLink")],1),e._v('"')]),e._v(" "),t("p",[t("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"/Category:Troubleshooting",title:"Category:Troubleshooting"}},[e._v("Troubleshooting")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);r.default=o.exports}}]);