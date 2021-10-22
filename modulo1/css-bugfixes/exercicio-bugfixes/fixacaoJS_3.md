```
function calculaNota(ex, p1, p2) {
  nota = (ex + p1*2 + p2*3)/6
  if (nota >= 9){
    return 'A'
  } else if(nota >=7.5 && nota <9){
    return 'B'
  }else if(nota >= 6 && nota <7.5){
    return 'C'
  }else{
    return 'D'
  }
  return nota
}
```
