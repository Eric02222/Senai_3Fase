function enqueue(queue, value) { 
    if(value == null || value === undefined)return
    queue.push(value);
}
function dequeue(queue) {
    if(queue.length === 0) return
    return queue.shift();
 }

function front(queue) { 
    if(queue.length === 0) return
    return queue[0];
}

function fila() {
    let queue = [];
    enqueue(queue, "A")
    enqueue(queue, "B")
    enqueue(queue, "C")
    enqueue(queue, "D")
    console.log(front(queue))
    console.log(dequeue(queue))
    console.log(front(queue))
    console.log(dequeue(queue))
    console.log(front(queue))
}

console.log(fila())