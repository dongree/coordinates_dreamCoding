# 좌표 실습\_dreamCoding

Dream Coding 브라우저101 강의에서 제공한 실습

첫 번째 commit(coordinates)은 top과 left와 같은 속성을 javascript에서 변형시켜가며 좌표를 움직였다.

두 번째 comiit(Improve performance)에서는 top, left 대신에 transform 속성의 translate 값을 변형시켜가며 좌표를 움직였다.

https://csstriggers.com 를 참고하면 top, left 속성은 layout, paint, composite을 발생시키고 trasform 속성은 composite만 발생시킨다.

(성능 ↑) composite - paint - layout (성능 ↓)

즉 top, left 속성보다 transform 속성을 사용하는 것이 성능이 더 좋다.

알게 된 점

- 성능(performance) 관련 용어 (layout, paint, composite)
- 개발자 도구에서의 성능 확인 방법
- CSS 속성 성능 사이트 : https://csstriggers.com
