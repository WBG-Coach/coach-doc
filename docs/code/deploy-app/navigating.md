---
sidebar_position: 0
---

# Generating the First AAB

## Publishing on Google Play Store

Android requires all applications to be digitally signed with a certificate before installation. To distribute your app via Google Play, it must be signed with a release key, used for all future updates. Since 2017, Google Play offers the App Signing by Google Play feature to automatically handle release signing. However, your app binary must be signed with an upload key before uploading to Google Play. The Android Developers documentation provides an extensive explanation on "Signing Your Applications". This guide outlines the process and enumerates the steps for packaging the JavaScript bundle.

### Generating a Publishing Key

The process for generating a publishing key varies by operating system. Below are examples for both Windows and macOS.

#### Windows

On Windows, run `keytool` from `C:\Program Files\Java\jdkx.x.x_x\bin` as an administrator:

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

This command will prompt you for keystore and key passwords and Distinguished Name fields for your key, generating the keystore as my-upload-key.keystore.

### macOS

On macOS, locate your JDK bin folder using:

```bash
/usr/libexec/java_home
```

It will output the directory of the JDK, which will look something like this:

```bash
/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home
```

Navigate to that directory by using the command `cd /your/jdk/path` and use the `keytool` command with sudo permission as shown below.

```bash
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

After generating the keys, you will need to place them directly into your application to ensure that it will generate the file with these generated keys. Below, we will demonstrate how this process works.

### Setting up Gradle variables

1. Place the `my-upload-key.keystore` file under the `android/app` directory in your project folder.

2. Edit the file `~/.gradle/gradle.properties` or `android/gradle.properties`, and add the following (replace `**\***` with the correct keystore password, alias and key password),

```bash
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

These are global Gradle variables for later use in your Gradle config to sign the app.

### Adding signing config to your app's Gradle config

The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit android/app/build.gradle to include the signing configuration:,

```bash
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

## Generating the first release AAB

Run the following command in a terminal:

```bash
npx react-native build-android --mode=release
```

This command, using Gradle's bundleRelease, bundles all the JavaScript required for your app into the AAB (Android App Bundle). For adjustments to JavaScript bundle or drawable resources bundling (e.g., if default file/folder names or project structure were altered), refer to `android/app/build.gradle`.
