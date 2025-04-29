module.exports = {
    extends: ["react-app", "eslint:recommended", "prettier"],
    // 확장 설정 : 리액트, eslint 추천설정, 프리티어 연동
    env: {
      es6: true  // 자바스크립트 es6 문법 사용
    },
    rules: {
      "no-var": "error",                    // var 변수 선언 금지
      "no-multiple-empty-lines": "error",   // 여러 줄 공백 금지
      "no-console": ["warn", { "allow": ["warn", "error", "info"] }], // console.log() 경고
      "eqeqeq": "error",                    // 일치 연산자 사용 필수
      "dot-notation": "error",              // 가능하다면 dot notation 사용
      "no-unused-vars": "warn",             // 사용하지 않는 변수 금지
      "semi": ["error", "always"],          // 끝 semi 콜론 사용
      "quotes": ["warn", "single"]          // 따옴표 설정 (single, double)
    }
  }