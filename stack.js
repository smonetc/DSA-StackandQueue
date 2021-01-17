//stack

class _Node {
   constructor(data, next) {
       this.data = data;
       this.next = next;
   }
}

class Stack {
   constructor() {
       this.top = null; //indicates top of stack
   }

   push(data) {
      /* If the stack is empty, then the node will be the
         top of the stack */
      if (this.top === null) {
          this.top = new _Node(data, null);
          return this.top;
      }

      /* If the stack already has something, 
         then create a new node,
         add data to the new node, and
         have the pointer point to the top */
      const node = new _Node(data, this.top);
      this.top = node;
  }

  pop() {
      /* In order to remove the top of the stack, you have to point
         the pointer to the next item and that next item becomes the
         top of the stack */
      const node = this.top;
      this.top = node.next;
      return node.data;
   }
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');  

const peek = stack => {
   if(stack.top === null){
      return null
   }
   return stack.top.data
}

const isEmpty = stack => {
   return stack.top === null
}

const display = stack => { 
   let current = stack.top;
   while (current !== null) { 
       console.log(current.data);
       current = current.next;
   }
}

console.log(starTrek.pop())
console.log(starTrek.pop()) //this second function call removes McCoy
