# 할일 목록 리스트 만들기(리엑트)

```
$create-react-app todo-app
$cd todo-app
$yarn add node-sass classnames reacat-icons
```

## 1. 리엑트 설치 및 Sass 설치 진행

## 2. 각 컴포넌트 구성

- TodoTemplate : 화면을 가운데 정렬시켜 주며 앱 타이틀을 보여줌
- TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트 입니다.
- TodoListItem: 각 할일에 항목에 대한 정보를 보여주는 컴포넌트 입니다.
- TodoList : todos 배열을 props로 받아와 이를 map을 통해서 여러개의 리스트 아이템 컴포넌트로 반환

## 3. 할일 목록 추가 기능 구현.
