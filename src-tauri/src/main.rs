// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, SystemTray, SystemTrayMenu, SystemTrayEvent, PhysicalPosition};

fn main() {
    let tray_menu = SystemTrayMenu::new();
    let tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .system_tray(tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position,
                size,
                ..
            } => {
                let window = app.get_window("main").unwrap();

                // Get the size of the window
                let window_size = window.outer_size().unwrap();

                // Estimate the tray icon width (e.g., 20 pixels)
                let tray_icon_width = 20.0;

                // Calculate the new X position to center the window on the tray icon
                let tray_center_x = (position.x + (size.width / 2.0) - (tray_icon_width / 2.0)) as i32;
                let window_x = tray_center_x - (window_size.width as i32 / 2);

                // Move the window to the new position
                window.set_position(PhysicalPosition { x: window_x, y: 0 }).unwrap();

                window.set_position(PhysicalPosition { x: window_x, y: 0 }).unwrap();

                if window.is_visible().unwrap() {
                    let _ = window.hide();
                } else {
                    let _ = window.show();
                }
            },
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
