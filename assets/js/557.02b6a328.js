(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{397:function(t,n,e){"use strict";e.r(n);var o=e(28),r=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("HUD, Canvas, Code Sample of 800+ Lines, Create Buttons & Draw Materials - Epic Wiki")]),t._v(" "),e("h1",{attrs:{id:"hud-canvas-code-sample-of-800-lines-create-buttons-draw-materials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hud-canvas-code-sample-of-800-lines-create-buttons-draw-materials"}},[t._v("#")]),t._v(" HUD, Canvas, Code Sample of 800+ Lines, Create Buttons & Draw Materials")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#Multiple_convenience_functions_for"}},[t._v("1.1 Multiple convenience functions for")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Transparency"}},[t._v("1.2 Transparency")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Centering"}},[t._v("1.3 Centering")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Rest_of_Game_Code_Integration"}},[t._v("1.4 Rest of Game Code Integration")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Player_Keyboard.2CMouse.2CController_Input"}},[t._v("1.5 Player Keyboard,Mouse,Controller Input")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Text_Size"}},[t._v("1.6 Text Size")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Buttons"}},[t._v("1.7 Buttons")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Cursor"}},[t._v("1.8 Cursor")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Tooltips"}},[t._v("1.9 Tooltips")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Drawing_Images.2FTextures.2FMaterials"}},[t._v("1.10 Drawing Images/Textures/Materials")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Video"}},[t._v("2 Video")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#Customizing_the_Appearance"}},[t._v("2.1 Customizing the Appearance")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Credit"}},[t._v("3 Credit")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Pre-requisites"}},[t._v("4 Pre-requisites")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#C.2B.2B_Code"}},[t._v("5 C++ Code")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#JoyHUD.h"}},[t._v("5.1 JoyHUD.h")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#JoyHUD.cpp"}},[t._v("5.2 JoyHUD.cpp")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Compile_and_Make_BP"}},[t._v("6 Compile and Make BP")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Adding_The_Graphics"}},[t._v("7 Adding The Graphics")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Conclusion"}},[t._v("8 Conclusion")])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[e("em",[t._v("Code Author:")]),t._v(" "),e("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),e("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),e("p",[t._v("Dear Community,")]),t._v(" "),e("p",[t._v("In this tutorial I am giving you a fully functional HUD class that is 800+ lines of UE4 C++ code.")]),t._v(" "),e("p",[e("strong",[t._v("Features of this sample HUD class include:")])]),t._v(" "),e("h3",{attrs:{id:"multiple-convenience-functions-for"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-convenience-functions-for"}},[t._v("#")]),t._v(" Multiple convenience functions for")]),t._v(" "),e("ul",[e("li",[t._v("drawing textures")]),t._v(" "),e("li",[t._v("drawing materials")]),t._v(" "),e("li",[t._v("drawing lines")]),t._v(" "),e("li",[t._v("drawing rectangles")]),t._v(" "),e("li",[t._v("drawing text")])]),t._v(" "),e("p",[t._v("The functions use the new UE4 method of using CanvasItems.")]),t._v(" "),e("h3",{attrs:{id:"transparency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transparency"}},[t._v("#")]),t._v(" Transparency")]),t._v(" "),e("p",[t._v("Every HUD element I show in my sample has at least some transparency!")]),t._v(" "),e("p",[t._v("The main HUD menu graphic is actually mostly transparent, except for the edges!")]),t._v(" "),e("h3",{attrs:{id:"centering"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centering"}},[t._v("#")]),t._v(" Centering")]),t._v(" "),e("ul",[e("li",[t._v("how to draw stuff centered in the screen (used by confirm dialog)")])]),t._v(" "),e("h3",{attrs:{id:"rest-of-game-code-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rest-of-game-code-integration"}},[t._v("#")]),t._v(" Rest of Game Code Integration")]),t._v(" "),e("p",[t._v("I have code in the tutorial to show you how to get a reference to your custom PC or Character class from within the HUD.")]),t._v(" "),e("p",[t._v("From your PC reference you can get access to your custom Game Mode and Game State classes (using the Cast<> code I show in tutorial PostInit)")]),t._v(" "),e("h3",{attrs:{id:"player-keyboard-mouse-controller-input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#player-keyboard-mouse-controller-input"}},[t._v("#")]),t._v(" Player Keyboard,Mouse,Controller Input")]),t._v(" "),e("p",[t._v("How to capture player key presses for ANY key,mouse,controller that you want from within the HUD")]),t._v(" "),e("p",[e("strong",[t._v("Key Controls used in this tutorial code:")])]),t._v(" "),e("ul",[e("li",[t._v("ESC: clears the screen lock so camera will move with cursor.")]),t._v(" "),e("li",[t._v("F: Toggle screen lock so only the cursor moves as player moves the mouse.")]),t._v(" "),e("li",[t._v("H: Toggles hiding the HUD")]),t._v(" "),e("li",[t._v("LMB: Clicks on buttons")]),t._v(" "),e("li",[t._v("Y: Confirm yes if confirm dialog open")]),t._v(" "),e("li",[t._v("N: Cancel if confirm dialog is open")])]),t._v(" "),e("h3",{attrs:{id:"text-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text-size"}},[t._v("#")]),t._v(" Text Size")]),t._v(" "),e("p",[t._v("How to measure text, accounting for scaling and font size, to size backgrounds,buttons,tooltips appropriately")]),t._v(" "),e("h3",{attrs:{id:"buttons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buttons"}},[t._v("#")]),t._v(" Buttons")]),t._v(" "),e("p",[t._v("A button system and corresponding USTRUCT")]),t._v(" "),e("h3",{attrs:{id:"cursor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cursor"}},[t._v("#")]),t._v(" Cursor")]),t._v(" "),e("p",[t._v("How to draw cursor that player can move in-game")]),t._v(" "),e("p",[t._v("How to change cursor when hovering over button")]),t._v(" "),e("h3",{attrs:{id:"tooltips"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tooltips"}},[t._v("#")]),t._v(" Tooltips")]),t._v(" "),e("p",[t._v("Button tooltips")]),t._v(" "),e("h3",{attrs:{id:"drawing-images-textures-materials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drawing-images-textures-materials"}},[t._v("#")]),t._v(" Drawing Images/Textures/Materials")]),t._v(" "),e("p",[t._v("Drawing custom button and menu backgrounds that come from textures/materials")]),t._v(" "),e("h2",{attrs:{id:"video"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),e("p",[t._v("Here is a video of this exact code in action!")]),t._v(" "),e("h3",{attrs:{id:"customizing-the-appearance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-appearance"}},[t._v("#")]),t._v(" Customizing the Appearance")]),t._v(" "),e("p",[t._v("Note that I made my own fonts and cursors and materials as seen in video, you can make your own appearance using same code 😃")]),t._v(" "),e("h2",{attrs:{id:"credit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#credit"}},[t._v("#")]),t._v(" Credit")]),t._v(" "),e("p",[t._v("Feel free to use this as a template/foundation for making a c++ HUD-based GUI for your game!")]),t._v(" "),e("p",[t._v("Please do give me credit in some appropriate way for this base-line code contribution.")]),t._v(" "),e("p",[t._v("All of this code is of my own creation, and I am using functions made only by Epic.")]),t._v(" "),e("p",[e("strong",[t._v("Why Did I Do All This?")])]),t._v(" "),e("p",[t._v("I have implemented a very featured GUI for my game using only UE4 C++ and the HUD class!")]),t._v(" "),e("p",[t._v("I was able to create from scratch everything I wanted, including scrollable panels and an in-game file system.")]),t._v(" "),e("p",[t._v("I wanted to demo for you how this can be done, so that you can do this in your game too!")]),t._v(" "),e("p",[t._v("Constructing this tutorial for you took me about 5 hours, 2 hours of which was just documation / video")]),t._v(" "),e("p",[t._v("Adding buttons and such to this code should only take you minutes.")]),t._v(" "),e("p",[t._v("Integrating this code with your game engine will be easy, you can get a reference to the owning Character or the player controller from within the HUD class itself.")]),t._v(" "),e("h2",{attrs:{id:"pre-requisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[t._v("#")]),t._v(" Pre-requisites")]),t._v(" "),e("p",[t._v("Make at least one font of your own, right click and make a new font asset.")]),t._v(" "),e("p",[t._v("I recommend a large default size like 36, as explained in the code below.")]),t._v(" "),e("h2",{attrs:{id:"c-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-code"}},[t._v("#")]),t._v(" C++ Code")]),t._v(" "),e("p",[t._v('The code below assumes you have created a now Class named "JoyHUD". If you "add code to project" from the Editor, then you will need to replace the default files with the code below.')]),t._v(" "),e("h3",{attrs:{id:"joyhud-h"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#joyhud-h"}},[t._v("#")]),t._v(" JoyHUD.h")]),t._v(" "),e("p",[t._v('// Copyright 1998-2013 Epic Games, Inc. All Rights Reserved.\n \n//VictoryHUD extension by Rama\n \n#pragma once\n \n#include "JoyHUD.generated.h"\n \nUSTRUCT()\nstruct FJoyButtonStruct\n{\nGENERATED_USTRUCT_BODY()\n \n//Vars\nint32 \t\ttype;\nFString\ttoolTip;\nfloat \t\tminX;\nfloat \t\tmaxX;\nfloat \t\tminY;\nfloat \t\tmaxY;\n \n//~\n \n//default properties\n \nFJoyButtonStruct()\n{\ntype \t\t\t= -1;\ntoolTip \t\t= "";\nminX \t\t\t= 0;\nmaxX \t\t\t= 0;\nminY \t\t\t= 0;\nmaxY \t\t\t= 0;\n}\n};\n \nUCLASS()\nclass AJoyHUD : public AHUD\n{\nGENERATED_UCLASS_BODY()\n \n// Font\n//\t\tI recommend creating the font at a high resolution / size like 36\n//\t\t\tthen you can scale down the font as needed to any size of your choice\n \n/** Verdana */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=JoyHUD)\nUFont* VerdanaFont;\n \n/** Put Roboto Here */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=JoyHUD)\nUFont* UE4Font;\n \n/** Font Scaling Used By Your HUD Code */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=JoyHUD)\nfloat DefaultFontScale;\n \n/** HUD Scaling */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=JoyHUD)\nfloat GlobalHUDMult;\n \n// T2D\n/** Cursor */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=T2D)\nUTexture2D* CursorMain;\n \n/** Hovering */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=T2D)\nUTexture2D* CursorHoveringButton;\n \n/** Button */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=T2D)\nUTexture2D* ButtonBackground;\n \n// Materials\n/** Events */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=Materials)\nUMaterialInterface* MaterialBackground;\n \n//\n \n/* Draw Hud? */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=Options)\nbool DontDrawHUD;\n \n//Cursor\npublic:\nFVector2D MouseLocation;\nvoid DrawHUD_DrawCursor();\n \n//Buttons\npublic:\nTArray<FJoyButtonStruct> ButtonsMain;\nTArray<FJoyButtonStruct> ButtonsConfirm;\n \n//Cursor In buttons\nvoid DrawHUD_CheckCursorInButtons();\nvoid CheckCursorInButtonsMain();\nvoid CheckCursorInButtonsConfirm();\n \nconst FJoyButtonStruct* CurCheckButton;\nint32 CheckCursorInButton(const TArray<FJoyButtonStruct>& ButtonArray);\nint32 ClickedButtonType;\n//States\nbool ConfirmDialogOpen;\nbool InMainMenu;\n \nint32 \t\tActiveButton_Type;\nFString \tActiveButton_Tip;\nbool CursorHoveringInButton;\n//Colors\npublic:\nconst FLinearColor * ColorPtr;\n \n//Colors\nstatic const FColor\t\tFColorBlack;\nstatic const FColor\t\tFColorRed;\nstatic const FColor\t\tFColorYellow;\nstatic const FColor\t\tFColorBlue;\nstatic const FColor\t\tFColor_White;\n \nstatic const FLinearColor LC_Black;\nstatic const FLinearColor LC_Pink;\nstatic const FLinearColor LC_Red;\nstatic const FLinearColor LC_Yellow;\n//FString\npublic:\n \n//`Titles\nstatic const FString S_Title_Main;\nstatic const FString S_Title_Confirm;\n//`Button Text\nstatic const FString S_Button_Restart;\nstatic const FString S_Button_Exit;\n \n// Utility\n \n//Stop Camera From Moving With Mouse\nFORCEINLINE void SetCursorMoveOnly(bool CursorOnly)\n{\nif(!ThePC) return;\n//\nThePC->SetIgnoreLookInput(CursorOnly);\n \n}\n \n//DrawLine\nFORCEINLINE void DrawJoyLine\n(\nconst FVector2D& Start,\nconst FVector2D& End,\nconst FLinearColor& TheColor,\nconst float& Thick\n)\n{\nif (!Canvas) return;\n//\n \nFCanvasLineItem NewLine(Start,End);\nNewLine.SetColor(TheColor);\nNewLine.LineThickness = Thick;\nCanvas->DrawItem(NewLine);\n}\t\n \n//~\n \nFORCEINLINE void DrawJoyRect(\nfloat X, float Y,\nfloat Width, float Height,\nconst FLinearColor& Color\n)\n{\nif(!Canvas) return;\n//\n \nFCanvasTileItem RectItem(\nFVector2D(X, Y),\nFVector2D( Width, Height ),\nColor\n);\n \nRectItem.BlendMode = SE_BLEND_Translucent;\nCanvas->DrawItem(RectItem);\n}\n \n//~\n \n//DrawText\nFORCEINLINE void DrawJoyText(\nUFont*\tTheFont,\nconst FString& TheStr,\nconst float& X, const float& Y,\nconst FLinearColor& TheColor,\nconst float& TheScale,\nbool DrawOutline=false,\nconst FLinearColor OutlineColor=FLinearColor(0,0,0,1)\n) {\nif(!Canvas) return;\n//\n \n//Text and Font\nFCanvasTextItem NewText(\nFVector2D(X,Y),\nFText::FromString(TheStr),\nTheFont,\nTheColor\n);\n \n//Text Scale\nNewText.Scale.Set(TheScale,TheScale);\n \n//Outline gets its alpha from the main color\nNewText.bOutlined = true;\nNewText.OutlineColor = OutlineColor;\nNewText.OutlineColor.A = TheColor.A * 2;\n \n//Draw\nCanvas->DrawItem(NewText);\n}\n \n//~\n//Draw Full Size Tile\nFORCEINLINE void DrawFullSizeTile(UTexture2D* tex, float x, float y, const FColor& Color)\n{\nif (!Canvas) return;\nif (!tex) return;\n//~~\n \nCanvas->SetDrawColor(Color);\n \n//Draw\nCanvas->DrawTile(\ntex, x, y, 0, //z pos\ntex->GetSurfaceWidth(), //screen width\ntex->GetSurfaceHeight(),  //screen height\n0, //texture start width\n0, //texture start height\ntex->GetSurfaceWidth(), //texture width from start\ntex->GetSurfaceHeight(), //texture height from start\nBLEND_Translucent\n);\n}\n \n//~\n \nFORCEINLINE void VDrawTile(UTexture2D* tex, float x, float y, float screenX, float screenY, const FColor& TheColor)\n{\nif (!Canvas) return;\nif (!tex) return;\n//~\n \nCanvas->SetDrawColor(TheColor);\n \n//Draw\nCanvas->DrawTile(\ntex, x, y, 0, //z pos\nscreenX, //screen width\nscreenY,  //screen height\n0, //texture start width\n0, //texture start height\ntex->GetSurfaceWidth(), //texture width from start\ntex->GetSurfaceHeight(), //texture height from start\nBLEND_Translucent\n);\n}\n \n//~\n \n//Draw\npublic:\nvoid DrawHUD_DrawDialogs();\n \n//Menus\nvoid DrawMainMenu();\nvoid DrawConfirm();\n \n//Buttons\nvoid DrawMainMenuButtons();\nvoid DrawConfirmButtons();\npublic:\nvoid DrawToolTip();\n \n//Core\npublic:\nAPlayerController* ThePC;\nvoid PlayerInputChecks();\nprotected:\n//Draw HUD\nvoid DrawHUD_Reset();\nvirtual void DrawHUD() OVERRIDE;\n \n/** after all game elements are created */\nvirtual void PostInitializeComponents() OVERRIDE;\n \n \n};')]),t._v(" "),e("h3",{attrs:{id:"joyhud-cpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#joyhud-cpp"}},[t._v("#")]),t._v(" JoyHUD.cpp")]),t._v(" "),e("p",[t._v('// Copyright 1998-2013 Epic Games, Inc. All Rights Reserved.\n \n//JoyHUD extension by Rama\n \n#include "VictoryGame.h"   //Replace with a reference to the header file of your own project\n \n#define BUTTONTYPE_MAIN_RESTART \t1\n#define BUTTONTYPE_MAIN_EXIT \t\t2\n \n#define BUTTONTYPE_CONFIRM_YES \t1\n#define BUTTONTYPE_CONFIRM_NO \t2\n \n#define CANVAS_WHITE if(Canvas) Canvas->SetDrawColor(FColor_White);\n \n//Cursor Draw Offset\n//\t\tuse this to position texture over the point of your cursor,\n//\t\t\tif the point is not at exactly 0,0\n#define CURSOR_DRAW_OFFSET 3\n \n//\n//Static Consts\n//\n \nconst FString AJoyHUD::S_Title_Main\t\t\t= FString("Joy!");\nconst FString AJoyHUD::S_Title_Confirm\t\t= FString("Exit Game?");\n \nconst FString AJoyHUD::S_Button_Restart\t= FString("Restart");\nconst FString AJoyHUD::S_Button_Exit\t\t= FString("Exit");\n \n// Colors\nconst FColor AJoyHUD::FColorBlack \t\t= FColor(0,0,0,255);\nconst FColor AJoyHUD::FColorRed \t\t\t= FColor(255,0,0,255);\nconst FColor AJoyHUD::FColorYellow \t\t= FColor(255,255,0,255);\nconst FColor AJoyHUD::FColorBlue\t\t\t= FColor(0,0,255,255);\nconst FColor AJoyHUD::FColor_White\t\t= FColor(255,255,255,255);\n// Backgrounds\nconst FLinearColor AJoyHUD::LC_Black \t= FLinearColor(0, 0, 0, 1);\nconst FLinearColor AJoyHUD::LC_Pink\t\t= FLinearColor(1, 0, 1, 1);\nconst FLinearColor AJoyHUD::LC_Red \t\t= FLinearColor(1, 0, 0, 1);\nconst FLinearColor AJoyHUD::LC_Yellow \t= FLinearColor(1, 1, 0, 1);\n \nAJoyHUD::AJoyHUD(const class FPostConstructInitializeProperties& PCIP) : Super(PCIP)\n{\n//Draw HUD?\nDontDrawHUD \t\t= false;\n \n//States\nConfirmDialogOpen \t= false;\nInMainMenu \t\t\t= true;\n \n//Scale\nGlobalHUDMult = 1;\nDefaultFontScale = 0.7;   //scaling down a size 36 font\n \n//\t I recommend creating fonts at a high resolution / size like 36\n//\t\t\tthen you can scale down the font as needed to any size of your choice\n \n// this avoids needing to make multiple fonts for different sizes, but have a high\n// resolution when you use larger font sizes\n \n}\t\n \n//Core\n \nvoid AJoyHUD::PostInitializeComponents()\n{\nSuper::PostInitializeComponents();\n \n//Establish the PC\nThePC = GetOwningPlayerController();\n \n//How to get a ref to your custom PC\n//AYourPlayerController* YourChar = Cast'),e("AYourPlayerController",[t._v("(ThePC);\n \n//How to Get The Character\n//AYourCharacterClass* YourChar = Cast"),e("AYourCharacterClass",[t._v('(GetOwningPawn());\n \n}\n \n//===============\n// Draw Dialogs\n//===============\nvoid AJoyHUD::DrawHUD_DrawDialogs()\n{\nDrawMainMenu();\nif(ConfirmDialogOpen) DrawConfirm();\n}\n//Menus\nvoid AJoyHUD::DrawMainMenu()\n{\n//Background\nDrawMaterialSimple(\nMaterialBackground,\n10, 10,\n256,\n512,\n1.3\n);\n \n//Menu Title\n \n//Draw buttons\nDrawMainMenuButtons();\n}\nvoid AJoyHUD::DrawConfirm()\n{\n//Blue rect with alpha 50%\nDrawJoyRect(Canvas->SizeX/2 - 100, Canvas->SizeY/2 - 50,200,100,FLinearColor(0,0,1,0.2333));\n \n//Confirm Title\n \n//Draw buttons\nDrawConfirmButtons();\n}\n \n//Buttons\nvoid AJoyHUD::DrawMainMenuButtons()\n{\n//Start Point\nfloat xStart = 100;\nfloat yStart = 110;\n \n//Background\nVDrawTile(ButtonBackground,xStart,yStart,150,80,FColor(255,255,255,120)); //alpha 120/255\n \n//Text\nDrawJoyText(\nVerdanaFont,"Restart",xStart+30,yStart+20,\nLC_Black, DefaultFontScale,\ntrue,LC_Red\n);\n \n//Struct\n//Add Button If Necessary\n//\t\tcould be cleared and need refreshing if using a different menu\n//\t\t\tclear buttons with ButtonsMain.Empty()\nif (ButtonsMain.Num() < 1 )\n{\nFJoyButtonStruct newButton = FJoyButtonStruct();\nnewButton.type \t\t\t= BUTTONTYPE_MAIN_RESTART;\nnewButton.toolTip\t\t= "Restart the Game!";\t\nnewButton.minX \t\t\t= xStart;\nnewButton.maxX \t\t\t= xStart + 150;\t\t\nnewButton.minY \t\t\t= yStart;\nnewButton.maxY \t\t\t= yStart + 80;\n \n//Add to correct array\nButtonsMain.Add(newButton);\n}\n \n \nxStart = 100;\nyStart = 410;\n \nVDrawTile(ButtonBackground,xStart,yStart,150,80,FColor(255,255,255,120)); //alpha 120/255\n \n//Text\nDrawJoyText(\nVerdanaFont,"Exit",xStart+55,yStart+20,\nLC_Black, DefaultFontScale,\ntrue,LC_Red\n);\n \nif (ButtonsMain.Num() < 2 )\n{\nFJoyButtonStruct newButton = FJoyButtonStruct();\nnewButton.type \t\t\t= BUTTONTYPE_MAIN_EXIT;\nnewButton.toolTip\t\t\t= "Exit the Game!";\t\nnewButton.minX \t\t\t= xStart;\nnewButton.maxX \t\t\t= xStart + 150;\t\t\nnewButton.minY \t\t\t= yStart;\nnewButton.maxY \t\t\t= yStart + 80;\n \n//Add to correct array\nButtonsMain.Add(newButton);\n}\n}\nvoid AJoyHUD::DrawConfirmButtons()\n{\nfloat xStart = Canvas->SizeX/2 - 100;\nfloat yStart = Canvas->SizeY/2 - 40;\n \n//Highlighted?\nif(ActiveButton_Type == BUTTONTYPE_CONFIRM_YES ) ColorPtr = &LC_Pink;\nelse ColorPtr = &LC_Yellow;\n \n//Text\nDrawJoyText(\nVerdanaFont,"Yes",xStart+30,yStart+20,\n*ColorPtr, DefaultFontScale,\ntrue\n);\n \nif (ButtonsConfirm.Num() < 1 )\n{\nFJoyButtonStruct newButton = FJoyButtonStruct();\nnewButton.type \t\t\t= BUTTONTYPE_CONFIRM_YES ;\nnewButton.toolTip\t\t\t= "";\t\nnewButton.minX \t\t\t= xStart;\nnewButton.maxX \t\t\t= xStart + 75;\t\t\nnewButton.minY \t\t\t= yStart + 20;\nnewButton.maxY \t\t\t= yStart + 60;\n \n//could use GetTextSize to streamline this\n \n//Add to correct array\nButtonsConfirm.Add(newButton);\n}\n \nxStart = Canvas->SizeX/2 + 20;\nyStart = Canvas->SizeY/2 - 40;\n \n//Highlighted?\nif(ActiveButton_Type == BUTTONTYPE_CONFIRM_NO) ColorPtr = &LC_Black;\nelse ColorPtr = &LC_Yellow;\n \n//Text\nDrawJoyText(\nVerdanaFont,"No",xStart+30,yStart+20,\n*ColorPtr, DefaultFontScale,\ntrue\n);\n \nif (ButtonsConfirm.Num() < 2 )\n{\nFJoyButtonStruct newButton = FJoyButtonStruct();\nnewButton.type \t\t\t= BUTTONTYPE_CONFIRM_NO;\nnewButton.toolTip\t\t\t= "";\t\nnewButton.minX \t\t\t= xStart;\nnewButton.maxX \t\t\t= xStart + 75;\t\t\nnewButton.minY \t\t\t= yStart + 20;\nnewButton.maxY \t\t\t= yStart + 60;\n \n//could use GetTextSize to streamline this\n \n//Add to correct array\nButtonsConfirm.Add(newButton);\n}\n}\n \n//===============\n// Cursor In Buttons\n//===============\nint32 AJoyHUD::CheckCursorInButton(const TArray<FJoyButtonStruct>& ButtonArray)\n{\nfor(int32 b = 0; b < ButtonArray.Num(); b++)\n{\nCurCheckButton = &ButtonArray[b];\n \n//check cursor in bounds\nif (CurCheckButton->minX <= MouseLocation.X && MouseLocation.X <= CurCheckButton->maxX &&\nCurCheckButton->minY <= MouseLocation.Y && MouseLocation.Y <= CurCheckButton->maxY )\n{\n \n//Active Button Type\nActiveButton_Type = CurCheckButton->type;\n \n//Tool Tip\nActiveButton_Tip = CurCheckButton->toolTip;\n \n//Change Cursor\nCursorHoveringInButton = true;\n \n//Mouse Clicked?\nif (ThePC->WasInputKeyJustPressed(EKeys::LeftMouseButton))\n{\nreturn ActiveButton_Type;\n//~~\n//no need to check rest of buttons\n}\n}\n}\n \n//No Click Occurred This Tick\nreturn -1;\t\n}\n \n//Check Confirm\nvoid AJoyHUD::CheckCursorInButtonsConfirm()\n{\n//Check Confirm Buttons\nClickedButtonType = CheckCursorInButton(ButtonsConfirm); //fills global ActiveButton_Type\n \nif(ClickedButtonType == BUTTONTYPE_CONFIRM_YES )\n{\nThePC->ConsoleCommand("Exit");\nreturn;\n}\nif(ClickedButtonType == BUTTONTYPE_CONFIRM_NO)\n{\nConfirmDialogOpen = false;\nButtonsConfirm.Empty(); //Buttons not needed anymore\nreturn;\n}\n}\n \n//Check Buttons\nvoid AJoyHUD::CheckCursorInButtonsMain()\n{\n//Check Confirm Buttons\nClickedButtonType = CheckCursorInButton(ButtonsMain);\n \nif(ClickedButtonType == BUTTONTYPE_MAIN_RESTART )\n{\nThePC->ConsoleCommand("RestartLevel");\nreturn;\n}\nif(ClickedButtonType == BUTTONTYPE_MAIN_EXIT)\n{\nConfirmDialogOpen = true;\nreturn;\n}\n}\nvoid AJoyHUD::DrawHUD_CheckCursorInButtons()\n{\nif(ConfirmDialogOpen)\n{\nCheckCursorInButtonsConfirm();\n \n//Take Focus Away From All Other buttons\nreturn;\n//~\n}\n \n//Main\nCheckCursorInButtonsMain();\n}\n \nvoid AJoyHUD::DrawToolTip()\n{\n//if mouse is too far to right, draw from left instead\nfloat xStart = MouseLocation.X + 150;\nfloat yStart = MouseLocation.Y + 5;\n \n//out vars\nfloat RV_xLength;\nfloat RV_yLength;\n//Text Size\nGetTextSize(\nActiveButton_Tip,\nRV_xLength,\nRV_yLength,\nUE4Font,\nDefaultFontScale * 2\n);\n \n// Decide Draw to Left or to the Right\n \n//Draw to the Left\nif (xStart + RV_xLength >= Canvas->SizeX - 40)\n{\nxStart -= 150 + 140 + 64 + RV_xLength;\n \n//If Text is too long, bring it closer to the cursor\nif(xStart < 33 ) xStart = 33;\n}\n \n//Background\nDrawJoyRect(\nxStart, yStart,\nRV_xLength + 70,\n80,\nFLinearColor(0, 0, 1, 0.7) //alpha 0.7\n);\n \n//Tool Tip\nDrawText(\nActiveButton_Tip,\nLC_Pink,\nxStart + 32, yStart + 20,\nUE4Font,\nDefaultFontScale * 2,\t\t\t\nfalse\t\t//scale position of message with HUD scale\n);\n}\nvoid AJoyHUD::DrawHUD_DrawCursor()\n{\n//Tool Tip\nif(ActiveButton_Tip != "") DrawToolTip();\n \n//Cursor Hovering in a Button?\nif (CursorHoveringInButton)\n{\n//pointer tex found?\nif (!CursorHoveringButton) return;\nDrawFullSizeTile(CursorHoveringButton, MouseLocation.X - CURSOR_DRAW_OFFSET, MouseLocation.Y - CURSOR_DRAW_OFFSET, FColor_White );\n}\n \nelse\n{\n//cursor tex found?\nif(!CursorMain) return;\nDrawFullSizeTile(CursorMain, MouseLocation.X - CURSOR_DRAW_OFFSET, MouseLocation.Y - CURSOR_DRAW_OFFSET, FColor_White );\n}\n}\n \nvoid AJoyHUD::PlayerInputChecks()\n{\n//check out this tutorial of mine for a list of all EKeys::\n//http://forums.epicgames.com/threads/972861-Tutorials-C-for-UE4-Code-Samples-gt-gt-New-Video-Freeze-Render-When-Tabbed-Out?p=31660286&viewfull=1#post31660286\n \nif(ThePC->WasInputKeyJustPressed(EKeys::Escape))\n{\nSetCursorMoveOnly(false);\nreturn;\n}\nif(ThePC->WasInputKeyJustPressed(EKeys::F))\n{\nSetCursorMoveOnly(!ThePC->IsLookInputIgnored());\nreturn;\n}\nif(ThePC->WasInputKeyJustPressed(EKeys::H))\n{\nDontDrawHUD = !DontDrawHUD;\nreturn;\n}\n \n//Confirm\nif(ConfirmDialogOpen)\n{\nif(ThePC->WasInputKeyJustPressed(EKeys::Y))\n{\nThePC->ConsoleCommand("Exit");\n//could replace with function based on confirm context\n \nreturn;\n}\nif(ThePC->WasInputKeyJustPressed(EKeys::N))\n{\nConfirmDialogOpen = false;\nButtonsConfirm.Empty(); //Buttons not needed anymore\n//Cancel Confirm\n \nreturn;\n}\n}\n}\n \nvoid AJoyHUD::DrawHUD_Reset()\n{\nActiveButton_Type \t\t= -1;\nActiveButton_Tip \t\t= "";\nCursorHoveringInButton \t= false;\n}\n \nvoid AJoyHUD::DrawHUD()\n{\n//==============================\n//==============================\n//==============================\n//Have PC for Input Checks and Mouse Cursor?\nif(!ThePC)\n{\n//Attempt to Reacquire PC\nThePC = GetOwningPlayerController();\n \n//Could Not Obtain PC\nif(!ThePC) return;\n//~~\n}\n \n//Multiplayer Safety Check\nif(!ThePC->PlayerInput) return; //not valid for first seconds of a multiplayer client\n//~~\n//==============================\n//==============================\n//==============================\n \n//Player Input\nPlayerInputChecks();\n \n//Draw HUD?\nif(DontDrawHUD) return;\n//~~\n \n//Super\nSuper::DrawHUD();\n \n//No Canvas?\nif(!Canvas) return;\n//\n \n//Reset States\nDrawHUD_Reset();\n \n//================\n//Get New Mouse Position\n//================\nThePC->GetMousePosition(MouseLocation.X,MouseLocation.Y);\n \n//Cursor In Buttons\nDrawHUD_CheckCursorInButtons();\n \n//Draw Dialogs\nDrawHUD_DrawDialogs();\n \n//### Do Last ###\n//Draw Cursor\nDrawHUD_DrawCursor();\n \n//Debugging Info\n//ThePC->ClientMessage("HUD Loop Completed!");\n}')])],1)],1),t._v(" "),e("h2",{attrs:{id:"compile-and-make-bp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-make-bp"}},[t._v("#")]),t._v(" Compile and Make BP")]),t._v(" "),e("p",[t._v("After you get the above to compile, you need to go into the editor and make a blueprint of this JoyHUD")]),t._v(" "),e("p",[t._v("Then you need to go to your GameMode.cpp file and add this line:")]),t._v(" "),e("p",[t._v('AYourGameMode::AYourGameMode(const class FPostConstructInitializeProperties& PCIP)\n: Super(PCIP)\n{\n// You can obtain the asset path of your HUD blueprint through the editor\n// by right-clicking the Blueprint asset and choosing "Copy Reference".\n// You should then add the "_C" suffix so that the class finder properly\n// points to the actual class used by the game, as opposed to its Blueprint\n// which is an editor-only concept).\n//\n// For instance, given a blueprint named BP_JoyHUD, the class path would be\n//\t"/Game/Blueprints/BP_JoyHUD_C"\nstatic ConstructorHelpers::FClassFinder<AHUD> TheHUDOb(TEXT("/Game/Blueprints/BP_JoyHUD_C"));\nif (TheHUDOb.Class != NULL)\n{\nHUDClass = TheHUDOb.Class;\n}\n}')]),t._v(" "),e("h2",{attrs:{id:"adding-the-graphics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-graphics"}},[t._v("#")]),t._v(" Adding The Graphics")]),t._v(" "),e("p",[t._v("Open the defaults of your new HUD BP and set the various assets!")]),t._v(" "),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),e("p",[t._v("Now you have the code to make your own button system, with tooltips, and draw textures and materials of any size and shape to the screen during game time!")]),t._v(" "),e("p",[t._v("Using the DrawMaterial function you can make fancy effects in your game's GUI as you see in my video!")]),t._v(" "),e("p",[t._v("You also have a solid foundation for a mouse/pointer driven GUI that responds to hover as well as click events!")]),t._v(" "),e("p",[t._v("Enjoy!")]),t._v(" "),e("p",[e("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),e("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),e("p",[t._v('Retrieved from "'),e("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=HUD,_Canvas,_Code_Sample_of_800%2B_Lines,_Create_Buttons_%26_Draw_Materials&oldid=11897",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=HUD,_Canvas,_Code_Sample_of_800%2B_Lines,_Create_Buttons_%26_Draw_Materials&oldid=11897"),e("OutboundLink")],1),t._v('"')]),t._v(" "),e("p",[e("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);