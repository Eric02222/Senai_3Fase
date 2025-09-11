function enqueue(queue, value) { 
    queue.push(value);
}
function dequeue(queue) {
    return queue.shift();
 }

function front(queue) { 
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