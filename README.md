# Ebbeum
![Alt text](/assets/icon.png)

## 목차
[Features](#Features) <br>
[Introduction](#Intro) <br>
[메인화면](#메인화면) <br>
[컨탠츠](#컨탠츠) <br>
[로그인](#로그인)<br>
[마이페이지](#마이페이지) <br>
[마무리](#마무리)

## Features
- 탭 네비게이션
- 스택 네비게이션
- 슬라이더
- 슬라이더 탭 네비게이션
- 로그인(미완성)

## Intro
> 리액트 네이티브

> api를 이용한 통신

> 체형 입력을 통한 옷 추천 서비스

이븜은 리액트 네이티브 프레임워크를 기반으로한 android, ios 어프리케이션입니다. 회원, 비회원 이용을 지원하며, 체형 입력을 통해 각자의 체형에 어울릴만한 스타일의 옷을 추천해주는 어플리케이션입니다.
해당 저장소에는 FE part가 저장되어 있습니다.

## 메인화면
<p align="center">
    <image src="./intro_image/Loading.png" height="500px">
</p>

> 탭 네비게이터를 이용하여, 홈 화면과 코디 추천, 그리고 마이페이지를 분기합니다. 

> 상단의 각 부위별 의류는 슬라이딩 탭 네비게이터로 구현되어 있습니다. 

## 컨탠츠
<p align="center">
    <image src="./intro_image/recommend.jpeg" height="500px">
    <image src="./intro_image/clothes.png" height="500px">
</p>
<br>

>전체 코디를 추천해줍니다. 체형에 맞는 태그를 분류합니다.

>탭 네비게이터의 각 옷 상세 분류에 따라 옷을 추천해줍니다. 옷에 태그를 분류하여, 태그를 출력합니다. 체형에 맞는 태그의 옷들을 불러옵니다.

## 로그인
<p align="center">
    <image src="./intro_image/login.jpeg" height="500px">
    <image src="./intro_image/signin.jpeg" height="500px">

</p>

>로그인을 통한 회원 접속, 그리고 비회원 접속이 가능합니다. 

> 회원의 경우, 기존에 저장해두었던 체형 정보를 서버에 저장하여, api통신을 통하여 읽어 들입니다.
>> (암호화 로직이 미완성 된 상태입니다.)

>아이디 및 비밀번호의 규정이 맞으면 테두리가 초록색으로, 적합하지 않으면 빨간색으로 변합니다.

## 마이페이지
<p align="center">
    <image src="./intro_image/mypage.png" height="500px">
    <image src="./intro_image/setting.png" height="500px">
</p>

> 마이페이지에서는 로그인이 가능합니다. 

> 로그인을 할 경우 기존에 저장했던 체형 정보를 서버에서 읽어옵니다. 

> 비회원의 경우 마이페이지에서 직접 체형을 입력하여 이용할 수 있습니다.


## 마무리
리엑트 네이티브 프레임워크를 이용하여 만든 첫 번째 어플리케이션입니다. 읽어주셔서 감사합니다.

> 2019 김덕휘 All right reserved.