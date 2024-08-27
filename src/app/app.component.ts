import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular electron vite'

  async ngOnInit(): Promise<void> {
    setTimeout(async () => {
      const res = await window.api.ping()
      console.log('AppComponent initialized', res)
    }, 2000)
  }
}
