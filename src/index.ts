// @flow
import { hoge } from './Hoge'

hoge({x: 1, y: 2})
hoge({x: 1, y: 2, z: 3}) // TypeScript Error
hoge(undefined)          // Flow Error
