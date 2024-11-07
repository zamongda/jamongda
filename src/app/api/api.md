# API 문서

jamongda 프로젝트의 api 문서입니다.

## auth.ts

유저 관련 함수들이 있습니다.

| 함수명  | 인자                               | 리턴값                                      | 설명                                    |
| ------- | ---------------------------------- | ------------------------------------------- | --------------------------------------- |
| signUp  | email: string<br/>password: string | {<br/>data: {session, user}<br/>error<br/>} | 회원가입을 합니다.                      |
| login   | email: string<br/>password: string | {<br/>data: {session, user}<br/>error<br/>} | 로그인을 합니다.                        |
| getUser |                                    | {<br/>user: {session}<br/>error<br/>}       | 세션에 저장된 로그인 정보를 가져옵니다. |

회원가입 후에는 이메일 인증을 위한 이메일이 발송됩니다.

이메일 인증을 받은 후에 로그인이 가능합니다.

## CATEGORY

카테고리 관련 함수들이 있습니다.

로그인한 유저들이 사용할 수 있습니다.

| 함수명         | 인자        | 리턴값                                                                              | 설명                                        |
| -------------- | ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------- |
| addCategory    | name:string | { success }                                                                         | 로그인한 유저의 카테고리를 추가합니다.      |
| deleteCategory | id:string   | { success }                                                                         | 로그인한 유저의 카테고리를 삭제합니다.      |
| getCategories  |             | {<br/>data: { <br/> id <br/> category_name <br/> created_at<br/>user_id<br/>}<br/>} | 로그인한 유저의 카테고리 목록을 가져옵니다. |

## WORD

단어 관련 함수들이 있습니다.

로그인한 유저들이 사용할 수 있습니다.

| 함수명     | 인자                                                                                                 | 리턴값                                                                                                                                  | 설명                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| getWords   | conditions:{<br/> category_id?: string;<br/>is_memorized?: boolean; <br/> memory_date?:string;<br/>} | {<br/>data: { <br/> id <br/> category_id <br/> en <br/> ko <br/> memory_date <br/>is_memorized <br/> created_at<br/>user_id<br/>}<br/>} | 로그인한 유저의 단어 목록을 가져옵니다.                                                                          |
| addWord    | words: {<br/> ko: string;<br/>en: boolean; <br/> category_id?:string;<br/>} [ ]                      | { success }                                                                                                                             | 로그인한 유저의 단어를 추가합니다.                                                                               |
| deleteWord | id: string                                                                                           | { success }                                                                                                                             | 로그인한 유저의 전달된 아이디의 단어를 삭제합니다.                                                               |
| finishTest | ids: string[ ]                                                                                       | { success }                                                                                                                             | 로그인한 유저의 전달된 아이디 배열의 is_memorized, memory_date를 업데이트하여 테스트한 단어임을 업데이트 합니다. |

```
# 내가 암기한 단어
const words = async () => {
    const { data } = await getWords({
      conditions: {
        is_memorized: true
      }
    });

    console.log(JSON.parse(data!), data);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  };

  # 오늘 암기한 단어
const words = async () => {
    const { data } = await getWords({
      conditions: {
        memory_date: new Date().toLocaleDateString()
      }
    });

    console.log(JSON.parse(data!), data);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  };

  # 카테고리 4번의 오늘 암기한 단어
const words = async () => {
    const { data } = await getWords({
      conditions: {
        category_id: "4",
        memory_date: new Date().toLocaleDateString()
      }
    });

    console.log(JSON.parse(data!), data);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  };
```
