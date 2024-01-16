---
sidebar_position: 0
---

# Building

## Publishing on Google Play Store

Android mandates that all applications be digitally authenticated with a certificate before they can be installed. To distribute your Android application via the Google Play store, it must be authenticated with a release key, which is then utilized for all subsequent updates. Since 2017, Google Play has had the capability to automatically handle signing releases through the App Signing by Google Play functionality. Nevertheless, before your application binary is uploaded to Google Play, it must be authenticated with an upload key. The Android Developers documentation's Signing Your Applications page provides a detailed explanation of this topic. This guide briefly outlines the process and enumerates the necessary steps for packaging the JavaScript bundle.

Based on the context above, the first thing we need to address is generating a publishing key. This process alternates between each operating system, and below, we will provide some examples.

### Windows

On Windows keytool must be run from C:\Program Files\Java\jdkx.x.x_x\bin, as administrator.

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called my-upload-key.keystore.

### macOS

On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it:

```bash
/usr/libexec/java_home
```

It will output the directory of the JDK, which will look something like this:

```bash
/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home
```

Navigate to that directory by using the command cd /your/jdk/path and use the keytool command with sudo permission as shown below.

```bash
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

After generating the keys, you will need to place them directly into your application to ensure that it will generate the file with these generated keys. Below, we will demonstrate how this process works.

### Setting up Gradle variables

1. Place the my-upload-key.keystore file under the android/app directory in your project folder.

2. Edit the file ~/.gradle/gradle.properties or android/gradle.properties, and add the following (replace **\*** with the correct keystore password, alias and key password),

```bash
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

These are going to be global Gradle variables, which we can later use in our Gradle config to sign our app.

### Adding signing config to your app's Gradle config

The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file android/app/build.gradle in your project folder, and add the signing config,

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

This command uses Gradle's bundleRelease under the hood that bundles all the JavaScript needed to run your app into the AAB (Android App Bundle). If you need to change the way the JavaScript bundle and/or drawable resources are bundled (e.g. if you changed the default file/folder names or the general structure of the project), have a look at android/app/build.gradle to see how you can update it to reflect these changes.
