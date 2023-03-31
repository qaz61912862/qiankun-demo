import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import config from '@/config'

const { subApps } = config

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
  addGlobalUncaughtErrorHandler((event) => console.log(event))
}
