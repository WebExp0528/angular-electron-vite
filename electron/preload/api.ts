import { ipcRenderer } from 'electron'

// Custom APIs for renderer
export const api = {
  ping: () => {
    return ipcRenderer.invoke('ping')
  }
}
