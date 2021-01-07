### UseEffect

* use Effect는 effect hook을 사용한다는 의미이다.
* Effect Hook은 compoenentDidMount와 componentDidUpdate, componentWillUnmoun가 합쳐진 것으로 생각해도 좋다고 한다.
* Hook은 2가지 종류가 존재한다. Clean-Up을 이용하지 않는  Effects와 Clean-Up을 사용하는 effect로 2로 나눠진다고 한다. 
  * 자세한 내용은 [공식 문서](https://ko.reactjs.org/docs/hooks-effect.html)를 참조하여라.

* Hook을 사용한다면 class를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있다.

### [Side Effect](https://www.daleseo.com/react-hooks-use-effect/)

* React Component에서 화면에 rendering 이후이 **비동기적**으로 처리되어야 하는 부수적인 효과들을 side Effect라고 하며,  ``UseEffec``를 통해서 사용할 수 있다.