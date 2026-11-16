plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}
android {
    namespace = "dev.nullcorp.keyboardrescue"
    compileSdk = 35
    defaultConfig {
        applicationId = "dev.nullcorp.keyboardrescue"
        minSdk = 26
        targetSdk = 32
        versionCode = 1
        versionName = "0.1.0"
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
}
