# Model과 View 간의 의존성을 약화시키고, 약하게 결합시키기 위한 아키텍쳐 패턴
- loose coupling

## MVC (Model View Controller)
- Controller의 역할은 Action(= input)을 전달 받아 처리      // 버튼누르는 액션 등등..
- Controller와 View는 1:N 관계로, Controller는 다수의 View를 관리
- View는 Controller를 모름

### 동작
1. Action이 Controller로 전달
2. Controller는 Action을 확인하고, Model을 업데이트
3. Controller는 Model을 표현할 View를 선택

### View가 업데이트 되는 방법  (의존성이 모두 강함)
- 선택된 View가 Model에 직접 접근
- Model이 View에게 Notify
- View가 Pollling으로 주기적으로 Model의 변경을 감지

### 단점
- View와 Model 간의 의존성이 높음 

뷰, 모델을 단지 분리만 했을때
입력을 뷰만 처리하면, 특정 앱에 특화되게 됨, 그래서 컨트롤러에게 맡김
뷰는 그저 UI만 가지고 있다


## MVP

나머지는 뷰가 동작을 처리 (MVC는 컨트롤러가)

Model, Presenter ,View
프레션터가 중재자 역할, 의존성이 전혀 없다.
뷰의 프레션터의 의존성이 매우 높음



## MVVM
옵져버, 커맨드 패턴이 사용되서, 의존성을 없앰



+++ MVI (Model View Intents?) 안드로이드 유망