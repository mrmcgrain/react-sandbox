package dev.nullcorp.keyboardrescue

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.provider.Settings
import android.view.Gravity
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView

class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val root = LinearLayout(this).apply { orientation = LinearLayout.VERTICAL; setPadding(40, 60, 40, 40); gravity = Gravity.CENTER_HORIZONTAL }
        root.addView(TextView(this).apply { text = "Keyboard Rescue\n\nEnable the Accessibility Service to add a movable keyboard button. The button focuses an editable field and requests your normal keyboard.\n\nThe Quick Settings tile works while the service is enabled.\n\nNo root, network access, or data collection."; textSize = 18f })
        root.addView(Button(this).apply { text = "Enable accessibility shortcut"; setOnClickListener { startActivity(Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS)) } })
        root.addView(Button(this).apply { text = "Show keyboard now"; setOnClickListener { RescueAccessibilityService.instance?.rescue() ?: startActivity(Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS)) } })
        setContentView(root)
        if (intent.getBooleanExtra("rescue", false)) {
            root.postDelayed({ RescueAccessibilityService.instance?.rescue() }, 350)
        }
    }
}
