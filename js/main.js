'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel=document.querySelector("#result p")

  const quizSet = [
    {q: '体脂肪を分解に着目した場合、正しい運動順序は？', c: ['筋トレ→有酸素運動', '有酸素運動のみ', '有酸素運動→筋トレ']},
    {q: 'プロテインの種類で、寝る前に摂取するのに最適な種類は？', c: ['カゼインプロテイン', 'ホエイプロテイン', 'ソイプロテイン']},
    {q: '一回の筋トレで複数部位を鍛えない方が良い理由は？', c: ['オーバーワークを防ぐ為', '怪我を防ぐ為', '脂質が分解される為']},
    {q: 'この中で一番GI値が高い糖質は？', c: ['マルトデキストリン', '米', 'バナナ']},
    {q: 'この中で筋トレBIG3に含まれない種目は？', c: ['アームカール', 'デッドリフト', 'スクワット']},
    {q: '腹筋を割るのに一番効率の良い種目は？', c: ['スクワット', 'レッグレイズ', '腹筋']},
    {q: '上半身で一番面積の広い筋肉は？', c: ['三角筋', '大胸筋', '広背筋']},
    {q: '山本義徳先生の理論は？', c: ['101理論', '神の7秒理論', 'オーバーワーク理論']},
    {q: '極端に体脂肪率を下げるケトン体質にする為に、摂取してはならない栄養素は？？', c: ['糖質', '脂質', 'タンパク質']},
    {q: 'イロモネアに出演した芸人で、「マッスルスリー」にはいないが「マッスルフォー」に存在する芸人は誰？', c: ['庄司智春', '小島よしお', '春日俊彰']},
    {q: '筋肉を大きくする上で有利な筋肉は？', c: ['速筋', '遅筋', 'ヒラメ筋']},
    {q: '「ホエイプロテイン」は吸収までにどのくらいの時間がかかる？', c: ['1時間15分', '1時間', '45分']},
    {q: 'ボディビルの世界一を決める大会は何というか？', c: ['ミスターオリンピア', 'ミスターマッスル', 'ワールドクラシック']},
    {q: '筋肉の中に水分はどの程度含まれているか？', c: ['5割', '3割', '7割']},
    {q: 'イギリスの有名プロテインメーカーは？', c: ['マイプロテイン', 'チャンピオン', 'ゴールドスタンダード']},
    {q: 'マッチョと言われるのにあまり鍛える意味のない部位は？', c: ['腹筋', '太もも', '背筋']},
    {q: '風邪をひいたときに摂取すると良いサプリメントは？', c: ['グルタミン', 'HMB', 'クレアチン']},
    {q: '胸筋と背筋などの拮抗する筋肉を連続で鍛えるトレーニング方法をなんというか？', c: ['スーパーセット', 'ジャイアントセット', 'ピラミッドセット']},
    {q: 'ダイエットとしてランニングをする際に、最適なタイミングは？', c: ['起床直後', '食後', '空腹時']},
    {q: '筋トレで得られる効果で当てはまらないものは？', c: ['根暗になる', 'モテる', '自信がつく']},
  ];
  let currentNum = 0;
  let isAnswered;
  let score=0;

  

  function shuffle(arr){
    for(let i= arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[j],arr[i]]= [arr[i],arr[j]]
    }
    return arr;
  }

  function checkAnswer(li){
      if(isAnswered===true){
          return;
      }
      isAnswered=true;
  if(li.textContent===quizSet[currentNum].c[0]){
      li.classList.add("correct");
      score++;
            
  }else{
      li.classList.add("wrong");
  }

  btn.classList.remove("disabled");
}

function setQuiz(){
  isAnswered=false;
  question.textContent = quizSet[currentNum].q;

while(choices.firstChild){
    choices.removeChild(choices.firstChild);
}

  const shuffledChoices=shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener("click",()=>{
        checkAnswer(li);
    });
    choices.appendChild(li);
  });

  if(currentNum===quizSet.length-1){
      btn.textContent="Show Score";
  }
}
setQuiz();

btn.addEventListener("click",()=>{
    if(btn.classList.contains("disabled")){
        return;
    }
    btn.classList.add("disabled");

    if(currentNum===quizSet.length-1){
        scoreLabel.textContent=`Score:${score}/${quizSet.length}`;
        result.classList.remove("hidden");
     } else{
            currentNum++;
            setQuiz();

        }
    
});
}