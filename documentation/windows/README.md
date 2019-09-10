# Windows

## Virtual desktop

[Actual Virtual Desktops](https://downmienphi.com/windows/download-actual-virtual-desktops.1332.html)

## Autohotkey

[autohotkey](https://www.autohotkey.com/docs/Hotkeys.htm)

- Using `Alt` + `Tab` when you changed `Alt` to `Ctrl`

```
LControl & Tab::AltTab
```

- Using `Alt` + `Q` instead of `Alt` + `F4`

```
LControl & Q::Send !{F4}`
```

- Custom volume buttons

Increase volume: __shift + numpad plus__ <br>
Decrease volume: __shift + numpad minus__

```
; Custom volume buttons
+NumpadAdd:: Send {Volume_Up} ;shift + numpad plus
+NumpadSub:: Send {Volume_Down} ;shift + numpad minus
break::Send {Volume_Mute} ; Break key mutes
return
```

## Convert `Alt` key to `Cmd` key like Mac os

[sharpkeys](https://github.com/randyrants/sharpkeys/releases)

[remap-windows-keyboard-shortcuts](https://www.howtogeek.com/197365/how-to-remap-windows-keyboard-shortcuts-in-boot-camp-on-a-mac/)