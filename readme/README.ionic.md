# ionic scripts

### version
node@v18.14.2
ionic@7.1.1

```bash
npm install -g @ionic/cli native-run cordova-res
ionic start rock-exam tabs --type=react --capacitor

ionic integrations enable capacitor --quiet -- quiz-client io.ionic.starter

ionic build
ionic cap add android
ionic cap add ios

# copy static dist to android studio or xcode
ionic cap copy
# sync installed packages
ionic cap sync

npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem -S
npm install @ionic/pwa-elements -S
```

> Android Part

```bash
ionic cap open android
npm install @capacitor/toast -S
```

> React Part

```bash
npm install -D sass
npm i jwt-decode -S
npm i path-browserify -S
npm install @ionic/pwa-elements -S
```