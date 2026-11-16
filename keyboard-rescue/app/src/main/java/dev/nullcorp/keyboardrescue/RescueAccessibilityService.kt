package dev.nullcorp.keyboardrescue

import android.accessibilityservice.AccessibilityService
import android.graphics.PixelFormat
import android.graphics.Color
import android.graphics.drawable.GradientDrawable
import android.view.Gravity
import android.view.MotionEvent
import android.view.View
import android.view.WindowManager
import android.view.accessibility.AccessibilityEvent
import android.view.accessibility.AccessibilityNodeInfo
import android.widget.TextView

class RescueAccessibilityService : AccessibilityService() {
    companion object { var instance: RescueAccessibilityService? = null; private set }
    private var wm: WindowManager? = null
    private var bubble: View? = null

    override fun onServiceConnected() {
        instance = this
        wm = getSystemService(WINDOW_SERVICE) as WindowManager
        val p = WindowManager.LayoutParams(64.dp(), 64.dp(), WindowManager.LayoutParams.TYPE_ACCESSIBILITY_OVERLAY,
            WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE or WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL,
            PixelFormat.TRANSLUCENT).apply { gravity = Gravity.TOP or Gravity.END; x = 8.dp(); y = 110.dp() }
        val view = TextView(this).apply {
            text = "⌨"; textSize = 30f; gravity = Gravity.CENTER; setTextColor(Color.WHITE)
            background = GradientDrawable().apply { setColor(Color.rgb(105, 55, 180)); cornerRadius = 36.dp().toFloat() }
            var startX = 0; var startY = 0; var downX = 0f; var downY = 0f
            setOnTouchListener { _, event ->
                when (event.actionMasked) {
                    MotionEvent.ACTION_DOWN -> { startX = p.x; startY = p.y; downX = event.rawX; downY = event.rawY; true }
                    MotionEvent.ACTION_MOVE -> { p.x = (startX - (event.rawX - downX)).toInt(); p.y = (startY + (event.rawY - downY)).toInt(); wm?.updateViewLayout(this, p); true }
                    MotionEvent.ACTION_UP -> { if (kotlin.math.abs(event.rawX-downX) < 15 && kotlin.math.abs(event.rawY-downY) < 15) rescue(); true }
                    else -> false
                }
            }
        }
        bubble = view
        wm?.addView(view, p)
    }

    fun rescue() {
        val root = rootInActiveWindow ?: return
        val target = findEditable(root) ?: return
        target.performAction(AccessibilityNodeInfo.ACTION_FOCUS)
        target.performAction(AccessibilityNodeInfo.ACTION_CLICK)
    }

    private fun findEditable(node: AccessibilityNodeInfo): AccessibilityNodeInfo? {
        if (node.isEditable && node.isVisibleToUser && node.isFocused) return node
        for (i in 0 until node.childCount) node.getChild(i)?.let { findEditable(it)?.let { result -> return result } }
        if (node.isEditable && node.isVisibleToUser) return node
        return null
    }

    private fun Int.dp(): Int = (this * resources.displayMetrics.density).toInt()
    override fun onAccessibilityEvent(event: AccessibilityEvent?) {}
    override fun onInterrupt() {}
    override fun onDestroy() {
        bubble?.let { wm?.removeView(it) }; bubble = null; instance = null
        super.onDestroy()
    }
}
