// use a number and pretend we are using actual ptr
type Ptr = number;
type Release = (ptr: Ptr) => void;


class ManagedPointer {
  pointer: number;

  constructor(pointer: number) {
    this.pointer = pointer;
    const release = (ptr: Ptr) => console.log("Release", ptr);
    registry.register(this, [pointer, release]);
  }
}

new ManagedPointer(233);
// Output: Release 233
