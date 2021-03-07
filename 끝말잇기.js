var word="장성범"

while(true){
    var answer=prompt('정답을 입력하세요','장성범이 기본값');
    if(word[word.length-1]==answer[0]){
        alert("정답");
    }
    else{
        alert("오답");
    }
}