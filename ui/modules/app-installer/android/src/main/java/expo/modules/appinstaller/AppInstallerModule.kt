package expo.modules.appinstaller

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class AppInstallerModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('AppInstaller')` in JavaScript.
    Name("AppInstaller")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants(
      "PI" to Math.PI
    )

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("installApp") { url: String ->
      // Send an event to JavaScript.
      val file = File(fileName)

      if (file.exists()) {
        val intent = Intent(Intent.ACTION_VIEW)
        val type = "application/vnd.android.package-archive"
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
          val downloadedApk: Uri = FileProvider.getUriForFile(getContext(), "ir.greencode", file)
          intent.setDataAndType(downloadedApk, type)
          intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        } else {
          intent.setDataAndType(Uri.fromFile(file), type)
          intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        getContext().startActivity(intent)
      } else {
        Toast.makeText(getContext(), "ّFile not found!", Toast.LENGTH_SHORT).show()
      }
    }
  }
}
