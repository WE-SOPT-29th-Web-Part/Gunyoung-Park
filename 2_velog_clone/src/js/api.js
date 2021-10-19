export function generateData(dataCount = 10) {
  function randint(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }

  const result = [];
  let last = -1;
  for (let i = 0; i < dataCount; i++) {
    let idx;
    do {
      idx = randint(0, dataSample.length - 1);
    } while (idx == last);
    last = idx;
    result.push(dataSample[idx]);
  }
  return result;
}

function getProfile() {
  return {
    profileImg: "./resources/person.png",
    profileName: "Tekiter",
  };
}

function getTimestamp() {
  return {
    timestamp: "2021년 9월 28일",
  };
}

const dataSample = [
  {
    img: "https://media.vlpt.us/images/koremp/post/41cec128-5eca-4bba-9de8-74852fe1b224/ar.jpg?w=640",
    title: "주니어 프론트엔드 개발자 면접 20개 광탈",
    content: "회사 20개 면접 광탈 이후 지금까지의 과정, 60초 후에 공개됩니다!",
    commentCount: 9,
    likes: 13,
    ...getTimestamp(),
    ...getProfile(),
  },
  {
    img: "https://media.vlpt.us/images/vonvoyage27/post/9f17fd6f-db42-47c1-93b0-143128f61138/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-25%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.15.03.png?w=640",
    title: "포트폴리오 6주 만에 준비 방법(Ver.2)",
    content:
      "IT 회사에 개발자로 취업을 하려면 개발에 대한 지식 / 경력 / 실력이필요합니다. 경력이 없는 신입(~3년 차)에게 회사가 지식과 경력",
    commentCount: 9,
    likes: 13,
    ...getTimestamp(),
    ...getProfile(),
  },
  {
    img: "https://media.vlpt.us/images/sosoyim/post/21c96130-9f9c-4485-8293-6f3478f20d23/pexels-ann-h-1888015.jpg?w=640",
    title: "신입 개발자가 알면 좋은 개발 외적인 개념",
    content:
      "입사 전에 알고 오시면 회사 적응이 빨라질 3가지 개념을 간단히 목록으로 만들었습니다. 이슈, 협업 도구, 질문 에 대해 다룹니다.",
    commentCount: 9,
    likes: 13,
    ...getTimestamp(),
    ...getProfile(),
  },
  {
    img: "https://media.vlpt.us/images/haero_kim/post/83c6bb3d-684e-4be4-9a23-8d85f7660c5b/image%20(1).png?w=640",
    title: "이진 탐색 트리 (Binary Search Tree)",
    content: "BST 의 특징, 연산 시간 복잡도 알아보기",
    commentCount: 9,
    likes: 13,
    ...getTimestamp(),
    ...getProfile(),
  },
  {
    img: "https://media.vlpt.us/images/jkpark104/post/5dcedbfc-711d-424d-9002-146df123a0e8/thumbnail.png?w=640",
    title: "JS의 객체지향 프로그래밍",
    content: "BST 의 특징, 연산 시간 복잡도 알아보기",
    commentCount: 9,
    likes: 13,
    ...getTimestamp(),
    ...getProfile(),
  },
];
