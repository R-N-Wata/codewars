function lastIndexOf(head, value) {
  let found = -1, i = 0
  while(head){
    if(head.data === value) found = i;
    i++
    head = head.next
    
  }
  return found
}