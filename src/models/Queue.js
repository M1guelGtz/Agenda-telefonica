import { Node } from "./Node.js"
export class Queue {
    #count
    #head
    #tail
    
    constructor(){
        this.#count = 0
        this.#head = null
        this.#tail = null 
    }
    enqueue(item) {
      const node = new Node(item)
        this.#count++;
        if (this.isEmpty()) {
            this.#tail = node;
            this.#head = node;
            return;
        }
        this.#head.next = node; 
        this.#head = node;
    }

    dequeue(){
        if(this.isEmpty()) {
            return null;
        }
        let value = this.#tail;
        this.#tail = this.#tail.next; 
        this.#count--;

        if (this.isEmpty()) {
            this.#head = null;
        }
        return value.getData();
    }

    peek(){
        let current = this.#tail.getData()
        return current
    }
    isEmpty(){
        return this.#head === null
    }
    size(){
        return this.#count
    }
}