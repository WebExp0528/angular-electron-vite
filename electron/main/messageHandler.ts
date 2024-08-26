import { BrowserWindow, ipcMain } from 'electron'

/**
 * Represents the main process of the application.
 * This class handles various IPC (Inter-Process Communication) events and functions related to tank management and settings.
 */
class MessageHandler {
  win: BrowserWindow
  constructor() {}

  init(win: BrowserWindow) {
    ipcMain.handle('ping', () => {
      return 'pong'
    })
    this.win = win
  }
}

export default new MessageHandler()
