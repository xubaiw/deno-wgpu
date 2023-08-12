import {InstanceDescriptor} from "./mod.ts"

type Foo = {
  [key in keyof InstanceDescriptor]: InstanceDescriptor[key]
}
